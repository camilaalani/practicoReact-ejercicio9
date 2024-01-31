import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

const FormularioCitas = ({ onAgregarCita }) => {
  const [nombreMascota, setNombreMascota] = useState("");
  const [nombreDueno, setNombreDueno] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");

  const handleAgregarCita = () => {
    if (nombreMascota && nombreDueno && fecha && hora && sintomas) {
      const nuevaCita = {
        nombreMascota,
        nombreDueno,
        fecha,
        hora,
        sintomas,
      };
      onAgregarCita(nuevaCita);
      setNombreMascota("");
      setNombreDueno("");
      setFecha("");
      setHora("");
      setSintomas("");
    } else {
      alert("Completa todos los campos antes de agregar una cita.");
    }
  };
  
  return (
    <Card>
    <Card.Header>
      Llenar el formulario para crear una cita
    </Card.Header>
    <Card.Body>
    <Form>
    <Form.Group className="mb-3" controlId="formDueño">
      <Form.Label>Nombre del dueño</Form.Label>
      <Form.Control
        type="text"
        placeholder="Nombre del dueño"
        value={nombreDueno}
        onChange={(e) => setNombreDueno(e.target.value)}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formMascota">
      <Form.Label>Nombre de la mascota</Form.Label>
      <Form.Control
        type="text"
        placeholder="Nombre de la mascota"
        value={nombreMascota}
        onChange={(e) => setNombreMascota(e.target.value)}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formFecha">
      <Form.Label>Fecha</Form.Label>
      <Form.Control
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formHora">
      <Form.Label>Hora</Form.Label>
      <Form.Control
        type="time"
        value={hora}
        onChange={(e) => setHora(e.target.value)}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formSintomas">
      <Form.Label>Síntomas</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        value={sintomas}
        onChange={(e) => setSintomas(e.target.value)}
      />
    </Form.Group>
  </Form>
    </Card.Body>
    <Card.Footer>
      <Button variant="primary" onClick={handleAgregarCita}>
        Agregar Cita
      </Button>
    </Card.Footer>
  </Card>
  );
};

export default FormularioCitas;
