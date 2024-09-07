import Bio from "../components/landing/bio";
import Certificates from "../components/landing/certificates";
import Education from "../components/landing/education";
import Experiences from "../components/landing/experiences";
import Footer from "../components/landing/footer";
import Header from "../components/landing/header";
import Volunteering from "../components/landing/volunteering";
import Skills from "../components/landing/skills";

function Landing() {
  return (
    <>
      <Header />
      <main>
        <Bio />
        <Skills />
        <Experiences />
        <Education />
        <Certificates />
        <Volunteering />
      </main>
      <Footer />
    </>
  );
}

export default Landing;
