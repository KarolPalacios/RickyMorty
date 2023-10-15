import { useState, useEffect } from 'react'
import axios from 'axios'
import ResidentInfo from './Components/ResidentInfo'
import './App.css'

function App() {
  
  const [location, setLocation] = useState({})
  const [locationId, setLocationId] = useState("")

  useEffect(() => {

    const randomId = Math.floor(Math.random() * 126) +1
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
    .then(res => setLocation(res.data))

  }, [])

  console.log(location)

  const SearchLocation = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${locationId}`)
    .then(res => setLocation(res.data))
  }

  if (locationId > 126){
    return alert('Solo existen 126 Ids')
  }

  return (
    <div className="App">
      <header></header>
      <section>
        <h1 className='title'>Rick and Morty Wiki</h1>

        <div className='seeker'>
          <input type="text" value={locationId} placeholder="Type a location Id" onChange={e => setLocationId(e.target.value)}/>
          <button onClick={SearchLocation}>Search</button>
        </div>

        <h2 className='name-location'>{location.name}</h2>
        <div className='location-info'>
          <p><b className='yellow'>Type: </b>{location.type}</p>
          <p><b className='yellow'>Dimension: </b> {location.dimension}</p>
          <p><b className='yellow'>Population: </b>{location.residents?.length}</p>
        </div>

        <section className='container'>
          <ul className='residents-container'>
            {location.residents?.map(url => (
              <ResidentInfo 
              url={url}
              key={url}
                />
                ))}
          </ul>
        </section>
      </section>

    </div>
  )
}

export default App
