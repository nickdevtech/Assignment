import React from "react";

function UserList({ users, loading, editUser, deleteUser }) {
  const getNameParts = (fullName) => {
    const parts = fullName.split(" ");
    return { firstName: parts[0], lastName: parts[1] || "" };
  };

  return (
    <div className="max-w-6xl mx-auto mt-4 p-2 bg-gray-300 shadow-lg rounded-lg">
      {loading ? (
        <p className="text-center text-gray-500 text-xs">Loading...</p>
      ) : (
        <table className="min-w-full border border-gray-300 text-xs">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-3 py-1 text-left font-medium text-gray-700 border-b">
                ID
              </th>
              <th className="px-3 py-1 text-left font-medium text-gray-700 border-b">
                First Name
              </th>
              <th className="px-3 py-1 text-left font-medium text-gray-700 border-b">
                Last Name
              </th>
              <th className="px-3 py-1 text-left font-medium text-gray-700 border-b">
                Email
              </th>
              <th className="px-3 py-1 text-left font-medium text-gray-700 border-b">
                Department
              </th>
              <th className="px-3 py-1 text-left font-medium text-gray-700 border-b">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {/*  Each user and display their details in the table */}
            {users.map((user) => {
              const { firstName, lastName } = getNameParts(user.name);
              return (
                <tr key={user.id} className="even:bg-gray-100">
                  <td className="px-3 py-1 text-gray-700 border-b">
                    {user.id}
                  </td>
                  <td className="px-3 py-1 text-gray-700 border-b">
                    {firstName}
                  </td>
                  <td className="px-3 py-1 text-gray-700 border-b">
                    {lastName}
                  </td>
                  <td className="px-3 py-1 text-gray-700 border-b">
                    {user.email}
                  </td>
                  <td className="px-3 py-1 text-gray-700 border-b">
                    {user.company.name}
                  </td>
                  <td className="px-3 py-1 text-gray-700 border-b flex gap-1">
                    {/* Edit button to open the edit user form */}
                    <button
                      onClick={() => editUser(user)}
                      className="px-2 py-1 bg-black text-white rounded hover:bg-blue-700 transition text-xs"
                      title="Edit User"
                    >
                      Edit
                    </button>
                    {/* Delete button to remove the user */}
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition text-xs"
                      title="Delete User"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserList;
