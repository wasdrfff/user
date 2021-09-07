import React from 'react'
import './StyleSubHeader.css'
const SubHeader=()=>{
    return(
        <div className='subHeaderWrapper'>
            <a className='subHeaderItems'>Каталог</a>
            <a className='subHeaderItems'>Доставка</a>
            <a className='subHeaderItems'>Коллекции</a>
            <a className='subHeaderItems'>Контакты</a>
        </div>
    )
}
export default SubHeader