import React from 'react'
import Clock from './images/clock.png'
import Table from './Table'
import Prise from './Prise'

const Content2 = () => {
  return (
    <div className='CWrapper'>
      <div className='TheBox'>
        <div className='line'></div>
        <p style={{fontSize: '18px'}}>ᲢᲣᲠᲜᲘᲠᲔᲑᲘ ᲓᲐ ᲡᲐᲢᲔᲚᲘᲢᲔᲑᲘ</p>
        </div>
        <div className='C1Hdr'>
          <div className='C2banner'>
        
          <div style={{margin:'10px'}}>სერიის ფარგლებში, ყოველდღიურად გაიმართება 3 ივენთი:</div>
          <img src={Clock} alt='clock'></img>
          <div className='C2bannerText'>
          <p style={{margin:'10px'}}>* ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან.</p>
          <p style={{margin:'10px', width:'410px', textAlign:'center'}}>ტურნირების სრული განრიგის სანახავად გადადი პოკერის ლობიში</p>
          </div>
          <div className='C2bannerTextM'>
          <p>* ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან.</p>
          <p style={{margin:'10px', textAlign:'center'}}>ტურნირების სრული განრიგის სანახავად გადადი პოკერის ლობიში</p>
          </div>
          <a className='pokerlob' href='google.com'>პოკერის ლობი</a>
          
          </div>
          

        </div>
        <div className='PrizeTable'>
            <Table></Table>
        </div>
        <div style={{marginTop:'50px'}}><Prise></Prise></div>

        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
          <p>* ლიდერბორდის შედეგები განახლდება <span style={{color:'orange',textDecoration: 'underline'}}>პოკერის ლობიში</span>
          </p>
          <p>* სატურნირო ლიდერბორდის ქულების დათვლაში არ მონაწილეობს ფრიროლები და სატელიტები</p>
          </div>
        <div className='Turnirbox'>
          <div className='Turnir'>
            <div className='Turnir1'>
              <div className='isLeft'>
                <p style={{fontWeight:'bold'}}>Holdem Highrollers</p>
                <p className='Tmoney'>50 000 ₾</p>
              </div>
              <div className='isRight'>
                <p style={{fontWeight:'bold'}}>ბაი-ინი - 550₾</p>
                <p className='Tdate'>27 აპრილი</p>
              </div>
            </div>
            <div className='Turnir2'>
            <div className='isLeft'>
                <p style={{fontWeight:'bold'}}>Holdem Highrollers</p>
                <p className='Tmoney'>50 000 ₾</p>
              </div>
              <div className='isRight'>
                <p style={{fontWeight:'bold'}}>ბაი-ინი - 550₾</p>
                <p className='Tdate'>28 აპრილი</p>
              </div>
            </div>
            <div className='Turnir3'>
              <div className='isLeft'>
                <p style={{fontWeight:'bold'}}>Main Events</p>
                <p className='Tmoney'>150 000₾</p>
              </div>
              <div className='isRight3'>
                <p style={{fontWeight:'bold'}}>ბაი-ინი - 550₾</p>
                <p className='Tdate3'>29 აპრილი</p>
              </div>
            </div>
          </div>
          <div className='Tfooter'>
          * სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს და ფინალურ ეტაპზე, The Lord of the Rings ტურნირზე, იბრძოლებენ The Festival in Malta-ს საგზურის მისაღებად.
          </div>
          </div>
          <div className='TheBox' style={{borderRadius:'12px',marginTop:'30px'}}>
            <div className='line'></div>
            <p style={{fontSize:'18px'}}>ᲓᲐᲛᲐᲢᲔᲑᲘᲗ ᲨᲔᲓᲒᲔᲑᲐ, ᲥᲔᲨᲒᲔᲘᲛᲘᲡ, ᲢᲣᲠᲜᲘᲠᲔᲑᲘᲡ ᲓᲐ ᲡᲞᲘᲜ ᲞᲝᲙᲔᲠᲘᲡ 12 SIDE ᲚᲘᲓᲔᲠᲑᲝᲠᲓᲘ</p>
            <p style={{fontSize: '14px'}}>* Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის ლობიში.</p>
        </div>
    </div>
  )
}

export default Content2