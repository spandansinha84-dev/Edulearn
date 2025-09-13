import { Search, BookOpen, FileText, User, Book, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface SearchResultsProps {
  query: string;
}

const SearchResults = ({ query }: SearchResultsProps) => {
  // Dummy search results based on query
  const generateResults = (searchQuery: string) => {
    const courses = [
      {
        id: 1,
        title: `${searchQuery} 101 - Introduction`,
        instructor: 'Dr. Sarah Johnson',
        rating: 4.8,
        students: 15420,
        category: 'Course',
        icon: BookOpen,
        description: `A comprehensive introduction to ${searchQuery} covering fundamental concepts and practical applications.`
      },
      {
        id: 2,
        title: `Advanced ${searchQuery} Techniques`,
        instructor: 'Prof. Michael Chen',
        rating: 4.9,
        students: 8930,
        category: 'Course',
        icon: BookOpen,
        description: `Deep dive into advanced ${searchQuery} methodologies and cutting-edge research.`
      }
    ];

    const notes = [
      {
        id: 3,
        title: `${searchQuery} Chapter 1 Notes`,
        author: 'StudyGroup Alpha',
        downloads: 2340,
        category: 'Notes',
        icon: FileText,
        description: `Comprehensive notes covering the first chapter of ${searchQuery} fundamentals.`
      },
      {
        id: 4,
        title: `${searchQuery} Formulas & Equations`,
        author: 'TopStudent',
        downloads: 5670,
        category: 'Notes',
        icon: FileText,
        description: `Essential formulas and equations for ${searchQuery} with solved examples.`
      }
    ];

    const teachers = [
      {
        id: 5,
        title: 'Dr. Sharma',
        specialty: `${searchQuery} Expert`,
        experience: '15 years',
        rating: 4.9,
        category: 'Teacher',
        icon: User,
        description: `Renowned ${searchQuery} professor with expertise in theoretical and applied aspects.`
      }
    ];

    const books = [
      {
        id: 6,
        title: `Concepts of ${searchQuery}`,
        author: 'H.C. Verma',
        rating: 4.7,
        price: '$49.99',
        category: 'Book',
        icon: Book,
        description: `The definitive textbook for understanding ${searchQuery} concepts with practical examples.`
      }
    ];

    return [...courses, ...notes, ...teachers, ...books];
  };

  const results = generateResults(query);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Course': return 'bg-primary/10 text-primary';
      case 'Notes': return 'bg-accent/10 text-accent';
      case 'Teacher': return 'bg-success/10 text-success';
      case 'Book': return 'bg-warning/10 text-warning';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <Search className="h-4 w-4 mr-2" />
          Search Results
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Results for "{query}"
        </h1>
        <p className="text-muted-foreground">
          Found {results.length} results related to your search
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Button variant="default" size="sm">All</Button>
        <Button variant="outline" size="sm">Courses</Button>
        <Button variant="outline" size="sm">Notes</Button>
        <Button variant="outline" size="sm">Teachers</Button>
        <Button variant="outline" size="sm">Books</Button>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((result) => {
          const IconComponent = result.icon;
          return (
            <Card 
              key={result.id} 
              className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer border-0 shadow-card"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge className={getCategoryColor(result.category)}>
                    {result.category}
                  </Badge>
                  <IconComponent className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                  {result.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {result.description}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  {result.category === 'Course' && (
                    <>
                      <span className="text-muted-foreground">{'instructor' in result ? result.instructor : ''}</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-warning fill-current mr-1" />
                        <span className="font-medium">{'rating' in result ? result.rating : ''}</span>
                      </div>
                    </>
                  )}
                  
                  {result.category === 'Notes' && (
                    <>
                      <span className="text-muted-foreground">{'author' in result ? result.author : ''}</span>
                      <span className="text-primary font-medium">{'downloads' in result ? result.downloads : ''} downloads</span>
                    </>
                  )}
                  
                  {result.category === 'Teacher' && (
                    <>
                      <span className="text-muted-foreground">{'specialty' in result ? result.specialty : ''}</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-warning fill-current mr-1" />
                        <span className="font-medium">{'rating' in result ? result.rating : ''}</span>
                      </div>
                    </>
                  )}
                  
                  {result.category === 'Book' && (
                    <>
                      <span className="text-muted-foreground">{'author' in result ? result.author : ''}</span>
                      <span className="text-primary font-medium">{'price' in result ? result.price : ''}</span>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <Button size="lg" variant="outline">
          Load More Results
        </Button>
      </div>
    </div>
  );
};

export default SearchResults;