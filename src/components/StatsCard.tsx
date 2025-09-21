interface StatsCardProps {
  number: string;
  description: string;
}

const StatsCard = ({ number, description }: StatsCardProps) => {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-accent mb-2 font-inter">
        {number}
      </div>
      <div className="text-primary-foreground/80 text-lg">
        {description}
      </div>
    </div>
  );
};

export default StatsCard;