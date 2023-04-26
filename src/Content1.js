import React from 'react'
import Eicon from './images/example-icon.png'
import Table from './Table'
import Prise from './Prise'

const Content1 = () => {
    
  return (

    <div className='CWrapper'>
        <div className='TheBox'>
        <div className='line'></div>
        <p style={{fontSize: '18px'}}>1 ₾ ᲠᲔᲘᲙᲘ = 1 ᲥᲣᲚᲐᲡ1</p>
        </div>
        <div className='C1Hdr'>
        ჰოლდემის TOP20 ლიდერბორდი
        <img src={Eicon} alt=''></img>
        </div>
        <div className='PrizeTable'>
            <Table></Table>
        </div>
        <div><Prise></Prise></div>
        <div className='C1Hdr'>
        TOP20 ლიდერბორდი ჰოლდემში
        <img src={Eicon} alt=''></img>
        </div>
        <div className='PrizeTable'>
            <Table></Table>
        </div>
        <div><Prise></Prise></div>
        <div style={{display:'flex', justifyContent:'center'}}><p>* ლიდერბორდის შედეგები განახლდება <span style={{color:'orange',textDecoration: 'underline'}}>პოკერის ლობიში</span></p></div>

        <div className='TheBox' style={{borderRadius:'12px'}}>
            <div className='line'></div>
            <p style={{fontSize:'18px'}}>ᲓᲐᲛᲐᲢᲔᲑᲘᲗ ᲨᲔᲓᲒᲔᲑᲐ, ᲥᲔᲨᲒᲔᲘᲛᲘᲡ, ᲢᲣᲠᲜᲘᲠᲔᲑᲘᲡ ᲓᲐ ᲡᲞᲘᲜ ᲞᲝᲙᲔᲠᲘᲡ 12 SIDE ᲚᲘᲓᲔᲠᲑᲝᲠᲓᲘ</p>
            <p style={{fontSize: '14px'}}>* Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის ლობიში.</p>
        </div>
    

    </div>
  )
}

export default Content1