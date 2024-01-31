import React from 'react';
import { Card } from 'react-bootstrap';
import CitaCard from './CitaCard';

const ListaCitas = ({ citas, onBorrarCita }) => {
  return (
    <Card>
      <Card.Body>
        <h2>Lista de Citas</h2>
        {citas.length === 0 ? (
          <p className='text-center mt-3'>No hay citas agendadas</p>
        ) : (
          <>
            {citas.map((cita, index) => (
              <CitaCard key={index} cita={cita} onBorrar={() => onBorrarCita(index)} />
            ))}
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default ListaCitas;
