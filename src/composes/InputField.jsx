function InputField(props) {
    return (
        <div className="mb-3">
            <labbel className="form-label">{props.label}</labbel>
            <input type={props.type || "text"} 
            className="form-control"
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
            />
        </div>
    );
} 
export default InputField;