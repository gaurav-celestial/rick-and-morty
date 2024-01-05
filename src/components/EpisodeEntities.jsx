import { useRef } from "react";
import EpisodeEntity from "./EpisodeEntity";
import { CircularProgress, Pagination } from "@mui/material";
import { useEntity } from "../hooks/useEntity";
import SearchBox from "../ui/SearchBox";
import ErrorBlock from "../ui/ErrorBlock";

export default function EpisodeEntities() {
  const input = useRef();

  const {
    data,
    isPending,
    isError,
    error,
    handleChange,
    searchHandler,
    pageNum,
  } = useEntity(input, "episode");

  let content;

  if (isPending) {
    content = (
      <div className="center spinner">
        <CircularProgress />
      </div>
    );
  }

  if (isError) {
    content = <ErrorBlock info={error.info.error} />;
  }

  if (data) {
    content = (
      <>
        <div className="grid-container-episode">
          {data &&
            data.results.map((entity) => {
              const obj = {
                date: entity.air_date,
                episode: entity.episode,
                name: entity.name,
                url: entity.url,
              };
              return <EpisodeEntity key={entity.id} episode={obj} />;
            })}
        </div>
        <div className="pagination">
          {data && (
            <Pagination
              color="primary"
              page={pageNum}
              onChange={handleChange}
              count={data.info.pages}
            />
          )}
        </div>
      </>
    );
  }

  return (
    <>
      <SearchBox input={input} searchHandler={searchHandler} />
      {content}
    </>
  );
}
