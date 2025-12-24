export const SOCIAL_LINKS = {
  youtube: 'https://www.youtube.com/@fitworldgymsalonta',
  facebook: 'https://www.facebook.com/FitworldGymSalonta',
  instagram: 'https://www.instagram.com/fitworldgymsalonta',
  tiktok: 'https://www.tiktok.com/@fitworldgym',
} as const;

export const CONTACT_INFO = {
  address: 'Salonta, Str. Kulin Gyorgy, nr. 37',
  phone: '+40 755 082 832',
  email: 'contact@fitworldgym.ro',
  coordinates: {
    lat: 46.8019,
    lng: 21.6536,
  },
  googleMapsUrl: 'https://maps.google.com/?q=FitWorld+Gym+Salonta',
} as const;

export const WORKING_HOURS = {
  weekdays: '09:00 - 22:00',
  saturday: '09:00 - 17:00',
  sunday: null, // Closed
} as const;

export const MOBILE_APP = {
  name: 'GMA - Gym Management App',
  ios: 'https://apps.apple.com/ro/app/gma-gym-management-app/id1496040256',
  android: 'https://play.google.com/store/apps/details?id=com.companyname.gma',
} as const;

export const TEAM_MEMBERS = [
  {
    id: 'codruta-coroian',
    slug: 'codruta-coroian',
    name: 'Codruța Coroian',
    image: '/trainers/codruta-coroian.jpg',
    specializations: ['Personal Training', 'Schwinn Cycling', 'Stretching', 'HIIT', 'Booty Builder'],
    bio: {
      ro: `Codruța Coroian este instructoare de fitness, cu o experiență vastă în susținerea unui stil de viață activ și sănătos, apreciată pentru atitudinea ei pozitivă și capacitatea de a motiva clienții să își atingă potențialul maxim.

Specializările sale, acreditate și certificate, includ:
• Personal Training: Programe personalizate pentru forță și tonus.
• Schwinn Cycling: Antrenamente cardio dinamice și motivante.
• Stretching: Exerciții pentru flexibilitate și mobilitate.
• HIIT: Exerciții de intensitate ridicată pentru performanță și arderea caloriilor.
• Booty Builder: Program special dedicat pentru creșterea și definirea mușchilor fesieri.`,
      hu: `Codruța Coroian fitness edző, széleskörű tapasztalattal az aktív és egészséges életmód támogatásában, akit pozitív hozzáállásáért és motivációs képességéért értékelnek.

Akkreditált és tanúsított specializációi:
• Personal Training: Személyre szabott programok erőhöz és tónushoz.
• Schwinn Cycling: Dinamikus és motiváló kardió edzések.
• Stretching: Rugalmasság és mobilitás gyakorlatok.
• HIIT: Magas intenzitású gyakorlatok teljesítményhez és kalóriaégetéshez.
• Booty Builder: Speciális program a fenékizmok növeléséhez és definiálásához.`,
      en: `Codruța Coroian is a fitness instructor with extensive experience in promoting an active and healthy lifestyle, appreciated for her positive attitude and ability to motivate clients to reach their maximum potential.

Her accredited and certified specializations include:
• Personal Training: Personalized programs for strength and toning.
• Schwinn Cycling: Dynamic and motivating cardio workouts.
• Stretching: Flexibility and mobility exercises.
• HIIT: High-intensity exercises for performance and calorie burning.
• Booty Builder: Special program dedicated to growing and defining glute muscles.`,
    },
    social: {
      instagram: 'https://www.instagram.com/co_codruta/',
      facebook: 'https://www.facebook.com/codruta.coroian',
    },
  },
  {
    id: 'bianka-beidak',
    slug: 'bianka-beidak',
    name: 'Bianka Beidak',
    image: '/trainers/Bianka-Beidak.jpg',
    specializations: ['Personalized Programs', 'Group Training', 'Lifestyle Coaching'],
    bio: {
      ro: `Bianka Beidak este instructor de fitness certificat, cu o pasiune puternică pentru un stil de viață sănătos și activ. Cu o pregătire solidă în domeniul fitness-ului și o abordare dedicată fiecărui client, Bianka se asigură că fiecare antrenament devine o experiență plăcută și eficientă.

Ce poate oferi Bianka:
• Programe personalizate de fitness: Fie că îți dorești să slăbești, sau să-ți îmbunătățești condiția fizică, Bianka îți creează un plan de antrenament adaptat nevoilor și obiectivelor tale.
• Antrenamente de grup: Dinamice și pline de energie, sesiunile de grup conduse de Bianka sunt ideale pentru a-ți menține motivația.
• Suport și îndrumare: Bianka este alături de tine la fiecare pas, oferind îndrumare tehnică și motivațională.
• Promovarea unui stil de viață echilibrat: Cu Bianka, fitness-ul nu înseamnă doar exerciții, ci și o abordare și un mindset pozitiv.`,
      hu: `Bianka Beidak tanúsított fitness edző, erős szenvedéllyel az egészséges és aktív életmód iránt. Szilárd felkészültséggel és minden ügyfélnek dedikált megközelítéssel biztosítja, hogy minden edzés kellemes és hatékony élmény legyen.

Mit kínál Bianka:
• Személyre szabott fitness programok: Akár fogyni szeretnél, akár javítani a fizikai állapotodon, Bianka olyan edzéstervet készít, amely illeszkedik igényeidhez és céljaidhoz.
• Csoportos edzések: Dinamikus és energikus, a Bianka által vezetett csoportos foglalkozások ideálisak a motiváció fenntartásához.
• Támogatás és útmutatás: Bianka minden lépésnél melletted áll, technikai és motivációs útmutatást nyújtva.
• Kiegyensúlyozott életmód: Biankával a fitness nem csak edzést jelent, hanem pozitív hozzáállást és gondolkodásmódot is.`,
      en: `Bianka Beidak is a certified fitness instructor with a strong passion for a healthy and active lifestyle. With solid training in fitness and a dedicated approach to each client, Bianka ensures that every workout becomes a pleasant and effective experience.

What Bianka offers:
• Personalized fitness programs: Whether you want to lose weight or improve your physical condition, Bianka creates a training plan adapted to your needs and goals.
• Group training: Dynamic and energetic, group sessions led by Bianka are ideal for maintaining motivation.
• Support and guidance: Bianka is with you every step of the way, providing technical and motivational guidance.
• Balanced lifestyle: With Bianka, fitness is not just about exercises, but also a positive approach and mindset.`,
    },
    social: {
      instagram: 'https://www.instagram.com/biutza_bmb/',
      facebook: 'https://www.facebook.com/beidak.bianka',
    },
  },
  {
    id: 'cristian-kovacs',
    slug: 'cristian-kovacs',
    name: 'Cristian Kovacs',
    image: '/trainers/Cristian-Kovacs.jpg',
    specializations: ['Bodybuilding', 'Functional Fitness', 'Strength Training', 'Sports Nutrition'],
    certifiedSince: 2019,
    bio: {
      ro: `Cristian Kovacs este un instructor de fitness certificat în bodybuilding și fitness din 2019, cu o pasiune profundă pentru sport și un angajament constant față de transformările pozitive ale clienților săi.

Cu o abordare profesionistă și adaptată fiecărei persoane, Cristian oferă îndrumare și suport pentru atingerea obiectivelor de forță, masă musculară, tonifiere sau pierdere în greutate.

Specializările sale includ:
• Bodybuilding: Programe personalizate pentru dezvoltarea masei musculare și definirea corpului.
• Fitness Funcțional: Exerciții pentru creșterea rezistenței și îmbunătățirea performanței fizice generale.
• Antrenamente de Forță: Sesiuni dedicate creșterii forței și stabilității musculare.
• Consiliere pe Nutriție Sportivă: Recomandări pentru alimentația corectă, adaptate nevoilor individuale.`,
      hu: `Cristian Kovacs 2019 óta tanúsított bodybuilding és fitness edző, mély szenvedéllyel a sport iránt és állandó elkötelezettséggel ügyfelei pozitív átalakulása iránt.

Professzionális és minden személyhez igazított megközelítéssel útmutatást és támogatást nyújt az erő, izomtömeg, tónusozás vagy fogyás céljainak eléréséhez.

Specializációi:
• Bodybuilding: Személyre szabott programok az izomtömeg fejlesztéséhez és a test definiálásához.
• Funkcionális Fitness: Gyakorlatok az állóképesség növeléséhez és az általános fizikai teljesítmény javításához.
• Erőedzés: Az izomerő és stabilitás növelésére szánt foglalkozások.
• Sportétkezési Tanácsadás: Helyes táplálkozási ajánlások, az egyéni igényekhez igazítva.`,
      en: `Cristian Kovacs is a certified fitness instructor in bodybuilding and fitness since 2019, with a deep passion for sports and a constant commitment to the positive transformations of his clients.

With a professional approach adapted to each person, Cristian offers guidance and support for achieving goals of strength, muscle mass, toning, or weight loss.

His specializations include:
• Bodybuilding: Personalized programs for muscle mass development and body definition.
• Functional Fitness: Exercises to increase endurance and improve overall physical performance.
• Strength Training: Sessions dedicated to increasing strength and muscle stability.
• Sports Nutrition Counseling: Recommendations for proper nutrition, adapted to individual needs.`,
    },
    social: {
      instagram: 'https://www.instagram.com/cristikovacs0707/',
      facebook: 'https://www.facebook.com/cristi.kovacs.75',
    },
  },
  {
    id: 'tunde-modi',
    slug: 'tunde-modi',
    name: 'Tunde Modi',
    image: '/trainers/Tunde-Modi.jpg',
    title: {
      ro: 'Multipla Campioană Națională',
      hu: 'Többszörös Nemzeti Bajnok',
      en: 'Multiple National Champion',
    },
    specializations: ['Personalized Training', 'Biomechanics', 'Sports Nutrition', 'Competition Coaching'],
    bio: {
      ro: `Instructor Personal de Fitness și Bodybuilding Certificat - Multipla Campioană Națională

Tunde Modi este un nume de referință în lumea fitnessului și bodybuildingului din România, având o carieră strălucită care include titluri de multipla campioană națională. Cu o pregătire profesională solidă și o pasiune de neegalat pentru performanța fizică, Tunde aduce la FitWorld Gym nu doar experiență, ci și inspirație pentru toți cei care doresc să își transforme viața.

Competențele lui Tunde Modi:
• Planuri de antrenament personalizate: Fie că vrei să pierzi în greutate, să crești masa musculară sau să-ți îmbunătățești condiția fizică generală, Tunde adaptează fiecare program pentru a răspunde obiectivelor tale unice.
• Expertiză avansată: Cu certificări naționale și o vastă experiență în competiții de bodybuilding, Tunde oferă o îndrumare precisă și profesională în biomecanică, nutriție sportivă și tehnici de antrenament.
• Motivație și leadership: Ca multiplă campioană, Tunde știe ce înseamnă să muncești din greu pentru succes.`,
      hu: `Személyi Fitness és Bodybuilding Edző Tanúsítvánnyal - Többszörös Nemzeti Bajnok

Tunde Modi referencia név a romániai fitness és bodybuilding világában, fényes karrierrel, amely többszörös nemzeti bajnoki címeket tartalmaz. Szilárd szakmai felkészültséggel és páratlan szenvedéllyel a fizikai teljesítmény iránt, Tunde nem csak tapasztalatot, hanem inspirációt is hoz a FitWorld Gym-be mindazok számára, akik meg akarják változtatni életüket.

Tunde Modi kompetenciái:
• Személyre szabott edzéstervek: Akár fogyni, izomtömeget építeni, vagy általános fizikai állapotodat javítani szeretnéd, Tunde minden programot az egyedi céljaidhoz igazít.
• Haladó szakértelem: Nemzeti tanúsítványokkal és széleskörű bodybuilding verseny tapasztalattal, Tunde pontos és professzionális útmutatást nyújt biomechanikában, sportétkezésben és edzéstechnikákban.
• Motiváció és vezetés: Többszörös bajnokként Tunde tudja, mit jelent keményen dolgozni a sikerért.`,
      en: `Certified Personal Fitness and Bodybuilding Instructor - Multiple National Champion

Tunde Modi is a reference name in the world of fitness and bodybuilding in Romania, with a brilliant career that includes multiple national championship titles. With solid professional training and unmatched passion for physical performance, Tunde brings to FitWorld Gym not only experience but also inspiration for all those who want to transform their lives.

Tunde Modi's competencies:
• Personalized training plans: Whether you want to lose weight, build muscle mass, or improve your overall physical condition, Tunde adapts each program to meet your unique goals.
• Advanced expertise: With national certifications and extensive experience in bodybuilding competitions, Tunde offers precise and professional guidance in biomechanics, sports nutrition, and training techniques.
• Motivation and leadership: As a multiple champion, Tunde knows what it means to work hard for success.`,
    },
    social: {
      instagram: 'https://www.instagram.com/tundenagymaria/',
      facebook: 'https://www.facebook.com/profile.php?id=100009023287859',
    },
  },
] as const;

