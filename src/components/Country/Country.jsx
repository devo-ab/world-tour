import { useState } from 'react';
import './Country.css';
const Country = ({country}) => {
    console.log(country)
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    };

    return (
        <div className='country'>
            <h3>{name?.common}</h3>
            <img src={flags.png} alt=""/>
            <p>Populations : {population}</p>
            <p>Area : {area}</p>
            <p>Code : {cca3}</p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Visit'}</button>
            {visited ? 'I have visited this country' : 'I want to visit'}
        </div>
    );
};

export default Country;