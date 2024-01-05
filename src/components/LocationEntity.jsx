export default function LocationEntity({ location }) {
  return (
    <div className="grid-item grid-item-1 entity">
      <div className="entity-details">
        <h2>{location.name}</h2>
        <h5>{location.dimension}</h5>
        <div>
          <p>Type</p>
          <h4>{location.type}</h4>
        </div>
        <div>
          <button className="btn-episode">Details</button>
        </div>
      </div>
    </div>
  );
}
