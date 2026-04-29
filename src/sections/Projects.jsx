import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "YellowHouse",
    description:
      "A creative event management and exhibition platform for delivering immersive event experiences and business solutions.",
    image: "/projects/yellowhouse.png",
    tags: ["Statamic CMS", "React", "Typescript", "Tailwind CSS"],
    link: "",
    github: "#",
  },
  {
    title: "PayMoney",
    description:
      "A secure online payment gateway system for managing digital transactions",
    image: "/projects/paymoney.png",
    tags: ["Laravel", "jQuery", "MySQL", "Bootstrap"],
    link: "https://demo.paymoney.techvill.net/",
    github: "#",
  },
  {
    title: "Artifism",
    description:
      "A SaaS platform for generating AI-powered content and images for digital marketing.",
    image: "/projects/artifism.png",
    tags: ["Laravel", "jQuery", "MySQL", "React", "Bootstrap"],
    link: "https://demo.artifism.techvill.net/",
    github: "#",
  },
  {
    title: "Martvill",
    description:
      "A multivendor eCommerce platform offering product management, vendor control, and order tracking features.",
    image: "/projects/martvill.png",
    tags: ["Laravel", "jQuery", "MySQL", "React", "Bootstrap"],
    link: "https://demo.martvill.techvill.net/",
    github: "#",
  },
  {
    title: "Hotel Management System",
    description:
      "A complete hotel management solution including reservations, room service, and billing.",
    image: "/projects/hotel.png",
    tags: ["CodeIgniter", "jQuery", "MySQL"],
    link: "https://xainhotellatest.bdtask-demo.com",
    github: "#",
  },
  {
    title: "Restaurant Management System",
    description:
      "A web-based POS and restaurant management platform for managing orders, tables, and menus.",
    image: "/projects/bhojon.png",
    tags: ["CodeIgniter", "jQuery", "MySQL"],
    link: "https://bhojonlatest.bdtask-demo.com/",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, ranging from scalable web applications 
            to practical software solutions designed to solve real-world business challenges.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  {project.link != "" &&
                    <a
                    href={project.link}
                    target="_blank"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  }
                  {/* <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a> */}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {/* <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  /> */}
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        {/* <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div> */}
      </div>
    </section>
  );
};
