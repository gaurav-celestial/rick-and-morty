import { useRef } from "react";
import LocationEntity from "./LocationEntity";
import { CircularProgress, Pagination } from "@mui/material";
import { useEntity } from "../hooks/useEntity";
import SearchBox from "../ui/SearchBox";
import ErrorBlock from "../ui/ErrorBlock";

export default function LocationEntities() {
  const input = useRef();

  const {
    data,
    isPending,
    isError,
    error,
    handleChange,
    searchHandler,
    pageNum,
  } = useEntity(input, "location");

  let content;

  if (isPending) {
    content = content = (
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
        <div className="grid-container-location">
          {data &&
            data.results.map((entity) => {
              const obj = {
                dimension: entity.dimension,
                name: entity.name,
                residents: entity.residents,
                type: entity.type,
                url: entity.url,
              };
              return <LocationEntity key={entity.id} location={obj} />;
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
