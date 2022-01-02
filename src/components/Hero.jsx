import React from 'react'
import './hero.css'

function Hero() {
    return (
        <>
            {/* hero content */}
            <div className='hero-wrapper'>
                <div className='hero-left-right-content'>
                    <div className='hero-circle-glowing' />
                    {/* hero left content */}
                    <div className='hero-left-content'>
                        <h1 className='hero-left-content-heading'>The Ultimate <span className='hero-left-content-heading-bolder'>Web3</span> Development Platform</h1>
                        <h4 className='hero-left-content-para'>Join 65,000+ blockchain projects that use Moralis software and APIs to build & scale their dApps without the cost & complexity.</h4>
                        <div>
                            <button className='hero-left-content-btn'><img className='hero-left-content-btn-img' src="../assets/images/right-arrow.svg" alt="right-arrow" /> Get start now</button>
                        </div>
                    </div>
                    {/* hero right content */}
                    <div className='hero-right-content'>
                        <img className='hero-right-content-img' src="../assets/images/hero_new_img.svg" alt="" />
                    </div>
                </div>
                {/* hero footer */}
                <div className='hero-footer-section'>
                    <h3 className='hero-footer-section-heading'>WORKING WITH THE BEST IN BLOCKCHAIN</h3>
                    {/* brand names */}
                    <div className='brand-name-wrapper'>
                        <img src="../assets/images/partner-1.svg" alt="partner-1" />
                        <img src="../assets/images/partner-2.svg" alt="partner-2" />
                        <img src="../assets/images/partner-3.svg" alt="partner-3" />
                        <img src="../assets/images/partner-4.svg" alt="partner-4" />
                        <img src="../assets/images/partner-5.svg" alt="partner-5" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
