export default function Card(props) {
  console.log(props);
  console.log(props.content);
  return (
    <div className="card col-2">
      <div>
        <img src={props.img} alt="#" />
      </div>
      <div className="descriptCard">
        <p>{props.content}</p>
      </div>
    </div>
  );
}
