
export default function About() {
  return (
    <>
      <main className="bg-white text-gray-900 p-6">
        <section className="max-w-4xl mx-auto text-start md:text-center">

          {/* About Text */}
          <h1 className="text-[30px] font-bold text-gray-800 mb-6">
            About Frontend Fusion
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            Welcome to <i><b>Frontend Fusion</b></i>, a blog dedicated to providing valuable resources, tutorials, and insights to frontend developers. Whether you're a beginner looking to get started in the world of web development or a seasoned developer seeking to sharpen your skills, Frontend Fusion has something for you.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            Our mission is to help developers grow in their careers by sharing in-depth content about the latest frontend technologies, industry trends, and best practices. We believe in the power of continuous learning and strive to provide high-quality content that keeps you informed and engaged with the rapidly changing landscape of frontend development.
          </p>
          
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            At <i><b>Frontend Fusion</b></i>, we cover a wide range of topics to empower developers and designers alike:
          </p>
          <ul className="list-disc list-inside text-xl text-gray-600 mb-6">
            <li>Frontend Frameworks (React, Angular, Vue)</li>
            <li>Modern CSS Techniques (Flexbox, Grid, Tailwind CSS)</li>
            <li>JavaScript Best Practices</li>
            <li>Web Performance Optimization</li>
            <li>UX/UI Design for Developers</li>
            <li>Version Control (Git and GitHub)</li>
            <li>Build Tools and Automation (Webpack, Babel, etc.)</li>
          </ul>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            Whether it's exploring new frontend frameworks, building intuitive user interfaces, or optimizing your code for better performance, we are here to support your learning journey and make complex topics more accessible.
          </p>
          
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Join the Frontend Fusion Community
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            The frontend development community is vast and vibrant. At <i><b>Frontend Fusion</b></i>, we invite you to be a part of it. Join us in our mission to share knowledge, inspire creativity, and grow together as developers. Subscribe to our newsletter, follow us on social media, and engage with our content to stay up-to-date with the latest trends and tutorials.
          </p>
          
          <p className="text-xl text-gray-500">
            Whether you're just starting out or you're a seasoned pro, <i><b>Frontend Fusion</b></i> is here to help you stay at the cutting edge of frontend development. Let's build something amazing together!
          </p>
        </section>
      </main>
    </>
  );
}
