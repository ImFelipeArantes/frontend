import "./About.css";

export const About = () => {
  return (
    <div>
      <h1 className="text-center text-black">Sobre nós</h1>
      <div className="container">
        <div className="row">
          <h5>
            Nosso site foi desenvolvido para um projeto acadêmico, onde
            mostramos a história de um tênis que teve grande impacto no mundo
            dos sneakers, sendo um dos mais importantes e um dos mais vendidos
            no mundo.
          </h5>
          <p>
            Também encontra-se uma aba onde pessoas que nos visitam podem se
            cadastrar para que possamos obter algumas informações do nosso
            público
          </p>
        </div>
        <h1 className="text-center">Integrantes</h1>
        <div className="d-flex justify-content-between">
          <div>
            <img src="fabricio.jpg" className="w-75 " />
            <h5>Fabrício Rodrigues dos Santos</h5>
            <p>202208700322</p>
          </div>
          <div>
            <img src="cauan.jpg" className="w-75" />
            <h5>Cauan Miquelo Silva Souza</h5>
            <p>202209021607</p>
          </div>
        </div>
      </div>
    </div>
  );
};
