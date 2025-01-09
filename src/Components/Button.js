const Button = (props) => {
    const {id, handleEvent, title, className} = props;
    return (
        <button onClick={handleEvent} id={id} className={className}>
            {title}
        </button>
    )
  };
  
  export default Button;
  