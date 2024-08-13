import { FormFieldProps } from "./Type";
import { FC } from "react";
const FormField:FC<FormFieldProps> = ({
    register,name,error,type,placeholder,valueAsNumber,required

}) =>{

    return(
        <>
        <input type={type} placeholder={placeholder} required={required} {...register(name,{valueAsNumber})}/>
        {error && <span>{error?.message}</span>}
        </>

      
    )
};
export default FormField