import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  var landingText = new SplitText(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    {
      type: "chars,lines",
      linesClass: "split-line",
    }
  );
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  // Initial setup: ensure role-2 is completely hidden and role-1 is visible
  gsap.set(".role-2", { opacity: 0, visibility: "hidden", y: 30 });
  gsap.set(".role-1", { opacity: 1, visibility: "visible", y: 0 });

  // Initial entrance animation for Role 1
  gsap.fromTo(
    [".role-1 .landing-info-h2", ".role-1 .landing-info-sub"],
    { opacity: 0, y: 40, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.out",
      y: 0,
      stagger: 0.15,
      delay: 0.4,
    }
  );

  // Seamless alternation between Role 1 and Role 2
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, delay: 3.5 });

  tl.to(".role-1", {
    opacity: 0,
    y: -30,
    duration: 0.6,
    ease: "power2.in",
    onComplete: () => {
      gsap.set(".role-1", { visibility: "hidden" });
      gsap.set(".role-2", { visibility: "visible", y: 30, opacity: 0 });
    },
  })
    .to(".role-2", {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power3.out",
    })
    .to({}, { duration: 3.5 })
    .to(".role-2", {
      opacity: 0,
      y: -30,
      duration: 0.6,
      ease: "power2.in",
      onComplete: () => {
        gsap.set(".role-2", { visibility: "hidden" });
        gsap.set(".role-1", { visibility: "visible", y: 30, opacity: 0 });
      },
    })
    .to(".role-1", {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power3.out",
    });
}

