import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";

type Profile = {
  id: number;
  fullName: string;
  age: number;
  height: string;
  education: string;
  occupation: string;
  city: string;
  state: string;
  country: string;
  religion: string;
  motherTongue: string;
  photo: string;
  about: string;
  income: string;
  maritalStatus: string;
};

const getProfile = (id: number): Profile | undefined => {
  const profiles: Profile[] = [
    {
      id: 1,
      fullName: "Priya Sharma",
      age: 28,
      height: "5'4\"",
      education: "MBA",
      occupation: "Marketing Manager",
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
      religion: "Hindu",
      motherTongue: "Hindi",
      photo: "/images/girl.jpg",
      about:
        "Creative professional looking for a life partner who values art and culture.",
      income: "₹15-20 LPA",
      maritalStatus: "Never Married",
    },
    {
      id: 2,
      fullName: "Rahul Patel",
      age: 32,
      height: "5'10\"",
      education: "Engineer",
      occupation: "Software Developer",
      city: "Bangalore",
      state: "Karnataka",
      country: "India",
      religion: "Hindu",
      motherTongue: "Gujarati",
      photo: "/images/man.jpg",
      about: "Tech enthusiast who enjoys hiking and wants to build a family.",
      income: "₹20-25 LPA",
      maritalStatus: "Never Married",
    },
  ];

  return profiles.find((profile) => profile.id === id);
};

export default function ProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const profile = getProfile(parseInt(id));

  if (!profile) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header with back button */}
          <div className="p-4 border-b border-pink-100 flex justify-between items-center">
            <Link
              href="/all-people"
              className="text-pink-600 hover:text-pink-800"
            >
              ← Back to Profiles
            </Link>
            <div className="flex space-x-3">
              <button className="bg-pink-100 text-pink-700 px-4 py-2 rounded-lg hover:bg-pink-200 transition">
                ❌ Dislike
              </button>
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                ❤️ Like
              </button>
            </div>
          </div>

          {/* Profile Content */}
          <div className="md:flex">
            {/* Left Column - Photo */}
            <div className="md:w-1/3 p-6">
              <div className="h-64 bg-pink-200 rounded-lg overflow-hidden">
                <img
                  src={profile.photo}
                  alt={profile.fullName}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="md:w-2/3 p-6">
              <h1 className="text-3xl font-bold text-pink-700">
                {profile.fullName}, {profile.age}
              </h1>
              <p className="text-gray-600 mt-2">
                {profile.height} • {profile.city}, {profile.state},{" "}
                {profile.country}
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <Detail label="Education" value={profile.education} />
                <Detail label="Occupation" value={profile.occupation} />
                <Detail label="Income" value={profile.income} />
                <Detail label="Marital Status" value={profile.maritalStatus} />
                <Detail label="Religion" value={profile.religion} />
                <Detail label="Mother Tongue" value={profile.motherTongue} />
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-pink-700">About Me</h3>
                <p className="mt-2 text-gray-700">{profile.about}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable detail component
const Detail = ({ label, value }: { label: string; value: string }) => (
  <div>
    <h3 className="font-semibold text-pink-700">{label}</h3>
    <p>{value}</p>
  </div>
);
