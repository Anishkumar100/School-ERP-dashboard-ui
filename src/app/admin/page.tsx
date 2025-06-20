const AdminPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">School Overview</h2>
          <p className="text-gray-600">Manage all aspects of the school system</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">User Management</h2>
          <p className="text-gray-600">Add, edit, and manage users</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">System Settings</h2>
          <p className="text-gray-600">Configure system preferences</p>
        </div>
      </div>
    </div>
  )
}

export default AdminPage