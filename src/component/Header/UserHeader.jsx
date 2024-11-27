import React from "react";

const UsersHeader = ({ usersCount, canAddUser, onAddUser }) => {
  return (
    <div className="p-6 border-b border-gray-200">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">
          Users Count : 
          <span className="ml-2 px-2.5 py-0.5 text-lg bg-blue-50 text-blue-600 rounded-full">
            {usersCount} total
          </span>
        </h2>
        {canAddUser && (
          <button
            onClick={onAddUser}
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add New User
          </button>
        )}
      </div>
    </div>
  );
};

export default UsersHeader;
