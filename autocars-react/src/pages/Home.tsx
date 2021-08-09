import {
  AboutUs,
  BookingSteps,
  CalenderBox,
  FeaturedCars,
  HomePageTop,
  Layout,
} from "core-ui/core-ui-index";
import React from "react";

const Home = () => {
  return (
    <Layout>
      <HomePageTop />
      <CalenderBox />
      <BookingSteps />
      <AboutUs />
      <FeaturedCars />
    </Layout>
  );
};

export default Home;
