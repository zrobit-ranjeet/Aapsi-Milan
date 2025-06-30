"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [step, setStep] = useState<"form" | "otp">("form");
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
    country: "",
    state: "",
    city: "",
    height: "",
    education: "",
    occupation: "",
    income: "",
    maritalStatus: "",
    aboutMe: "",
  });
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.mobile.length !== 10) {
      setMessage("Enter a valid 10-digit mobile number");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    setStep("otp");
    setMessage(`OTP sent to ${formData.mobile}`);
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp !== "1234") {
      setMessage("Invalid OTP. Use 1234 for demo.");
      return;
    }

    // Save data to API
    const res = await fetch("/api/people", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setMessage("Registration successful!");
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
        country: "",
        state: "",
        city: "",
        height: "",
        education: "",
        occupation: "",
        income: "",
        maritalStatus: "",
        aboutMe: "",
      });
      setOtp("");
      setStep("form");
    } else {
      setMessage("Error saving data.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto sm:p-8 mt-0 sm:mt-8 bg-gradient-to-br from-pink-50 to-purple-50 sm:rounded-2xl border-0 sm:border border-pink-100 shadow-none sm:shadow-lg">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-pink-700 mb-4">
          Find Your Perfect Match
        </h1>
        <p className="text-lg text-pink-600 max-w-2xl mx-auto">
          Begin your journey to lifelong happiness with Milan Matrimony
        </p>
      </div>
      <div className="text-center mb-4 sm:mb-8 px-4 sm:px-0">
        <h2 className="text-xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-1 sm:mb-2">
          Create Your Profile
        </h2>
        <p className="text-xs sm:text-sm text-pink-500 font-medium">
          Find your perfect life partner with Milan
        </p>
      </div>

      {step === "form" && (
        <form
          onSubmit={handleSubmit}
          className="space-y-3 sm:space-y-6 px-4 sm:px-0"
        >
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-pink-100">
            <h3 className="text-sm sm:text-lg font-semibold text-pink-700 mb-2 sm:mb-4 pb-2 border-b border-pink-100">
              Basic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-pink-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-pink-700 mb-1">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  required
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-pink-700 mb-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-pink-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-pink-100">
            <h3 className="text-sm sm:text-lg font-semibold text-pink-700 mb-2 sm:mb-4 pb-2 border-b border-pink-100">
              Personal Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-pink-700 mb-1">
                  Religion
                </label>
                <input
                  type="text"
                  name="religion"
                  placeholder="Religion"
                  value={formData.religion}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-pink-700 mb-1">
                  Caste / Community
                </label>
                <input
                  type="text"
                  name="caste"
                  placeholder="Caste"
                  value={formData.caste}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-pink-700 mb-1">
                  Mother Tongue
                </label>
                <input
                  type="text"
                  name="motherTongue"
                  placeholder="Mother Tongue"
                  value={formData.motherTongue}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-pink-700 mb-1">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-pink-700 mb-1">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-pink-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-pink-100">
            <h3 className="text-sm sm:text-lg font-semibold text-pink-700 mb-2 sm:mb-4 pb-2 border-b border-pink-100">
              Profile Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-pink-700 mb-1">
                  Height
                </label>
                <input
                  type="text"
                  name="height"
                  placeholder="Height (e.g., 5'8&quot;)"
                  value={formData.height}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-pink-700 mb-1">
                  Education
                </label>
                <input
                  type="text"
                  name="education"
                  placeholder="Education"
                  value={formData.education}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-pink-700 mb-1">
                  Occupation
                </label>
                <input
                  type="text"
                  name="occupation"
                  placeholder="Occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-pink-700 mb-1">
                  Annual Income
                </label>
                <input
                  type="text"
                  name="income"
                  placeholder="Annual Income"
                  value={formData.income}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs sm:text-sm font-medium text-pink-700 mb-1">
                  Marital Status
                </label>
                <select
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                >
                  <option value="">Select Marital Status</option>
                  <option>Never Married</option>
                  <option>Divorced</option>
                  <option>Widowed</option>
                </select>
              </div>
            </div>
            <div className="mt-2 sm:mt-4">
              <label className="block text-xs sm:text-sm font-medium text-pink-700 mb-1">
                About Me
              </label>
              <textarea
                name="aboutMe"
                placeholder="Tell us about yourself..."
                value={formData.aboutMe}
                onChange={handleChange}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all min-h-[80px] sm:min-h-[100px]"
              />
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-pink-100">
            <h3 className="text-sm sm:text-lg font-semibold text-pink-700 mb-2 sm:mb-4 pb-2 border-b border-pink-100">
              Account Security
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-pink-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Create Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-pink-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs sm:text-sm font-medium text-pink-700 mb-1">
                  Mobile Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <span className="text-gray-500 text-xs sm:text-sm">
                      +91
                    </span>
                  </div>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="9876543210"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full pl-10 px-3 py-2 text-xs sm:text-sm rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <p className="text-[10px] sm:text-xs text-pink-500 mt-1">
                  We'll send an OTP to this number for verification
                </p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-2 sm:py-3 px-4 rounded-xl hover:from-pink-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl font-medium text-xs sm:text-sm"
          >
            Send OTP
          </button>
        </form>
      )}

      {step === "otp" && (
        <form
          onSubmit={handleVerify}
          className="space-y-3 sm:space-y-6 px-4 sm:px-0"
        >
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-pink-100">
            <h3 className="text-sm sm:text-lg font-semibold text-pink-700 mb-2 sm:mb-4">
              Mobile Verification
            </h3>
            <p className="text-xs sm:text-sm text-pink-600 mb-2 sm:mb-4">
              We've sent a 4-digit OTP to {formData.mobile}
            </p>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-pink-700 mb-1">
                Enter OTP
              </label>
              <input
                type="text"
                placeholder="Enter 4-digit OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all text-center text-sm sm:text-base font-mono tracking-widest"
                maxLength={4}
                required
              />
              <p className="text-[10px] sm:text-xs text-pink-500 mt-1 sm:mt-2">
                For demo purposes, use <strong>1234</strong> as OTP
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-2 sm:py-3 px-4 rounded-xl hover:from-green-600 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl font-medium text-xs sm:text-sm"
          >
            Verify & Register
          </button>
        </form>
      )}

      {message && (
        <div
          className={`mt-3 sm:mt-4 p-3 rounded-lg text-center text-xs sm:text-sm font-medium ${
            message.includes("success") || message.includes("sent")
              ? "bg-green-100 text-green-700"
              : "bg-pink-100 text-pink-700"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
}
