import { useEffect } from "react";

interface SearchServerSideProps {
  query: string,
  posts: [],
  fetchResults: ([]) => void
}

function SearchServerSide({ query, posts, fetchResults }: SearchServerSideProps) {
  useEffect(() => {
    const results = posts.filter((post: { product: { title: string } }) => post.product.title.includes(query));
    fetchResults(results);
  }, [query]);

  return (
    <></>
  );
}

export default SearchServerSide