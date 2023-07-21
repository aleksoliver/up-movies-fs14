

export const Button = (props) => {
  return (
    <div>
      <button 
      style={{marginRight}}
      className={`"btn btn-primary" cold-md-${props.width}`}onClick={props.onClick} >
      {props.nome}
      </button>
    </div>
  );
};
