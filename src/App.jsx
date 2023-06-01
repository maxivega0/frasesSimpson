import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logosimpson.png";
import { Button, Container } from "react-bootstrap";
import Frase from "./components/Frase";
import { useEffect, useState } from "react";

function App() {
  const [personaje, setPersonaje] = useState({});
// Recomendacion, al trabajar con apis solo usar el "montaje" hasta que tenga bien en claro
// lo que necesito usar
  useEffect(()=> {
    consultarAPI();
// Los corchetes hace que solo se usen en montaje las peticiones a la api
  },[]);

  const consultarAPI = async () =>{
    // Usamos el trycatch para estar notificados si hay un error
    try{
      // Peticion get, solo devuelve datos
      // Siempre que trabajemos con promesas, las promesas tardan un tiempo
      const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
      // metodo de javascript que extrae "del body" la informacion y hace el parse
      const dato = await respuesta.json()
      console.log(respuesta);
      console.log(dato[0]);
      setPersonaje(dato[0])

    } catch(error){
      console.log(error);
    }
  }



  return (
    <>
      <Container className="text-center my-5">
        <img src={logo} alt="Logo de los simpson" className="w-50" />
        <Frase personaje={personaje} />
        <Button variant="warning" >
          Obtener frase
        </Button>
      </Container>
    </>
  );
}

export default App;
