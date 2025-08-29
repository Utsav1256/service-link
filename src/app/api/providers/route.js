import { NextResponse } from "next/server";

export async function GET() {
  const providers = [
    {
      id: 1,
      name: "Ramesh Kumar",
      service: "Plumber",
      location: "Delhi",
      experience: "5 years",
      qualification: "ITI",
      phone: "+91 9876543210",
      photo:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1169&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Sneha Sharma",
      service: "Makeup Artist",
      location: "Mumbai",
      experience: "3 years",
      qualification: "Certified",
      phone: "+91 9123456789",
      photo:
        "https://images.unsplash.com/photo-1638628064365-f08ad0ec8245?q=80&w=1632&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Amit Verma",
      service: "Electrician",
      location: "Lucknow",
      experience: "7 years",
      qualification: "Diploma in Electrical",
      phone: "+91 9811122233",
      photo:
        "https://images.unsplash.com/photo-1597764699512-9e7d4042d74d?q=80&w=1169&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Priya Nair",
      service: "Tutor",
      location: "Kochi",
      experience: "4 years",
      qualification: "M.Sc Physics",
      phone: "+91 9877001122",
      photo:
        "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1169&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Suresh Patel",
      service: "Carpenter",
      location: "Ahmedabad",
      experience: "10 years",
      qualification: "Apprenticeship",
      phone: "+91 9765456781",
      photo:
        "https://images.unsplash.com/photo-1581093588401-22d3a226b9c5?q=80&w=1169&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "Deepa Chauhan",
      service: "Tailor",
      location: "Jaipur",
      experience: "8 years",
      qualification: "Fashion Design Diploma",
      phone: "+91 9977556644",
      photo:
        "https://images.unsplash.com/photo-1618354691438-25dfee63939b?q=80&w=1169&auto=format&fit=crop",
    },
    {
      id: 7,
      name: "Mohd. Salman",
      service: "AC Mechanic",
      location: "Hyderabad",
      experience: "6 years",
      qualification: "ITI Refrigeration",
      phone: "+91 9008899011",
      photo:
        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1169&auto=format&fit=crop",
    },
    {
      id: 8,
      name: "Neha Gupta",
      service: "Beautician",
      location: "Delhi",
      experience: "5 years",
      qualification: "Beauty & Wellness Certified",
      phone: "+91 9812233344",
      photo:
        "https://images.unsplash.com/photo-1620600439691-9376ad93dcf0?q=80&w=1169&auto=format&fit=crop",
    },
    {
      id: 9,
      name: "Arjun Mehta",
      service: "Driver",
      location: "Pune",
      experience: "12 years",
      qualification: "Heavy License",
      phone: "+91 9922445566",
      photo:
        "https://images.unsplash.com/photo-1610970878451-ec7c56b38a2e?q=80&w=1169&auto=format&fit=crop",
    },
    {
      id: 10,
      name: "Sunita Das",
      service: "Cook",
      location: "Kolkata",
      experience: "9 years",
      qualification: "Culinary Course",
      phone: "+91 9830022211",
      photo:
        "https://images.unsplash.com/photo-1556911073-52527ac437f5?q=80&w=1169&auto=format&fit=crop",
    },
    {
      id: 11,
      name: "Harish Yadav",
      service: "Gardener",
      location: "Chandigarh",
      experience: "15 years",
      qualification: "Landscape Training",
      phone: "+91 9887766554",
      photo:
        "https://images.unsplash.com/photo-1554188248-986adbb73be2?q=80&w=1169&auto=format&fit=crop",
    },
    {
      id: 12,
      name: "Poonam Kaur",
      service: "Nurse",
      location: "Amritsar",
      experience: "6 years",
      qualification: "GNM",
      phone: "+91 9811765432",
      photo:
        "https://images.unsplash.com/photo-1580281657521-44fddb0f38cc?q=80&w=1169&auto=format&fit=crop",
    },
    {
      id: 13,
      name: "Ravi Singh",
      service: "Painter",
      location: "Varanasi",
      experience: "11 years",
      qualification: "House Painting",
      phone: "+91 9711778899",
      photo:
        "https://images.unsplash.com/photo-1600488998973-1c11fba1c0d6?q=80&w=1169&auto=format&fit=crop",
    },
    {
      id: 14,
      name: "Anjali Deshmukh",
      service: "Fitness Trainer",
      location: "Nagpur",
      experience: "5 years",
      qualification: "Certified Trainer",
      phone: "+91 9822334455",
      photo:
        "https://images.unsplash.com/photo-1594737625785-c0f5d3b7e545?q=80&w=1169&auto=format&fit=crop",
    },
    {
      id: 15,
      name: "Imran Khan",
      service: "Welder",
      location: "Bhopal",
      experience: "8 years",
      qualification: "Welding Certificate",
      phone: "+91 9911223344",
      photo:
        "https://images.unsplash.com/photo-1581091015306-f0f1c0bfb0f6?q=80&w=1169&auto=format&fit=crop",
    },
    {
      id: 16,
      name: "Shivani Rathi",
      service: "Yoga Instructor",
      location: "Rishikesh",
      experience: "6 years",
      qualification: "Yoga Alliance Certified",
      phone: "+91 9811002233",
      photo:
        "https://images.unsplash.com/photo-1593810451665-8a5b8f6d1e71?q=80&w=1169&auto=format&fit=crop",
    },
    {
      id: 17,
      name: "Gaurav Joshi",
      service: "Photographer",
      location: "Dehradun",
      experience: "7 years",
      qualification: "Photography Diploma",
      phone: "+91 9887766112",
      photo:
        "https://images.unsplash.com/photo-1596079890746-5d94b16d8a2d?q=80&w=1169&auto=format&fit=crop",
    },
    {
      id: 18,
      name: "Manju Devi",
      service: "House Maid",
      location: "Patna",
      experience: "10 years",
      qualification: "Housekeeping Training",
      phone: "+91 9798334455",
      photo:
        "https://images.unsplash.com/photo-1617957745878-2f4782555026?q=80&w=1169&auto=format&fit=crop",
    },
    {
      id: 19,
      name: "Karan Kapoor",
      service: "Driver",
      location: "Gurgaon",
      experience: "9 years",
      qualification: "Commercial License",
      phone: "+91 9812245566",
      photo:
        "https://images.unsplash.com/photo-1616627984021-4baf5120a061?q=80&w=1169&auto=format&fit=crop",
    },
    {
      id: 20,
      name: "Lakshmi Menon",
      service: "Tutor",
      location: "Bangalore",
      experience: "4 years",
      qualification: "B.Ed Mathematics",
      phone: "+91 9876654321",
      photo:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1169&auto=format&fit=crop",
    },
  ];

  return NextResponse.json(providers);
}
