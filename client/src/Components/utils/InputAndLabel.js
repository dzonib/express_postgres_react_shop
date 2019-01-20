import React from 'react'

export const InputAndLabel = ({name, type, onChange, value, errors}) => {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
    return <>
        <label htmlFor={name}>{capitalizedName}</label>
        <input  type={type} value={value} name={name} id={name} onChange={onChange} />
        {errors && <small>{errors}</small>}
    </> 
}
   