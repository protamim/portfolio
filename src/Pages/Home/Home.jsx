import { Helmet } from "react-helmet";
import Navbar from "../../shared/Navbar/Navbar";
import Banner from "../../components/Banner";
import About from "../../components/About";
import Skills from "../../components/Skills";
import MyWorks from "../../components/MyWorks";
import Contact from "../../components/Contact";
import Footer from "../../shared/Footer/Footer";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Tamim&apos;s personal website. A snapshot of my professional life
        </title>
      </Helmet>

      <Navbar />
      <div className="container mx-auto bg-zinc-900 rounded-2xl px-5">
        <Banner />
        <About />
        <Skills />
        <MyWorks />
        <Contact />
        <Footer />
      </div>
      
    </>
  );
};

export default Home;
