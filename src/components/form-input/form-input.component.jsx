import React from "react";

const FormInput = ({ type, name, handleChange, vlaue, required, labelText }) => {
    return (
        <>
            <label>{labelText}</label>
            <input type={type} name={name} vlaue={vlaue} onChange={handleChange} required={required} />
        </>

    )
}

export default FormInput;