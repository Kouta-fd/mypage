import type { NextPage } from "next";
import styled from "styled-components";
import Header from "../components/layout/Header";
import Profile from "../components/pages/Home/Profile";
import Works from "../components/pages/Home/Works";
import Careers from "../components/pages/Home/Careers";
import Skils from "../components/pages/Home/Skils";


const Home: NextPage = () => {
  const Container = styled.div`
    width: 85%;
    max-width: 1025px;
    margin: auto;
  `;
  return (
    <Container>
      <Header />
      <Profile />
      <Careers />
      <Works />
      <Skils />
    </Container>
  );
};

export default Home;
