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
            <div className='site-ip'>
                <small>{ip}</small>
            </div>
            <div className='site-description'>
                <p>{cutDescription(description)}</p>
            </div>
        </div>
    )
}

function cutDescription (description: string): string {
    if(description.length <= 300) 
        return description

    return `${description.slice(0, 300)}...` 
}

export default Site;
