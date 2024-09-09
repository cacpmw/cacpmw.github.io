import ExperienceItem from "./experience-item";
function Experiences() {
  return (
    <section id="experience">
      <div className="space-y-10">
        <h2 className="text-xl font-light text-center border-neutral-600 border-b-2">
          Experiência
        </h2>
        <div>
          <ExperienceItem
            title="Engenheiro de Software"
            company="Wound Solutions of Texas"
            duration="Maio 2024 - Atualmente"
            location="Dallas, TX - Estados Unidos"
          >
            <ul className="list-disc space-y-1">
              <li>
                Desenvolvi software interno utilizando Node.js e React.js em um
                ambiente dockerizado, o que reduziu em 30% o tempo necessário
                para processar relatórios médicos e garantiu conformidade com os
                padrões do Medicare.
              </li>
              <li>
                Automatizei tarefas diárias com eficiência utilizando scripts em
                Python para processar arquivos em PDF.
              </li>
            </ul>
          </ExperienceItem>
        </div>
        <div>
          <ExperienceItem
            title="Engenheiro de Software"
            company="Oowlish"
            duration="Janeiro 2021 - Julho 2023"
            location="Estados Unidos"
          >
            <ul className="list-disc space-y-1">
              <li>
                Liderei uma Prova de Conceito (POC) para redesenhar o site da
                PETCO PupBox, fazendo a transição de um sistema mal projetado
                para uma plataforma robusta ao reconstruí-lo do zero, utilizando
                Node.js, Next.js e TypeScript em um ambiente dockerizado,
                resultando em uma solução escalável e fácil de manter.
              </li>
              <li>
                Assegurei a conformidade com a ADA no site da PupBox ao
                implementar recursos de acessibilidade durante o processo de
                redesign, o que melhorou a experiência do usuário para clientes
                com deficiência e alinhou o site com os padrões legais.
              </li>
              <li>
                Melhorei o desempenho da API aplicando Design Orientado a
                Domínio, testes unitários e técnicas de cache de dados,
                resultando em tempos de resposta mais rápidos e em uma base de
                código mais fácil de ser gerenciada por outros desenvolvedores.
              </li>
            </ul>
          </ExperienceItem>
        </div>

        <div>
          <ExperienceItem
            title="Engenheiro de Software"
            company="Optime Rotas (Startup)"
            duration="Janeiro 2020 - Setembro 2020"
            location="Uberlandia, MG - Brasil"
          >
            <ul className="list-disc">
              <li>
                Desenvolvi uma plataforma de serviços utilizando Laravel e
                JavaScript para levar rapidamente ao mercado o calculador de
                rotas de veículos da Optime Rotas, originalmente escrito em C,
                permitindo que a empresa oferecesse seus serviços de
                roteirização online.
              </li>
              <li>
                Integrei a API do Google Maps na plataforma, permitindo que os
                usuários visualizassem rotas e rastreassem veículos em tempo
                real, o que aprimorou a funcionalidade da plataforma e melhorou
                a experiência do usuário.
              </li>
              <li>
                Otimizei os processos de backend ao utilizar Laravel para
                conectar o calculador de rotas baseado em C à nova plataforma
                web, garantindo um fluxo de dados contínuo e cálculos de rotas
                eficientes, resultando em uma entrega de serviços mais rápida e
                confiável.
              </li>
            </ul>
          </ExperienceItem>
        </div>

        <div>
          <ExperienceItem
            title="Engenheiro de Software"
            company="ZAMApps"
            duration="Junho 2019 - Fevereiro 2020"
            location="Estados Unidos"
          >
            <ul className="list-disc">
              <li>
                Desenvolvi novas funcionalidades e aperfeiçoei as existentes
                para diversos projetos na indústria do vinho, utilizando Laravel
                e Vue.js, garantindo que o software permanecesse eficiente e
                alinhado com as melhores práticas do setor.
              </li>
              <li>
                Colaborei com várias equipes para integrar novas tecnologias e
                refinar o código existente, utilizando Laravel para o
                desenvolvimento de backend e Vue.js para melhorias no frontend,
                o que contribuiu para a melhoria contínua e o sucesso de
                diversos projetos na indústria do vinho.
              </li>
            </ul>
          </ExperienceItem>
        </div>

        <div>
          <ExperienceItem
            title="Engenheiro de Software"
            company="Recrutei - (Startup)"
            duration="Novembro 2018 - Abril 2019"
            location="Uberlandia, MG - Brasil"
          >
            <ul className="list-disc">
              <li>
                Reestruturação de Produto SaaS: reestruturação completa do
                produto SaaS seguindo o modelo MVC, utilizando o framework
                Laravel e garantindo alinhamento com a documentação oficial e as
                melhores práticas da indústria.
              </li>
              <li>
                Desenvolvimento de API: Liderou a mudança estratégica para o
                desenvolvimento de APIs para atender clientes maiores,
                influenciando diretamente a visão de longo prazo da empresa.
              </li>
              <li>
                Liderança Técnica: Participou ativamente de decisões técnicas e
                de negócios chave, colaborando com investidores, clientes e o
                conselho de administração. Recrutamento: Projetou e avaliou
                exames técnicos para a primeira expansão da equipe de TI da
                empresa, garantindo a contratação de candidatos de alto nível.
              </li>
            </ul>
          </ExperienceItem>
        </div>

        <div>
          <ExperienceItem
            title="Desenvolver Fullstack"
            company="Cedro Technologies"
            duration="Maio 2018 - Outubro 2018"
            location="Uberlandia, MG - Brasil"
          >
            <ul className="list-disc">
              <li>
                Desenvolvimento de Soluções Financeiras: Criou soluções
                avançadas para o mercado financeiro usando .NET Core 2.0 e
                Angular 6.
              </li>
              <li>
                Expertise em Frontend: Adquiriu experiência prática com Angular
                6 como framework de frontend, aprimorando a interface do usuário
                de aplicações web.
              </li>
              <li>
                Colaboração em Equipe: Trabalhou em estreita colaboração com uma
                pequena equipe de desenvolvimento para gerar e implementar
                ideias inovadoras para aplicações web.
              </li>
              <li>
                Contribuição de Conteúdo: Escreveu e publicou artigos técnicos
                no blog da empresa, compartilhando insights e conhecimentos com
                um público mais amplo.
              </li>
              <li>
                Discussões Arquiteturais: Participou ativamente de discussões
                sobre decisões arquitetônicas e de processos de negócios,
                contribuindo para a estratégia geral.
              </li>
            </ul>
          </ExperienceItem>
        </div>

        <div>
          <ExperienceItem
            title="Desenvolver Backend"
            company="Universidade Estadual do Tocantins"
            duration="Outubro 2014 - Outubro 2018"
            location="Palmas, TO - Brasil"
          >
            <ul className="list-disc">
              <li>
                Gestão de Aplicações: Manteve, aprimorou e deu suporte a mais de
                50 aplicações web armazenadas no servidor Git da empresa, usando
                uma variedade de tecnologias.
              </li>
              <li>
                Gestão Focada: Gerenciou cerca de 10 aplicações, principalmente
                usando ASP.NET, com algumas aplicações em PHP.
              </li>
              <li>
                Colaboração em Banco de Dados: Trabalhou em estreita colaboração
                com um DBA para tomar decisões técnicas para bancos de dados SQL
                Server e MySQL.
              </li>
              <li>
                Desenvolvimento de Produto: Participou ativamente de reuniões do
                ciclo de produto, contribuindo para discussões sobre novas
                funcionalidades e melhorias.
              </li>
              <li>
                Engajamento com Usuários: Apresentou novas funcionalidades aos
                usuários, garantindo que estivessem informados e treinados sobre
                as atualizações.
              </li>
            </ul>
          </ExperienceItem>
        </div>

        <div>
          <ExperienceItem
            title="Analista de Suporte Tecnico"
            company="Alento Comunicação"
            duration="Agosto 2010/2012/2014 - Outubro 2010/2012/2014"
            location="Palmas, TO - Brasil"
          >
            <ul className="list-disc">
              <li>
                Recrutado durante uma campanha política: Gerenciei a comunicação
                em rede entre PCs Macintosh e Windows.
              </li>
              <li>
                Forneci suporte técnico: Ajudei os trabalhadores e garanti o
                funcionamento contínuo de um servidor de vídeo.
              </li>
            </ul>
          </ExperienceItem>
        </div>
      </div>
    </section>
  );
}
export default Experiences;
