import { useCallback, useContext } from "react"
import context from "./context"
import { IState } from "./reducer";


export const useSite = () => {
    const {state,dispatch} = useContext(context);

    const setProp= useCallback((payload:IState)=>{
        dispatch && dispatch({
            type:"SET_PROP",
            payload,
        })
    },[state,dispatch])

    return {
        setProp,
        state,
    }}
export default useSite;