export const PRICING_PLANS = [
  {
    id: 'monthly',
    days: 30,
    price: 140,
    name: { ro: 'Abonament 30 zile', hu: '30 napos bérlet', en: '30 Days Pass' },
    duration: { ro: '1 lună', hu: '1 hónap', en: '1 month' },
    features: ['unlimitedFitness', 'groupClasses'],
  },
  {
    id: 'bimonthly',
    days: 60,
    price: 250,
    name: { ro: 'Abonament 60 zile', hu: '60 napos bérlet', en: '60 Days Pass' },
    duration: { ro: '2 luni', hu: '2 hónap', en: '2 months' },
    features: ['unlimitedFitness', 'groupClasses'],
  },
  {
    id: 'semester',
    days: 180,
    price: 730,
    name: { ro: 'Abonament 180 zile', hu: '180 napos bérlet', en: '180 Days Pass' },
    duration: { ro: '6 luni', hu: '6 hónap', en: '6 months' },
    features: ['unlimitedFitness', 'groupClasses'],
    popular: true,
  },
  {
    id: 'annual',
    days: 365,
    price: 1400,
    name: { ro: 'Abonament 365 zile', hu: '365 napos bérlet', en: '365 Days Pass' },
    duration: { ro: '1 an', hu: '1 év', en: '1 year' },
    features: ['unlimitedFitness', 'groupClasses'],
  },
  {
    id: 'halfmonth',
    days: 15,
    price: 110,
    name: { ro: 'Abonament 15 zile', hu: '15 napos bérlet', en: '15 Days Pass' },
    duration: { ro: '15 zile', hu: '15 nap', en: '15 days' },
    features: ['unlimitedFitness', 'groupClasses'],
  },
  {
    id: 'daily',
    days: 1,
    price: 20,
    name: { ro: 'Abonament ocazional', hu: 'Alkalmi belépő', en: 'Day Pass' },
    duration: { ro: '1 intrare', hu: '1 belépés', en: '1 entry' },
    features: ['unlimitedFitness'],
  },
] as const;

export const GALLERY_IMAGES = [
  '/images/media/fit-world-gym-salonta-01.jpg',
  '/images/media/fit-world-gym-salonta-02.jpg',
  '/images/media/fit-world-gym-salonta-03.jpg',
  '/images/media/fit-world-gym-salonta-04.jpg',
  '/images/media/fit-world-gym-salonta-05.jpg',
  '/images/media/fit-world-gym-salonta-06.jpg',
  '/images/media/fit-world-gym-salonta-07.jpg',
  '/images/media/fit-world-gym-salonta-09.jpg',
  '/images/media/fit-world-gym-salonta-10.jpg',
  '/images/media/fit-world-gym-salonta-11.jpg',
  '/images/media/fit-world-gym-salonta-12.jpg',
] as const;

