import { useCallback, useContext, useEffect, useRef } from "react"
import context from "@/src/form/formProvider/context"
import { IState } from "@/src/form/formProvider/reducer";


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