import { useState } from "react";
import debounce from 'lodash/debounce';
import SearchClientSide from '../components/SearchClientSide';
import SearchServerSide from '../components/SearchServerSide';
import SearchResults from '../components/SearchResults';

interface SearchProps {
  posts: []
}

function Search({ posts }: SearchProps) {
  const [results, setResults] = useState([]);
  const [searchType, setSearchType] = useState('client');
  const [query, setQuery] = useState('');

  const handleOnChange = debounce((query: string) => {
    setQuery(query);
  }, 1000, { leading: false, trailing: true });

  const fetchResults = (results) => setResults(results)

  return (
    <div className="p-4">
      <label className="inline-flex items-center mt-3 ml-2 mr-2">
        <input type="radio" name="search" className="form-radio h-5 w-5 text-gray-600" value="client" checked={searchType === 'client'} onChange={() => setSearchType('client')} /><span className="ml-2 text-gray-700">Client Side Search</span>
      </label>
      <label className="inline-flex items-center mt-3">
        <input type="radio" name="search" className="form-radio h-5 w-5 text-gray-600" value="server" checked={searchType === 'server'} onChange={() => setSearchType('server')} /> <span className=" ml-2 text-gray-700">Server Side Search</span>
      </label>
      {searchType === 'client' ? <SearchClientSide query={query} fetchResults={fetchResults} /> : <SearchServerSide query={query} posts={posts} fetchResults={fetchResults} />}
      <div className="p-4">
        <label htmlFor="searchQuery" className="mr-4">Search for:</label>
        <input id="searchQuery" type="text" className="border" onChange={(e) => handleOnChange(e.target.value)} />
      </div>
      <SearchResults results={results} />
    </div>
  );
}

export async function getStaticProps() {
  // For testing purpose we are passing page=1 and pageSize=200 
  const res = await fetch('https://hatsa.com/api/search/public/afiproducts/search?dedupe=true&page=1&pagesize=200')
  const posts = await res.json();
  return {
    props: {
      posts: posts.data,
    },
  }
}

export default Search
