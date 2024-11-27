import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/AuthSlice.js";
import {
  FiLock,
  FiAlertCircle,
  FiEye,
  FiEyeOff,
} from './Icons'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users); // Fetch users from userSlice

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Dispatch login action with users array
    const loginPayload = { email, password, users };
    const result = dispatch(login(loginPayload));

    // Check for errors
    if (!result.payload) {
      setError("Invalid email or password");
    }
  };

  // Sample users for display
  const sampleUsers = [
    { email: "admin@example.com", password: "admin123", role: "Admin" },
    { email: "mod1@example.com", password: "mod123", role: "Moderator" },
    { email: "user1@example.com", password: "user123", role: "User" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-500 shadow-lg mb-6">
            <FiLock className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome!</h2>
          <p className="text-gray-600">
            Enter your credentials
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 text-red-500 px-4 py-3 rounded-lg text-sm flex items-center">
                <FiAlertCircle className="w-5 h-5 mr-2" />
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="you@example.com"
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors pr-12"
                  placeholder="Enter your password"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <label className="inline-flex items-center cursor-pointer group">
                    <input
                      type="checkbox"
                      className="hidden peer"
                      checked={showPassword}
                      onChange={() => setShowPassword(!showPassword)}
                    />
                    {showPassword ? (
                      <FiEyeOff className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors" />
                    ) : (
                      <FiEye className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors" />
                    )}
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2.5 rounded-lg font-medium transition-all duration-200"
            >
              Sign in
            </button>
          </form>

          {/* Sample Users Section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Sample User Accounts</h3>
            <div className="space-y-2 text-sm font-medium text-gray-600 flex justify-between items-center" >
                <div className="p-2 bg-gray-50 rounded-lg  hover:bg-gray-100 transition-colors"> Role</div>
                <div className="p-2 bg-gray-50 rounded-lg  hover:bg-gray-100 transition-colors"> Email</div>
                <div className="p-2 bg-gray-50 rounded-lg  hover:bg-gray-100 transition-colors"> Password</div>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              {sampleUsers.map((user, index) => (
                <div
                  key={index}
                  className="p-2 bg-gray-50 rounded-lg flex justify-between items-center hover:bg-gray-100 transition-colors"
                >
                  <div>
                    <span className="font-medium">{user.role}</span>
                  </div>
                  <div className="text-gray-500 text-xs">{user.email}</div>
                  <span className="text-gray-400 text-sm">{user.password}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
