import Image from "next/image";
import profilePicture from "../public/images/profile.jpg";
import Experiences from "../components/landing/experiences";
import Skills from "../components/landing/skills";
import Education from "../components/landing/education";
import Volunteering from "../components/landing/volunteering";
import Certificates from "../components/landing/certificates";

function Landing() {
  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      <nav className="bg-gray-200 md:min-w-96 space-y-10 w-full px-8 py-12 md:px-10 md:py-16 md:w-1/3 ">
        <div className="space-y-10">
          <Image
            src={profilePicture}
            priority
            width={240}
            height={240}
            className="rounded-full mx-auto"
            alt="Picture of myself"
          />
          <div className="space-y-2">
            <h1 className="text-4xl font-extra text-center border-neutral-600 border-b-2">
              Carlos Carneiro
            </h1>
            <h2 className="text-xl font-extra text-center">
              Engenheiro de Software
            </h2>

            <Skills />
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-3xl font-extralight text-center border-neutral-600 border-b-2">
            Contato
          </h3>
          <p className="max-w-72 mx-auto px-2 text-center">
            carloscarneiropmw@gmail.com
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-3xl font-extralight text-center border-neutral-600 border-b-2">
            Sobre
          </h3>
          <p>
            Com 10 anos de experiência no mercado de desenvolvimento de
            software, trabalhei em uma variedade de projetos, desde a construção
            de plataformas de eCommerce até o desenvolvimento de sistemas para
            gestão da cadeia de suprimentos, finanças e RH. Meu trabalho sempre
            foi focado em criar soluções práticas que atendam às necessidades do
            negócio, utilizando minhas habilidades para melhorar a eficiência e
            entregar resultados em diversos setores.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-3xl font-extralight text-center border-neutral-600 border-b-2">
            Certificados
          </h3>
          <Certificates />
        </div>
        <div className="space-y-2">
          <h3 className="text-3xl font-extralight text-center border-neutral-600 border-b-2">
            Trabalho Voluntário
          </h3>
          <Volunteering />
        </div>
      </nav>
      <main className="bg-white w-full px-8 py-12 md:px-12 md:py-16">
        <Experiences />
        <Education />
      </main>
    </div>
  );
}

export default Landing;
