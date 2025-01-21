import React, { useState, useEffect } from "react";
import UserList from "./UserList";
import UserForm from "./UserForm";

function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);
  // Function to fetch the list of users from the API
  const fetchUsers = () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        alert("Failed to fetch users: " + error);
        setLoading(false);
      });
  };
  // Function to add a new user
  const addUser = (userData) => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then(() => {
        alert("User added successfully!");
        fetchUsers();
      })
      .catch((error) => alert("Failed to add user: " + error));
  };
  // Function to update an existing user details
  const updateUser = (updatedUser) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${updatedUser.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    })
      .then(() => {
        alert("User updated successfully!");
        fetchUsers();
      })
      .catch((error) => alert("Failed to update user: " + error));
  };
  // Function to delete a user
  const deleteUser = (userId) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      method: "DELETE",
    })
      .then(() => {
        alert("User deleted successfully!");
        fetchUsers();
      })
      .catch((error) => alert("Failed to delete user: " + error));
  };

  // Function to handle the editing of a user details
  const handleEditUser = (user) => {
    setFormData({
      id: user.id,
      firstName: user.name.split(" ")[0],
      lastName: user.name.split(" ")[1],
      email: user.email,
      department: user.company.name,
    });
    setIsEditing(true);
  };
  // Function to reset the form when canceling the edit
  const resetForm = () => {
    setFormData({
      id: null,
      firstName: "",
      lastName: "",
      email: "",
      department: "",
    });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-center mb-10">
          User Management
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            {/* UserForm component for adding/editing a user */}
            <UserForm
              formData={formData}
              setFormData={setFormData}
              isEditing={isEditing}
              addUser={addUser}
              updateUser={updateUser}
              resetForm={resetForm}
            />
          </div>
          <div>
            {/* UserList component for displaying users */}
            <UserList
              users={users}
              loading={loading}
              editUser={handleEditUser}
              deleteUser={deleteUser}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
