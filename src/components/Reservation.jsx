import React from 'react';
import reservationImage from '../assets/Reservation.jpg'; 

const Reservation = () => {
  return (
    <section style={{ background: '#eee', padding: '60px 0' }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: 'auto',
          display: 'flex',
          gap: '50px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        
        <div>
          <img
            src={reservationImage}
            alt="Reservation"
            style={{ width: '400px', borderRadius: '10px' }}
          />
        </div>

      
        <div>
          <h2 style={{ color: '#b91c1c' }}>Reservation</h2>
          <h1 style={{ fontSize: '2.5rem' }}>Book your table</h1>
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              maxWidth: '400px',
            }}
          >
            <input
              type="text"
              placeholder="name"
              style={{
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
            <input
              type="tel"
              placeholder="phone"
              style={{
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
            <input
              type="email"
              placeholder="email"
              style={{
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />

            <div style={{ display: 'flex', gap: '10px' }}>
              <select
                style={{
                  flex: 1,
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                }}
              >
                <option>7:00</option>
                <option>8:00</option>
                <option>9:00</option>
              </select>
              <input
                type="date"
                style={{
                  flex: 1,
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                }}
              />
            </div>

            <input
              type="number"
              placeholder="2"
              style={{
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />

            <button
              style={{
                padding: '12px',
                backgroundColor: '#b91c1c',
                color: 'white',
                border: 'none',
                borderRadius: '25px',
                cursor: 'pointer',
              }}
            >
              Book table →
            </button>
          </form>

          <div style={{ marginTop: '20px', fontSize: '1.1rem' }}>
            To book call
            <br />
            <span style={{ fontSize: '1.5rem', color: '#b91c1c' }}>
              +123 232 123
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
