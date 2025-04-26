// src/data/blogPosts.ts //

type BlogPostType = {
  slug: string;
  title: string;
  date: string;
  image?: string;
  video?: string;
  excerpt: string;
  content: string;
  readingTime?: string;
  author?: {
    name: string;
    avatar: string;
  };
  categories: string[];
  tags: string[];
  relatedPosts?: string[];
};


export const blogPosts: BlogPostType[] = [
  {
    slug: 'exploring-the-mountains',
    title: 'Exploring the Mountains',
    date: 'January 20, 2024',
    image: '/mountains.jpg',
    excerpt: 'A breathtaking adventure through the rocky terrains.',
    content: 'Full content of the blog post here...',
    categories: [],
    tags: []
  },
  {
    slug: 'city-nights',
    title: 'City Nights and Urban Lights',
    date: 'February 2, 2024',
    video: '/city-nights.mp4',
    excerpt: 'A journey through the neon-lit streets of the metropolis.',
    content: 'Full content of the blog post here...',
    categories: [],
    tags: []
  },
];

export default blogPosts;