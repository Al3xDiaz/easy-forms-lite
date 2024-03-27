import { IContextState } from "./context";

export interface IState {
    name: string;
    value: any;
}

interface ISetAction {
    type: "SET_PROP";
    payload: IState;
}
interface ISetActionFormData {
    type: "SET_PROP_FORMDATA";
    payload: {
        name: string;
        value: FileList;
    };
}

interface ISetActionEmpty{
    type: "SET_EMPTY";
}

export type IAction = ISetAction | ISetActionFormData | ISetActionEmpty;

export const reducer = (state: IContextState, action:IAction ):IContextState => {
    switch (action.type) {
        case "SET_PROP":
            return {
                ...state,
                data:{
                    ...state.data,
                    [action.payload.name] : action.payload.value,
                }
            };
        case "SET_EMPTY":
            return {
                data:{},
                formData:new FormData(),
            }
        case "SET_PROP_FORMDATA":
            state.formData.delete(action.payload.name)
            Array.from(action.payload.value).forEach(file=>{
                state.formData.append(action.payload.name,file)
            })
            return state;
        default:
            return state;
    }
}