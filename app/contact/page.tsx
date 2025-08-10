// app/contact/page.tsx
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-sky-500/20 px-6 pt-32">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-gray-300 mb-12">
          Have questions, feedback, or need assistance? We’re here to help.  
          Fill out the form below and our team will get back to you as soon as possible.
        </p>

        <form className="space-y-6 bg-gray-900/50 p-8 rounded-xl shadow-lg">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-sky-500 focus:ring focus:ring-sky-500/20"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-sky-500 focus:ring focus:ring-sky-500/20"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-2">Your Message</label>
            <textarea
              placeholder="Type your message here..."
              rows={5}
              className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-sky-500 focus:ring focus:ring-sky-500/20"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="group relative inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-sky-500 px-8 text-sm font-medium text-white transition-all hover:bg-sky-400"
          >
            Send Message
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </form>

        {/* Back to Home */}
        <div className="mt-10">
          <Link
            href="/"
            className="text-sky-400 hover:underline text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
