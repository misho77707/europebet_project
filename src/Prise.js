import React from 'react'
import Plane from './images/travel-icon-sm.png'
import Ticket from './images/ticket-icon-sm.png'
import Voucher from './images/Voucher.png'

const Prise = () => {
  return (
    <div className='PraiseBox'>
         
        <div className='PraiseBoxContent'>
            <div className='line1'></div>
            <img src={Plane} alt='plane' style={{opacity:0.4}}></img>
            <div style={{width: 'calc(9% - 50px)'}}></div>
            <p>The Festival in Malta-ს საგზური</p>  
        </div>

        <div className='PraiseBoxContent'>
            <div className='line1'></div>
            <img src={Ticket} alt='Ticket'></img>
            <div style={{width: 'calc(10% - 50px)'}}></div>
            <p>სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The Festival in Malta-ს საგზური</p>  
        </div>
        

        <div className='PraiseBoxContent'>
        <div className='line1'></div>
        <img src={Voucher} alt='Voucher' ></img>
        <div style={{width: 'calc(12% - 50px)'}}></div>
        <p>ტექნიკის მაღაზიის ვაუჩერი</p>  
        </div>

    </div>

  )
}

export default Prise