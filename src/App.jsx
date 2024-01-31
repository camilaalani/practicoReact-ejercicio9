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

  return (
    <>

    </>
  );
};

export default App;
