import React from 'react';
import Illustration from '../../assests/images/illustration.png'
import './banner.css'

export default function Banner() {

    return (
        <div className='banner-container'>
            <div className='banner-text-container'>
            <h1>Let's build the future <br/> of design, now.</h1>
            <p>Create amazing tools and integrations for 1 million <br/> users or customize Marvel for your team.</p>
            <div className='banner-btn-container'>
                <button className='submit-btn'>Submit your app</button>
                <button className='docs-btn'>View API Docs</button>
            </div>
            </div>
            <div className='ill-image-container'>
                <img className='ill-image' src={Illustration} alt='banner'/>
            </div>
        </div>
    )
}