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
    const getProp= useCallback(function<T>(name:string){
        let response: T;
        try {
            response = state[name] as T
            return response;
        } catch (error) {
            return undefined;
        }
    },[state])

    return {
        getProp,
        setProp,
        state,
    }}
export default useSite;