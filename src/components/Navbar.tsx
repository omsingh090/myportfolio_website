
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    const links = document.querySelectorAll<HTMLAnchorElement>(
      ".header ul a"
    );

    const handleLinkClick = (event: Event) => {
      if (window.innerWidth > 1024) {
        event.preventDefault();

        const element = event.currentTarget as HTMLAnchorElement;
        const section = element.getAttribute("data-href");

        if (section) {
          smoother.scrollTo(section, true, "top top");
        }
      }
    };

    links.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    const handleResize = () => {
      ScrollSmoother.refresh(true);
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);
    ScrollTrigger.refresh();

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });

      window.removeEventListener("resize", handleResize);
      smoother?.kill();
    };
  }, []);

  return (
    <>
      <div className="header">
        <a
          href="/#"
          className="navbar-title"
          data-cursor="disable"
        >
          OM SINGH
        </a>

        <a
          href="mailto:swamsingh09@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          swamsingh09@gmail.com
        </a>

        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>

          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>

          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
