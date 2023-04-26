import React from 'react';
import Vicon from './images/Voucher.png'
const Table=() =>{
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr style={{boxShadow: 'none'}}>
            <th>ადგილი</th>
            <th><img src={Vicon} alt='Voucher' style={{paddingRight:'5px'}}></img>ვაუჩერი</th>
            <th>პრიზი</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><div className='TableNum'>1</div></td>
            <td>Row 1, Column 2</td>
            <td>Row 1, Column 3</td>
          </tr>
          <tr>
            <td><div className='TableNum'>2</div></td>
            <td>Row 2, Column 2</td>
            <td>Row 2, Column 3</td>
          </tr>
          <tr>
            <td><div className='TableNum'>3</div></td>
            <td>Row 3, Column 2</td>
            <td>Row 3, Column 3</td>
          </tr>
          <tr>
            <td><div className='TableNum'>4</div></td>
            <td>Row 3, Column 2</td>
            <td>Row 3, Column 3</td>
          </tr>
          <tr>
            <td><div className='TableNum'>5</div></td>
            <td>3, Column 2</td>
            <td>Row 3, Column 3</td>
          </tr>
          <tr>
            <td><div className='TableNum'>6</div></td>
            <td>Row 3, Column 2</td>
            <td>Row 3, Column 3</td>
          </tr>
          <tr>
            <td><div className='TableNum'>7</div></td>
            <td>Row 3, Column 2</td>
            <td>Row 3, Column 3</td>
          </tr>
          <tr>
            <td><div className='TableNum'>8</div></td>
            <td>Row 3, Column 2</td>
            <td>Row 3, Column 3</td>
          </tr>
          <tr>
            <td><div className='TableNum'>9</div></td>
            <td>Row 3, Column 2</td>
            <td>Row 3, Column 3</td>
          </tr>
          <tr>
            <td><div className='TableNum'>10</div></td>
            <td>Row 3, Column 2</td>
            <td>Row 3, Column 3</td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}

export default Table;
