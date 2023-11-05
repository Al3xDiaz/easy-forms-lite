import form from "@/src/form";
import {TextArea,TextField} from "@/src/form/input";
import {PasswordField} from "@/src/form/password";
import {Button} from "@/src/form/btn";

interface IForm extends React.FC<any>{
    TextField:React.FC<any> ;
    TextArea:React.FC<any> ;
    PasswordField:React.FC<any> ;
    Button:React.FC<any> ;
}
const Form:IForm = Object.assign(form,{
    TextField,
    TextArea,
    PasswordField,
    Button,
});

export default Form;