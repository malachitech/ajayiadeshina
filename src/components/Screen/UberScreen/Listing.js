import React from 'react'
import car from "../../images/uber car 1.png"
import {MdOutlineKeyboardArrowRight}  from 'react-icons/md'
function Listing() {
    const list = [
        {
            id: 8,
            title: '10 Alimosho Rd',
            date: 'May 25 5:25 PM',
            price: '₦4000 '
        },
        {
            id: 7,
            title: 'Ikoyi 106104',
            date: 'May 25 5:33AM',
            price: '₦7500 '
        },
        {
            id: 6,
            title: '10 Alimosho Rd',
            date: 'May 24 9:30 PM',
            price: '₦8000 '
        },
        {
            id: 5,
            title: 'Ikoyi 106104',
            date: 'May 24 5:20AM',
            price: '₦6000 '
        },
        {
            id: 4,
            title: '10 Alimosho Rd',
            date: 'May 23 9:10 PM',
            price: '₦7500'
        },
        {
            id: 3,
            title: 'Ikoyi 106104',
            date: 'May 23 5:41AM',
            price: '₦6500'
        },
        {
            id: 2,
            title: '10 Alimosho Rd',
            date: 'May 22 8:34 PM',
            price: '₦7500 '
        },
        {
            id: 1,
            title: 'Ikoyi 106104',
            date: 'May 22 5:30 AM',
            price: '₦7000'
        },
          
        
        // {
        //     id: 9,
        //     title: '24b Eric Moore Street ',
        //     date: 'May 30 9:00 AM',
        //     price: '₦4200 '
        // },
        // {
        //     id: 10,
        //     title: '12 Gloryfield Avenue',
        //     date: 'May 30 5:10 PM',
        //     price: '₦9700'
        // },
    ]
  return (
    <div>
        {
            list && list.map(lis => (
                <div key={lis.id}>
                <div  className='listsCont'>
                    <div className='lists'>
                        <div className='imag'>
                            <img src={car} alt='the' />
                        </div>

                        <div  className='listsItemsCont'>
                        
                            <div className='listItems'>
                                <div className='title'>
                                    {lis.title}
                                </div>
                                <div className='date'>
                                    {lis.date}
                                </div>
                                <div className='price'>
                                    {lis.price}
                                </div>
                            </div>

                            
                        </div>

                        
                    </div>
                    <div className='rightarrow'>
                        <MdOutlineKeyboardArrowRight />
                    </div>
                        
                    
                </div>

                <hr style={{
                    marginLeft: "25%",
                    backgroundColor: "rgba(236, 236, 236)",
                    border: 'none',
                    height: 1,
                }}/>
                </div>
                
            ))
        }
    </div>
  )
}

export default Listing