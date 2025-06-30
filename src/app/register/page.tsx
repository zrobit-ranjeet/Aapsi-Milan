"use client";
import { useState } from "react";
import {
  FaUser,
  FaVenusMars,
  FaCalendarAlt,
  FaEnvelope,
  FaMobileAlt,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dob: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    religion: "",
    caste: "",
    motherTongue: "",
    country: "India",
    state: "",
    city: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.gender) newErrors.gender = "Please select gender";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.email.includes("@"))
      newErrors.email = "Valid email is required";
    if (formData.mobile.length !== 10)
      newErrors.mobile = "10-digit mobile number required";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords don't match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Registration data:", formData);
      setIsSubmitting(false);
      setSuccessMessage(
        "Registration successful! Please verify your mobile number."
      );
      // Reset form
      setFormData({
        fullName: "",
        gender: "",
        dob: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
        religion: "",
        caste: "",
        motherTongue: "",
        country: "India",
        state: "",
        city: "",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <GiFamilyHouse className="text-5xl text-pink-600" />
          </div>
          <h1 className="text-3xl font-bold text-pink-700 mb-2 font-serif">
            Create Your Profile
          </h1>
          <p className="text-pink-600">
            Begin your journey to find your perfect life partner
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-lg overflow-hidden border border-pink-100"
        >
          {/* Personal Information */}
          <div className="p-6 sm:p-8 border-b border-pink-100">
            <h2 className="text-xl font-semibold text-pink-700 mb-4 flex items-center">
              <FaUser className="mr-2" /> Personal Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-pink-700 mb-1">
                  Full Name*
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                      errors.fullName ? "border-red-500" : "border-pink-200"
                    } focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all`}
                    placeholder="Enter your full name"
                  />
                  <FaUser className="absolute left-3 top-3 text-pink-400" />
                </div>
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-medium text-pink-700 mb-1">
                  Gender*
                </label>
                <div className="relative">
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                      errors.gender ? "border-red-500" : "border-pink-200"
                    } focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all`}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  <FaVenusMars className="absolute left-3 top-3 text-pink-400" />
                </div>
                {errors.gender && (
                  <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
                )}
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-sm font-medium text-pink-700 mb-1">
                  Date of Birth*
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                      errors.dob ? "border-red-500" : "border-pink-200"
                    } focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all`}
                  />
                  <FaCalendarAlt className="absolute left-3 top-3 text-pink-400" />
                </div>
                {errors.dob && (
                  <p className="text-red-500 text-xs mt-1">{errors.dob}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-pink-700 mb-1">
                  Email*
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                      errors.email ? "border-red-500" : "border-pink-200"
                    } focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all`}
                    placeholder="example@email.com"
                  />
                  <FaEnvelope className="absolute left-3 top-3 text-pink-400" />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>
          </div>

          {/* Family & Cultural Details */}
          <div className="p-6 sm:p-8 border-b border-pink-100">
            <h2 className="text-xl font-semibold text-pink-700 mb-4 flex items-center">
              <GiFamilyHouse className="mr-2" /> Family & Cultural Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Religion */}
              <div>
                <label className="block text-sm font-medium text-pink-700 mb-1">
                  Religion
                </label>
                <input
                  type="text"
                  name="religion"
                  value={formData.religion}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="Religion"
                />
              </div>

              {/* Caste */}
              <div>
                <label className="block text-sm font-medium text-pink-700 mb-1">
                  Caste/Community
                </label>
                <input
                  type="text"
                  name="caste"
                  value={formData.caste}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="Caste"
                />
              </div>

              {/* Mother Tongue */}
              <div>
                <label className="block text-sm font-medium text-pink-700 mb-1">
                  Mother Tongue
                </label>
                <input
                  type="text"
                  name="motherTongue"
                  value={formData.motherTongue}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="Mother tongue"
                />
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="p-6 sm:p-8 border-b border-pink-100">
            <h2 className="text-xl font-semibold text-pink-700 mb-4">
              Location Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Country */}
              <div>
                <label className="block text-sm font-medium text-pink-700 mb-1">
                  Country
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                >
                  <option value="India">India</option>
                  <option value="USA">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* State */}
              <div>
                <label className="block text-sm font-medium text-pink-700 mb-1">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="State"
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-medium text-pink-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="City"
                />
              </div>
            </div>
          </div>

          {/* Account Security */}
          <div className="p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-pink-700 mb-4">
              Account Security
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Mobile Number */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-pink-700 mb-1">
                  Mobile Number*
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">+91</span>
                  </div>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-2 rounded-lg border ${
                      errors.mobile ? "border-red-500" : "border-pink-200"
                    } focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all`}
                    placeholder="9876543210"
                    maxLength={10}
                  />
                  <FaMobileAlt className="absolute right-3 top-3 text-pink-400" />
                </div>
                {errors.mobile && (
                  <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
                )}
                <p className="text-xs text-pink-500 mt-1">
                  We'll send an OTP to this number for verification
                </p>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-pink-700 mb-1">
                  Password*
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-10 py-2 rounded-lg border ${
                      errors.password ? "border-red-500" : "border-pink-200"
                    } focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all`}
                    placeholder="Create password"
                  />
                  <FaLock className="absolute left-3 top-3 text-pink-400" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-pink-400"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-pink-700 mb-1">
                  Confirm Password*
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-10 py-2 rounded-lg border ${
                      errors.confirmPassword
                        ? "border-red-500"
                        : "border-pink-200"
                    } focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all`}
                    placeholder="Confirm password"
                  />
                  <FaLock className="absolute left-3 top-3 text-pink-400" />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-pink-400"
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="px-6 sm:px-8 pb-6 sm:pb-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all shadow-md font-medium ${
                isSubmitting ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </button>

            {successMessage && (
              <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-center">
                {successMessage}
              </div>
            )}

            <p className="text-xs text-gray-500 mt-4 text-center">
              By registering, you agree to our{" "}
              <a href="#" className="text-pink-600 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-pink-600 hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-pink-600 font-medium hover:underline"
            >
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
