import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const openUser = (id) => {
    setDetailLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedUser(data);
        setDetailLoading(false);
      })
      .catch(() => setDetailLoading(false));
  };

  return (
    <div className="min-h-screen bg-slate-900 p-6">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Users</h1>
        <p className="text-gray-400">All registered users</p>
      </div>

      {/* Loading Users */}
      {loading && (
        <div className="flex justify-center items-center mt-20">
          <div className="w-10 h-10 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Users Grid */}
      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-slate-800 rounded-xl p-4 border border-slate-700 
              transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.03]
              hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-400"
            >
              <h3 className="font-semibold text-white text-lg mb-1">
                {user.name}
              </h3>
              <p className="text-gray-400 text-sm mb-1">{user.email}</p>
              <p className="text-gray-500 text-sm mb-4">
                {user.company.name}
              </p>

              <button
                onClick={() => openUser(user.id)}
                className="w-full py-2 rounded-lg bg-cyan-500 text-slate-900 font-semibold
                hover:bg-cyan-400 transition cursor-pointer"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Full Screen Loader */}
      {detailLoading && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-300 text-sm">Loading user details...</p>
          </div>
        </div>
      )}

      
      {selectedUser && !detailLoading && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="w-full max-w-2xl bg-slate-800 rounded-2xl p-6 border border-slate-700 relative">

            <button
              onClick={() => setSelectedUser(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-400 text-xl cursor-pointer"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-white mb-4">
              {selectedUser.name}
            </h2>

            <div className="grid md:grid-cols-2 gap-4 text-gray-300">

              <div>
                <p className="text-gray-400 text-sm">Username</p>
                <p>{selectedUser.username}</p>
              </div>

              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p>{selectedUser.email}</p>
              </div>

              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p>{selectedUser.phone}</p>
              </div>

              <div>
                <p className="text-gray-400 text-sm">Website</p>
                <p className="text-cyan-400">{selectedUser.website}</p>
              </div>

              <div>
                <p className="text-gray-400 text-sm">Company</p>
                <p>{selectedUser.company.name}</p>
              </div>

              <div>
                <p className="text-gray-400 text-sm">City</p>
                <p>{selectedUser.address.city}</p>
              </div>

            </div>

            <div className="mt-6 border-t border-slate-700 pt-4">
              <p className="text-gray-400 text-sm mb-1">Full Address</p>
              <p className="text-gray-300">
                {selectedUser.address.street}, {selectedUser.address.suite},{" "}
                {selectedUser.address.city}
              </p>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Users;
