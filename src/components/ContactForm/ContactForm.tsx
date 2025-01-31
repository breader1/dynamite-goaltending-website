import React, { useState } from "react";

interface Props{
    email: string;
}

const Contact = ({email}: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create the mailto: URL with the new message field
    const mailtoLink = `mailto:${email}?subject=Goalie Training Request&body=${encodeURIComponent(
        formData.message
      )}%0A%0A%0A${encodeURIComponent(formData.name)}`;

    // Open the mailto link
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">Schedule Your Training Session</h2>
        <p className="text-center mb-5">
          Enter your details below to schedule a goalie training session.
        </p>

        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "500px" }}>
          {/* Name Field */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Message Field */}
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              placeholder="Enter your message"
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Schedule Session
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
