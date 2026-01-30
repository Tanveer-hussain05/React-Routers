import React from "react";

const Setting = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-6 flex justify-center items-start">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8">

        {/* Header */}
        <div className="border-b pb-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">⚙️ Settings</h1>
          <p className="text-sm text-gray-500">Manage your account and preferences</p>
        </div>

        {/* Settings Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Account Settings */}
          <div className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition">
            <h3 className="text-sm text-gray-500 mb-2">Account</h3>
            <p className="text-gray-700">Change your account settings and email preferences.</p>
            <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:scale-105 transition shadow-md">
              Edit Account
            </button>
          </div>

          {/* Security */}
          <div className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition">
            <h3 className="text-sm text-gray-500 mb-2">Security</h3>
            <p className="text-gray-700">Update your password and enable two-factor authentication.</p>
            <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:scale-105 transition shadow-md">
              Update Password
            </button>
          </div>

          {/* Notifications */}
          <div className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition">
            <h3 className="text-sm text-gray-500 mb-2">Notifications</h3>
            <p className="text-gray-700">Manage email and push notifications preferences.</p>
            <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:scale-105 transition shadow-md">
              Configure
            </button>
          </div>

          {/* Privacy */}
          <div className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition">
            <h3 className="text-sm text-gray-500 mb-2">Privacy</h3>
            <p className="text-gray-700">Control who can see your profile and activity.</p>
            <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:scale-105 transition shadow-md">
              Adjust Privacy
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Setting;
