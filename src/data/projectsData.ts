

// src/data/projectsData.ts

interface ProjectGalleryItem {
  src: string;
  alt: string;
  caption: string;
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
    description: "Artist residency program exploring digital media and contemporary art practices.",
    overview: `During my residency as the gift-shop artist-in-residence at FEED Media Arts, I explored the intersection of digital media, cultural storytelling, and community engagement. This unique platform allowed me to develop and showcase work that bridges traditional artistic practices with contemporary digital technologies.

Believe it or not, the website you are engaging with right now is a handcrafted piece of African art, carved with code on a computer terminal and displayed on your screen. Yes, your computer screen is a canvas. This website is a product of my art installation, "TV Repairman," which ran from October 22, 2024, to November 22, 2024.

For 30 days, I reported to the FEED Media gift shop, where I created a piece of handcrafted digital art in real-time. I relied on books, advice, and AI chatbots (Gemini, Mistral, ChatGPT, Claude) rather than formal computer science knowledge. Community members interacted with me, helping shape the language to describe my process in real-time.

The purpose of this art project was to highlight a paradox: now more than ever, information on how to make our own tools (e.g., a website) is readily available and accessible for free or at a low cost. However, we often pay companies significant amounts to do work we could do ourselves. This project underscores the constraints placed on our time, attention, energy, and curiosity in late-stage capitalism.

I did not complete the website in 30 days. In fact, I didn't get far. But that was ultimately the point. This website was completed one month after the delivery date, as I worked on it around the clock as a sort of day and night job.`,
    objectives: [
      "Develop innovative digital media projects",
      "Engage with local communities through art",
      "Explore cultural narratives in digital spaces",
      "Create immersive multimedia experiences"
    ],
    gallery: [
      {
        src: "/feed-1.jpg",
       alt: "\"TV Repairman\" @ FEED Media Arts Center",
      caption: "Community members engaging with the project through conversation about art and technology"
      },
      {
      src: "/feed-2.jpg",
      alt: "\"TV Repairman\" @ FEED Media Arts Center",
     caption:  "Here I am explaning to community members why a browser can be a canvas for art."
      },
      {
        src: "/feed-3.jpg",
        alt: "\"TV Repairman\" @ FEED Media Arts Center",
        caption: "A student from Edinboro University enjoys the curated installation of Anisha Baid's work presented in conversation with 'TV Repairman'."
      },
      {
        src: "/feed-4.jpg",
        alt: "\"TV Repairman\" @ FEED Media Arts Center",
        caption: "Here a community member teaches me about the benefits of using Tailwind CSS, which I go on to implement in the project."
      },
      {
        src: "/feed-5.jpg",
        alt: "\"TV Repairman\" @ FEED Media Arts Center",
        caption: "New friend and computer programmer Aashish teaches me about how to use a terminal properly."
      },
      {
        src: "/feed-6.jpg",
        alt: "\"TV Repairman\" @ FEED Media Arts Center",
        caption: "New friend and media specialist Brandon Lawrence and I talk Capitalism and art."
      }
    ]
  },
  "kigoma-erie": {
    title: "KIGOMA @ Erie African Arts",
    duration: "2024",
    location: "Erie African Arts",
    headerImage: "/africanarts.png",
    description: "Cultural exhibition and artistic exploration of African heritage and contemporary expression.",
    overview: "KIGOMA is an exploration of African heritage through contemporary artistic expression, hosted at Erie African Arts. This exhibition bridges traditional African cultural elements with modern artistic practices.",
    objectives: [
      "Showcase contemporary African art",
      "Connect traditional and modern artistic expressions",
      "Create dialogue around cultural heritage",
      "Engage with the Erie community"
    ],
    gallery: [
      {
        src: "/africanarts.png",
        alt: "KIGOMA Exhibition",
        caption: "Exhibition at Erie African Arts"
      }
    ]
  },
  "ghost-in-machine": {
    title: "Ghost In the Machine: Art and Urban Renewal in Northwest PA",
    duration: "2025 (forthcoming)",
    location: "Northwest PA",
    headerImage: "/logo.jpg",
    description: "A study documenting the role of the arts, local artists, and narratives of revitalization in Erie post-industrial life.",
    overview: "This upcoming project examines the intersection of art, urban renewal, and community development in Northwest Pennsylvania. Through documentation and analysis, it explores how artistic practices contribute to the revitalization of post-industrial spaces.",
    objectives: [
      "Document urban renewal through artistic lens",
      "Analyze the impact of arts on community development",
      "Capture stories of local artists and residents",
      "Examine post-industrial transformation"
    ],
    gallery: [
      {
        src: "/logo.jpg",
        alt: "Ghost In the Machine Project",
        caption: "Documenting urban renewal and artistic intervention"
      }
    ]
  }
};