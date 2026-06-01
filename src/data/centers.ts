export type Center = {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  specialties: string[];
  languages: string[];
  lat: number;
  lng: number;
};

export const CENTERS: Center[] = [
  { id: "1", name: "Ummeed Child Development Center", city: "Mumbai", address: "Ground Floor, Mantri Pride 1-B, N.M. Joshi Marg, Lower Parel", phone: "+91 22 6248 8100", specialties: ["Developmental Pediatrics", "Speech Therapy", "OT"], languages: ["English", "Hindi", "Marathi"], lat: 18.9966, lng: 72.8304 },
  { id: "2", name: "Forum for Autism", city: "Mumbai", address: "Flat 1, Sorabh House, Garden Lane, Off Colaba Causeway", phone: "+91 90290 18100 / +91 80808 09116", specialties: ["Parent Support", "Awareness"], languages: ["English", "Hindi", "Marathi"], lat: 18.9151, lng: 72.8266 },
  { id: "3", name: "Action For Autism (AFA)", city: "Delhi", address: "National Centre for Autism, Pocket 7 & 8, Jasola Vihar", phone: "+91 11 4054 0991 / +91 11 4054 0992", specialties: ["Early Intervention", "Vocational", "Parent Training"], languages: ["English", "Hindi"], lat: 28.5400, lng: 77.2900 },
  { id: "4", name: "Tamana Autism Centre", city: "Delhi", address: "C-10/8, Vasant Vihar", phone: "+91 11 2614 8269 / +91 11 2615 1587", specialties: ["Special Education", "Diagnostics", "Therapy"], languages: ["English", "Hindi"], lat: 28.5603, lng: 77.1606 },
  { id: "5", name: "ASHA Centre for Autism", city: "Bengaluru", address: "#3360, 13th B Main, 6th Cross, Indiranagar", phone: "+91 80 4164 5939 / +91 97392 01411", specialties: ["Special Education", "Autism Support"], languages: ["English", "Kannada"], lat: 12.9719, lng: 77.6412 },
  { id: "6", name: "Communication DEALL", city: "Bengaluru", address: "HRBR Layout / Bengaluru programs", phone: "+91 80 2580 0826", specialties: ["Speech Therapy", "Early Intervention"], languages: ["English", "Kannada", "Hindi"], lat: 13.0210, lng: 77.6470 },
  { id: "7", name: "V-Excel Educational Trust", city: "Chennai", address: "10/23 Thiruvengadam Street, R.A. Puram", phone: "+91 44 2495 6373 / +91 44 2462 0243", specialties: ["Special Education", "Therapy", "Vocational"], languages: ["English", "Tamil"], lat: 13.0262, lng: 80.2572 },
  { id: "8", name: "Autism Society West Bengal", city: "Kolkata", address: "147, Krishakpally, Barakhala, Mukundapur", phone: "+91 90380 08536 / +91 91233 49570", specialties: ["Autism Support", "Therapy", "Appointments"], languages: ["English", "Bengali", "Hindi"], lat: 22.4954, lng: 88.3981 },
  { id: "9", name: "Manovikas Kendra", city: "Kolkata", address: "482, Madudah, Plot 1-24, Sector J, EM Bypass", phone: "+91 33 4603 1861 / +91 78900 13229", specialties: ["Special Education", "Assessment", "Therapy"], languages: ["English", "Bengali", "Hindi"], lat: 22.5240, lng: 88.4030 },
  { id: "10", name: "Sweekaar Academy of Rehabilitation Sciences", city: "Hyderabad", address: "Secunderabad, Telangana", phone: "+91 93489 34911 / +91 93489 34907", specialties: ["Speech Therapy", "Audiology", "Rehabilitation"], languages: ["English", "Telugu", "Hindi"], lat: 17.4464, lng: 78.4961 },
  { id: "11", name: "Prasanna Autism Centre", city: "Pune", address: "895, Shivaji Nagar, Deccan Gymkhana", phone: "+91 20 2565 2246 / +91 93260 13744", specialties: ["Autism Support", "Therapy", "Counseling"], languages: ["English", "Marathi", "Hindi"], lat: 18.5204, lng: 73.8450 },
  { id: "12", name: "Sambhav School for Autism", city: "Jaipur", address: "28, Kasturba Nagar, Nirman Nagar", phone: "+91 93093 74871 / +91 80039 28832", specialties: ["Autism School", "Multiple Disability"], languages: ["English", "Hindi"], lat: 26.8896, lng: 75.7640 },
  { id: "13", name: "Bodhi Mind Care", city: "Coimbatore", address: "Mettupalayam Road / Avinashi Road, Coimbatore", phone: "+91 97512 33456 / +91 89255 11247", specialties: ["Autism Care", "Psychiatry", "Therapy"], languages: ["English", "Tamil"], lat: 11.0816, lng: 76.9410 },
  { id: "14", name: "Shishu Sarothi", city: "Guwahati", address: "Off Ramkrishna Mission Road, Birubari", phone: "+91 97071 49810 / +91 73990 18722", specialties: ["Early Intervention", "Inclusive Education", "Therapy"], languages: ["English", "Assamese", "Bengali", "Hindi"], lat: 26.1597, lng: 91.7539 },
];

export function haversine(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const x =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((a.lat * Math.PI) / 180) * Math.cos((b.lat * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(x));
}
