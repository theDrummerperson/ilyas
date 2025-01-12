interface ProjectGalleryItem {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  credit?: string;
}

interface ProjectCredit {
  name: string;
  url: string;
  role: string;
}

export interface Project {
  title: string;
  duration: string;
  location: string;
  headerImage: string;
  description: string;
  overview: string;
  objectives: string[];
  gallery: ProjectGalleryItem[];
  impact?: string;
  nextSteps?: string;
  keyHighlights?: Array<{
    title: string;
    description: string;
  }>;
  credits?: {
    photography?: ProjectCredit;
  };
}

export interface ProjectsDataType {
  [key: string]: Project;
}

export const projectsData: ProjectsDataType = {
  "feed-residency": {
    title: "Residency @ FEED Media Arts",
    duration: "2024",
    location: "FEED Media Arts, Erie, PA",
    headerImage: "/feed-header.jpg",
    description:
      "Artist residency program exploring digital media and contemporary art practices.",
    overview: `
          During my residency as the gift-shop artist-in-residence at FEED Media Arts, I explored the intersection of digital media, cultural storytelling, and community engagement. This unique platform allowed me to develop and showcase work that bridges traditional artistic practices with contemporary digital technologies.

    Believe it or not, the website you are engaging with right now is a handcrafted piece of African art, carved with code on a computer terminal and displayed on your screen. Yes, your computer screen is a canvas. This website is a product of my art installation, "TV Repairman," which ran from October 22, 2024, to November 22, 2024.

    For 30 days, I reported to the FEED Media gift shop, where I created a piece of handcrafted digital art in real-time. I relied on books, advice, and AI chatbots (Gemini, Mistral, ChatGPT, Claude) rather than formal computer science knowledge. Community members interacted with me, helping shape the language to describe my process in real-time.

    The purpose of this art project was to highlight a paradox: now more than ever, information on how to make our own tools (e.g., a website) is readily available and accessible for free or at a low cost. However, we often pay companies significant amounts to do work we could do ourselves. This project underscores the constraints placed on our time, attention, energy, and curiosity in late-stage capitalism.

    I did not complete the website in 30 days. In fact, I didn't get far. But that was ultimately the point. This website was completed one month after the delivery date, as I worked on it around the clock as a sort of day and night job.
    `.trim(),
    objectives: [
      "Develop innovative digital media projects",
      "Engage with local communities through art",
      "Explore cultural narratives in digital spaces",
      "Create immersive multimedia experiences",
    ],
    gallery: [
      {
        src: "/feed-1.jpg",
        alt: "Community engagement at FEED Media Arts Center",
        caption:
          "Discussing art and technology with community members.",
        width: 800,
        height: 600,
      },

      {
        src: '/feed-2.jpg',
        alt: '"TV Repairman" @ FEED Media Arts Center',
        caption: 'Here I am explaining to community members how a browser can be a canvas for art.',
        width: 800,
        height: 600,
      },


      {
        src: '/feed-3.jpg',
        alt: '"TV Repairman" @ FEED Media Arts Center',
        caption:
          "A student from Edinboro University enjoys the curated installation of Anisha Baid's work presented in conversation with 'TV Repairman'.",
        width: 800,
        height: 600,
      },


      {
        src: '/feed-5.jpg',
        alt: '"TV Repairman" @ FEED Media Arts Center',
        caption:
          'New friend and computer programmer Aashish teaches me about how to use a terminal properly.',
        width: 800,
        height: 600,
      },

      {
        src: '/feed-6.jpg',
        alt: '"TV Repairman" @ FEED Media Arts Center',
        caption: 'New friend and media specialist Brandon Lawrence and I talk Capitalism and art.',
        width: 800,
        height: 600,
      },



      {
        src: "/feed-4.jpg",
        alt: "Learning about Tailwind CSS",
        caption:
          "Community member teaching about Tailwind CSS implementation.",
        width: 800,
        height: 600,
      },
    ],
  },

  "kigoma-erie": {
    title: "KIGOMA @ Erie African Arts",
    duration: "2024",
    location: "Erie African Arts",
    headerImage: "/kig-header2.JPG",
    description:
      "Cultural exhibition exploring African heritage and contemporary art.",
    overview: `
      KIGOMA highlighted Erie's multicultural presence through African music, 
      food, dance, painting, fashion, and community engagement during a New Year's event.
    `.trim(),
    objectives: [
      "Showcase contemporary African art",
      "Connect traditional and modern artistic expressions",
      "Create dialogue around cultural heritage",
      "Engage with the Erie community",
    ],
    gallery: [
      {
        src: "/kig-1.jpg",
        alt: "KIGOMA event highlights",
        caption: "Multicultural art night at Erie African Arts.",
        width: 800,
        height: 600,
        credit: "© TheBrand Media Productions",
      },

      {
        src: "/kig-2.jpg",
        alt: "KIGOMA event highlights",
        caption: "Multicultural art night at Erie African Arts.",
        width: 800,
        height: 600,
        credit: "© TheBrand Media Productions",
      },


      {
        src: "/kig-4.jpg",
        alt: "KIGOMA event highlights",
        caption: "Multicultural art night at Erie African Arts.",
        width: 800,
        height: 600,
        credit: "© TheBrand Media Productions",
      },



      {
        src: "/kig-7.jpg",
        alt: "KIGOMA event highlights",
        caption: "Multicultural art night at Erie African Arts.",
        width: 800,
        height: 600,
        credit: "© TheBrand Media Productions",
      },


      {
        src: "/kig-8.jpg",
        alt: "KIGOMA event highlights",
        caption: "Multicultural art night at Erie African Arts.",
        width: 800,
        height: 600,
        credit: "© TheBrand Media Productions",
      },



      {
        src: "/kig-9.jpg",
        alt: "KIGOMA event highlights",
        caption: "Multicultural art night at Erie African Arts.",
        width: 800,
        height: 600,
        credit: "© TheBrand Media Productions",
      },


      {
        src: "/kig-10.jpg",
        alt: "KIGOMA event highlights",
        caption: "Multicultural art night at Erie African Arts.",
        width: 800,
        height: 600,
        credit: "© TheBrand Media Productions",
      },


      {
        src: "/kig-11.jpg",
        alt: "KIGOMA event highlights",
        caption: "Multicultural art night at Erie African Arts.",
        width: 800,
        height: 600,
        credit: "© TheBrand Media Productions",
      },


      {
        src: "/kig-12.jpg",
        alt: "KIGOMA event highlights",
        caption: "Multicultural art night at Erie African Arts.",
        width: 800,
        height: 600,
        credit: "© TheBrand Media Productions",
      },



      {
        src: "/kig-13.jpg",
        alt: "KIGOMA event highlights",
        caption: "Multicultural art night at Erie African Arts.",
        width: 800,
        height: 600,
        credit: "© TheBrand Media Productions",
      },


      {
        src: "/kig-12.jpg",
        alt: "KIGOMA event highlights",
        caption: "Multicultural art night at Erie African Arts.",
        width: 800,
        height: 600,
        credit: "© TheBrand Media Productions",
      },


      {
        src: "/kig-14.jpg",
        alt: "KIGOMA event highlights",
        caption: "Multicultural art night at Erie African Arts.",
        width: 800,
        height: 600,
        credit: "© TheBrand Media Productions",
      },
      
      
      {
        src: "/kig-15.jpg",
        alt: "KIGOMA event highlights",
        caption: "Multicultural art night at Erie African Arts.",
        width: 800,
        height: 600,
        credit: "© TheBrand Media Productions",
      },


      {
        src: "/kig-16.jpg",
        alt: "KIGOMA event highlights",
        caption: "Multicultural art night at Erie African Arts.",
        width: 800,
        height: 600,
        credit: "© TheBrand Media Productions",
      },



      {
        src: "/kig-17.jpg",
        alt: "KIGOMA event highlights",
        caption: "Multicultural art night at Erie African Arts.",
        width: 800,
        height: 600,
        credit: "© TheBrand Media Productions",
      },


      {
        src: "/kig-18.jpg",
        alt: "KIGOMA event highlights",
        caption: "Multicultural art night at Erie African Arts.",
        width: 800,
        height: 600,
        credit: "© TheBrand Media Productions",
      },




      {
        src: "/kig-19.jpg",
        alt: "KIGOMA event highlights",
        caption: "Multicultural art night at Erie African Arts.",
        width: 800,
        height: 600,
        credit: "© TheBrand Media Productions",
      },



      {
        src: "/kig-20.jpg",
        alt: "KIGOMA event highlights",
        caption: "Multicultural art night at Erie African Arts.",
        width: 800,
        height: 600,
        credit: "© TheBrand Media Productions",
      },










    ],
    credits: {
      photography: {
        name: "TheBrand Media Productions",
        url: "https://thebrandmedia.passgallery.com",
        role: "Event Photography",
      },
    },
  },

  "ghost-in-machine": {
    title: "Ghost In the Machine: Art and Urban Renewal in Northwest PA",
    duration: "2025 (forthcoming)",
    location: "Northwest PA",
    headerImage: "/logo.jpg",
    description:
      "Documenting the role of arts and narratives in Erie's post-industrial renewal.",
    overview: `
      Exploring art's role in community development and the revitalization of 
      post-industrial spaces in Northwest Pennsylvania.
    `.trim(),
    objectives: [
      "Document urban renewal through artistic lens",
      "Analyze the impact of arts on community development",
      "Capture stories of local artists and residents",
      "Examine post-industrial transformation",
    ],
    gallery: [
      {
        src: "/logo.jpg",
        alt: "Urban renewal through art documentation",
        caption: "Artistic intervention and transformation.",
        width: 800,
        height: 600,
      },
    ],
  },
};
