import React from 'react'
import './StyleFifthBlock.css'
import vk from "./Vk.png" 
import youTube from "./YouTube.png"
import faceBook from "./FaceBook.png"
export const FifthBlock=()=>{
    return(
        <div className='fifthBlockWrapper'>
            <div className='headerContent'>
                <span className='textMain'>Главная</span>
                <span className='textCatalog'>Каталог</span>
                <span className='textProviders'>Поставщики</span>
                <span className='textCollections'>Коллекции</span>
                <span className='textTasting'>Дегустация</span>
                <span className='textNewCollection'>Коллекция 2020</span>
                <span className='textContacts'>Контакты</span>
            </div>
            <div id='contacts' className='bodyContent' >
                <span className='bodyMain'><a href='#Main' className='textStyleUrl'>Главная</a></span>
                <span className='bodyNumbers'>8(812)123-45-67</span>
            <div className='images'>
                <a href='youtube.ru'><img className='pictureYouTube' src={youTube} alt='youtube' /></a>
                <a href='vk.com/wasdrfff'><img className='pictureVk' src={vk} alt='vk'/></a>
                <a href='facebook.com'><img className='pictureFaceBook' src={faceBook} alt='facebook'/></a>
            </div>
                <span className='url'>© le-corte.ru</span>
            </div>
        </div>
    )
}