export default function CharacterEntity({ char }) {
  return (
    <div className="grid-item grid-item-1 entity">
      <img src={char.image} alt="rick" height={250} />
      <div className="entity-details">
        <h2>{char.fullName}</h2>
        <h5>{char.desc}</h5>
        <div>
          <p>Last known location</p>
          <h4>{char.lastKnownLocation}</h4>
        </div>
        <div>
          <p>First seen in</p>
          <h4>{char.firstSeenIn}</h4>
        </div>
      </div>
    </div>
  );
}
