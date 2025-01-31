interface AboutHeaderProps {
  title: string;
  description: string;
}

const AboutHeader = ({ title, description }: AboutHeaderProps) => {
  return (
    <div className="text-center mb-5">
      <h2 className="section-title mb-4">{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  );
};

export default AboutHeader;
