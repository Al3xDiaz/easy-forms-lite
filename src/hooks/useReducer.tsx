import { IAction } from "../context/reducer";
import { IState } from "../context/context";

export const reducer = (state: IState, action:IAction ):IState => {
    console.log(action.type)
    switch (action.type) {
        case "SET_PROP":
            return {
                ...state,
                data:{
                    ...state,
                    [action.payload.name] : action.payload.value,
                }
            };
        case "SET_EMPTY":
            return {
                data:{},
                formData:new FormData(),
            }
        case "SET_PROP_FORMDATA":
            console.log("before:",state)
            state.formData.delete(action.payload.name)
            Array.from(action.payload.value).forEach(file=>{
                state.formData.append(action.payload.name,file)
            })
            console.log("after:",state)
            return state;
        default:
            return state;
    }
}