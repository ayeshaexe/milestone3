import Link from 'next/link';
export default function Contact() {
  return (
    <>
      <main className="bg-white text-gray-900 p-6 md:p-10">
        <section className="max-w-4xl mx-auto text-start md:text-center">
          {/* Contact Title */}
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6">
            Contact Us
          </h1>

          {/* Contact Description */}
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-6">
            We would love to hear from you! Whether you have a question&rsquo; feedback&rsquo; or collaboration idea&rsquo; feel free to reach out to us. We&apos;re here to help and connect.
          </p>

          {/* Contact Form */}
          <form action="#" method="POST" className="space-y-6">
            <div className="flex flex-col md:flex-row space-y-4 md:space-x-6 md:space-y-0">
              {/* Name */}
              <div className="flex-1">
                <label htmlFor="name" className="block text-lg text-gray-700">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff2525]"
                  required
                />
              </div>

              {/* Email */}
              <div className="flex-1">
                <label htmlFor="email" className="block text-lg text-gray-700">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff2525]"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-lg text-gray-700">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff2525]"
                required
               />

            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 mt-4 bg-[#ff2525] text-white font-semibold rounded-md hover:bg-[#ff7c7c] focus:outline-none focus:ring-2 focus:ring-[#ff7474]"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="mt-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Other Ways to Contact Us
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-4">
              You can also reach us through the following channels:
            </p>
            <ul className="space-y-2 text-lg md:text-xl text-gray-600">
              <li>Email: <Link href="mailto:contact@frontendfusion.com"className=" text-[#ff2525] hover:underline">contact@frontendfusion.com</Link></li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Social Media: 
                <Link href="https://facebook.com"className="ml-2 text-[#ff2525] hover:underline">Facebook</Link> 
                <Link href="https://twitter.com" className="ml-2 text-[#ff2525] hover:underline">Twitter</Link>
                <Link href="https://instagram.com" className="ml-2 text-[#ff2525] hover:underline">Instagram</Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
