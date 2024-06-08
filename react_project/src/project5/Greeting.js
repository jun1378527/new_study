const Greeting = props => {
  return (
    <div>
      <h1>안녕하세요~!, {props.name}!</h1>
      <p>{props.message}</p>
    </div>
  );
};

export default Greeting;
