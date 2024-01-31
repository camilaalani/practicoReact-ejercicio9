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
    <>

    </>
  );
};

export default FormularioCitas;
