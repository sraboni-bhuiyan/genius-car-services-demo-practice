import React, { useEffect, useState } from 'react';
import repair1 from '../../../images/repair1.png'
import Service from '../Service/Service'

/* const services = [
    {id: 1, name: 'oil change', price: 120, description: '', img: 'https://i.ibb.co/HtgGNFt/repair1.png'}
]
 */
const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h2>Services: {services.length}</h2>
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;