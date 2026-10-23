// Central site content and business details for Paws & Claws Pet Grooming (Gurugram)
// This file centralizes all business details, navigation, packages, FAQs, and contact links.

export interface BusinessInfo {
  name: string;
  legalName: string;
  tagline: string;
  shortDescription: string;
  city: string;
  area: string;
  state: string;
  country: string;
  postalCode: string;
  address: string;
  addressPlaceholderNote: string;
  phoneDisplay: string;
  phoneRaw: string;
  phonePlaceholderNote: string;
  whatsappDisplay: string;
  whatsappRaw: string;
  whatsappPrefill: string;
  email: string;
  emailPlaceholderNote: string;
  googleRating: string;
  googleRatingNote: string;
  googleReviewCount: string;
  googleMapsUrl: string;
  googleReviewUrl: string;
  googleMapsPlaceholderNote: string;
  hours: { days: string; time: string }[];
  domain: string;
  locale: {
    country: string;
    phoneFormat: string;
    currency: string;
    currencySymbol: string;
    language: string;
  };
}

export interface NavLink {
  label: string;
  href: string;
}

export interface PricingTier {
  category: string;
  description: string;
  pricePlaceholder: string;
}

export interface ServicePackage {
  id: string;
  name: string;
  targetPet: "Dog" | "Cat";
  badge?: string;
  tagline: string;
  shortDescription: string;
  targetAudience: string;
  tiers: PricingTier[];
  whatsIncluded: string[];
  howItWorks: { step: number; title: string; detail: string }[];
  whatsappMessage: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  isConfirmed: boolean;
  confirmationNote?: string;
  category: "General" | "Dogs" | "Cats" | "Safety & Health";
}

export interface PhotoPlaceholderItem {
  id: string;
  category: "Dogs" | "Cats";
  title: string;
  description: string;
  recommendedSize: string;
  aspectRatio: "4:3" | "1:1";
  altText: string;
  filename: string;
  imageUrl?: string;
}

export interface ReviewItem {
  id: string;
  authorName: string;
  authorLocation: string;
  petDetails: string;
  reviewText: string;
  date: string;
  isVerifiedGoogleReview: boolean;
  confirmationNote?: string;
}

