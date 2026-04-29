export const Education = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Academic Background
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            My{" "}
            <span className="font-serif italic font-normal text-white">
              education journey.
            </span>
          </h2>
        </div>

        {/* Education Card */}
        <div className="max-w-3xl mx-auto">
          <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
            
            <div className="flex flex-col">
              {/* Timeline */}
              <div className="text-sm text-muted-foreground font-medium">
                2016 – 2020
              </div>

              {/* Degree */}
              <h3 className="lg:text-2xl sm:text-1xl font-semibold">
                Bachelor of Computer Science and Engineering
              </h3>

              {/* University */}
              <p className="text-muted-foreground">
                Britannia University, Cumilla
              </p>

              {/* CGPA */}
              <div className="mt-2 inline-flex items-center gap-2">
                <span className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary">
                  CGPA: 3.36
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};