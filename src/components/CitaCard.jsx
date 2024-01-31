import React from "react";
import { Card, Button } from "react-bootstrap";

const CitaCard = ({ cita, onBorrar }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Mascota: {cita.nombreMascota}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Dueño: {cita.nombreDueno}
        </Card.Subtitle>
        <Card.Text>
          <strong>Fecha:</strong> {cita.fecha} <br />
          <strong>Hora:</strong> {cita.hora} <br />
          <strong>Síntomas:</strong> {cita.sintomas}
        </Card.Text>
        <Button variant="danger" onClick={onBorrar}>
          Borrar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CitaCard;
