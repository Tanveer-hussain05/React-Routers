import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <p className="text-lg font-semibold text-white">Loading user...</p>
      </div>
    );
  }

  if (!user) {
    return <div className="text-center text-white">User not found</div>;
  }

  return (
    <div className="min-h-screen bg-slate-900 p-6 flex justify-center">
      <div className="w-full max-w-3xl bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-slate-700 p-8">

        {/* Header */}
        <div className="border-b border-slate-700 pb-4 mb-6">
          <h1 className="text-2xl font-bold text-white">
            {user?.name}
          </h1>
          <p className="text-sm text-gray-400">
            @{user?.username}
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-2">
              Contact Information
            </h3>
            <p className="text-gray-300"><b className="text-white">Email:</b> {user?.email}</p>
            <p className="text-gray-300"><b className="text-white">Phone:</b> {user?.phone}</p>
            <p className="text-gray-300"><b className="text-white">Website:</b> <span className="text-cyan-400">{user?.website}</span></p>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-2">
              Address
            </h3>
            <p className="text-gray-300">
              {user?.address?.street}, {user?.address?.suite}
            </p>
            <p className="text-gray-300">
              {user?.address?.city}, {user?.address?.zipcode}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Lat: {user?.address?.geo?.lat}, Lng: {user?.address?.geo?.lng}
            </p>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-gray-400 mb-2">
              Company
            </h3>
            <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
              <p className="font-medium text-white">{user?.company?.name}</p>
              <p className="text-sm text-gray-300">
                {user?.company?.catchPhrase}
              </p>
              <p className="text-xs text-gray-500">
                {user?.company?.bs}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default User;
