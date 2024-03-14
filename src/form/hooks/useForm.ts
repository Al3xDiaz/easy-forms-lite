import { useCallback, useContext, useEffect } from "react"
import context from "../formProvider/context"
import { IState } from "../formProvider/reducer";

interface Response<T>{
    setProp(payload: IState): void
    value:T;
}

export function useForm<T>(payload:IState):Response<T>{
    const {state,dispatch} = useContext(context);

    const setProp= useCallback((payload:IState)=>{
        dispatch && dispatch({
            type:"SET_PROP",
            payload,
        })
    },[dispatch])

    useEffect(()=>{
        setProp(payload)
    },[])

    return {
        setProp,
        value:state[payload.name] as T,
    }
}