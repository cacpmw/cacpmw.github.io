function Education() {
  return (
    <section id="education">
      <div className="space-y-10">
        <h2 className="text-xl font-light text-center border-neutral-600 border-b-2">
          Educação
        </h2>
        <div className="flex flex-col space-y-2">
          <div>
            <span>
              <strong>
                UniCatólica – Centro Universitário Católica do Tocantins
              </strong>
            </span>{" "}
            <span>
              <em>Bacharelado em Sistemas de Informacao</em>
            </span>{" "}
            <span>
              <em>2013 - 2017</em>
            </span>{" "}
            <span>Palmas, TO - Brasil</span> <br />
          </div>

          <ul className="list-disc">
            <li>
              Construí uma base sólida em Programação Orientada a Objetos (POO),
              o que me levou a ser contratado como desenvolvedor web
              profissional antes mesmo de me formar.
            </li>
            <li>
              Adquiri experiência prática desenvolvendo aplicações desktop,
              aplicações web, aplicativos móveis e jogos, o que aprimorou minha
              capacidade de trabalhar com uma variedade de tecnologias.
            </li>
            <li>
              Aprendi a transitar de forma fluida entre diferentes stacks de
              tecnologia, graças à diversidade de projetos enfrentados ao longo
              do curso, preparando-me para uma carreira versátil em
              desenvolvimento de software.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Education;
