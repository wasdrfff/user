import React from 'react'
import './FourthBlock.css'
import fourthBlock1 from "./fourthBlock1.png"
import fourthBlock2 from "./fourthBlock2.png"
export const FourthBlock=()=>{
    return(
        <div className='fourthBlockWrapper'>
            <div className='fourthBlockContent'>
                <img className='styleImage1' src={fourthBlock1} alt='iqq' />
                <div><hr className='border'/></div>
                <h1 className='fourthBlockTag'>Запись на дегустацию </h1>
                <div><hr className='border'/></div>
                <img className='styleImage2' src={fourthBlock2} alt ='iqq2'/>
                </div>
            <div className='fourthBlockBody'>            
                <span className='fourthBlockBodyText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum.
                    </span>
                    <div className='fourthBlockInputsPosition'>
                        <input className='nameInput' placeholder='Имя'/>
                        <input className='handyInput' placeholder='Телефон'/>
                        </div>
                       <div className='input'>
                        <input className='positionInput' placeholder='Бутик на Невском 103'/>
                        </div>
                    <div className='fourthBlockButton'>
                        <button className='body-button'>Записаться</button>
                    </div>
            </div>
        </div>
    )
}