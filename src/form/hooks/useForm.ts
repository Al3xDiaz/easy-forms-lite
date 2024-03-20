import { useCallback, useContext, useEffect } from "react"
import context from "../../context/context"
import { IState } from "../../context/reducer";

interface Response<T>{
    setProp(payload: IState): void;
    value:T;
}

export function useFormData(name:string){
    const {state,dispatch} = useContext(context);

    const appendData= useCallback((payload:{name:string,value:FileList})=>{
        dispatch && dispatch({
            type:"SET_PROP_FORMDATA",
            payload,
        })
    },[dispatch])

    return {
        value:state.formData.getAll(name),
        appendData,
    }
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
        value:state.data[payload.name] as T,
    }
}