function Counter(props) {
  return (
    <>
      <button onClick={props.onClick}>{props.title}</button>
    </>
  );
}

export default Counter;
