import form from "@/src/form";
import {TextArea,TextField} from "@/src/form/input";
import {PasswordField} from "@/src/form/password";
import {Button} from "@/src/form/btn";
import { IForm } from "@/types";


export const Form:IForm = Object.assign(form,{
    TextField,
    TextArea,
    PasswordField,
    Button,
});

export default Form;