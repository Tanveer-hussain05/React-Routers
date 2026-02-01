// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Users = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => {
//         setUsers(data);    // Data milte hi setUsers
//         setLoading(false); // Loading khatam
//       })
//       .catch(() => setLoading(false)); // Error aaya to bhi loading khatam
//   }, []);

//   return (
//     <div className="min-h-screen bg-slate-900 p-6">

//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-2xl font-bold text-white">Users</h1>
//         <p className="text-gray-400">All registered users</p>
//       </div>

//       {/* Loading State */}
//       {loading && (
//         <div className="flex justify-center items-center mt-20">
//           <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
//         </div>
//       )}

//       {/* Users Grid */}
//       {!loading && (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {users.map((user) => (
//             <Link
//               key={user.id}
//               to={`/dashboard/user/${user.id}`}
//               className="bg-slate-800 rounded-lg p-4 hover:bg-slate-700 transition-colors block border border-slate-700"
//             >
//               <h3 className="font-semibold text-white text-lg mb-1">
//                 {user.name}
//               </h3>
//               <p className="text-gray-400 text-sm mb-1">{user.email}</p>
//               <p className="text-gray-500 text-sm">{user.company.name}</p>
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Users;
