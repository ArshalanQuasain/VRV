import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, updateUser, deleteUser } from "../store/UserSlice";
import UsersHeader from "./Header/UserHeader.jsx";
import UsersTableContent from "./UserTableContent.jsx";
import EditRoleModal from "./EditRoleModal.jsx";
import AddUserModal from "./AddUserModal.jsx";

const UsersTable = () => {
  const dispatch = useDispatch();

  // Get data from Redux store
  const users = useSelector((state) => state.users.users);
  const roles = useSelector((state) => state.roles.roles);
  const currentUser = useSelector((state) => state.auth.currentUser);

  const [editingUser, setEditingUser] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  // Determine if the current user is an admin or moderator
  const userRole = roles.find((role) => role.id === currentUser?.roleId);
  const isAdmin = userRole?.name.toLowerCase() === "admin";
  const isModerator = userRole?.name.toLowerCase() === "moderator";

  // Handlers using Redux actions
  const handleEditSave = (userId, updates) => {
    dispatch(updateUser({ userId, updates }));
    setEditingUser(null);
  };

  const handleAddUser = (userData) => {
    dispatch(addUser(userData));
    setShowAddModal(false);
  };

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <UsersHeader
        usersCount={users.length}
        canAddUser={isAdmin || isModerator}
        onAddUser={() => setShowAddModal(true)}
      />
      <UsersTableContent
        users={users}
        roles={roles}
        canEdit={isAdmin}
        canDelete={isAdmin}
        onEditUser={(user) => setEditingUser(user)}
        onDeleteUser={handleDeleteUser}
      />
      {editingUser && (
        <EditRoleModal
          user={editingUser}
          roles={roles}
          onClose={() => setEditingUser(null)}
          onSave={(updates) => handleEditSave(editingUser.id, updates)}
        />
      )}
      {showAddModal && (
        <AddUserModal
          roles={roles}
          onClose={() => setShowAddModal(false)}
          onSave={handleAddUser}
        />
      )}
    </div>
  );
};

export default UsersTable;
