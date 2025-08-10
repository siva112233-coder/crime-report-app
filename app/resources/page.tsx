// app/resources/page.tsx
import Link from "next/link";

export default function Resources() {
  const resources = [
    {
      title: "Emergency Helpline",
      description: "Call 112 for any kind of emergency, available 24/7.",
      link: "tel:112",
    },
    {
      title: "Women’s Helpline",
      description: "Dial 1091 for women-specific safety assistance.",
      link: "tel:1091",
    },
    {
      title: "Cyber Crime Reporting",
      description: "Report online frauds, hacking, and cyberbullying incidents.",
      link: "https://cybercrime.gov.in",
    },
    {
      title: "Local Police Contact",
      description: "Find and call your nearest police station for help.",
      link: "https://indianhelpline.com",
    },
  ];

  return (
    <main className="relative min-h-screen bg-black text-white px-6 pt-28 pb-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-sky-400 mb-8">Resources</h1>
        <p className="text-gray-300 mb-12">
          Below are important resources to help you stay safe and take action when
          needed.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, idx) => (
            <div
              key={idx}
              className="group bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/20 transition-all"
            >
              <h2 className="text-xl font-semibold text-white group-hover:text-sky-400">
                {resource.title}
              </h2>
              <p className="text-gray-400 mt-2">{resource.description}</p>
              <Link
                href={resource.link}
                target={resource.link.startsWith("http") ? "_blank" : "_self"}
                className="inline-block mt-4 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-white text-sm font-medium transition-colors"
              >
                Access
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-medium transition-all"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
