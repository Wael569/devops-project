function SelectField(props) {
    return (
        <div className="mb-3">
            <label className="form-label">{props.label}</label>
            <select 
            className="form-select"
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
            >
            {props.options.map((opt, idx) => (
                <option key={idx} value={opt}>
                    {opt}
                </option>
            ))}
            </select>
        </div>
    );
}
export default SelectField;