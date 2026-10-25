import { useState } from "react";
import "./styles/Career.css";
import { MdClose, MdZoomIn } from "react-icons/md";

const certs = [
  {
    title: "Certified Forward Deployed Engineer (CFDE)",
    issuer: "Association of Data Scientists (ADaSci)",
    year: "2026",
    image: "/images/cert-cfde.svg",
    badgeBg: "linear-gradient(135deg, #00d2ff, #3a7bd5)",
  },
  {
    title: "NVIDIA-Certified Professional in Agentic AI",
    issuer: "NVIDIA",
    year: "2026",
    image: "/images/cert-nvidia.svg",
    badgeBg: "linear-gradient(135deg, #76b900, #00ff88)",
  },
  {
    title: "AWS Certified Machine Learning Engineer - Associate",
    issuer: "Amazon Web Services (AWS)",
    year: "2026",
    image: "/images/cert-aws.svg",
    badgeBg: "linear-gradient(135deg, #ff9900, #ffb84d)",
  },
];

const Career = () => {
  const [selectedCert, setSelectedCert] = useState<{
    title: string;
    image: string;
  } | null>(null);

  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>GenAI Engineer</h4>
                <h5>Accessible Minds • Noida</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Applied Generative AI, LLMs, and Python to accessibility testing
              workflows, including WCAG analysis, issue classification, and
              remediation support. Collaborated with teams to analyze findings,
              validate fixes, and build AI-assisted automation for reporting.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst</h4>
                <h5>ConstructionKing • Jaipur</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Automated data pipelines and reporting workflows using Python,
              SQL, and BeautifulSoup integrated with enterprise reporting
              systems. Built interactive Power BI dashboards to deliver business
              insights; automated the FMS and managed company CRM.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Trainee</h4>
                <h5>Regex Softwares • Jaipur</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built end-to-end ML pipelines using Python, Scikit-learn, and
              Pandas covering ingestion, EDA, feature engineering, model
              training, and evaluation. Developed NLP models using TF-IDF and
              NLTK across supervised & unsupervised learning projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BCA (Computer Applications)</h4>
                <h5>St. Wilfred PG College • Jaipur</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Bachelor of Computer Applications (2022 – 2025). Coursework:
              Python, C++, Java, DBMS, Data Structures, and Computer Networks.
            </p>
          </div>
        </div>

        <div className="career-certifications">
          <h3>Certifications</h3>
          <div className="cert-grid">
            {certs.map((cert, index) => (
              <div className="cert-card" key={index}>
                <div
                  className="cert-thumb"
                  onClick={() =>
                    setSelectedCert({ title: cert.title, image: cert.image })
                  }
                  title="Click to view full certificate"
                >
                  <img src={cert.image} alt={cert.title} />
                  <div className="cert-zoom-overlay">
                    <MdZoomIn /> View Certificate
                  </div>
                </div>
                <div className="cert-card-header">
                  <span
                    className="cert-badge"
                    style={{ background: cert.badgeBg }}
                  >
                    {cert.year}
                  </span>
                  <div className="cert-info">
                    <h4>{cert.title}</h4>
                    <p>{cert.issuer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificate Lightbox Modal */}
        {selectedCert && (
          <div
            className="cert-modal-backdrop"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="cert-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="cert-modal-close"
                onClick={() => setSelectedCert(null)}
                aria-label="Close"
              >
                <MdClose />
              </button>
              <img src={selectedCert.image} alt={selectedCert.title} />
              <h4>{selectedCert.title}</h4>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Career;
