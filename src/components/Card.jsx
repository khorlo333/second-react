function Card(props) {
  return (
    <div id="card">
      <h1>{props.title}</h1>
      <img src={props.image} alt="" />
    </div>
  );
}
export default Card;
