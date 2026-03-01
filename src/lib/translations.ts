import { read } from "fs";

export const translations = {
  en: {
    SriArunachalaramana: "Sri Arunachalaramana",
    // Navigation
    home: "Home",
    teachings: "Teachings",
    media: "Media",
    projects: "Projects",
    contact: "Contact Us",
    donation: "Donation",
    charityTrust: "Charitable Trust",
    
    // Index Page
    SriArunachalaramanaCharitableTrust: "ॐ Sri Arunachalaramana Charitable Trust",
    BhagavanSriRamanaMaharshi: "Bhagavan Sri Ramana Maharshi",
    heroCopy: "When a Mantra is Repeated, if Attention be directed to the Source whence the Mantra-Sound Emanates, the Mind will get Absorbed in that. That is Tapas.",
    exploreTeachings: "Explore Teachings",
    donateNow: "Donate Now",
    birthdayCelebrations: "🪔 Bhagavan Sri Ramana Maharshi 146th Birthday Celebrations 🪔",
    celebrationDate: "30th December, 2025 @ Opp. GAIL Office, A.V. Apparao Road, Rajamahendravam",
    aboutBhagavan: "About Bhagavan",
    bhagavanTitle: "Bhagavan Sri Ramana Maharshi",
    aboutBhagavanPara1: "Arudra Darshanam, a festival that commemorates the manifestation of Lord Siva as Nataraja, was being celebrated with great ardor in the Bhuminatha temple in Tiruchuzhi, South India, on December 29, 1879. Just as the Deity re-entered the temple past midnight on December 30th at 1:00AM, the first cry of a baby boy was heard in a house adjacent to the temple.",
    aboutBhagavanPara2: "The fortunate parents were Sundaram Iyer and his wife Alagammal. The newborn child received the name Venkataraman and was later known as Bhagavan Sri Ramana Maharshi. As the child was being born, a lady with poor eye-sight exclaimed that the new born was enveloped in light.",
    readHisTeachings: "Read His Teachings →",
    pournamisectionTitle: "Pournami Food Donation Campaign",
    pournamisectionDesc: "Participate in Every Month's Pournami Food Donation Campaign. \"Food is equal to Almighty\" — Nithya Annaprasadham.",
    ourPurpose: "Our Purpose",
    missionVision: "Mission & Vision",
    missionVisionDesc: "With the blessings of Guru Sri Ramana Maharshi, we have taken the initiative to serve the community through spiritual and charitable activities.",
    templeConstruction: "Temple Construction",
    templeConstructionDesc: "Unveil the temple of Goddess Sri Apita Kuchalambika Devi & Lord Sri Arunachaleswara at Rajamahendravaram.",
    vedicEducation: "Vedic Education",
    vedicEducationDesc: "A University of Vedic Education to provide the next generation the values of Indian traditions and culture.",
    foodDonation: "Food Donation",
    foodDonationDesc: "\"Food is equal to Almighty\" — providing food as Nithya Annaprasadham scheme to those in need.",
    ramanaAshram: "Ramana Ashram",
    ramanaAshramDesc: "Construct an Ashram in the name of Guru Sri Ramana Maharshi, guiding us towards the right path.",
    gosala: "Gosala (Cow Shelter)",
    gosalaDesc: "Service to the magnificent Go-matas (cows) by constructing a spacious Gosala (cow shed).",
    OmSriArunachaleswarayaNamah: "Om Sri Arunachaleswaraya Namah",
    
    // Teachings Page
    wisdom: "Wisdom",
    teachingsDesc: "Ramana Maharshi provided upadesa by providing darshan and sitting silently together with devotees and visitors.",
    self: "Self",
    silence: "Silence",
    bhakti: "Bhakti",
    
    // Media Page
    playVideo: "Play Video",
    photosGallery: "Photo Gallery",
    videosGallery: "Video Collection",
    mediaDesc: "Explore our collection of photos and videos from events and celebrations.",
    
    // Projects Page
    ourWork: "Our Work",
    impact: "Impact",
    projectsDesc: "Our charitable activities and community service initiatives.",
    
    // Contact Page
    reachOut: "Reach Out",
    contactDesc: "We'd love to hear from you. Get in touch with us for any queries or support.",
    address: "Address",
    email: "Email",
    phone: "Phone",
    getInTouch: "Get In Touch",
    name: "Name",
    message: "Message",
    send: "Send",
    thankYou: "Thank you! Your message has been sent successfully.",
    
    // Donation Page
    supportUs: "Support Us",
    donationDesc: "Your generous contribution helps us continue our charitable and spiritual activities.",
    manualPayment: "Manual Payment",
    transferDesc: "Transfer directly to our bank account or scan the QR code",
    bankDetails: "Bank Details",
    qrCode: "QR Code for Easy Payment",
    donationForm: "Donation Form",
    formDesc: "Share your details so we can acknowledge your generous contribution",
    phone: "Phone",
    about: "Message",
    submit: "Submit",
  },
  te: {
    SriArunachalaramana: "శ్రీ అరుణాచలరమణ",
    // Navigation
    home: "హోమ్",
    teachings: "శిక్షణలు",
    media: "మీడియా",
    projects: "ప్రాజెక్ట్లు",
    contact: "మమ్మల్లను సంప్రదించండి",
    donation: "దానం",
    charityTrust: "చరిటీ ట్రస్ట్",
    
    // Index Page
    SriArunachalaramanaCharitableTrust: "ॐ శ్రీ అరుణాచలరమణ చారిటబుల్ ట్రస్ట్",
    BhagavanSriRamanaMaharshi: "భగవాన్ శ్రీ రమణ మహర్షి",
    heroCopy: "ఒక మంత్రాన్ని పునరావృతం చేసినప్పుడు, మంత్ర ధ్వని ఎక్కడ నుండి వెలువడుతుందో దాని వైపు దృష్టి మళ్లిస్తే, మనస్సు దానిలో లీనమవుతుంది. అదే తపస్సు.",
    exploreTeachings: "శిక్షణలను అన్వేషించండి",
    donateNow: "ఇప్పుడే దానం చేయండి",
    birthdayCelebrations: "🪔 భగవాన్ శ్రీ రమణ మహర్షి 146వ పుట్టినరోజు వేడుకలు 🪔",
    celebrationDate: "30వ డిసెంబర్, 2025 @ నిరసన. GAIL కార్యాలయ, A.V. అప్పరావు రోడ్, రాజమహేంద్రవరం",
    aboutBhagavan: "భగవాన్ గురించి",
    bhagavanTitle: "భగవాన్ శ్రీ రమణ మహర్షి",
    aboutBhagavanPara1: "దక్షిణ భారతదేశంలోని తిరుచుళిలోని భూమినాథ ఆలయంలో 1879 డిసెంబర్ 29న నటరాజుగా శివుడు అవతరించిన సందర్భాన్ని గుర్తుచేసుకునే పండుగ 'ఆరుద్ర దర్శనం' అత్యంత వైభవంగా జరిగింది. డిసెంబర్ 30వ తేదీ అర్ధరాత్రి దాటిన తర్వాత తెల్లవారుజామున 1:00 గంటలకు దేవుడు తిరిగి ఆలయంలోకి ప్రవేశించగానే, ఆలయానికి ఆనుకుని ఉన్న ఇంట్లో మొదటి మగబిడ్డ ఏడుపు వినిపించింది.",
    aboutBhagavanPara2: "ఆ అదృష్టవంతులైన తల్లిదండ్రులు సుందరం అయ్యర్ మరియు అతని భార్య అలగమ్మల్. నవజాత శిశువుకు వెంకటరామన్ అని పేరు పెట్టారు మరియు తరువాత భగవాన్ శ్రీ రమణ మహర్షి అని పిలువబడ్డారు. శిశువు జన్మిస్తున్న సమయంలో, కంటి చూపు సరిగా లేని ఒక మహిళ నవజాత శిశువు వెలుగులో ఉందని ఆశ్చర్యపోయింది.",
    readHisTeachings: "అతని శిక్షణలను చదవండి →",
    pournamisectionTitle: "పౌర్ణమి ఆహార దాన ప్రచారం",
    pournamisectionDesc: "ప్రతిమాసి పౌర్ణమి ఆహార దాన ప్రచారంలో భాగస్వామ్యం చేయండి. \"ఆహారం సర్వశక్తిమతుకు సమానం\" — నిత్య అన్నప్రసాధం.",
    ourPurpose: "మా ఉద్దేశ్యం",
    missionVision: "లక్ష్య & దృష్టి",
    missionVisionDesc: "గురు శ్రీ రమణ మహర్షి యొక్క ఆశీర్వాదాలతో, మేము ఆధ్యాత్మిక మరియు దాతృ కార్యకలాపాల ద్వారా సమాజానికి సేవ చేయటానికి తీసుకున్నాము.",
    templeConstruction: "ఆలయ నిర్మాణం",
    templeConstructionDesc: "దేవత శ్రీ అపిత కుచలంబిక దేవి & భగవాన్ శ్రీ అరుణాచలేశ్వర ఆలయను రాజమహేంద్రవరంలో ఆవిష్కరించండి.",
    vedicEducation: "వేద విద్య",
    vedicEducationDesc: "తరువాతి తరం భారతీయ సంప్రదాయాలు మరియు సంస్కృతి విలువలను అందించటానికి వేద విద్య విశ్వవిద్యాలయం.",
    foodDonation: "ఆహార దానం",
    foodDonationDesc: "\"ఆహారం సర్వశక్తిమతుకు సమానం\" — అవసర సందర్భంలో నిత్య అన్నప్రసాధం స్కీమ్ ఆహారం అందించడం.",
    ramanaAshram: "రమణ ఆశ్రమం",
    ramanaAshramDesc: "గురు శ్రీ రమణ మహర్షి పేరుపై ఆశ్రమం నిర్మించండి, మనలను సరైన దారిలో నడిపించడం.",
    gosala: "గోశాల (ఆవుల ఆశ్రయం)",
    gosalaDesc: "గొప్ప గోమాతలను సేవ చేయటం ద్వారా విస్తారమైన గోశాల (గోఠుల) నిర్మాణం.",
    OmSriArunachaleswarayaNamah: "ఓం శ్రీ అరుణాచలేశ్వరాయ నమః",
    
    // Teachings Page
    wisdom: "జ్ఞానం",
    teachingsDesc: "రమణ మహర్షి దర్శన ఇవ్వటం మరియు భక్తులు మరియు సందర్శకులతో నిశ్శబ్దంగా కూర్చోవటం ద్వారా ఉపదేశం ఇచ్చారు.",
    self: "స్వయం",
    silence: "నిశ్శబ్దం",
    bhakti: "భక్తి",
    
    // Media Page
    playVideo: "వీడియో ప్లే చేయండి",
    photosGallery: "ఫోటో గ్యాలరీ",
    videosGallery: "వీడియో సంగ్రహం",
    mediaDesc: "ఈవెంట్లు మరియు వేడుకల నుండి మా ఫోటోలు మరియు వీడియోల సేకరణను అన్వేషించండి.",
    
    // Projects Page
    ourWork: "మా కార్యకలాపాలు",
    projectsDesc: "మా దాతృ కార్యకలాపాలు మరియు సమాజ సేవ చేసే పంథాలు.",
    impact: "ప్రభావం",
    
    // Contact Page
    reachOut: "మమ్మల్లను సంప్రదించండి",
    contactDesc: "మీ నుండి విన్నందుకు మేము ఆనందిస్తాము. ఏవైనా ప్రశ్నలు లేదా సపోర్టు కోసం మమ్మల్లను సంప్రదించండి.",
    address: "చిరునామా",
    email: "ఈనామం",
    phone: "ఫోన్",
    getInTouch: "సంపర్క సాధించండి",
    name: "పేరు",
    message: "సందేశం",
    send: "పంపండి",
    thankYou: "కృతజ్ఞతలు! మీ సందేశం విజయవంతంగా పంపబడింది.",
    
    // Donation Page
    supportUs: "మమ్మల్లను సపోర్ట్ చేయండి",
    donationDesc: "మీ ఉదారమైన విరాళ మమ్మల్లను ఆధ్యాత్మిక మరియు దాతృ కార్యకలాపాలను కొనసాగించటానికి సహాయపడుతుంది.",
    manualPayment: "ప్రత్యక్ష చెల్లింపు",
    transferDesc: "మా బ్యాంక్ ఖాతకు సరాసరి బదిలీ చేయండి లేదా QR కోడ్ స్కాన్ చేయండి",
    bankDetails: "బ్యాంక్ వివరాలు",
    qrCode: "సులభ చెల్లింపు కోసం QR కోడ్",
    donationForm: "దాన ఫారమ్",
    formDesc: "మీ సమాచారాన్ని భాగస్వామ్యం చేయండి, తద్వారా మేము మీ ఉదారమైన విరాళకు ఒప్పుకోవచ్చు",
    phone: "ఫోన్",
    about: "సందేశం",
    submit: "సమర్పించండి",
  },
};

export type TranslationKey = keyof typeof translations.en;

export const getTranslation = (
  key: TranslationKey,
  language: "en" | "te"
): string => {
  return translations[language][key] || translations.en[key];
};
