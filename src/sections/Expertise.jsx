const expertiseData = [
  {
    category: "Backend Development",
    skills: [
        "PHP",
        "Laravel",
        "CodeIgniter",
        "RESTful API Development",
        "Statamic CMS",
        "Inertia.js",
    ],
  },
  {
    category: "Frontend Development",
    skills: [
        "React.js",
        "TypeScript",
        "JavaScript",
        "jQuery",
        "AJAX",
        "Bootstrap",
        "Tailwind CSS",
    ],
  },
  {
    category: "Database",
    skills: [
        "MySQL",
        "Database Optimization",
        "Query Performance Tuning",
    ],
  },
  {
    category: "AI-Assisted Development Tools",
    skills: [
        "Cursor",
        "ChatGPT",
        "T3 Chat",
        "Gemini AI",
        "GitHub Copilot",
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
        "Git",
        "GitHub",
        "Bitbucket",
        "SourceTree",
        "Jira",
        "ClickUp",
        "DigitalOcean"
    ],
  },
  {
    category: "Domain Experience",
    skills: [
        "ERP Solutions",
        "E-commerce Platforms",
        "SaaS Applications",
        "Payment Gateway Systems",
        "AI-based Platforms",
        "Event Management Systems",
        "Portfolio & Business Websites"
    ],
  },
];

export const Expertise = () => {
  return (
    <section
      id="expertise"
      className="py-32 bg-background relative overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/2
        w-[900px] h-[900px]
        bg-primary/5 rounded-full blur-3xl
        -translate-x-1/2 -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mb-8">
          <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
            Expertise
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight text-secondary-foreground">
            Engineering modern solutions,
            <br />
            <span className="font-serif italic font-normal text-white">
              powered by the right stack.
            </span>
          </h2>

          <p className="text-muted-foreground text-lg mt-8 max-w-3xl leading-relaxed">
            A strong combination of backend, frontend,
            cloud, and AI to build scalable,
            reliable, and high-performance applications.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="space-y-8">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              className="pl-8 p-2"
            >
              <div className="grid md:grid-cols-[280px_1fr] gap-8 items-start">
                {/* Left Category */}
                <div>
                  <h3 className="text-primary font-semibold">
                    {item.category}
                  </h3>
                </div>

                {/* Right Skills */}
                <div className="flex flex-wrap gap-x-4 gap-y-4  text-white/80 leading-relaxed">
                  {item.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-4"
                    >
                      <span>{skill}</span>

                      {skillIndex !== item.skills.length - 1 && (
                        <span className="text-white/20">/</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};