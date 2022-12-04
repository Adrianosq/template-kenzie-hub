import { StyledDiv } from "./style";

export function Input({id, label, type, placeholder, disabled, register, errors}){
    return(
        <StyledDiv>
            <label className="labelForm" htmlFor={id}>{label}</label>
            <input className="inputForm" id={id} type={type} placeholder={placeholder} disabled={disabled} {...register} />
            {errors}
        </StyledDiv>
    )
}