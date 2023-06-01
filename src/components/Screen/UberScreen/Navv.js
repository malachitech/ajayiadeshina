import React from 'react'
import {BsTelegram, BsBatteryHalf}  from 'react-icons/bs'
// import {GiNetworkBars}  from 'react-icons/gi'
import {BiWifi2}  from 'react-icons/bi'
import {CgSignal} from 'react-icons/cg'

import './UberScreen.css'

function Navv() {
  return (
    <div className='navv'>
        <div className='left'>
            <div className='time'>
                11:00
            </div>
            <div className='apps'>
                <div className='telegram'>
                    <BsTelegram />
                </div>
            </div>
        </div>

        <div className='right'>
            <div className='connect'>
                <div className='network'>
                    <CgSignal />
                </div>
                <div className='wifi'>
                    <BiWifi2 />
                </div>
                <div className='battery'>
                    <BsBatteryHalf />
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default Navv