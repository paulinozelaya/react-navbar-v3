import React, { useEffect, useState } from 'react'
import Wave from 'react-wavify'
import axios from 'axios'
import './css/image.css'

const Image = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    useEffect(() => {
        setLoading(true)
        axios({
          method: 'GET',
          baseURL: 'https://picsum.photos',
          url: '/v2/list?page=2&limit=1',
        })
            .then(({ data }) => {
              setData(data)
            })
            .catch(err => console.dir(err))
            .finally(() => setLoading(false))
    }, [])

    return (  
      <header>
      <section className="textos-header">
        {loading && "Cargando..."}
        {!!data && data.length > 0 ? data.map((product) => {
            return(          
              <div className="separador">
              <p>Author:{product.author}</p>
              <img src={product.download_url} width={400} height={330}/>             
              </div>
            )  
             
          }):(<p>API no retornado ningún producto, intentalo nuevamente.</p>)
        }
        <Wave fill='#fff'
            paused={false}
            options={{
                  height: 50,
                  amplitude: 20,
                  speed: 0.50,
                  points: 1
                  }}
           />
      </section>
      </header>
    )
}

export default Image;