export default function GifCard({ id, title, imgUrl }) {
  return (
    <a href="#" id={id} className="card-container">
      <img alt={title} src={imgUrl}></img>
      <p>{title}</p>
      <button>Give me your heart</button>
    </a>
  );
}
