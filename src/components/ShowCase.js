import React from 'react'
import './showCase.css'

function ShowCase() {
    return (
        <div className='show-case-wrapper'>
            {/* titles */}
            <div className='show-case-titles'>
            <h2 className='show-case-title small-sc'>BUILD DAPPS <span className='show-case-title-end'>THE RIGHT WAY</span></h2>
                <h3 className='show-case-sub-title small-sc'>Ship Fast and <span className='show-case-sub-title-end'>Save Money</span></h3>
                <h2 className='show-case-title large-sc'>BUILD DAPPS <span className='show-case-title-end'><br /> THE RIGHT WAY</span></h2>
                <h3 className='show-case-sub-title large-sc'>Ship Fast and <span className='show-case-sub-title-end'><br /> Save Money</span></h3>
            </div>

            {/* <div className='show-case-market-time-saved-wrapper'>
              
            </div> */}
               {/* market time */}
               <div className='show-case-market-time-wrapper'>
                AVERAGE
                <span>GO TO MARKET</span>
                TIME SAVED
                <div className='show-case-market-time-num-wrapper'>
                    <h2 className='show-case-market-time-num'>87</h2>
                    <h3 className='show-case-market-time-mode'>%</h3>
                </div>
            </div>
            {/* saved */}
            <div className='show-case-saved-wrapper'>
                ENGINEERING
                <span>COSTS SAVED</span>
                <div className='show-case-saved-num-wrapper'>
                    <h4 className='show-case-saved-dolor'>$</h4>
                    <h2 className='show-case-saved-num'>86.4</h2>
                    <h4 className='show-case-saved-letter'>M</h4>
                </div>
            </div>
        </div>
    )
}

export default ShowCase
