import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-6 flex justify-center items-start">
      
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">
        
        {/* Header Cover */}
        <div className="h-36 bg-gradient-to-r from-blue-600 to-indigo-600"></div>

        {/* Profile Info */}
        <div className="p-6 -mt-16">
          
          {/* Avatar */}
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4">
            <div className="w-28 h-28 rounded-full bg-white shadow-lg flex items-center justify-center text-4xl font-bold text-blue-600 border-4 border-white">
              A
            </div>

            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold text-gray-800">
                Admin User
              </h2>
              <p className="text-gray-500">admin@example.com</p>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            
            <div className="bg-gray-50 rounded-xl p-5">
              <h3 className="text-sm text-gray-500">Full Name</h3>
              <p className="font-semibold text-gray-800 mt-1">Admin User</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5">
              <h3 className="text-sm text-gray-500">Email Address</h3>
              <p className="font-semibold text-gray-800 mt-1">
                admin@example.com
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5">
              <h3 className="text-sm text-gray-500">Role</h3>
              <p className="font-semibold text-gray-800 mt-1">Administrator</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5">
              <h3 className="text-sm text-gray-500">Status</h3>
              <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mt-1">
                Active
              </span>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:scale-105 transition shadow-md">
              Edit Profile
            </button>

            <button className="bg-gray-100 text-gray-700 px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-200 transition">
              Change Password
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
