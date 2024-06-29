import './App.css';
import resume from './assets/files/resume.pdf';

function App() {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <p className="text-indigo-400 text-2xl font-['Preahvihear']">
          Maria Eduarda Freitas
        </p>
        <div className="flex space-x-6">
          <a href="" className="text-lg">
            Início
          </a>
          <a href="" className="text-lg">
            Sobre mim
          </a>
          <a href="" className="text-lg">
            Experiências
          </a>
          <a href="" className="text-lg">
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
            <button className="w-32 bg-indigo-400 rounded p-2 mt-12">
              <a
                href="https://www.linkedin.com/in/mariaesfreitas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </button>
            <button className="w-32 bg-indigo-400 rounded p-2 mt-12">
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
      <div className="flex flex-col mt-24 items-baseline">
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
        <button className="bg-indigo-400 py-2 px-6 rounded mt-12">
          <a href={resume} target="_blank" rel="noopener noreferrer">
            Baixar currículo
          </a>
        </button>
      </div>
    </div>
  );
}

export default App;