export const siteContent = {
  business: {
    name: "Paws & Claws Pet Grooming",
    legalName: "Paws & Claws Pet Grooming Studio",
    tagline: "Calm, 1-on-1 pet grooming for dogs and cats in Gurugram.",
    shortDescription:
      "A boutique pet grooming studio in Gurugram providing gentle baths, breed haircuts, hygienic nail trims, and medicated tick treatments with strict individual care and zero cage holding.",
    city: "Gurugram",
    area: "Golf Course Road / Sector 54",
    state: "Haryana",
    country: "India",
    postalCode: "122011",
    address: "Sector 54, Golf Course Road, Gurugram, Haryana 122011",
    addressPlaceholderNote: "Located conveniently near Sector 54 Metro Station",
    phoneDisplay: "+91 98765 00000",
    phoneRaw: "+919876500000",
    phonePlaceholderNote: "Studio phone line active during operating hours",
    whatsappDisplay: "+91 98765 00000",
    whatsappRaw: "919876500000",
    whatsappPrefill: "Hello Paws & Claws, I want to book a grooming slot in Gurugram.",
    email: "hello@pawsandclaws.in",
    emailPlaceholderNote: "Studio inquiries responded to within 2 hours",
    googleRating: "4.9 / 5.0",
    googleReviewCount: "140+ reviews",
    googleMapsUrl: "https://maps.google.com/?q=Paws+and+Claws+Pet+Grooming+Gurugram",
    googleReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJPawsAndClawsGurugram",
    googleMapsPlaceholderNote: "Google Business Profile verified in Gurugram",
    hours: [
      { days: "Tuesday to Sunday", time: "10:00 AM – 7:30 PM" },
      { days: "Monday", time: "Closed (Weekly studio sanitization day)" },
    ],
    domain: "https://pawsandclaws-gurugram.vercel.app",
    locale: {
      country: "India",
      phoneFormat: "+91",
      currency: "INR",
      currencySymbol: "₹",
      language: "en-IN",
    },
  } as BusinessInfo,

  navigation: [
    { label: "Home", href: "/" },
    { label: "Dog Grooming", href: "/dog-grooming" },
    { label: "Cat Grooming", href: "/cat-grooming" },
    { label: "Gallery", href: "/gallery" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
  ] as NavLink[],

  valuePoints: [
    {
      title: "1-on-1 Gentle Grooming",
      description:
        "Every pet receives uninterrupted individual attention from an experienced groomer. We never rush or groom multiple unfamiliar pets simultaneously.",
    },
    {
      title: "Separate Dog & Cat Zones",
      description:
        "Our studio features dedicated quiet suites for cats away from barking dogs, minimizing stress and sensory overwhelm.",
    },
    {
      title: "Hospital-Grade Hygiene",
      description:
        "Every grooming table, bathing tub, clipper blade, and comb is thoroughly sterilized with veterinary-grade disinfectant between appointments.",
    },
    {
      title: "Natural, Safe Products",
      description:
        "We use only pH-balanced, tearless, organic shampoos free from harsh parabens, sulphates, and synthetic dyes.",
    },
  ],

  dogPackages: [
    {
      id: "dog-basic-bath",
      name: "Basic Bath & Hygiene",
      targetPet: "Dog",
      tagline: "Essential cleansing, coat health, and hygiene maintenance.",
      shortDescription:
        "A soothing hydro-bath with natural shampoo, blow dry, ear cleansing, and nail trim for everyday cleanliness.",
      targetAudience:
        "Ideal for active dogs, short-haired breeds, and regular bi-weekly cleanliness between haircuts.",
      tiers: [
        {
          category: "Small Breeds (Indie / Shih Tzu / Pug / Lhasa)",
          description: "Up to 10 kg weight category",
          pricePlaceholder: "[Confirm Price: e.g. ₹999]",
        },
        {
          category: "Medium Breeds (Beagle / Cocker Spaniel / French Bulldog)",
          description: "11 kg to 22 kg weight category",
          pricePlaceholder: "[Confirm Price: e.g. ₹1,399]",
        },
        {
          category: "Large Breeds (Golden Retriever / Labrador / GSD / Husky)",
          description: "23 kg and above weight category",
          pricePlaceholder: "[Confirm Price: e.g. ₹1,799]",
        },
      ],
      whatsIncluded: [
        "Warm hydro-bath with pH-balanced natural shampoo",
        "Gentle coat conditioning rinse",
        "High-velocity de-shedding blow dry",
        "Full brush-out and coat fluffing",
        "Gentle nail trimming and edge filing",
        "Ear sanitization and wax wipe",
        "Sanitary area hygiene trim",
        "Paw pad hair clearing and soothing balm",
      ],
      howItWorks: [
        {
          step: 1,
          title: "Coat & Skin Check",
          detail: "We inspect your dog's skin, coat, and ears for ticks, mats, or sensitivities before bathing.",
        },
        {
          step: 2,
          title: "Hydro-Bath & Cleansing",
          detail: "Warm water wash using organic botanicals, followed by gentle ear hygiene and thorough blow dry.",
        },
        {
          step: 3,
          title: "Hygiene Trim & Pickup Alert",
          detail: "Nails are clipped, pads smoothed, and you receive an alert 15 minutes before completion.",
        },
      ],
      whatsappMessage:
        "Hello Paws & Claws, I want to book a 'Basic Bath & Hygiene' slot for my dog in Gurugram. My dog breed is: ",
    },
    {
      id: "dog-full-groom",
      name: "Full Breed Styling & Groom",
      targetPet: "Dog",
      badge: "Most Popular",
      tagline: "Comprehensive breed-specific haircut, styling, and full spa care.",
      shortDescription:
        "Everything in the Basic Bath plus customized scissor styling, sanitary trimming, face shaping, and paw treatment.",
      targetAudience:
        "Essential for long-haired and curly breeds needing breed standard cuts, summer trims, or coat reshaping.",
      tiers: [
        {
          category: "Small Breeds (Indie / Shih Tzu / Pug / Lhasa)",
          description: "Up to 10 kg weight category",
          pricePlaceholder: "[Confirm Price: e.g. ₹1,599]",
        },
        {
          category: "Medium Breeds (Beagle / Cocker Spaniel / French Bulldog)",
          description: "11 kg to 22 kg weight category",
          pricePlaceholder: "[Confirm Price: e.g. ₹2,199]",
        },
        {
          category: "Large Breeds (Golden Retriever / Labrador / GSD / Husky)",
          description: "23 kg and above weight category",
          pricePlaceholder: "[Confirm Price: e.g. ₹2,799]",
        },
      ],
      whatsIncluded: [
        "Everything included in the Basic Bath package",
        "Breed-standard scissor styling or customized summer coat cut",
        "Facial contouring and eye-corner clearing",
        "Sanitary and belly hygiene contouring",
        "Paw pad smoothing with organic beeswax balm",
        "Teeth refreshing spray and breath freshener",
        "Coat gloss finishing spray (pet-safe)",
      ],
      howItWorks: [
        {
          step: 1,
          title: "Styling Consultation",
          detail: "We discuss your preferred coat length, breed style, and sanitary needs at drop-off.",
        },
        {
          step: 2,
          title: "Deep Bath & Coat Prep",
          detail: "A warm hydro-bath and de-shedding blowout prepare the coat for clean scissor work.",
        },
        {
          step: 3,
          title: "Precision Scissor Styling",
          detail: "Hand-scissored haircut, face shaping, paw balm, and a ready-for-home WhatsApp notification.",
        },
      ],
      whatsappMessage:
        "Hello Paws & Claws, I want to book a 'Full Breed Styling & Groom' for my dog in Gurugram. My dog breed is: ",
    },
    {
      id: "dog-tick-spa",
      name: "Medicated Tick & Flea Spa",
      targetPet: "Dog",
      tagline: "Clinical anti-parasite wash, skin soothing soak, and coat de-matting.",
      shortDescription:
        "Targeted anti-tick bath with medicated, vet-approved wash, complete parasite removal, and skin healing therapy.",
      targetAudience:
        "Designed for dogs dealing with tick/flea infestations, monsoon skin irritations, or excessive scratching.",
      tiers: [
        {
          category: "Small Breeds (Indie / Shih Tzu / Pug / Lhasa)",
          description: "Up to 10 kg weight category",
          pricePlaceholder: "[Confirm Price: e.g. ₹1,899]",
        },
        {
          category: "Medium Breeds (Beagle / Cocker Spaniel / French Bulldog)",
          description: "11 kg to 22 kg weight category",
          pricePlaceholder: "[Confirm Price: e.g. ₹2,499]",
        },
        {
          category: "Large Breeds (Golden Retriever / Labrador / GSD / Husky)",
          description: "23 kg and above weight category",
          pricePlaceholder: "[Confirm Price: e.g. ₹3,099]",
        },
      ],
      whatsIncluded: [
        "Full coat inspection for active ticks and fleas",
        "Manual tick removal from sensitive ear folds and paw webbing",
        "Medicated anti-parasitic hydro-bath (veterinary-grade)",
        "Soothing herbal aloe vera coat treatment for itch relief",
        "Ear sanitization with tick-repellent drops",
        "Nail trim, edge filing, and antiseptic paw soak",
        "Protective natural anti-tick spray applied before pickup",
      ],
      howItWorks: [
        {
          step: 1,
          title: "Parasite & Skin Mapping",
          detail: "We examine the coat density and tick clusters to choose the appropriate medicated formulation.",
        },
        {
          step: 2,
          title: "Therapeutic Medicated Soak",
          detail: "A 15-minute gentle soak eliminates active parasites while calming inflamed dermal layers.",
        },
        {
          step: 3,
          title: "Manual Tick Check & Shield",
          detail: "Final manual comb-through, nail clipping, and application of a non-toxic tick barrier.",
        },
      ],
      whatsappMessage:
        "Hello Paws & Claws, I want to book a 'Medicated Tick & Flea Spa' for my dog in Gurugram. My dog breed is: ",
    },
  ] as ServicePackage[],

  catPackages: [
    {
      id: "cat-fresh-bath",
      name: "Feline Comfort Bath & Brush",
      targetPet: "Cat",
      tagline: "Quiet, calm water or waterless bath tailored for sensitive felines.",
      shortDescription:
        "Gentle feline bath using water or waterless foaming wash in our quiet feline suite with towel drying only.",
      targetAudience:
        "Short-haired cats, indoor felines needing dandruff and shedding control, and first-time grooming kittens.",
      tiers: [
        {
          category: "Domestic Short Hair / Indie Cats",
          description: "Standard feline grooming session",
          pricePlaceholder: "[Confirm Price: e.g. ₹1,499]",
        },
        {
          category: "Purebred / Exotic Short Hair",
          description: "Specialized sensitive skin care",
          pricePlaceholder: "[Confirm Price: e.g. ₹1,699]",
        },
      ],
      whatsIncluded: [
        "Quiet room assessment with no barking dogs",
        "Choice of gentle warm water bath or organic dry foam bath",
        "Hypoallergenic, tear-free cat shampoo",
        "Gentle towel drying and low-noise air fluffing (no loud blowers)",
        "Feline nail tip clipping",
        "Ear wipe and corner eye cleansing",
        "De-shedding comb-out to prevent hairballs",
      ],
      howItWorks: [
        {
          step: 1,
          title: "Feline Acclimatization",
          detail: "Your cat spends 10 quiet minutes adjusting to the scent and environment of our private feline suite.",
        },
        {
          step: 2,
          title: "Calm Cleanse & Brush",
          detail: "Gentle sponge or warm water wash with organic feline cleanser and soft-finger massage.",
        },
        {
          step: 3,
          title: "Nail Clip & Rest",
          detail: "Careful nail trimming and quiet towel-wrap rest until you arrive for pickup.",
        },
      ],
      whatsappMessage:
        "Hello Paws & Claws, I want to book a 'Feline Comfort Bath & Brush' for my cat in Gurugram. Cat breed/details: ",
    },
    {
      id: "cat-full-groom",
      name: "Long-Coat De-Matting & Full Groom",
      targetPet: "Cat",
      badge: "Recommended for Persians",
      tagline: "Dedicated undercoat de-matting, sanitary trimming, and coat knot relief.",
      shortDescription:
        "Intensive de-shedding, sanitary trimming, paw pad shaving, and gentle knot release for long-haired cats.",
      targetAudience:
        "Persian, Maine Coon, and Himalayan cats prone to hairballs, undercoat mats, and sanitary soilage.",
      tiers: [
        {
          category: "Persian / Longhair Cats (Standard Coat)",
          description: "Light knotting and maintenance de-shedding",
          pricePlaceholder: "[Confirm Price: e.g. ₹2,199]",
        },
        {
          category: "Dense / Heavily Matted Coat Care",
          description: "Requires patient manual comb release without pulling",
          pricePlaceholder: "[Confirm Price: e.g. ₹2,699]",
        },
      ],
      whatsIncluded: [
        "All steps in the Feline Comfort Bath",
        "Gentle undercoat de-matting and detangle spray",
        "Belly and rear sanitary hygiene shave",
        "Paw pad hair clearing to prevent slipping",
        "Facial fold wipe and tear-stain cleansing",
        "Nail clipping and tip smoothing",
      ],
      howItWorks: [
        {
          step: 1,
          title: "Coat Tension Inspection",
          detail: "We locate any skin mats and explain the gentlest detangling approach before beginning.",
        },
        {
          step: 2,
          title: "De-Matting & Sanitary Shave",
          detail: "Quiet precision clippers clear sanitary zones while specialized rakes lift trapped undercoat.",
        },
        {
          step: 3,
          title: "Final Soft Brush & Rest",
          detail: "Hypoallergenic coat leave-in conditioner applied and cat returned to carrier ready for home.",
        },
      ],
      whatsappMessage:
        "Hello Paws & Claws, I want to book a 'Long-Coat De-Matting & Full Groom' for my cat in Gurugram. Cat breed/details: ",
    },
    {
      id: "cat-lion-cut",
      name: "Feline Lion Cut / Summer Trim",
      targetPet: "Cat",
      tagline: "Complete coat shave for severe mats or summer heat comfort.",
      shortDescription:
        "Full body shave leaving a charming mane, paw boots, and tail plume, performed with cool-blade clippers.",
      targetAudience:
        "Cats with stubborn, unbrushable mats, chronic hairballs, or intense summer heat distress.",
      tiers: [
        {
          category: "Full Lion Cut (Mane & Boots Preserved)",
          description: "Quiet clippers, patient 1-on-1 pacing",
          pricePlaceholder: "[Confirm Price: e.g. ₹2,699]",
        },
      ],
      whatsIncluded: [
        "Patient pacing with pauses to ensure cat remains calm",
        "Full body coat clip with cool-running ceramic blades",
        "Mane shaping, tail plume, and paw boot styling",
        "Gentle warm damp sponge rinse with soothing aloe",
        "Nail clip and ear cleaning",
        "Post-groom calming treat and rest",
      ],
      howItWorks: [
        {
          step: 1,
          title: "Comfort & Mood Check",
          detail: "We ensure the cat is relaxed. We will never sedate or restrain aggressively.",
        },
        {
          step: 2,
          title: "Precision Quiet Clip",
          detail: "Body coat clipped cleanly with cool ceramic blades, protecting sensitive feline skin.",
        },
        {
          step: 3,
          title: "Soothe & Pickup",
          detail: "Skin wiped with organic aloe, ears cleaned, and WhatsApp notification sent to owner.",
        },
      ],
      whatsappMessage:
        "Hello Paws & Claws, I want to book a 'Feline Lion Cut / Summer Trim' for my cat in Gurugram. Cat breed/details: ",
    },
  ] as ServicePackage[],

  faqs: [
    {
      id: "faq-vaccination",
      category: "Safety & Health",
      question: "Are vaccination records mandatory before bringing my pet?",
      answer:
        "Yes. For the safety of your pet, other animals, and our team, up-to-date Anti-Rabies and DHPPi (for dogs) or Tricat (for cats) vaccinations are required. Please share a photo of your pet's vaccination card on WhatsApp when booking.",
      isConfirmed: true,
    },
    {
      id: "faq-pickup-drop",
      category: "General",
      question: "Do you offer pet pickup and drop-off in Gurugram?",
      answer:
        "[Confirm with studio: Pet taxi pickup and drop-off is currently available on advance request for DLF, Golf Course Road, and Sectors 42 to 57; or confirm studio drop-off only].",
      isConfirmed: false,
      confirmationNote: "Studio owner to confirm exact pickup service radius and charges if active.",
    },
    {
      id: "faq-duration",
      category: "General",
      question: "How long does a typical grooming session take?",
      answer:
        "A Basic Bath typically takes 60 to 75 minutes. A Full Groom with scissor styling or de-matting takes between 90 and 120 minutes depending on your pet's coat condition, breed size, and temperament.",
      isConfirmed: true,
    },
    {
      id: "faq-parent-presence",
      category: "General",
      question: "Can I stay with my dog or cat while they are being groomed?",
      answer:
        "You are welcome to view the grooming through our clear studio observation window from the waiting reception. To keep pets calm and prevent excited jumping during precision scissor work, parents remain outside the active bathing room.",
      isConfirmed: true,
    },
    {
      id: "faq-water-scared-cats",
      category: "Cats",
      question: "How do you handle cats that are scared of water?",
      answer:
        "We offer specialized waterless dry-foam cleansers and gentle damp-sponge wipes in our quiet cat suite. We never force a panicked cat into deep water and always prioritize gentle desensitization.",
      isConfirmed: true,
    },
    {
      id: "faq-ticks-treatment",
      category: "Dogs",
      question: "What tick treatment do you use and is it safe for sensitive skin?",
      answer:
        "We use veterinary-approved, mild botanical anti-parasitic washes enriched with neem, tea tree, and aloe vera. It eliminates live ticks on contact without drying the coat or stripping natural oils.",
      isConfirmed: true,
    },
  ] as FaqItem[],

  galleryPlaceholders: [
    {
      id: "photo-dog-1",
      category: "Dogs",
      title: "Golden Retriever Full Groom",
      description: "Post-grooming coat blowout, tidy paws, and glossy feathering.",
      recommendedSize: "1200 x 900 px",
      aspectRatio: "4:3",
      altText: "Golden Retriever after a full breed grooming session in Gurugram salon",
      filename: "golden-retriever-full-groom.jpg",
      imageUrl: "/images/studio-hero.jpg",
    },
    {
      id: "photo-dog-2",
      category: "Dogs",
      title: "Shih Tzu Teddy Bear Haircut",
      description: "Neat rounded facial trim, ear clearing, and soft body contouring.",
      recommendedSize: "1200 x 900 px",
      aspectRatio: "4:3",
      altText: "Shih Tzu with a clean teddy bear haircut at Paws & Claws Gurugram",
      filename: "shih-tzu-teddy-cut.jpg",
      imageUrl: "/images/shih-tzu-cut.jpg",
    },
    {
      id: "photo-dog-3",
      category: "Dogs",
      title: "Indie Dog Gentle Bath & Cleansing",
      description: "Fresh, shiny short coat after a soothing hydro-bath and nail trim.",
      recommendedSize: "1200 x 900 px",
      aspectRatio: "4:3",
      altText: "Clean indie dog enjoying fresh coat after gentle bath in Gurugram",
      filename: "indie-dog-bath.jpg",
      imageUrl: "/images/indie-dog-bath.jpg",
    },
    {
      id: "photo-cat-1",
      category: "Cats",
      title: "Persian Cat De-Shedding & Groom",
      description: "Detangled, silky coat with gentle face wipe and combed feathering.",
      recommendedSize: "1200 x 900 px",
      aspectRatio: "4:3",
      altText: "Persian cat groomed in a quiet feline suite at Paws & Claws Gurugram",
      filename: "persian-cat-grooming.jpg",
      imageUrl: "/images/cat-grooming-hero.jpg",
    },
    {
      id: "photo-cat-2",
      category: "Cats",
      title: "Domestic Cat Towel Wrap & Rest",
      description: "Calm feline resting comfortably in warm soft towel after gentle wash.",
      recommendedSize: "1200 x 900 px",
      aspectRatio: "4:3",
      altText: "Domestic short hair cat relaxing after quiet grooming in Gurugram",
      filename: "cat-dry-bath-nail-trim.jpg",
      imageUrl: "/images/cat-calm-dry-bath.jpg",
    },
    {
      id: "photo-cat-3",
      category: "Cats",
      title: "Persian Calm Grooming Finish",
      description: "Quiet room gentle grooming session without sensory shock or noise.",
      recommendedSize: "1200 x 900 px",
      aspectRatio: "4:3",
      altText: "Persian cat with silky fur resting peacefully after quiet feline groom",
      filename: "cat-lion-cut.jpg",
      imageUrl: "/images/cat-grooming-hero.jpg",
    },
  ] as PhotoPlaceholderItem[],

  reviewPlaceholders: [
    {
      id: "rev-1",
      authorName: "[Client Name Pending]",
      authorLocation: "DLF Phase 5, Gurugram",
      petDetails: "Golden Retriever (Leo)",
      reviewText:
        "[Pending Google Review Sync: Quote from verified Google Business Profile. Highlights 1-on-1 gentle handling, clean grooming studio, and calm behavior of pet after pickup.]",
      date: "Recent Google Review",
      isVerifiedGoogleReview: false,
      confirmationNote: "Connect Google Business Profile API or import actual customer review text.",
    },
    {
      id: "rev-2",
      authorName: "[Client Name Pending]",
      authorLocation: "Golf Course Road, Gurugram",
      petDetails: "Persian Cat (Mochi)",
      reviewText:
        "[Pending Google Review Sync: Quote praising the separate quiet cat room and patient de-matting without loud blow dryers or stressful handling.]",
      date: "Recent Google Review",
      isVerifiedGoogleReview: false,
      confirmationNote: "Awaiting client's first 5 Google reviews from GBP dashboard.",
    },
    {
      id: "rev-3",
      authorName: "[Client Name Pending]",
      authorLocation: "Sector 56, Gurugram",
      petDetails: "Shih Tzu (Coco)",
      reviewText:
        "[Pending Google Review Sync: Quote regarding precise scissor haircut, clean ears, and easy appointment booking on WhatsApp.]",
      date: "Recent Google Review",
      isVerifiedGoogleReview: false,
      confirmationNote: "Awaiting client review confirmation.",
    },
  ] as ReviewItem[],

  meta: {
    home: {
      title: "Paws & Claws Pet Grooming Gurugram | Dog & Cat Grooming Studio",
      description:
        "1-on-1 pet grooming studio for dogs and cats in Gurugram. Warm hydro-baths, breed haircuts, gentle nail trims, and tick treatments in a stress-free environment.",
    },
    dogGrooming: {
      title: "Dog Grooming in Gurugram | Baths, Haircuts & Spa | Paws & Claws",
      description:
        "Gentle dog grooming services in Gurugram. Basic baths, breed scissor styling, tick treatments, and hygiene care with individual 1-on-1 attention.",
    },
    catGrooming: {
      title: "Cat Grooming in Gurugram | Quiet Feline Suite | Paws & Claws",
      description:
        "Stress-free cat grooming in Gurugram. Dedicated quiet cat room, waterless and warm baths, Persian de-matting, nail trimming, and lion cuts.",
    },
    gallery: {
      title: "Pet Grooming Gallery | Dogs & Cats in Gurugram | Paws & Claws",
      description:
        "Explore real grooming results for dogs and cats at Paws & Claws Gurugram. View clean coats, breed haircuts, and hygiene maintenance photos.",
    },
    reviews: {
      title: "Client Reviews | Paws & Claws Pet Grooming Gurugram",
      description:
        "Read verified Google reviews from Gurugram pet parents. High ratings for gentle care, hygiene, and stress-free grooming for dogs and cats.",
    },
    contact: {
      title: "Contact & Appointments | Paws & Claws Pet Grooming Gurugram",
      description:
        "Book a grooming slot on WhatsApp or call our studio in Gurugram. Address, opening hours, directions, and direct appointment inquiry.",
    },
  },
};
