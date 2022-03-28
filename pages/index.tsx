import type { NextPage } from "next";
import Header from "../components/layout/Header";
import Profile from "../components/pages/Home/Profile";
import styles from "../styles/Home.module.css";
import Works from "../components/pages/Home/Works";
import Careers from "../components/pages/Home/Careers";
import Skils from "../components/pages/Home/Skils";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Profile />
      <Careers/>
      <Works />
      <Skils />
    </div>
  );
};

export default Home;
