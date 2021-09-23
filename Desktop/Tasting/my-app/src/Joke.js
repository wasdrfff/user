import React from 'react'
function Joke({question,punchLine}){
return(

            <div style={{display:question && punchLine ? 'block' : 'none'}}>
                <h3>
                    Вопрос:{question} 
                </h3>
                <h3>
                    Ответ:{punchLine}
                </h3>
                <hr/>
            </div>
        )
    }
            export default Joke