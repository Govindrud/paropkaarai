export type LangCode = "en" | "hi" | "mr" | "ta" | "te" | "bn";

export const LANGUAGES: { code: LangCode; label: string; native: string; bcp47: string }[] = [
  { code: "en", label: "English", native: "English", bcp47: "en-IN" },
  { code: "hi", label: "Hindi", native: "हिन्दी", bcp47: "hi-IN" },
  { code: "mr", label: "Marathi", native: "मराठी", bcp47: "mr-IN" },
  { code: "ta", label: "Tamil", native: "தமிழ்", bcp47: "ta-IN" },
  { code: "te", label: "Telugu", native: "తెలుగు", bcp47: "te-IN" },
  { code: "bn", label: "Bengali", native: "বাংলা", bcp47: "bn-IN" },
];

export const LANG_KEY = "paropkaar.lang";

export function getLang(): LangCode {
  if (typeof window === "undefined") return "en";
  return (localStorage.getItem(LANG_KEY) as LangCode) || "en";
}
export function setLang(l: LangCode) {
  localStorage.setItem(LANG_KEY, l);
  window.dispatchEvent(new Event("paropkaar:lang"));
}

export const T: Record<LangCode, Record<string, string>> = {
  en: {
    appName: "ParopkaarAI",
    tagline: "Accessible autism support in your language.",
    voiceMode: "Voice Mode",
    chatMode: "Chat Mode",
    whatsapp: "WhatsApp Demo",
    centers: "Therapy Centers",
    about: "About",
    startConv: "Start conversation",
    newConv: "New conversation",
    typeMsg: "Type your message…",
    send: "Send",
    holdToSpeak: "Tap and speak",
    listening: "Listening…",
    thinking: "Thinking…",
    speak: "Speak",
    stop: "Stop",
    disclaimer: "This tool gives awareness and guidance. It is not a diagnosis. Please consult a qualified professional.",
  },
  hi: { appName: "ParopkaarAI", tagline: "अपनी भाषा में ऑटिज़्म सहायता।", voiceMode: "वॉइस मोड", chatMode: "चैट मोड", whatsapp: "व्हाट्सऐप डेमो", centers: "थेरेपी केंद्र", about: "हमारे बारे में", startConv: "बातचीत शुरू करें", newConv: "नई बातचीत", typeMsg: "अपना संदेश लिखें…", send: "भेजें", holdToSpeak: "बोलने के लिए टैप करें", listening: "सुन रहा हूँ…", thinking: "सोच रहा हूँ…", speak: "बोलें", stop: "रोकें", disclaimer: "यह केवल जागरूकता है, निदान नहीं। कृपया विशेषज्ञ से मिलें।" },
  mr: { appName: "ParopkaarAI", tagline: "तुमच्या भाषेत ऑटिझम मदत.", voiceMode: "व्हॉइस मोड", chatMode: "चॅट मोड", whatsapp: "व्हॉट्सअ‍ॅप डेमो", centers: "थेरपी केंद्रे", about: "आमच्याबद्दल", startConv: "संभाषण सुरू करा", newConv: "नवीन संभाषण", typeMsg: "संदेश लिहा…", send: "पाठवा", holdToSpeak: "बोलण्यासाठी टॅप करा", listening: "ऐकत आहे…", thinking: "विचार करत आहे…", speak: "बोला", stop: "थांबा", disclaimer: "हे केवळ माहितीसाठी आहे, निदान नाही. कृपया तज्ज्ञांचा सल्ला घ्या." },
  ta: { appName: "ParopkaarAI", tagline: "உங்கள் மொழியில் ஆட்டிசம் ஆதரவு.", voiceMode: "குரல் முறை", chatMode: "அரட்டை", whatsapp: "வாட்ஸ்அப் டெமோ", centers: "சிகிச்சை மையங்கள்", about: "எங்களைப் பற்றி", startConv: "உரையாடலைத் தொடங்கு", newConv: "புதிய உரையாடல்", typeMsg: "செய்தியை உள்ளிடுக…", send: "அனுப்பு", holdToSpeak: "பேச தட்டவும்", listening: "கேட்கிறது…", thinking: "சிந்திக்கிறது…", speak: "பேசு", stop: "நிறுத்து", disclaimer: "இது விழிப்புணர்வுக்கு மட்டுமே, நோயறிதல் அல்ல. நிபுணரை அணுகவும்." },
  te: { appName: "ParopkaarAI", tagline: "మీ భాషలో ఆటిజం మద్దతు.", voiceMode: "వాయిస్ మోడ్", chatMode: "చాట్", whatsapp: "వాట్సాప్ డెమో", centers: "థెరపీ కేంద్రాలు", about: "మా గురించి", startConv: "సంభాషణ ప్రారంభించండి", newConv: "కొత్త సంభాషణ", typeMsg: "సందేశం టైప్ చేయండి…", send: "పంపండి", holdToSpeak: "మాట్లాడటానికి నొక్కండి", listening: "వింటోంది…", thinking: "ఆలోచిస్తోంది…", speak: "మాట్లాడండి", stop: "ఆపండి", disclaimer: "ఇది అవగాహన కోసం మాత్రమే, నిర్ధారణ కాదు. నిపుణుడిని సంప్రదించండి." },
  bn: { appName: "ParopkaarAI", tagline: "আপনার ভাষায় অটিজম সহায়তা।", voiceMode: "ভয়েস মোড", chatMode: "চ্যাট", whatsapp: "হোয়াটসঅ্যাপ ডেমো", centers: "থেরাপি কেন্দ্র", about: "আমাদের সম্পর্কে", startConv: "কথোপকথন শুরু করুন", newConv: "নতুন কথোপকথন", typeMsg: "বার্তা লিখুন…", send: "পাঠান", holdToSpeak: "কথা বলতে ট্যাপ করুন", listening: "শুনছি…", thinking: "ভাবছি…", speak: "বলুন", stop: "থামুন", disclaimer: "এটি সচেতনতার জন্য, রোগনির্ণয় নয়। বিশেষজ্ঞের পরামর্শ নিন।" },
};

export function tr(lang: LangCode, key: string) {
  return T[lang]?.[key] ?? T.en[key] ?? key;
}
