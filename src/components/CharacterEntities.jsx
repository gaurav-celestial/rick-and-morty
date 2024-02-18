import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import CharacterEntity from "./CharacterEntity";
import { CircularProgress } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ErrorBlock from "../ui/ErrorBlock";
import SearchBox from "../ui/SearchBox";
import { useInfiniteEntity } from "../hooks/useInfiniteEntity";

export default function CharacterEntities() {
  const input = useRef();

  const { data, status, error, fetchNextPage, hasNextPage, searchHandler } =
    useInfiniteEntity(input);

  const { ref, inView } = useInView();

  const handleClick = function () {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  let content;

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (status === "pending") {
    // changeClassName("entities-full");
    content = content = (
      <div className="center spinner">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    // changeClassName("entities-full");
    content = <ErrorBlock info={error.info.error} />;
  }

  if (data) {
    // changeClassName("entities");
    content = (
      <>
        <div className="grid-container">
          {data?.pages.map((page) =>
            page.results.map((entity, index) => {
              const obj = {
                image: entity.image,
                fullName: entity.name,
                desc: entity.type,
                lastKnownLocation: entity.location.name,
                firstSeenIn: entity.origin.name,
              };
              if (page.results.length === index + 1) {
                return <CharacterEntity key={entity.id} char={obj} />; //for ref
              }
              return <CharacterEntity key={entity.id} char={obj} />;
            })
          )}
        </div>
        <p className="loading-text" ref={ref}>
          {!hasNextPage ? "Looks like there's nothing more" : "Loading"}
        </p>
      </>
    );
  }

  return (
    <>
      <ArrowUpwardIcon className="arrowUp" onClick={handleClick} />
      <SearchBox input={input} searchHandler={searchHandler} />
      {content}
    </>
  );
}
