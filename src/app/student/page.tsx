const StudentPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Student Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">My Classes</h2>
          <p className="text-gray-600">View your enrolled classes and schedules</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Assignments</h2>
          <p className="text-gray-600">Check your pending assignments</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Grades</h2>
          <p className="text-gray-600">View your academic performance</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Calendar</h2>
          <p className="text-gray-600">See upcoming events and deadlines</p>
        </div>
      </div>
    </div>
  )
}

export default StudentPage