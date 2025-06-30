"use client";
import { useState } from "react";
import { FaMobileAlt, FaLock, FaArrowRight } from "react-icons/fa";
import { GiHeartKey } from "react-icons/gi";

export default function LoginPage() {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate phone number
    if (phone.length !== 10) {
      setMessage("Please enter a valid 10-digit mobile number");
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setMessage(`OTP sent to ${phone}`);
      setStep("otp");
      setIsLoading(false);
    }, 1500);
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate OTP (demo uses 1234 as valid OTP)
    if (otp !== "1234") {
      setMessage("Invalid OTP. Please try again or use 1234 for demo");
      setIsLoading(false);
      return;
    }

    // Simulate verification
    setTimeout(() => {
      setMessage("Login successful! Redirecting...");
      setIsLoading(false);
      // Here you would typically redirect to dashboard
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <GiHeartKey className="text-5xl text-pink-600" />
          </div>
          <h1 className="text-3xl font-bold text-pink-700 mb-2 font-serif">
            {step === "phone" ? "Welcome Back" : "Verify OTP"}
          </h1>
          <p className="text-pink-600">
            {step === "phone"
              ? "Login to your HeartSync account"
              : `Enter OTP sent to ${phone}`}
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-pink-100">
          {step === "phone" ? (
            <form onSubmit={handleSendOtp} className="p-6 sm:p-8">
              <div className="mb-6">
                <label className="block text-sm font-medium text-pink-700 mb-2">
                  Mobile Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">+91</span>
                  </div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value.replace(/\D/g, ""))
                    }
                    placeholder="9876543210"
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    maxLength={10}
                    required
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <FaMobileAlt className="text-pink-400" />
                  </div>
                </div>
                <p className="text-xs text-pink-500 mt-2">
                  We'll send an OTP to this number
                </p>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all shadow-md font-medium flex items-center justify-center ${
                  isLoading ? "opacity-75" : ""
                }`}
              >
                {isLoading ? (
                  "Sending OTP..."
                ) : (
                  <>
                    Send OTP <FaArrowRight className="ml-2" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="p-6 sm:p-8">
              <div className="mb-6">
                <label className="block text-sm font-medium text-pink-700 mb-2">
                  Enter 4-digit OTP
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                    placeholder="1234"
                    className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all text-center text-xl font-mono tracking-widest"
                    maxLength={4}
                    required
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <FaLock className="text-pink-400" />
                  </div>
                </div>
                <p className="text-xs text-pink-500 mt-2">
                  For demo, use <span className="font-bold">1234</span> as OTP
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setStep("phone");
                    setMessage("");
                  }}
                  className="w-full sm:w-auto bg-gray-200 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-300 transition-all font-medium"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`flex-1 bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all shadow-md font-medium flex items-center justify-center ${
                    isLoading ? "opacity-75" : ""
                  }`}
                >
                  {isLoading ? "Verifying..." : "Verify OTP"}
                </button>
              </div>
            </form>
          )}

          {message && (
            <div
              className={`px-6 sm:px-8 py-3 text-sm ${
                message.includes("success")
                  ? "bg-green-100 text-green-700"
                  : message.includes("Invalid")
                  ? "bg-red-100 text-red-700"
                  : "bg-pink-100 text-pink-700"
              }`}
            >
              {message}
            </div>
          )}
        </div>

        {/* Footer Links */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a
              href="/register"
              className="text-pink-600 hover:text-pink-700 font-medium"
            >
              Register now
            </a>
          </p>
          <p className="text-xs text-gray-500 mt-2">
            By continuing, you agree to our{" "}
            <a href="#" className="text-pink-500 hover:underline">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="text-pink-500 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
