import React from 'react';
import './css/image.css';
import Wave from 'react-wavify';

const Music = () => {
  return (
    <div>
      <body>
        <header>
        <section className="textos-header">
     
        </section>
        <Wave fill='#fff'
                  paused={false}
                  options={{
                    height: 50,
                    amplitude: 20,
                    speed: 0.50,
                    points: 1
                  }}
            />
        </header>
      </body>
    </div>
  );
};

export default Music;
