import { useState } from "react";
import { fetchEntities } from "../util/http";
import { useQuery } from "@tanstack/react-query";

export function useEntity(input, type) {
  const [pageNum, setPageNum] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isPending, isError, error } = useQuery({
    queryKey: [type, { searchTerm, pageNum }],
    queryFn: ({ signal }) =>
      fetchEntities({ signal, searchTerm, pageNum, type }),
  });

  const handleChange = function (e) {
    const pageNum = Number(e.target.textContent);
    setPageNum(pageNum);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const searchHandler = async function () {
    setSearchTerm(input.current.value);
    setPageNum(1);
  };

  return {
    handleChange,
    searchHandler,
    data,
    isPending,
    isError,
    error,
    pageNum,
  };
}
