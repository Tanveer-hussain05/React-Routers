import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Users = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Users</h1>
        <p className="text-sm text-gray-500">
          List of all registered users
        </p>
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-gray-500">Loading users...</p>
      )}

      {/* Users Grid */}
      {!loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <Link
              key={user.id}
              to={`${user.id}`}
              onClick={()=>console.log(user)}
              className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition block"
            >
            
              <h3 className="text-lg font-semibold text-gray-800">
                {user.name}
              </h3>
              <p className="text-sm text-gray-500">
                {user.email}
              </p>
              <p className="text-sm text-gray-400 mt-1">
                {user.company.name}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Users
