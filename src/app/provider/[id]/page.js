import Image from "next/image";
import { Instagram, Facebook, Phone } from "lucide-react";

const mockProviders = [
  {
    id: 1,
    name: "Ramesh Kumar",
    service: "Plumber",
    location: "Delhi",
    experience: "5 years",
    earning: "₹25,000/month",
    qualification: "ITI",
    phone: "+91 9876543210",
    mother: "Sita Devi",
    brother: "Sohan Kumar",
    instagram: "https://instagram.com/ramesh",
    facebook: "https://facebook.com/ramesh",
    profilePhoto: "/plumber.jpg",
    servicePhoto: "/work1.jpg",
  },
];

export default function ProviderProfile({ params }) {
  const provider = mockProviders.find(
    (p) => p.id.toString() === params.id
  );

  if (!provider) {
    return <div className="p-10 text-center text-gray-500">Provider not found</div>;
  }

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative h-[50vh] bg-gradient-to-r from-indigo-800 to-purple-700">
        <Image
          src={provider.servicePhoto}
          alt={provider.name}
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <Image
            src={provider.profilePhoto}
            alt={provider.name}
            width={140}
            height={140}
            className="rounded-full border-4 border-white shadow-lg mb-4"
          />
          <h1 className="text-4xl font-extrabold">{provider.name}</h1>
          <p className="mt-2 text-lg opacity-90">{provider.service} • {provider.location}</p>
        </div>
      </div>

      {/* Info Card */}
      <div className="max-w-4xl mx-auto -mt-20 bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl p-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">About</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <p><span className="font-semibold">Experience:</span> {provider.experience}</p>
          <p><span className="font-semibold">Earning:</span> {provider.earning}</p>
          <p><span className="font-semibold">Qualification:</span> {provider.qualification}</p>
          <p><span className="font-semibold">Mother:</span> {provider.mother}</p>
          <p><span className="font-semibold">Brother:</span> {provider.brother}</p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Contact</h2>
        <div className="flex items-center space-x-6">
          <a href={provider.instagram} target="_blank" rel="noreferrer">
            <Instagram className="w-7 h-7 text-pink-500 hover:scale-125 transition" />
          </a>
          <a href={provider.facebook} target="_blank" rel="noreferrer">
            <Facebook className="w-7 h-7 text-blue-600 hover:scale-125 transition" />
          </a>
          <a
            href={`tel:${provider.phone}`}
            className="flex items-center hover:scale-105 transition text-green-700 font-semibold"
          >
            <Phone className="w-7 h-7 mr-2" /> {provider.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
