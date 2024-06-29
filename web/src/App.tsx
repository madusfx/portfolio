import './App.css';

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
    </div>
  );
}

export default App;
