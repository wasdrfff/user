import React from 'react'
import './StyleFirstBlock.css'
export const FirstBlock=()=>{
    return (
        
        <div className='firstBlockWrapper'>
            <div className='headerWrapper'>
                <p className='headerPosition'>Новокузнечный переулок 4/1</p>
                <p className='headerContact'>8(812)123-45-67</p>
            </div>
            <div className='subHeaderWrapper'>
                <p className='subHeaderItemCatalog'>Каталог</p>
                <p className='subHeaderItemDelivery'>Доставка</p>
                <p className='subHeaderItemCollections'>Коллекции</p>
                <p className='subHeaderItemContacts'>Контакты</p>
            </div>
            <div className='firstBlockButtonsWrapper'> 
                <button className='firstBlockButton'>Винная карта</button>
                <button className='firstBlockButton'>Дегустация</button>
            </div>
        </div>
        
    )
}
