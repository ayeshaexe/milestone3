'use client'; 
import { useRouter } from 'next/navigation';
interface BlogPreview {
  slug: string;
  title: string;
  content: string;
  image: string;
}
const blogs: BlogPreview[] = [
  {
    slug: 'my-first-blog',
    title: 'Fundamentals of HTML',
    content: 'Welcome to the exciting world of web development! In this beginner guide, you will learn the fundamentals of HTML, the backbone of every web page.',
    image: '/html.jpg',
  },
  {
    slug: 'my-sec-blog',
    title: 'Mastering advanced CSS techniques',
    content: 'CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media',
    image: '/css.jpg',
  },
  {
    slug: 'my-third-blog',
    title: 'JavaScript',
    content: 'JavaScript is the most in-demand programming language for developer jobs and one of the most versatile languages for full-stack development.',
    image: '/js.webp', 
  },
  {
    slug: 'my-fourth-blog',
    title: 'TypeScript',
    content: "TypeScript is taking over the web. In this article I'll give you a high-level overview of the benefits of TypeScript",
    image: '/tss.jpeg',
  },
  {
    slug: 'my-fifth-blog',
    title: 'React',
    content: 'React apps are made out of components',
    image: '/react.jpg',
  },{
    slug: 'my-sixth-blog',
    title: 'Next.JS',
    content: 'Next.js is a React framework for building full-stack web applications.',
    image: '/next.webp',
  },{
    slug: 'my-seven-blog',
    title: 'Tailwind',
    content: 'JavaScript is the most in-demand programming language for developer jobs and one of the most versatile languages for full-stack development.',
    image: '/tail.png',
  },
];

export default function Home() {
  const router = useRouter();
  const handleReadMore = (slug: string) => {
    router.push(`/check/${slug}`);
  };
  return (
    <>
    <div className="min-h-screen bg-gray-100 p-6">
    <h1 className='text-[20px] font-bold text-center my-[20px] lg:my-[30px]'>Core Concepts</h1>
      <div className="max-w-4xl mx-auto gap-5">
        {blogs.map((blog) => (
          <div key={blog.slug} className="bg-white shadow-lg  mb-6">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover "
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{blog.title}</h2>
              <p className="text-gray-700 mb-4">{blog.content}</p>
              <button
                onClick={() => handleReadMore(blog.slug)}
                className="text-[#ff2525] hover:underline"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
