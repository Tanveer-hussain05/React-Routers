import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6 flex justify-center items-start">
      
      <div className="w-full max-w-4xl bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-700 overflow-hidden">
        
        {/* Header Cover */}
        <div className="h-36 bg-gradient-to-r from-cyan-600 to-blue-600"></div>

        {/* Profile Info */}
        <div className="p-6 -mt-16">
          
          {/* Avatar */}
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4">
            <div className="w-28 h-28 rounded-full bg-slate-800 shadow-lg flex items-center justify-center text-4xl font-bold text-cyan-400 border-4 border-slate-800">
              A
            </div>

            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold text-white">
                Admin User
              </h2>
              <p className="text-gray-400">admin@example.com</p>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            
            <div className="bg-slate-700/50 rounded-xl p-5 border border-slate-600">
              <h3 className="text-sm text-gray-400">Full Name</h3>
              <p className="font-semibold text-white mt-1">Admin User</p>
            </div>

            <div className="bg-slate-700/50 rounded-xl p-5 border border-slate-600">
              <h3 className="text-sm text-gray-400">Email Address</h3>
              <p className="font-semibold text-white mt-1">
                admin@example.com
              </p>
            </div>

            <div className="bg-slate-700/50 rounded-xl p-5 border border-slate-600">
              <h3 className="text-sm text-gray-400">Role</h3>
              <p className="font-semibold text-white mt-1">Administrator</p>
            </div>

            <div className="bg-slate-700/50 rounded-xl p-5 border border-slate-600">
              <h3 className="text-sm text-gray-400">Status</h3>
              <span className="inline-block bg-green-900/50 text-green-400 text-xs font-semibold px-3 py-1 rounded-full mt-1 border border-green-700">
                Active
              </span>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:scale-105 transition shadow-md">
              Edit Profile
            </button>

            <button className="bg-slate-700 text-gray-300 px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-600 transition border border-slate-600">
              Change Password
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
