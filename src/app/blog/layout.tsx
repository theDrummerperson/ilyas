import { Calendar, Clock } from "lucide-react";

// Define the BlogPostType
type BlogPostType = {
  title: string;
  date: string;
  image?: string;
  content: string;
};

export const EnhancedBlogPost = ({ post }: { post: BlogPostType }) => {
    return (
      <article className="max-w-4xl mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center justify-center gap-4 text-gray-600">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                5 min read
              </span>
            </div>
          </div>
          
          {post.image && (
            <div className="mb-12">
              <img
                src={post.image}
                alt={post.title}
                className="rounded-xl w-full"
              />
            </div>
          )}
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">{post.content}</p>
          </div>
        </div>
      </article>
    );
  };