"use client"
import Image from 'next/image';
import { notFound } from 'next/navigation';
interface BlogProps {
  params: { slug: string };
}
interface Blog {
  title: string;
  content: string;
  image: string;
}

async function Blog({ params }: BlogProps) {
  const blogData : Record<string, Blog>= {
    'my-first-blog': {
      title: 'HTML',
      content: `HTML (HyperText Markup Language) is the standard language used to create and structure web pages. It provides the basic framework of a website by using elements called tags, which define the content and organization of a page. Each tag serves a specific purpose, such as <h1> for headings, <p> for paragraphs, and <a> for hyperlinks. HTML also uses attributes to give additional information about elements, such as the src attribute in an <img> tag to specify the image source. It forms the foundation of web development, working alongside CSS for styling and JavaScript for interactivity`,
      image: '/html.jpg',
    },
    'my-sec-blog': {
      title: 'CSS',
      content: 'CSS (Cascading Style Sheets) is a stylesheet language used to control the presentation and design of web pages. It works alongside HTML by applying styles to elements, such as colors, fonts, spacing, and layout. CSS uses selectors to target specific elements and apply rules through properties and values, like color: blue; or font-size: 16px;. One of its core concepts is the box model, which defines the spacing around elements using padding, borders, and margins. CSS also enables responsive design through media queries, allowing web pages to adapt to different screen sizes, making it essential for modern web development.',
      image: '/css.jpg',
    },
    'my-third-blog': {
      title: 'JAVASCRIPT',
      content: 'JavaScript (JS) is a versatile, high-level programming language used to create dynamic and interactive web pages. It allows developers to add functionality like form validation, animations, and real-time updates by manipulating the Document Object Model (DOM). JavaScript supports core programming concepts such as variables, loops, functions, and objects, making it powerful for both front-end and back-end development. It plays a crucial role in modern web applications, often working alongside HTML and CSS to deliver seamless user experiences. With the rise of frameworks like React, Angular, and Vue, JavaScript has become essential for building complex, feature-rich web applications.',
      image: '/js.webp',
    },
    'my-fourth-blog': {
      title: 'TYPESCRIPT',
      content: 'TypeScript (TS) is a statically typed superset of JavaScript designed to enhance code quality and maintainability in web development. It introduces static typing, allowing developers to define variable types, which helps catch errors during development rather than runtime. TypeScript builds on JavaScript’s features while adding concepts like interfaces, generics, and type annotations, making code more predictable and easier to debug. It is commonly used in large-scale applications where code reliability and scalability are critical. Since TypeScript compiles down to JavaScript, it seamlessly integrates with existing JavaScript projects and frameworks like Angular, React, and Node.js.',
      image: '/tss.jpeg',
    },
    'my-fifth-blog': {
      title: 'REACT-JS',
      content: 'React is a popular JavaScript library for building user interfaces, developed and maintained by Meta (formerly Facebook). It focuses on creating reusable components, which are independent pieces of code that represent parts of a web page, making development more modular and efficient. React uses a virtual DOM (Document Object Model) to optimize rendering performance by updating only the parts of the UI that have changed, rather than reloading the entire page. Its component-based architecture and state management features, like hooks and context, make it ideal for building dynamic, single-page applications (SPAs). React is widely used in modern web development due to its flexibility, performance, and strong community support.',
      image: '/react.jpg',
    },
    'my-sixth-blog': {
      title: 'NEXT-JS',
      content: 'React also emphasizes a declarative programming style, where developers describe the desired outcome rather than the steps to achieve it. This makes the code more predictable and easier to debug. Components in React can manage their own state using the useState hook or share data between components through props. For more complex state management, tools like useReducer, Context API, or external libraries such as Redux can be used. React’s ecosystem includes tools like React Router for handling navigation and JSX (JavaScript XML), which allows writing HTML-like code directly within JavaScript. Its flexibility and component reusability make it a preferred choice for building scalable and maintainable web applications.',
      image: '/next.webp',
    },
    'my-seven-blog': {
      title: 'TAILWIND CSS',
      content: 'Tailwind CSS is a utility-first CSS framework designed to streamline the process of building modern web interfaces. Instead of writing custom CSS for each project, Tailwind provides a vast collection of pre-defined utility classes that can be directly applied to HTML elements. These classes control various design aspects such as spacing, colors, typography, and responsiveness, allowing developers to create visually appealing layouts without leaving their HTML. Tailwind promotes a consistent design system and minimizes the need for writing custom CSS, making it highly efficient for rapid development. Its flexibility, coupled with features like responsive design support and theming, has made it a popular choice for modern frontend projects.',
      image: '/tail.png',
    },
  };

  const blog = blogData[params.slug];
  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <Image
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
          height={400}
          width={700}
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h1>
        <div className="text-gray-700">{blog.content}</div>
      </div>
    </div>
  );
}

export default Blog;