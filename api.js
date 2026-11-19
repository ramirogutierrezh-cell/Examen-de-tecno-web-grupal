import React, { useState, useEffect } from 'react';
import Header from './Header';
import BurgerCard from './BurgerCard.jsx';
import { obtenerHamburguesas } from './api';

export default function App() {
  const [hamburguesas, setHamburguesas] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function cargarDatos() {
      const datos = await obtenerHamburguesas();
      setHamburguesas(datos);
      setCargando(false);
    }
    cargarDatos();
  }, []);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <Header />

      {cargando ? (
        <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>Cargando hamburguesas de la API...</p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '20px'
        }}>
          {hamburguesas.map((hamburguesa) => (
            <BurgerCard key={hamburguesa.id} burger={hamburguesa} />
          ))}
        </div>
      )}
    </div>
  );
}
