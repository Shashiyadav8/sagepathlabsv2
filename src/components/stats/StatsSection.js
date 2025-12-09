import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./StatsSection.css";

// Defining stats with icons (using existing material-icons logic or emojis/images if suited, 
// keeping it consistent with other sections which use material-icons-outlined)
const stats = [
  { value: 2000, suffix: "+", label: "Collection Sites", icon: "location_on" },
  { value: 415, suffix: "+", label: "Workforce", icon: "groups" },
  { value: 20, suffix: "+", label: "Processing Labs", icon: "biotech" },
  { value: 8, suffix: "K+", label: "Sq.ft Lab Space", icon: "square_foot" },
  { value: 20, suffix: "+", label: "Technologies Adopted", icon: "psychology" }, // 'psychology' implies brain/tech/smart
  { value: 25, suffix: "K+", label: "Daily Samples", icon: "science" },
  { value: 75, suffix: "K+", label: "Daily Tests", icon: "fact_check" },
  { value: 2, suffix: "M+", label: "Samples Yearly", icon: "bar_chart" },
];

const StatsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="stats-section-new py-5">
      <div className="container" ref={ref}>
        <div className="text-center mb-5">
          <span className="stats-subtitle">Our Impact</span>
          <h2 className="stats-heading">Expanding Reach & <span className="highlight">Precision</span></h2>
          <p className="stats-desc">Scaling our operations to serve you better, every single day.</p>
        </div>

        <div className="row g-4 justify-content-center">
          {stats.map((stat, i) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
              <div className="stats-card-modern">
                <div className="stats-icon-wrapper">
                  <span className="material-icons-outlined">{stat.icon}</span>
                </div>
                <div className="stats-content">
                  <div className="stats-value">
                    <CountUp
                      start={inView ? 0 : null}
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2.5}
                      delay={i * 0.1}
                      separator=","
                    />
                  </div>
                  <div className="stats-label">{stat.label}</div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
