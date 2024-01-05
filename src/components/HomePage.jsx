import { NavLink } from "react-router-dom";
import CharacterEntities from "./CharacterEntities";
import LocationEntities from "./LocationEntities";
import EpisodeEntities from "./EpisodeEntities";

export default function HomePage({ variant }) {
  return (
    <div className="entities">
      <div className="entity-btns">
        <NavLink
          to="/characters"
          className={({ isActive }) =>
            isActive ? "active-btn" : "inactive-btn"
          }
        >
          <button>Characters</button>
        </NavLink>
        <NavLink
          to="/locations"
          className={({ isActive }) =>
            isActive ? "active-btn" : "inactive-btn"
          }
        >
          {" "}
          <button>Location</button>
        </NavLink>
        <NavLink
          to="/episodes"
          className={({ isActive }) =>
            isActive ? "active-btn" : "inactive-btn"
          }
        >
          {" "}
          <button>Episodes</button>
        </NavLink>
      </div>
      {variant === "character" && <CharacterEntities />}
      {variant === "location" && <LocationEntities />}
      {variant === "episode" && <EpisodeEntities />}
    </div>
  );
}
