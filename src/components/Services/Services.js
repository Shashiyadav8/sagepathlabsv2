import React from "react";
import "./Services.css";

const servicesList = [
  { id: 1, title: "Blood Tests", description: "Accurate blood testing with quick turnaround." },
  { id: 2, title: "Radiology", description: "State-of-the-art imaging solutions." },
  { id: 3, title: "Pathology", description: "Comprehensive pathology services." },
];

const Services = () => {
  return (
    <section id="services" className="services container py-5">
      <h2 className="section-title text-center mb-4">Our Services</h2>
      <div className="row">
        {servicesList.map(service => (
          <div key={service.id} className="col-md-4 mb-4">
            <div className="service-card p-3 border rounded shadow-sm h-100">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
