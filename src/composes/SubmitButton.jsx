function SubmitButton(props) {
    return (
        <button type="submit" className="btn btn-primary">
            {props.label || "Envoye"}
        </button>
    );
}
export default SubmitButton;