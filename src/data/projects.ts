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
          a.Ilyas Abukar: TV Repairman
Description:

TV Repairman is an interactive digital installation that explores the complexities of access to information in the digital age. Staged at the FEED Media Arts Center (October 22nd - November 22nd, 2024), this time-based project combines elements of conceptual art, performance art, web development, and artificial intelligence.

The Process:

Artist a. Ilyas Abukar embarked on a journey of learning web design and development, fueled by social media tutorials (YouTube, Instagram), web design books, and guidance from his community. He then utilized large language models (ChatGPT, Claude, Gemini, Mistral) to create a unique piece of digital African art. This handcrafted artwork, coded on a computer terminal and displayed on a browser, transforms your screen into a fully functional personal website (www.ilyasabukar.com).

The Message:

TV Repairman confronts the paradox of abundant information and limited capacity to utilize it. Societal constraints on time, focus, and curiosity restrict our ability to engage with the vast knowledge at our fingertips. The project further delves into the racialized divide between traditional African art forms and new media art, reflecting the racial and socioeconomic segregation within Erie, a city undergoing artistic and economic revitalization.
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


      {
        src: "/kig-21.jpg",
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
