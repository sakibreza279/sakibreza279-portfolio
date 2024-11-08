import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// importing main layout components
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Qualification from "./pages/Qualification/Qualification";
import Services from "./pages/Services/Services";
import Pricing from "./pages/Pricing/Pricing";
import Portfolio from "./pages/Portfolio/Portfolio";
import SideProjects from "./pages/SideProjects/SideProjects";
import CreativeWorks from "./pages/CreativeWorks/CreativeWorks";
import Courses from "./pages/Courses/Courses";
import Blogs from "./pages/Blogs/Blogs";
import Testimonials from "./pages/Testimonials/Testimonials";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer";

createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <Header />
    <main>
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Services />
      <Pricing />
      <Portfolio />
      <SideProjects />
      <CreativeWorks />
      <Courses />
      <Blogs />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
  </React.Fragment>
);
