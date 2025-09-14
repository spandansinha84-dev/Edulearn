import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, BookOpen, User, GraduationCap, FileText } from 'lucide-react';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { VoiceSearch } from '@/components/VoiceSearch';
import { TTSButton } from '@/components/TTSButton';
import { AccessibleButton } from '@/components/AccessibleButton';

export const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { translate } = useLanguageContext();
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  const query = searchParams.get('q') || '';

  // Dummy search results
  const allResults = [
    {
      id: 1,
      type: 'course',
      title: 'Advanced Mathematics',
      description: 'Comprehensive course covering algebra, geometry, and calculus for advanced learners.',
      instructor: 'Dr. Sarah Johnson',
      rating: 4.8,
      duration: '12 weeks',
      category: 'Mathematics'
    },
    {
      id: 2,
      type: 'note',
      title: 'Photosynthesis Process Notes',
      description: 'Detailed study notes on how plants convert sunlight into energy through photosynthesis.',
      subject: 'Biology',
      lastUpdated: '2 days ago',
      category: 'Science'
    },
    {
      id: 3,
      type: 'teacher',
      title: 'Prof. Michael Chen',
      description: 'Computer Science professor specializing in accessibility technology and inclusive design.',
      department: 'Computer Science',
      experience: '15 years',
      rating: 4.9
    },
    {
      id: 4,
      type: 'course',
      title: 'English Literature Basics',
      description: 'Introduction to classic and contemporary literature with focus on comprehension and analysis.',
      instructor: 'Ms. Priya Sharma',
      rating: 4.6,
      duration: '8 weeks',
      category: 'English'
    },
    {
      id: 5,
      type: 'note',
      title: 'World War II History',
      description: 'Complete timeline and analysis of major events during World War II.',
      subject: 'History',
      lastUpdated: '1 week ago',
      category: 'History'
    },
    {
      id: 6,
      type: 'book',
      title: 'Accessible Learning Guide',
      description: 'A comprehensive guide to learning strategies for students with diverse abilities.',
      author: 'Dr. Emma Wilson',
      pages: 320,
      format: 'Digital + Audio'
    }
  ];

  const filteredResults = allResults.filter(result => {
    if (selectedFilter !== 'all' && result.type !== selectedFilter) return false;
    if (query) {
      return result.title.toLowerCase().includes(query.toLowerCase()) ||
             result.description.toLowerCase().includes(query.toLowerCase());
    }
    return true;
  });

  const handleNewSearch = (newQuery: string) => {
    setSearchParams({ q: newQuery });
  };

  const filters = [
    { id: 'all', label: 'All Results', icon: Search },
    { id: 'course', label: 'Courses', icon: GraduationCap },
    { id: 'note', label: 'Notes', icon: FileText },
    { id: 'teacher', label: 'Teachers', icon: User },
    { id: 'book', label: 'Books', icon: BookOpen },
  ];

  const getResultIcon = (type: string) => {
    switch (type) {
      case 'course': return GraduationCap;
      case 'note': return FileText;
      case 'teacher': return User;
      case 'book': return BookOpen;
      default: return FileText;
    }
  };

  const getResultColor = (type: string) => {
    switch (type) {
      case 'course': return 'text-primary';
      case 'note': return 'text-success';
      case 'teacher': return 'text-accent';
      case 'book': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-4xl font-bold">Search Results</h1>
            <TTSButton text={`Search results for ${query || 'all content'}`} />
          </div>
          
          {/* Search Bar */}
          <VoiceSearch
            onSearch={handleNewSearch}
            placeholder={translate('search')}
            className="max-w-2xl mb-6"
          />

          {/* Results Summary */}
          <div className="flex items-center justify-between">
            <p className="text-lg text-muted-foreground">
              {query ? (
                <>Found {filteredResults.length} results for "<span className="font-semibold">{query}</span>"</>
              ) : (
                <>Showing all {filteredResults.length} available resources</>
              )}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="card-accessible sticky top-8">
              <div className="flex items-center gap-2 mb-6">
                <Filter size={24} />
                <h2 className="text-xl font-bold">Filter Results</h2>
              </div>
              
              <div className="space-y-2">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`w-full text-left p-4 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary ${
                      selectedFilter === filter.id
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'border-border hover:bg-muted/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <filter.icon size={20} />
                      <span className="font-medium">{filter.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            {filteredResults.length > 0 ? (
              <div className="space-y-6">
                {filteredResults.map((result) => {
                  const ResultIcon = getResultIcon(result.type);
                  return (
                    <div key={result.id} className="card-accessible group">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg bg-muted/50 ${getResultColor(result.type)}`}>
                          <ResultIcon size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                {result.title}
                              </h3>
                              <TTSButton text={`${result.title}. ${result.description}`} />
                            </div>
                            <span className="text-sm bg-muted px-3 py-1 rounded-full capitalize">
                              {result.type}
                            </span>
                          </div>
                          
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            {result.description}
                          </p>

                          {/* Type-specific metadata */}
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                            {result.type === 'course' && (
                              <>
                                <span>👨‍🏫 {(result as any).instructor}</span>
                                <span>⭐ {(result as any).rating}/5</span>
                                <span>📅 {(result as any).duration}</span>
                              </>
                            )}
                            {result.type === 'note' && (
                              <>
                                <span>📚 {(result as any).subject}</span>
                                <span>🕒 Updated {(result as any).lastUpdated}</span>
                              </>
                            )}
                            {result.type === 'teacher' && (
                              <>
                                <span>🏢 {(result as any).department}</span>
                                <span>📈 {(result as any).experience} experience</span>
                                <span>⭐ {(result as any).rating}/5</span>
                              </>
                            )}
                            {result.type === 'book' && (
                              <>
                                <span>✍️ {(result as any).author}</span>
                                <span>📄 {(result as any).pages} pages</span>
                                <span>🎧 {(result as any).format}</span>
                              </>
                            )}
                          </div>

                          <div className="flex gap-3">
                            <AccessibleButton variant="default">
                              View Details
                            </AccessibleButton>
                            {result.type === 'course' && (
                              <AccessibleButton variant="success">
                                Enroll Now
                              </AccessibleButton>
                            )}
                            {result.type === 'note' && (
                              <AccessibleButton variant="success">
                                Read Notes
                              </AccessibleButton>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="card-accessible text-center py-20">
                <Search size={64} className="mx-auto mb-6 text-muted-foreground" />
                <h2 className="text-2xl font-bold mb-4">No Results Found</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  {query ? (
                    <>We couldn't find any results for "<span className="font-semibold">{query}</span>". Try different keywords or browse all content.</>
                  ) : (
                    <>No content matches the selected filters. Try selecting "All Results" or different filters.</>
                  )}
                </p>
                <div className="flex gap-4 justify-center">
                  <AccessibleButton
                    variant="large"
                    onClick={() => {
                      setSearchParams({});
                      setSelectedFilter('all');
                    }}
                  >
                    Show All Results
                  </AccessibleButton>
                  <AccessibleButton
                    variant="default"
                    onClick={() => setSearchParams({})}
                  >
                    Clear Search
                  </AccessibleButton>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};