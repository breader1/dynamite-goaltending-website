import TeamGrid from "../../Cards/TeamGrid"
import { Testimonial } from "../../../models/Testimonial";

interface HomeTestimonialsProps {
  testimonials?: Testimonial[];
}

const HomeTestimonials = ({ testimonials = [] }: HomeTestimonialsProps) => {
    return (
      <div className="container my-5">
        <h2 className="text-center mb-4">What Our Clients Say</h2>
        <TeamGrid
          data={testimonials.map((testimonial) => ({
            name: testimonial.name,
            role: testimonial.role,
            image: testimonial.image,
            description: `"${testimonial.message}"`,
          }))}
        />
      </div>
    );
  };

export default HomeTestimonials