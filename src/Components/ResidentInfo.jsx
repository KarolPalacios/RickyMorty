import {useState, useEffect} from 'react'
import axios from 'axios'
import react from 'react'

const ResidentInfo = ({url}) => {

    const [residents, setResidents] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(url)
        .then(res => setResidents(res.data))
            setIsLoading(false)
    }, [])

    console.log(residents)

    return (
        <div>
            { isLoading ? (
                <h1>Is loading...</h1>
            ) : (
    
                <li className='resident-card'>
                    <img src={residents.image} alt="" />
                    <div className='info'>
                        <p><b className='yellow'>{residents.name}</b></p>
                        <p><b className='blue'>{residents.status}</b></p>
                        Origin
                        <p><b className='yellow'>{residents.origin?.name}</b></p>
                        Episodes where appear
                        <p><b className='yellow'>{residents.episode?.length}</b></p>
                    </div>
                    
                </li>
            )}
        </div>
    );
};

export default ResidentInfo