import React from 'react';

export default function BurgerCard({ burger }) {
  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      padding: '15px',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <div>
        {/* Imagen dinámica traída desde el campo .img del JSON de la API */}
        <img 
          src={burger.img} 
          alt={burger.name} 
          style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} 
        />
        
        {/* Nombre de la hamburguesa traído desde el campo .name */}
        <h3 style={{ margin: '12px 0 6px 0', fontSize: '1.3rem' }}>{burger.name}</h3>
        
        {/* Descripción e ingredientes traídos desde el campo .dsc */}
        <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.4' }}>{burger.dsc}</p>
      </div>

      {/* Sección inferior con precio y estrellas de calificación */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
        {/* Precio obtenido desde el campo .price */}
        <span style={{ fontWeight: 'bold', color: '#e63946', fontSize: '1.3rem' }}>
          ${burger.price}
        </span>
        
        {/* Calificación obtenida desde el campo .rate */}
        <span style={{ backgroundColor: '#ffb703', color: '#000', padding: '4px 8px', borderRadius: '6px', fontWeight: 'bold', fontSize: '0.85rem' }}>
          ★ {burger.rate}
        </span>
      </div>
    </div>
  );
}