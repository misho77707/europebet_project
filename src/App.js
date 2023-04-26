import './App.css';
import Content1 from './Content1';
import Slider from './Slider';
import banner from './images/banner.jpg'
import { useState } from 'react';
import Arrow from './images/Vector Smart Object copy 22.png'
import Content2 from './Content2';
import Content3 from './Content3';

function App() {
    const [Info1,SetInfo1]=useState(false)
    const [Info2,SetInfo2]=useState(false)
    const [Info3,SetInfo3]=useState(false)
  const [activeButton, setActiveButton] = useState('button1');

  const handleClick = (button) => {
    setActiveButton(button);
  };
  return (
    <div className="App">
      <div className='sign'>
        <div className='sign_left'>&nbsp;</div>
        <div className='sign_right'>
        <div className='signup'>Sign up</div>
        <div className='signin'>Sign in</div>

        </div>
      </div>
      <div className='Banner'>
        <img src={banner} alt='a'/>
      </div>
     <h3 class='Title'>
      <span id='bigTitle'>მოიპოვე მრავალფეროვანი პრიზები და 10 საგზურიდან ერთ-ერთი</span>
      <span id='smallTitle'>მოხვდი პოკერის ფესტივალზე მალტაში</span>
     </h3>

      <div className='BTNS'>

      <div id='Bt1' className={activeButton === 'button1' ? 'activeBtn' : 'NotActiveBtn'} onClick={() => handleClick('button1')}>
          <div className='BtnItem'>
            <div style={{fontSize:'12px'}}>1 - 29 აპრილი</div>
            <div style={{fontSize:'16px'}}>Cash Games</div>
          </div>
        </div>
        <div id='Bt2' className={activeButton === 'button2' ? 'activeBtn' : 'NotActiveBtn'} onClick={() => handleClick('button2')}>
          <div className='BtnItem'>
              <div style={{fontSize:'12px'}}>13 - 29 აპრილი</div>
              <div style={{fontSize:'16px'}}>Spring Series</div>
            </div>
        </div>
        <div id='Bt3' className={activeButton === 'button3' ? 'activeBtn' : 'NotActiveBtn'} onClick={() => handleClick('button3')}>
          <div className='BtnItem'>
              <div style={{fontSize:'12px'}}>30 აპრილი</div>
              <div style={{fontSize:'16px'}}>Final Stage</div>
            </div>
        </div>
      </div>
        
        {activeButton==='button1' ? <Content1></Content1>:<></>}
        {activeButton==='button2' ? <Content2></Content2>:<></>}
        {activeButton==='button3' ? <Content3></Content3>:<></>}

        <div className='Infoheader'>წესები და პირობები</div>
        
        <div className='INFOS'>
            <div className='InfoBox' onClick={()=>SetInfo1(!Info1)}>
                {Info1 ?
                <div className='InfoBar'><div>როდის იწყება და რა ფორმატით გაიმართება აქცია?</div><img style={{ transform: 'scaleY(-1)'}} className='Arrow' src={Arrow} alt='Arrow1'></img></div>
                :
                <div className='InfoBar'><div>როდის იწყება და რა ფორმატით გაიმართება აქცია?</div><img className='Arrow' src={Arrow} alt='Arrow1'></img></div>
                }
             </div>
            {Info1 ? <p>როდის იწყება და რა ფორმატით გაიმართება აქცია</p>:''}

            <div className='InfoBox' onClick={()=>SetInfo2(!Info2)}>
            {Info2 ?
                <div className='InfoBar'><div>როგორ მივიღო აქციაში მონაწილეობა?</div><img style={{ transform: 'scaleY(-1)'}} className='Arrow' src={Arrow} alt='Arrow1'></img></div>
                :
                <div className='InfoBar'><div>როგორ მივიღო აქციაში მონაწილეობა?</div><img className='Arrow' src={Arrow} alt='Arrow1'></img></div>
                }</div>
            {Info2 ? <p>როდის იწყება და რა ფორმატით გაიმართება აქცია</p>:''}
            <div className='InfoBox' onClick={()=>SetInfo3(!Info3)}>
                {Info3 ?
                <div className='InfoBar'><div>სხვადასვა</div><img style={{ transform: 'scaleY(-1)'}} className='Arrow' src={Arrow} alt='Arrow1'></img></div>
                :
                <div className='InfoBar'><div>სხვადასვა</div><img className='Arrow' src={Arrow} alt='Arrow1'></img></div>
                }</div>
            {Info3 ? <p>როდის იწყება და რა ფორმატით გაიმართება აქცია</p>:''}
        </div>

        <div className='R1'>მსგავსი აქციები</div>

        
        <Slider></Slider>
        <div className='footer'>
          <a href='google.com'>ითამაშე</a>
        </div>



    </div>
  );
}

export default App;
