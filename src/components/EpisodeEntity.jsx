export default function EpisodeEntity({ episode }) {
  return (
    <div className="grid-item grid-item-1 entity">
      <div className="entity-details">
        <h2>{episode.name}</h2>
        <h5>{episode.date}</h5>
        <div>
          <p>Episode</p>
          <h4>{episode.episode}</h4>
        </div>
        <div>
          <button className="btn-episode">Details</button>
        </div>
      </div>
    </div>
  );
}
