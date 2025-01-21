import React from "react";

function UserForm({
  formData,
  setFormData,
  isEditing,
  addUser,
  updateUser,
  resetForm,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      updateUser(formData);
    } else {
      addUser(formData);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">
        {isEditing ? "Edit User" : "Add User"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First Name Input */}
        <div className="flex flex-col">
          <label htmlFor="firstName" className="text-lg font-semibold mb-2">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="Enter first name"
            aria-label="First Name"
            className="px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        {/* Last Name Input */}
        <div className="flex flex-col">
          <label htmlFor="lastName" className="text-lg font-semibold mb-2">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder="Enter last name"
            aria-label="Last Name"
            className="px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        {/* Email Input */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-semibold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter email address"
            aria-label="Email"
            className="px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        {/* Department Input */}
        <div className="flex flex-col">
          <label htmlFor="department" className="text-lg font-semibold mb-2">
            Department:
          </label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
            placeholder="Enter department"
            aria-label="Department"
            className="px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        <div className="flex justify-end gap-4">
          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300"
          >
            {isEditing ? "Update" : "Add"} User
          </button>

          {/* Cancel Button (only shown when editing) */}
          {isEditing && (
            <button
              type="button"
              onClick={resetForm}
              className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default UserForm;
