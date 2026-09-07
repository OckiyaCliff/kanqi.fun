import About from "../About";
import Hero from "../Hero";
import Features from "../Features";
import Story from "../Story";
import Contact from "../Contact";

const Stats = () => {
  const stats = [
    { number: "2022", label: "Founded" },
    { number: "2024", label: "Formally Registered" },
    { number: "3+", label: "Original Projects" },
    { number: "30+", label: "Creative Network" },
    { number: "2+", label: "Countries Reached" },
    { number: "4+", label: "Years Building" },
  ];

  return (
    <section className="bg-violet-300 py-16 text-black">
      <div className="container mx-auto px-5 md:px-10">
        <p className="font-general text-[10px] uppercase tracking-widest text-center mb-10">
          KANQI BY THE NUMBERS
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="special-font font-zentry text-4xl font-black mb-2">{stat.number}</h3>
              <p className="font-general text-xs uppercase opacity-75">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Story />
      <Stats />
      <Contact />
    </>
  );
};

export default HomePage;
