import React from 'react'
import {RiFileList3Fill} from 'react-icons/ri'
import {GrHomeRounded} from 'react-icons/gr'
import {BsGrid3X3GapFill} from 'react-icons/bs'
import {IoPerson} from 'react-icons/io5'
import "./UberScreen.css"
function Foot() {
    const footlist = [
        {
            id: 1,
            logo: GrHomeRounded,
            name: 'Home',
        },
        {
            id: 2,
            logo: BsGrid3X3GapFill,
            name: 'Service',
        },
        {
            id: 3,
            logo: RiFileList3Fill,
            name: 'Activity',
        },
        {
            id: 4,
            logo: IoPerson,
            name: 'Account',
        }
    ]
  return (
    <div className='footlistCont'>
        
        <div className='footlist'>
        {
            footlist && footlist.map(footlis => (
                <div key={footlis.id}>
                    <div className='footlistItems'>
                        
                        <div className='logo'>
                            <footlis.logo />
                        </div>
                        <div className='name'>
                            {footlis.name}
                        </div>
                    </div>
                    
                </div>
            ))
        }
    </div>
    <div >
        <hr  style={{
            color: 'black',
            backgroundColor: "black",
            height: 3,
            textAlign: 'center',
            marginLeft: 130, marginRight: 130
        }}/>
    </div>
    
    </div>
    
  )
}

export default Foot