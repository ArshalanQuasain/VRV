import React, { useState } from "react";

const EditRoleModal = ({ user, roles, onClose, onSave }) => {
  const [selectedRole, setSelectedRole] = useState(String(user.roleId));
  const [isActive, setIsActive] = useState(user.isActive);

  const handleSave = () => {
    const roleExists = roles.some((role) => String(role.id) === selectedRole);
    if (!roleExists) {
      console.error("Invalid role selected");
      return;
    }

    const updates = {
      roleId: parseInt(selectedRole, 10),
      isActive,
    };
    onSave(updates);
  };

  return (
    <div
      role="dialog"
      aria-labelledby="edit-role-title"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h3 id="edit-role-title" className="text-lg font-semibold text-gray-900">
            Edit User Role
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Close"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 font-medium">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
            <div>
              <div className="font-medium text-gray-900">{user.name}</div>
              <div className="text-sm text-gray-500">{user.email}</div>
            </div>
          </div>

          <div>
            <label htmlFor="role-select" className="block text-sm font-medium text-gray-700">
              Assign Role
            </label>
            <select
              id="role-select"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full mt-1 border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            >
              {roles.map((role) => (
                <option key={role.id} value={String(role.id)}>
                  {role.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">User Status</span>
            <button
              type="button"
              onClick={() => setIsActive(!isActive)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isActive ? "bg-blue-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isActive ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditRoleModal;
