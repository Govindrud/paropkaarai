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
  { id: "1", name: "Ummeed Child Development Center", city: "Mumbai", address: "Mantri Pride, S.M. Road, Wadala", phone: "+91 22 6624 7239", specialties: ["Developmental Pediatrics", "Speech Therapy", "OT"], languages: ["English", "Hindi", "Marathi"], lat: 19.0176, lng: 72.8562 },
  { id: "2", name: "Forum for Autism", city: "Mumbai", address: "Bandra West", phone: "+91 98200 00000", specialties: ["Parent Support", "ABA"], languages: ["English", "Hindi", "Marathi"], lat: 19.0596, lng: 72.8295 },
  { id: "3", name: "Action For Autism (AFA)", city: "Delhi", address: "Pocket 7 & 8, Sector 5, Jasola Vihar", phone: "+91 11 4054 0991", specialties: ["Early Intervention", "Vocational"], languages: ["English", "Hindi"], lat: 28.5400, lng: 77.2900 },
  { id: "4", name: "Tamana Autism Centre", city: "Delhi", address: "Sector 12, R. K. Puram", phone: "+91 11 2611 8821", specialties: ["Special Education", "Speech Therapy"], languages: ["English", "Hindi"], lat: 28.5642, lng: 77.1816 },
  { id: "5", name: "Communication DEALL", city: "Bengaluru", address: "Indiranagar", phone: "+91 80 2521 7390", specialties: ["Speech Therapy", "Early Intervention"], languages: ["English", "Kannada", "Hindi"], lat: 12.9719, lng: 77.6412 },
  { id: "6", name: "ASHA Centre for Autism", city: "Bengaluru", address: "Jayanagar 4th Block", phone: "+91 80 2663 5555", specialties: ["ABA", "OT"], languages: ["English", "Kannada"], lat: 12.9250, lng: 77.5938 },
  { id: "7", name: "We CAN", city: "Chennai", address: "Velachery", phone: "+91 44 2253 1234", specialties: ["Special Education", "Therapy"], languages: ["English", "Tamil"], lat: 12.9750, lng: 80.2200 },
  { id: "8", name: "V-Excel Educational Trust", city: "Chennai", address: "Adyar", phone: "+91 44 2491 4192", specialties: ["Therapy", "Vocational"], languages: ["English", "Tamil"], lat: 13.0067, lng: 80.2570 },
  { id: "9", name: "Autism Society West Bengal", city: "Kolkata", address: "Salt Lake Sector V", phone: "+91 33 2357 5563", specialties: ["Awareness", "Therapy"], languages: ["English", "Bengali", "Hindi"], lat: 22.5726, lng: 88.4339 },
  { id: "10", name: "Manovikas Kendra", city: "Kolkata", address: "EM Bypass", phone: "+91 33 2442 0773", specialties: ["Special Education", "Diagnostics"], languages: ["English", "Bengali"], lat: 22.5240, lng: 88.4030 },
  { id: "11", name: "Sweekaar Academy", city: "Hyderabad", address: "Banjara Hills", phone: "+91 40 2354 4400", specialties: ["Speech Therapy", "Audiology"], languages: ["English", "Telugu", "Hindi"], lat: 17.4125, lng: 78.4480 },
  { id: "12", name: "Roshni Special Needs", city: "Hyderabad", address: "Madhapur", phone: "+91 40 4020 1212", specialties: ["ABA", "OT"], languages: ["English", "Telugu"], lat: 17.4483, lng: 78.3915 },
  { id: "13", name: "Prasanna Autism Centre", city: "Pune", address: "Kothrud", phone: "+91 20 2543 2222", specialties: ["Therapy", "Counseling"], languages: ["English", "Marathi", "Hindi"], lat: 18.5074, lng: 73.8077 },
  { id: "14", name: "Maharashtra Dyslexia Association", city: "Pune", address: "Aundh", phone: "+91 20 2588 1234", specialties: ["Learning Support"], languages: ["English", "Marathi"], lat: 18.5590, lng: 73.8077 },
  { id: "15", name: "Sankalp Centre", city: "Jaipur", address: "C-Scheme", phone: "+91 141 222 3344", specialties: ["Early Intervention", "Speech"], languages: ["English", "Hindi"], lat: 26.9124, lng: 75.7873 },
  { id: "16", name: "Disha Centre", city: "Lucknow", address: "Gomti Nagar", phone: "+91 522 234 5678", specialties: ["Special Education", "Therapy"], languages: ["English", "Hindi"], lat: 26.8467, lng: 80.9462 },
  { id: "17", name: "Jeevan Autism Trust", city: "Ahmedabad", address: "Satellite", phone: "+91 79 2674 1122", specialties: ["ABA", "Parent Training"], languages: ["English", "Gujarati", "Hindi"], lat: 23.0297, lng: 72.5168 },
  { id: "18", name: "Bodhi Centre", city: "Coimbatore", address: "RS Puram", phone: "+91 422 254 7890", specialties: ["Therapy"], languages: ["English", "Tamil"], lat: 11.0067, lng: 76.9656 },
  { id: "19", name: "Asha Niketan", city: "Bhopal", address: "Arera Colony", phone: "+91 755 246 7890", specialties: ["Special Education"], languages: ["English", "Hindi"], lat: 23.2156, lng: 77.4144 },
  { id: "20", name: "Shishu Sarothi", city: "Guwahati", address: "Bhangagarh", phone: "+91 361 246 1234", specialties: ["Therapy", "Inclusive Education"], languages: ["English", "Assamese", "Bengali"], lat: 26.1445, lng: 91.7362 },
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
