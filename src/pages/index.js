import React from 'react';
import './css/index.css'
import Wave from 'react-wavify'

const Home = () => {
  return (
    <div>
       <body>
         <header>
          <section className="textos-header">
                <h1>Aplicaciones Graficas Multimedia</h1>
                <br/>
                <h2>Integrantes:</h2>
                <br/>
                <h4>Isela Del Rosario Ramos Mercado</h4>
                <h4>Paulino Jose Zelaya Toruño</h4>
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

export default Home;
