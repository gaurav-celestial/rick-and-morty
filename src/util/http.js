export const fetchEntities = async function ({
  signal,
  searchTerm,
  pageNum,
  type,
  pageParam,
}) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/${type}/?page=${pageNum}&${
      searchTerm ? "name=" + searchTerm : ""
    }`,
    signal
  );

  if (!res.ok) {
    const error = new Error("An error occured while fetching the data");
    error.code = res.status;
    error.info = await res.json();
    throw error;
  }

  const resData = await res.json();
  return resData;
};
