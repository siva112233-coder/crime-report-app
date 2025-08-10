
# 🛡️ SafeReport — Anonymous Incident Reporting Platform

SafeReport is a secure, privacy-first web application for reporting incidents **anonymously**.  
Built with **Next.js 14**, it integrates **Google Gemini AI** for assisting with report writing, supports **location mapping** via OpenStreetMap, and implements strong security measures to protect reporters’ identities.

---

## 🚀 Live Demo
🔗 **[crime-report-app-qo6b.onrender.com](https://crime-report-app-qo6b.onrender.com)**

---

## 📚 What You'll Learn from This Project
- Next.js 14 fundamentals & best practices
- Full-stack development in a single framework
- AI integration using **Google Gemini API**
- TypeScript in Next.js projects
- Styling with **Tailwind CSS**
- Authentication with **NextAuth**
- Database modeling with **Prisma ORM**
- Location-based features using OpenStreetMap API
- Security techniques for handling sensitive, anonymous data

---

## ✨ Features
- **Anonymous Reporting** — no personal details required.
- **AI-assisted Descriptions** — Gemini suggests clear incident narratives.
- **Location Support** — pinpoint incident location with OpenStreetMap.
- **Secure Admin Access** — admins can view reports via NextAuth authentication.
- **Responsive UI** — mobile-friendly Tailwind CSS design.
- **Database Integration** — powered by Prisma ORM with PostgreSQL.
- **Privacy-First Security** — metadata stripping, minimal logging, optional encryption.

---

## 🛠 Tech Stack
- **Frontend & Backend**: [Next.js 14](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **Database**: Prisma + PostgreSQL
- **AI Integration**: Google Gemini API
- **Mapping**: OpenStreetMap / Nominatim API
- **Deployment**: Render

---

/app
/api → Server API routes
/components → UI components
/styles → Global styles
/lib → Config & helper functions
/prisma → Prisma schema & migrations

yaml
Copy
Edit

---

## ⚡ Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/safe-report.git
cd safe-report
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Configure Environment Variables
Create a .env.local file:

env
Copy
Edit
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DBNAME
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
GEMINI_API_KEY=your_gemini_api_key
4️⃣ Run the Development Server
bash
Copy
Edit
npm run dev
Visit: http://localhost:3000

🔒 Security Notes
All AI calls to Gemini are server-side to avoid exposing API keys.

No IP addresses or identifying metadata are stored for reporters.

Inputs are sanitized before saving to the database.

Admin access is protected with NextAuth.

📌 Roadmap
 File upload for evidence

 Email alerts for admins

 Multi-language support

 Rate limiting & spam prevention

📜 License
MIT License © 2025 Your Name

yaml
Copy
Edit

---

If you want, I can also add a **system architecture diagram** and a **database schema diagram** inside the README so it’s visually appealing and developer-friendly. That 

