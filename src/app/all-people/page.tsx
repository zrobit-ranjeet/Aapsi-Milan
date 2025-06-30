"use client";
import Link from "next/link";

// Mock data - replace with your actual data fetching logic
const profiles = [
  {
    id: 1,
    fullName: "Priya Sharma",
    age: 28,
    height: "5'4\"",
    education: "MBA",
    occupation: "Marketing Manager",
    city: "Mumbai",
    photo: "/images/girl.jpg",
    about:
      "Creative professional looking for a life partner who values art and culture.",
  },
  {
    id: 2,
    fullName: "Rahul Patel",
    age: 32,
    height: "5'10\"",
    education: "Engineer",
    occupation: "Software Developer",
    city: "Bangalore",
    photo: "/images/man.jpg",
    about: "Tech enthusiast who enjoys hiking and wants to build a family.",
  },
  // Add more mock profiles as needed
];

export default function AllPeoplePage() {
  const handleLike = (id: number) => {
    console.log(`Liked profile ${id}`);
    // Add your like logic here
  };

  const handleDislike = (id: number) => {
    console.log(`Disliked profile ${id}`);
    // Add your dislike logic here
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-pink-700 mb-8">
            Browse Profiles
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profiles.map((profile) => (
              <div
                key={profile.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-pink-100 hover:shadow-xl transition-shadow"
              >
                {/* Profile Image */}
                <div className="h-48 bg-pink-200 relative">
                  <img
                    src={profile.photo}
                    alt={profile.fullName}
                    className="w-full h-full object-cover"
                  />
                  {/* Like/Dislike Buttons */}
                  <div className="absolute top-3 right-3 flex space-x-2">
                    <button
                      onClick={() => handleDislike(profile.id)}
                      className="bg-white p-2 rounded-full shadow-md hover:bg-pink-100 transition"
                    >
                      ❌
                    </button>
                    <button
                      onClick={() => handleLike(profile.id)}
                      className="bg-white p-2 rounded-full shadow-md hover:bg-pink-100 transition"
                    >
                      ❤️
                    </button>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="p-6">
                  <Link href={`/profile/${profile.id}`}>
                    <h2 className="text-xl font-bold text-pink-700 hover:text-pink-800 transition">
                      {profile.fullName}, {profile.age}
                    </h2>
                  </Link>
                  <div className="mt-2 text-sm text-gray-600">
                    <p>
                      {profile.height} • {profile.city}
                    </p>
                    <p>
                      {profile.education} • {profile.occupation}
                    </p>
                  </div>
                  <p className="mt-4 text-gray-700 line-clamp-2">
                    {profile.about}
                  </p>
                  <Link
                    href={`/profile/${profile.id}`}
                    className="mt-4 inline-block text-pink-600 hover:text-pink-800 font-medium"
                  >
                    View Full Profile →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
