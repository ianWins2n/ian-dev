export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ian Winston Monsanto",
    "jobTitle": "Software Developer",
    "description": "Software developer specializing in web and mobile applications",
    "url": "https://ian-dev.vercel.app/",
    "sameAs": [
      "https://github.com/ianWins2n",
      "https://www.linkedin.com/in/ian-winston-monsanto-17681b225"
    ],
    "knowsAbout": [
      "TypeScript",
      "JavaScript",
      "Next.js", 
      "React",
      "React Native",
      "Node.js",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Git",
    ],
    "address": {
      "@type": "Wright-Taft-Borongan Rd, 6710 Calbayog City, Philippines",
      "addressCountry": "Philippines"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 