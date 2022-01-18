import React,{useState} from 'react';

const LabeledInput = ({ id,value,label,help,placeholder,onChange,type="text" }) => {
    //TODO: Initialize Here

    const [_value,updateValue]= useState(value);

    if(!label) label =id;
    if(!placeholder) placeholder =label;
    if(!help) help=label;



    const handleValueChange=(e)=>{
      //  console.log(e.target.id, e.target.value);
        updateValue(e.target.value);
        onChange(id,e.target.value);
    }

    return (
        <div className="form-group">
            <label htmlFor="{id}">{label}</label>
            <input
                type={type} 
                className="form-control"  aria-describedby="emailHelp"
                id={id}  
                value={_value}
                onChange={handleValueChange}
                placeholder={placeholder} />
            <small id={`${id}_help`} className="form-text text-muted">{help}</small>
        </div>
    );
}

export default LabeledInput;