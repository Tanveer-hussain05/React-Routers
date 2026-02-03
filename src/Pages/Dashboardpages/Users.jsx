import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Users = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-slate-900 p-6">
      
      {/* Header + Search */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Users</h1>
          <p className="text-sm text-gray-400">
            List of all registered users
          </p>
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-64 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
        />
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-gray-400">Loading users...</p>
      )}

      {/* Users Grid */}
      {!loading && (
        <>
          {filteredUsers.length === 0 ? (
            <p className="text-gray-400">No users found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredUsers.map((user) => (
                <Link
                  key={user.id}
                  to={`${user.id}`}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl shadow-lg p-5 hover:border-cyan-400 hover:bg-slate-800 transition block"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {user.name}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {user.email}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    {user.company.name}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Users
