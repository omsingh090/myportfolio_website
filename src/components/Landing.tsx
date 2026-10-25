import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              OM
              <br />
              <span>SINGH</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>AI &</h3>
            <div className="landing-roles-wrapper">
              <div className="landing-role role-1">
                <h2 className="landing-info-h2">GenAI</h2>
                <h2 className="landing-info-sub">Engineer</h2>
              </div>
              <div className="landing-role role-2">
                <h2 className="landing-info-h2">Forward Deploy</h2>
                <h2 className="landing-info-sub">Engineer</h2>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
