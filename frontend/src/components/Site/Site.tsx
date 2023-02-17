import React from 'react';
import './Site.css';


interface SiteProps {
    title: string
    description: string
    ip: string
}

const Site: React.FC<SiteProps> = ({ip, description, title}) => {
    
    return (
        <div className='site'> 
            <div className='site-title'>
                <h2>{title}</h2>
            </div>
            <div className='site-address'>
                <small>{ip}</small>
            </div>
            <div className='site-description'>
                <p>{description}</p>
            </div>
        </div>
    )
}


export default Site;
