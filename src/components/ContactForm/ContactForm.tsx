import React, { useState } from "react";
import Map from "../Map/Map";

interface Props {
  email: string;
}

const Contact = ({ email }: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailtoLink = `mailto:${email}?subject=Goalie Training Request&body=${encodeURIComponent(
      formData.message
    )}%0A%0A%0A${encodeURIComponent(formData.name)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">Schedule Your Training Session</h2>
        <p className="text-center mb-5">
          We're located in Langley, BC. Contact us to schedule your training
          session today!
        </p>

        <p className="text-center mb-4">
          Training sessions are available by request.
          <br />
          Preferred times:
          <strong>
            {" "}
            Monday - Friday (5 PM - 9 PM), Weekends (9 AM - 3 PM)
          </strong>
          .
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto"
          style={{ maxWidth: "500px" }}
        >
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

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              placeholder="Enter your message and preferred training times"
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="text-center mb-5">
            <button type="submit" className="btn btn-primary">
              Schedule Session
            </button>
          </div>
        </form>
        <p className="text-center mb-4">
          After submitting your request, we will follow up via email to confirm
          the exact date and time.
        </p>
      </div>
      <Map />
    </section>
  );
};

export default Contact;
