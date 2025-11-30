function CheckboxField(props) {
    return (
        <>
            <input 
                type="checkbox"
                className="form-check-input"
                checked={props.checked}
                onChange={(e) => props.onChange(e.target.checked)} 
            />
            <label className="form-check-label">
                {props.label}
            </label>   
        </>    
    
    );
}

export default CheckboxField;
