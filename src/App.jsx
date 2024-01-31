import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FormularioCitas from './components/FormularioCitas';
import ListaCitas from './components/ListaCitas';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    const citasGuardadas = JSON.parse(localStorage.getItem("citas")) || [];
    setCitas(citasGuardadas);
  }, []);

  const handleAgregarCita = (nuevaCita) => {
    setCitas((prevCitas) => [...prevCitas, nuevaCita]);
    const citasGuardadas = JSON.parse(localStorage.getItem("citas")) || [];
    localStorage.setItem("citas", JSON.stringify([...citasGuardadas, nuevaCita]));
  };

  const handleBorrarCita = (index) => {
    const citasActualizadas = [...citas];
    citasActualizadas.splice(index, 1);
    localStorage.setItem("citas", JSON.stringify(citasActualizadas));
    setCitas(citasActualizadas);
  };

  return (
    <Container className="my-4">
      <Row>
        <Col md={6}>
          <FormularioCitas onAgregarCita={handleAgregarCita} />
        </Col>
        <Col md={6}>
          <ListaCitas citas={citas} onBorrarCita={handleBorrarCita} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
