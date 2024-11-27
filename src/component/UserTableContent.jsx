import React from "react";
import UsersTableRow from "./UserTableRow";

const UsersTableContent = ({ users, roles, canEdit, canDelete, onEditUser, onDeleteUser }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            {(canEdit || canDelete) && (
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {users.map((user) => (
            <UsersTableRow
              key={user.id}
              user={user}
              roles={roles}
              canEdit={canEdit}
              canDelete={canDelete}
              onEditUser={onEditUser}
              onDeleteUser={onDeleteUser}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTableContent;
