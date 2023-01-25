import React from 'react';
import './banner/banner.css'

//reverse is props using for justify-reverse the listing
export default function CommonBanner({ image, heading, title, reverse }) {

    return (
        <div className={`banner-container common-container ${reverse ? 'flex-reverse' : ''}`}>
            <div className='banner-text-container-common'>
            <h1>{heading}</h1>
            <p>{title}</p>
            <div className='banner-btn-container'>
                <button className='partner-btn'>Become a partner</button>
                <button className='integration-btn'>View Integrations</button>
            </div>
            </div>
            <div className='m-auto'>
                <img className='img-banner' src={image} alt='banner'/>
            </div>
        </div>
    )
}