import React from "react";
import './StyleThirdBlock.css'
import rect from "./rect1.png"
import rect1 from "./rect2.png"
import rect2 from "./rect3.png"
export const ThirdBlock=()=>{
    return(
        <div className='lineForHeader'>
        <hr className='line-header'/>
        <div className='thirdBlockWrapper'>
            <div className='left-side'>
                <div className='thirdBlockHeaderContent'>   
                    <p id='collection' className='thirdBlockHeaderText'>Новинки коллекций</p>
                </div>
                <div className='thirdBlockTag'>
                    <h1 className='thirdBlockFirstTagContent'>Март 1980</h1>
                    <h1 className='thirdBlockTwoTagContent'>Урожай Марселя</h1>
                </div>
                <div className='lineBlock'><hr className='line'/></div>
                <div className='thirdBlockBodyContent'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing morbi sodales ac.
                    </p> 
                </div>
                <div className='thirdBlockBodyContentCatalog'>
                    <table id="catalog" className='bodyContentTable'>
                        <tr className='firstString' >
                            <td className='cell'>1980</td>
                            <th className='cellDescription'><p>Colli Euganei Bianco Ca' Lustra 1980</p> 
                            <p className='description'>Красочная бутылка вина из Марселя</p></th>
                        </tr>
                        <tr className='secondString'>
                            <td className='cell'>1980</td>
                            <th className='cellDescription'><p>Colli Euganei Bianco Ca' Lustra 1980</p>
                            <p className='description'>Красочная бутылка вина из Марселя</p></th>
                        </tr>
                        <tr className='threeString'>
                            <td className='cell'>1980</td>
                            <th className='cellDescription'><p>Colli Euganei Bianco Ca' Lustra 1980</p>
                            <p className='description'>Красочная бутылка вина из Марселя</p></th>
                        </tr>

                    </table>
                </div>
                <div className='bodyContentText'>
                    <p className='contentText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing morbi sodales ac.

                    </p>
                </div>
                <div className='bodyContentButton'>
                    <button className='contentButton'><p className='buttonText'>Узнать подробнее
                        </p>
                    </button>
                </div>
            </div>
            <div className='right-side'>
                <img className='image' src={rect} alt='wine'/>
               <div className='position'>
                <img className='image2' src={rect1} alt='wine'/>
                <img className='image3' src={rect2} alt='wine'/>
                </div>
            </div>
        </div>
        </div>
    )
}