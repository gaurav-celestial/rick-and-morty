import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";

export function useInfiniteEntity(input) {
  const [searchTerm, setSearchTerm] = useState("");

  const searchHandler = async function () {
    setSearchTerm(input.current.value);
  };

  const fetchEntities = async function ({ pageParam }) {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${pageParam}&${
        searchTerm ? "name=" + searchTerm : ""
      }`
    );

    if (!res.ok) {
      const error = new Error("An error occured while fetching the data");
      error.code = res.status;
      error.info = await res.json();
      throw error;
    }

    return res.json();
  };

  const {
    data,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["character", { searchTerm }],
    queryFn: fetchEntities,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      console.log(lastPage, allPages);
      const nextPage =
        lastPage.results.length < 20 ? undefined : allPages.length + 1;
      return nextPage;
    },
  });

  return {
    data,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    searchHandler,
  };
}
