import RegisterForm from "@/components/RegisterForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50">
      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-pink-700 mb-4">
              Find Your Perfect Match
            </h1>
            <p className="text-lg text-pink-600 max-w-2xl mx-auto">
              Begin your journey to lifelong happiness with Milan Matrimony
            </p>
          </div>

          {/* Form container with elegant styling */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-pink-100">
            <div className="bg-gradient-to-r from-pink-500 to-pink-400 p-4 text-white text-center">
              <h2 className="text-xl font-semibold">Create Your Profile</h2>
            </div>
            <div className="p-6 md:p-8">
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
