import React from "react";

const UsersTableRow = ({ user, roles, canEdit, canDelete, onEditUser, onDeleteUser }) => {
  const userRole = roles.find((role) => role.id === user.roleId);
  const isUserAdmin = userRole?.name.toLowerCase() === "admin";

  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="h-10 w-10 flex-shrink-0">
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 font-medium text-sm">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{user.name}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-600">{user.email}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
            isUserAdmin
              ? "bg-yellow-100 text-yellow-800"
              : "bg-purple-100 text-purple-800"
          }`}
        >
          {userRole?.name || "No Role"}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
            user.isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {user.isActive ? "Active" : "Inactive"}
        </span>
      </td>
      {(canEdit || canDelete) && (
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
          {canEdit && (
            <button
              onClick={() => onEditUser(user)}
              className="text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-md transition-colors duration-200"
            >
              Edit Role
            </button>
          )}
          {canDelete && (
            <button
              onClick={() => onDeleteUser(user.id)}
              className="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md transition-colors duration-200"
            >
              Delete
            </button>
          )}
        </td>
      )}
    </tr>
  );
};

export default UsersTableRow;
