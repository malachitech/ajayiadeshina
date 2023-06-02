import React from 'react'
import car from "../../images/uber car 1.png"
import {MdOutlineKeyboardArrowRight}  from 'react-icons/md'
function Listing() {
    
        const list = [
            // {
            //     id: 8,
            //     title: '10 Alimosho Rd',
            //     date: 'May 25·5:25PM',
            //     price: '4000.00'
            // },
            // {
            //     id: 7,
            //     title: 'Ikoyi 106104',
            //     date: 'May 25·5:33AM',
            //     price: '7500.00'
            // },
            // {
            //     id: 6,
            //     title: '10 Alimosho Rd',
            //     date: 'May 24·9:30PM',
            //     price: '8000.00'
            // },
            // {
            //     id: 5,
            //     title: 'Ikoyi 106104',
            //     date: 'May 24·5:20AM',
            //     price: '6000.00'
            // },
            // {
            //     id: 4,
            //     title: '10 Alimosho Rd',
            //     date: 'May 23·9:10PM',
            //     price: '7500.00'
            // },
            // {
            //     id: 3,
            //     title: 'Ikoyi 106104',
            //     date: 'May 23·5:41AM',
            //     price: '6500.00'
            // },
            
            // {
            //     id: 2,
            //     title: '10 Alimosho Rd',
            //     date: 'May 22·8:34PM',
            //     price: '7500.00'
            // },
            // {
            //     id: 1,
            //     title: 'Ikoyi 106104',
            //     date: 'May 22·5:30AM',
            //     price: '7000.00'
            // },
            {
                id: 10,
                title: '12 Gloryfield Avenue',
                date: 'May 30·5:10PM',
                price: '9700.00'
            },
            {
                id: 9,
                title: '24b Eric Moore Street ',
                date: 'May 30·9:00AM',
                price: '4200.00'
            },
            {
                id: 11,
                title: '33b Mobolaji Johnson Ave',
                date: 'May 26·4:44PM',
                price: '0.00 · Canceled' 
            },
            {
                id: 8,
                title: '10 Alimosho Rd',
                date: 'May 25·5:25PM',
                price: '4000.00'
            },
            {
                    id: 7,
                    title: 'Ikoyi 106104',
                    date: 'May 25·5:33AM',
                    price: '7500.00'
                },
                {
                    id: 6,
                    title: '10 Alimosho Rd',
                    date: 'May 24·9:30PM',
                    price: '8000.00'
                },
                {
                    id: 5,
                    title: 'Ikoyi 106104',
                    date: 'May 24·5:20AM',
                    price: '6000.00'
                },
                {
                    id: 4,
                    title: '10 Alimosho Rd',
                    date: 'May 23·9:10PM',
                    price: '7500.00'
                },
            
        ]
  return (
    <div>
    <hr style={{
                    marginLeft: "25%",
                    backgroundColor: "rgba(236, 236, 236)",
                    border: 'none',
                    height: 1,
                }}/>
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
                                    &#8358;{lis.price}
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