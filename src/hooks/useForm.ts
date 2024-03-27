import { useCallback, useContext} from "react"
import context from "../context/context"
import { IState } from "../context/reducer";

interface Response<T>{
    setProp(payload: IState): void;
    value:T|undefined;
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
export function useForm<T>(name:string):Response<T>{
    const {state,dispatch} = useContext(context);

    const setProp= useCallback((payload:IState)=>{
        dispatch && dispatch({
            type:"SET_PROP",
            payload,
        })
    },[dispatch])

    return {
        setProp,
        value:state.data[name] as T,
    }
}

export function useData(){
    const {state} = useContext(context);

    return {
        state
    }
}