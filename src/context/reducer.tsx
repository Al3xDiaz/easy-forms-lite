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
export default IAction;