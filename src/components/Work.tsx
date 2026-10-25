import { useState } from "react";
import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MdArrowOutward, MdClose, MdZoomIn } from "react-icons/md";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    num: "01",
    title: "AI Financial Market Intelligence Agent",
    category: "Autonomous FinTech Multi-Agent",
    tools: "Python, LLMs, LangGraph, Financial APIs, Market Sentiment, SEC 10-K RAG, Real-Time Analytics",
    desc: "Autonomous multi-agent system analyzing real-time financial market data, earnings transcripts, SEC filings, and technical indicators to synthesize actionable trading intelligence.",
    image: "/images/proj-fin-agent.svg",
    link: "https://github.com/omsingh090/AI-Driven-Financial-Market-Intelligence-Agent",
  },
  {
    num: "02",
    title: "Enterprise Knowledge Platform",
    category: "GenAI & RAG",
    tools: "Python, GenAI, RAG, LLMs, LangGraph, LangChain, Qdrant Vector DB, Embeddings, Streamlit, Pytest",
    desc: "AI platform reading enterprise docs, retrieving relevant info, and generating grounded answers with intelligent query routing and validation.",
    image: "/images/proj-rag.svg",
    link: "https://github.com/omsingh090",
  },
  {
    num: "03",
    title: "StartupResearch Agent",
    category: "Autonomous Multi-Agent",
    tools: "LLM APIs, Multi-Agent Workflows, LangGraph, RAG, Prompt Engineering, Ingestion Pipelines, Python",
    desc: "AI-powered agent automating startup research, competitor analysis, and insight generation using multi-agent orchestration.",
    image: "/images/proj-agent.svg",
    link: "https://github.com/omsingh090",
  },
  {
    num: "04",
    title: "Options Research Platform",
    category: "Financial Analytics & Quant",
    tools: "Python, Financial Data, Options Research, Analytics, Data Visualization, Pandas",
    desc: "Analytical platform for evaluating options-market data, modeling trading strategies, and organizing quantitative insights.",
    image: "/images/proj-options.svg",
    link: "https://github.com/omsingh090",
  },
  {
    num: "05",
    title: "E-Commerce Customer Analytics",
    category: "Data Pipelines & Power BI",
    tools: "Python, SQL, EDA, Data Pipelines, Analytics, Power BI",
    desc: "Analytics platform tracking customer behavior, revenue trends, and product performance using automated SQL-driven pipelines.",
    image: "/images/proj-ecommerce.svg",
    link: "https://github.com/omsingh090",
  },
  {
    num: "06",
    title: "Twitter Sentiment Analysis",
    category: "NLP & Machine Learning",
    tools: "NLP, TF-IDF, NLTK, Logistic Regression, Text Preprocessing, Scikit-learn",
    desc: "Machine learning model classifying tweets as positive, negative, or neutral with text preprocessing and benchmarking.",
    image: "/images/proj-sentiment.svg",
    link: "https://github.com/omsingh090",
  },
];

const Work = () => {
  const [selectedProject, setSelectedProject] = useState<{
    num: string;
    title: string;
    category: string;
    tools: string;
    desc: string;
    image: string;
    link: string;
  } | null>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Desktop: Smooth horizontal pin scroll with exact scrollWidth calculation
    mm.add("(min-width: 1025px)", () => {
      const section = document.querySelector(".work-section") as HTMLElement;
      const flex = document.querySelector(".work-flex") as HTMLElement;
      if (!section || !flex) return;

      const getScrollAmount = () => {
        return Math.max(0, flex.scrollWidth - window.innerWidth + 80);
      };

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          id: "work-pin",
        },
      });

      timeline.to(flex, {
        x: () => -getScrollAmount(),
        ease: "none",
      });
    });

    // Mobile & Tablet (<= 1024px): No horizontal pin, natural vertical flow
    mm.add("(max-width: 1024px)", () => {
      // Natural document flow, zero collision risk
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.num}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <p
                  style={{
                    marginTop: "8px",
                    fontSize: "13px",
                    lineHeight: "19px",
                    color: "#bbb",
                  }}
                >
                  {project.desc}
                </p>
              </div>

              <div className="work-image">
                <div
                  className="work-image-in"
                  onClick={() => setSelectedProject(project)}
                  style={{ cursor: "pointer" }}
                  title="Click to preview architecture"
                >
                  <img src={project.image} alt={project.title} />
                  <div className="work-zoom-overlay">
                    <MdZoomIn /> Preview Project
                  </div>
                  <a
                    className="work-link"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    title="View GitHub Repository"
                  >
                    <MdArrowOutward />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Lightbox Modal */}
      {selectedProject && (
        <div
          className="work-modal-backdrop"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="work-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="work-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close"
            >
              <MdClose />
            </button>
            <div className="work-modal-header">
              <span className="work-modal-num">{selectedProject.num}</span>
              <div>
                <h3>{selectedProject.title}</h3>
                <p className="work-modal-category">
                  {selectedProject.category}
                </p>
              </div>
            </div>
            <div className="work-modal-img-wrap">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>
            <div className="work-modal-body">
              <h4>Tools &amp; Tech Stack</h4>
              <p className="work-modal-tools">{selectedProject.tools}</p>
              <h4>Architecture &amp; Features</h4>
              <p className="work-modal-desc">{selectedProject.desc}</p>
              <div className="work-modal-actions">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-modal-btn"
                >
                  View on GitHub <MdArrowOutward />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;
