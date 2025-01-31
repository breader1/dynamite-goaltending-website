interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

interface TeamGridProps {
  members: TeamMember[];
}

const TeamGrid = ({ members }: TeamGridProps) => {
  return (
    <div className="row justify-content-center">
      {members.map((member, index) => (
        <div
          key={index}
          className="col-md-4 mb-4"
          style={{
            padding: "1rem",
          }}
        >
          <div
            className="h-100 text-center border border-2 border-black rounded"
            style={{
              padding: "1.5rem",
              backgroundColor: "#f8f9fa",
            }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="rounded-circle mb-3"
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
              }}
            />
            <h5 className="fw-bold">{member.name}</h5>
            <p className="text-muted">{member.role}</p>
            <p>{member.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamGrid;
