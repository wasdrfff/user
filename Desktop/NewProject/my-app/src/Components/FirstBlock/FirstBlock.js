import React from 'react'
import './StyleFirstBlock.css'
export const FirstBlock=()=>{
    return (
        <div className='firstBlockWrapper'>
            <div className='headerWrapper'>
                <span className='headerPosition'>Новокузнечный переулок 4/1</span>
                <span className='headerContact'>8(812)123-45-67</span>
            </div>
            <div className='subHeaderWrapper'>
                <span className='subHeaderItemCatalog'> <a href="#catalog">Каталог</a></span>
                <span className='subHeaderItemDelivery'>Доставка</span>
                <span className='subHeaderItemCollections'><a href="#collection">Коллекции</a></span>
                <span className='subHeaderItemContacts'>Контакты</span>
            </div>
            <div className='firstBlockButtonsWrapper'> 
                <button className='firstBlockButton'>Винная карта</button>
                <button className='firstBlockButton'>Дегустация</button>
            </div>
        </div>
        
    )
}
