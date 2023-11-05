import form from "./form";
import {TextArea,TextField} from "./form/input";
import {PasswordField} from "./form/password";
import {Button} from "./form/btn";

export interface IForm extends React.FC<any>{
    TextField:React.FC<any> ;
    TextArea:React.FC<any> ;
    PasswordField:React.FC<any> ;
    Button:React.FC<any> ;
}

export const Form:IForm = Object.assign(form,{
    TextField,
    TextArea,
    PasswordField,
    Button,
});

export default Form;