interface TeamCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
}

const TeamCard = ({ name, role, description, image }: TeamCardProps) => {
  return (
    <div className="col-md-4 text-center mb-4">
      <img
        src={image}
        alt={name}
        className="rounded-circle mb-3"
        style={{ width: "120px", height: "120px", objectFit: "cover" }}
      />
      <h5 className="team-name">{name}</h5>
      <p className="team-role">{role}</p>
      <p className="team-description">{description}</p>
    </div>
  );
};

export default TeamCard;
