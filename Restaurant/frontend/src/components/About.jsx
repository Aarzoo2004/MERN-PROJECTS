import React from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">About Us</h1>
            <p>The only thinf we're serious about is food</p>
          </div>
          <p className="mid">
            Welcome to Azure Kitchen, where culinary passion meets exceptional
            dining experiences. We believe that great food brings people
            together, which is why we're committed to serving delicious,
            handcrafted meals using only the freshest, locally-sourced
            ingredients. Our talented team of chefs combines traditional cooking
            techniques with innovative approaches to create memorable dishes for
            breakfast, lunch, and dinner. From the moment you walk through our
            doors, you'll experience our warm hospitality and dedication to
            making every meal extraordinary. At Azure, we're not just serving
            food – we're creating moments that matter. Come hungry, leave happy
            – that's the Azure promise.
          </p>
          <Link to={"/"}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
