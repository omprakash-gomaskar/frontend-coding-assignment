import { useEffect } from "react";

const performSearch = (query: string) => fetch(`https://hatsa.com/api/search/public/afiproducts/search/${query}?dedupe=true`)
  .then((response) => response.json());

interface SearchClientSideProps {
  query: string,
  fetchResults: ([]) => void
}

function SearchClientSide({ query, fetchResults }: SearchClientSideProps) {
  useEffect(() => {
    performSearch(query).then(response => {
      fetchResults(response.data);
    });
  }, [query]);

  return (
    <></>
  );
}

export default SearchClientSide
