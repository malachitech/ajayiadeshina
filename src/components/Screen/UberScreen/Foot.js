import React from 'react'
import {RiFileList3Fill} from 'react-icons/ri'
import {MdHomeFilled} from 'react-icons/md'
import {BsGrid3X3GapFill} from 'react-icons/bs'
import {IoPerson} from 'react-icons/io5'
import "./UberScreen.css"
function Foot() {
    const footlist = [
        {
            id: 1,
            logo: MdHomeFilled,
            name: 'Home',
        },
        {
            id: 2,
            logo: BsGrid3X3GapFill,
            name: 'Services',
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
    
        // console.log(footlist, "the list")
    
        // const makeBold = footlist.map(foot => {
        //     if(foot.name == "Activity"){
            
        //     }
        // })
    
  return (
    <div className='footlistCont'>
        
        <div className='footlist'>
        {
            footlist && footlist.map(footlis => (
                <div key={footlis.id}>
                    <div className='footlistItems'>
                        
                        
                        
                                    <div className={`${footlis.name === "Activity" ? "activitylogo" : "logo"}`}>
                                        <footlis.logo />
                                    </div>
                                    <div className={`${footlis.name === "Activity" ? "activityname" : "name"}`}>
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
            height: 5,
            textAlign: 'center',
            marginLeft: 120, marginRight: 120, marginBottom: 10, border: 'none', borderRadius: "20px"
        }}/>
    </div>
    
    </div>
    
  )
}

export default Foot