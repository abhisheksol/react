import React, { useContext, useReducer } from 'react'
import { abhiContext } from './Usecontext'



function Usereducer() {

    


    const reducer=(state:number,action:any)=>{
       
       if(action.type==='inc'){
            return state+1
       }

       if(action.type==='dec'){
        return state-1
   }
    }

    const [state, dispatch] = useReducer(reducer, 0)

    
    return (
        <div>
  {name}
            <div>
                <button onClick={()=>dispatch({type:'inc'})}> +</button>
                 {state}
                <button onClick={()=>dispatch({type:'dec'})}>-</button>
            </div>
        </div>
    )
}

export default Usereducer