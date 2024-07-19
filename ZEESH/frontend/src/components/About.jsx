import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            "Learn about who we are and what inspires us in our 'About Us' section. Discover the history of our restaurant, driven by a love for cooking and genuine values. We pride ourselves on using fresh, local ingredients to create memorable dining experiences. Our team is dedicated to giving you a delightful experience, with each dish reflecting our story and commitment to quality. Join us for a culinary journey that showcases our passion for great food and community."            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
