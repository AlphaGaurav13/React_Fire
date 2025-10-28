import { useState } from "react";

function App() {
  const [user] = useState({
    name: "Gaurav Kumar",
    email: "gauravkkr345@gmail.com",
    role: "Administrator",
  });

  const [stats] = useState([
    { title: "Projects", value: 12, color: "bg-blue-500" },
    { title: "Messages", value: 5, color: "bg-green-500" },
    { title: "Notifications", value: 3, color: "bg-yellow-500" },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">User Dashboard</h1>
        <div className="text-right">
          <p className="font-semibold text-gray-800">{user.name}</p>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h2 className="text-xl font-semibold mb-4">Overview</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md ${stat.color} text-white`}
            >
              <h3 className="text-lg font-medium">{stat.title}</h3>
              <p className="text-3xl font-bold mt-2">{stat.value}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner p-4 text-center text-gray-500 text-sm">
        Role: <span className="font-medium text-gray-700">{user.role}</span>
      </footer>
    </div>
  );
}

export default App;
