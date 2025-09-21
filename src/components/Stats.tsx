import StatsCard from "./StatsCard";

const Stats = () => {
  const stats = [
    { number: "10M+", description: "Active Users" },
    { number: "500K+", description: "Teams" },
    { number: "99.9%", description: "Uptime" },
    { number: "150+", description: "Countries" }
  ];

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 font-inter">
            Trusted by millions worldwide
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Join the global community of teams achieving extraordinary results
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              number={stat.number}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;