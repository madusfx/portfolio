import { useState } from 'react';
import './App.css';
import resume from './assets/files/resume.pdf';
import { experiences } from './utils/experiences';
import { education } from './utils/education';
import { projects } from './utils/projects';

function App() {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);
  const [selectedEducation, setSelectedEducation] = useState(education[0]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <p
          className="text-indigo-400 text-2xl font-['Preahvihear']"
          id="inicio"
        >
          Maria Eduarda Freitas
        </p>
        <div className="flex flex-col sm:flex-row mt-3 md:mt-0 md:space-x-6">
          <a href="#inicio" className="text-lg">
            Início
          </a>
          <a href="#sobre" className="text-lg">
            Sobre mim
          </a>
          <a href="#experiencias" className="text-lg">
            Experiências
          </a>
          <a href="#educacao" className="text-lg">
            Educação
          </a>
          <a href="#projetos" className="text-lg">
            Projetos
          </a>
        </div>
      </div>
      <div className="h-0.5 bg-slate-800 mt-6" />
      <div className="flex mt-24 justify-between">
        <div>
          <p className="text-left text-2xl">Olá, eu sou</p>
          <p className="text-left text-5xl font-['Preahvihear'] text-indigo-400 mt-2">
            Maria Eduarda
          </p>
          <p className="text-left text-2xl mt-2">Desenvolvedora FullStack</p>
          <div className="flex space-x-6">
            <button className="w-32 bg-indigo-400 rounded p-2 mt-12 hover:bg-indigo-500">
              <a
                href="https://www.linkedin.com/in/mariaesfreitas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </button>
            <button className="w-32 bg-indigo-400 rounded p-2 mt-12 hover:bg-indigo-500">
              <a
                href="https://github.com/madusfx"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-24 items-baseline" id="sobre">
        <p className="text-indigo-400 text-3xl font-['Preahvihear']">
          Sobre mim
        </p>
        <p className="text-xl mt-4">Ponta Grossa, Brasil</p>
        <p className="text-left mt-4">
          Meu nome é Maria Eduarda, tenho 22 anos e sou paranaense. Minha
          história com a programação começou em 2020, quando eu entrei na
          faculdade, sem saber nada da área de tecnologia. Ao longo do curso fui
          me apaixonando e me encontrando profissionalmente e hoje sou muito
          realizada com o que eu faço. Com o fim da faculdade, tenho buscado
          fazer cursos para aprimorar meus conhecimentos e tenho trabalhado em
          alguns projetos pessoais também, além de ter dado início a uma pós de
          Engenharia de Software Ágil pela PUCPR.
          <br />
          Nas horas vagas eu costumo gostar de praticar esportes, principalmente
          musculação e corrida. Além disso, sou uma grande fã de sitcoms, e
          tenho uma paixão especial por Friends.
        </p>
        <button className="bg-indigo-400 py-2 px-6 rounded mt-12 hover:bg-indigo-500">
          <a href={resume} target="_blank" rel="noopener noreferrer">
            Baixar currículo
          </a>
        </button>
      </div>
      <div className="mt-24" id="experiencias">
        <div>
          <p className="text-indigo-400 text-3xl font-['Preahvihear'] text-left">
            Experiencias
          </p>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap mt-6 items-start">
          <div className="flex flex-wrap lg:flex-col">
            {experiences.map((experience, index) => (
              <button
                key={index}
                className={`w-full md:w-44 p-4 ${selectedExperience === experience ? 'bg-indigo-400 border-l-4 border-indigo-600' : 'hover:bg-indigo-400 hover:border-l-4 hover:border-indigo-600'}`}
                onClick={() => setSelectedExperience(experience)}
              >
                <p>{experience.place}</p>
              </button>
            ))}
          </div>
          <div className="flex flex-col justify-center ml-0 lg:ml-12 w-full mt-6 lg:mt-0">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-lg">{selectedExperience.title}</p>
              <p className="text-sm">{selectedExperience.date}</p>
            </div>
            <p className="text-left mt-4">{selectedExperience.description}</p>
          </div>
        </div>
      </div>
      <div className="mt-24" id="educacao">
        <div>
          <p className="text-indigo-400 text-3xl font-['Preahvihear'] text-left">
            Educacao
          </p>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap mt-6 items-start">
          <div className="flex flex-wrap lg:flex-col">
            {education.map((education, index) => (
              <button
                key={index}
                className={`w-full md:w-44 p-4 ${selectedEducation === education ? 'bg-indigo-400 border-l-4 border-indigo-600' : 'hover:bg-indigo-400 hover:border-l-4 hover:border-indigo-600'}`}
                onClick={() => setSelectedEducation(education)}
              >
                <p>{education.place}</p>
              </button>
            ))}
          </div>
          <div className="flex flex-col justify-center ml-0 lg:ml-12 w-full mt-6 lg:mt-0">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-lg">{selectedEducation.title}</p>
              <p className="text-sm">{selectedEducation.date}</p>
            </div>
            <p className="text-left mt-4">{selectedEducation.description}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-24 items-baseline" id="projetos">
        <p className="text-indigo-400 text-3xl font-['Preahvihear']">
          Projetos
        </p>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project, id) => (
            <div key={id} className="flex flex-col justify-between p-6">
              <div>
                <p className="text-2xl text-left mt-6">{project.title}</p>
                <p className="mt-6 text-left min-h-[100px]">
                  {project.description}
                </p>
              </div>
              <div>
                <p className="text-indigo-400 text-left mt-6">
                  {project.technologies}
                </p>
                <div className="mt-6 flex gap-6">
                  <button className="bg-indigo-400 p-3 rounded w-[215px] text-black hover:bg-indigo-500">
                    Acessar o projeto
                  </button>
                  <button className="border border-indigo-400 p-3 rounded w-[215px] text-indigo-400 hover:bg-indigo-100">
                    <a
                      href={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Acessar repositório
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute w-full left-0 flex justify-between bg-black text-white text-center p-3 md:px-24 md:py-3 mt-6">
        <p className="text-sm">@2024 - Maria Eduarda Freitas</p>
        <p className="text-sm">
          Powered by <span className="text-indigo-400">{'{}'}</span>
        </p>
      </div>
    </div>
  );
}

export default App;
