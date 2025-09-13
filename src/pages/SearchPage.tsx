import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import SearchResults from '@/components/SearchResults';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const q = searchParams.get('q');
    setQuery(q || '');
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {query && <SearchResults query={query} />}
      
      {!query && (
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              No Search Query
            </h1>
            <p className="text-muted-foreground">
              Please enter a search term to find courses, notes, and more.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;