import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/data/blogPosts';

const BlogPost = ({ params }: { params: { slug: string } }) => {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-6">{post.date}</p>
      {post.image && <Image src={post.image} alt={post.title} width={800} height={400} className="w-full rounded-lg" />}
      {post.video && <video className="w-full mt-4 rounded-lg" controls src={post.video} />}
      <p className="text-lg text-gray-700 mt-6">{post.content}</p>
    </section>
  );
};

export default BlogPost;
