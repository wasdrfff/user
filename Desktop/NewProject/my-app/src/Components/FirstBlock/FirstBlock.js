import React from 'react'
import './StyleFirstBlock.css'
export const FirstBlock=()=>{
    return (
        
        <div className='firstBlockWrapper'>
            <div className='headerWrapper'>
                <a className='headerPosition'>Новокузнечный переулок 4/1</a>
                <a className='headerContact'>8(812)123-45-67</a>
            </div>
            <div className='subHeaderWrapper'>
                <a className='subHeaderItemCatalog'>Каталог</a>
                <a className='subHeaderItemDelivery'>Доставка</a>
                <a className='subHeaderItemCollections'>Коллекции</a>
                <a className='subHeaderItemContacts'>Контакты</a>
            </div>
            <div className='firstBlockButtonsWrapper'> 
                <button className='firstBlockButton'>Винная карта</button>
                <button className='firstBlockButton'>Дегустация</button>
            </div>
        </div>
        
    )
}
