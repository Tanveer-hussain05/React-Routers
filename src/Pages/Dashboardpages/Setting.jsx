import React from "react";

const Setting = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 to-slate-800 p-6 flex justify-center items-start">
      <div className="w-full max-w-4xl bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-700 p-8">

        {/* Header */}
        <div className="border-b border-slate-700 pb-4 mb-6">
          <h1 className="text-2xl font-bold text-white">⚙️ Settings</h1>
          <p className="text-sm text-gray-400">Manage your account and preferences</p>
        </div>

        {/* Settings Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Account Settings */}
          <div className="bg-slate-700/50 rounded-xl p-5 hover:shadow-lg border border-slate-600 hover:border-cyan-400/50 transition">
            <h3 className="text-sm text-gray-400 mb-2">Account</h3>
            <p className="text-gray-300">Change your account settings and email preferences.</p>
            <button className="mt-3 bg-linear-to-br from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:scale-105 transition shadow-md">
              Edit Account
            </button>
          </div>

          {/* Security */}
          <div className="bg-slate-700/50 rounded-xl p-5 hover:shadow-lg border border-slate-600 hover:border-cyan-400/50 transition">
            <h3 className="text-sm text-gray-400 mb-2">Security</h3>
            <p className="text-gray-300">Update your password and enable two-factor authentication.</p>
            <button className="mt-3 bg-linear-to-br from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:scale-105 transition shadow-md">
              Update Password
            </button>
          </div>

          {/* Notifications */}
          <div className="bg-slate-700/50 rounded-xl p-5 hover:shadow-lg border border-slate-600 hover:border-cyan-400/50 transition">
            <h3 className="text-sm text-gray-400 mb-2">Notifications</h3>
            <p className="text-gray-300">Manage email and push notifications preferences.</p>
            <button className="mt-3 bg-linear-to-br from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:scale-105 transition shadow-md">
              Configure
            </button>
          </div>

          {/* Privacy */}
          <div className="bg-slate-700/50 rounded-xl p-5 hover:shadow-lg border border-slate-600 hover:border-cyan-400/50 transition">
            <h3 className="text-sm text-gray-400 mb-2">Privacy</h3>
            <p className="text-gray-300">Control who can see your profile and activity.</p>
            <button className="mt-3 bg-linear-to-br from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:scale-105 transition shadow-md">
              Adjust Privacy
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Setting;
