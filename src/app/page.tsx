import HomePage from "@/pages/HomePage";
export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50">
      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-12">
          {/* Form container with elegant styling */}
          <div className="md:p-8">
            <HomePage />
          </div>
        </div>
      </div>
    </main>
  );
}
