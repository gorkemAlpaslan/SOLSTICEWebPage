import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
    gsap.from(".featuresAnimation", {
      scrollTrigger: {
        trigger: ".featuresAnimation",
        start: "top center+=300",
        toggleActions: "restart reverse play reverse",
      },
      opacity: 0,
      y: 40,
      duration: 1,
    });
    gsap.from(".aboutAnimation", {
      scrollTrigger: {
        trigger: ".aboutAnimation",
        start: "top center+=300",
        toggleActions: "restart reverse play reverse",
      },
      opacity: 0,
      y: 40,
      duration: 1,
    });
    gsap.from(".servicesAnimation", {
      scrollTrigger: {
        trigger: ".servicesAnimation",
        start: "top center+=300",
        toggleActions: "restart reverse play reverse",
      },
      opacity: 0,
      y: 40,
      duration: 1,
    });
    gsap.from(".portfolioAnimation", {
      scrollTrigger: {
        trigger: ".portfolioAnimation",
        start: "top center+=300",
        toggleActions: "restart reverse play reverse",
      },
      opacity: 0,
      y: 40,
      duration: 1,
    });
    gsap.from(".testimonialsAnimation", {
      scrollTrigger: {
        trigger: ".testimonialsAnimation",
        start: "top center+=300",
        toggleActions: "restart reverse play reverse",
      },
      opacity: 0,
      y: 40,
      duration: 1,
    });
    gsap.from(".teamAnimation", {
      scrollTrigger: {
        trigger: ".teamAnimation",
        start: "top center+=300",
        toggleActions: "restart reverse play reverse",
      },
      opacity: 0,
      y: 40,
      duration: 1,
    });
    gsap.from(".contactAnimation", {
      scrollTrigger: {
        trigger: ".contactAnimation",
        start: "top center+=300",
        toggleActions: "restart reverse play reverse",
      },
      opacity: 0,
      y: 40,
      duration: 1,
    });
  }, []);

  return (
    <div>
      <Navigation />

      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
