import { FileText, Download, Share, BookOpen, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';

const NotesPage = () => {
  const notes = [
    {
      id: 1,
      title: 'Physics Chapter 1 - Mechanics',
      author: 'Dr. Sarah Johnson',
      subject: 'Physics',
      downloads: 2340,
      rating: 4.8,
      pages: 45,
      size: '2.4 MB',
      description: 'Comprehensive notes covering fundamental mechanics concepts including motion, forces, and energy.'
    },
    {
      id: 2,
      title: 'Calculus Formulas & Derivatives',
      author: 'Prof. Michael Chen',
      subject: 'Mathematics',
      downloads: 5670,
      rating: 4.9,
      pages: 28,
      size: '1.8 MB',
      description: 'Essential calculus formulas with step-by-step derivative solutions and practice problems.'
    },
    {
      id: 3,
      title: 'Organic Chemistry Reactions',
      author: 'Dr. Emma Wilson',
      subject: 'Chemistry',
      downloads: 1890,
      rating: 4.7,
      pages: 67,
      size: '3.2 MB',
      description: 'Detailed organic chemistry reactions with mechanisms and real-world applications.'
    }
  ];

  const subjects = ['All', 'Physics', 'Mathematics', 'Chemistry', 'Biology', 'Computer Science'];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Study Notes 📝
          </h1>
          <p className="text-muted-foreground">
            Access comprehensive notes from top educators and students.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {subjects.map((subject) => (
            <Button 
              key={subject}
              variant={subject === 'All' ? 'default' : 'outline'} 
              size="sm"
            >
              {subject}
            </Button>
          ))}
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <Card 
              key={note.id} 
              className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border-0 shadow-card"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary">{note.subject}</Badge>
                  <FileText className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                  {note.title}
                </CardTitle>
                <CardDescription className="flex items-center text-sm">
                  <User className="h-4 w-4 mr-1" />
                  {note.author}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {note.description}
                </p>
                
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{note.pages} pages</span>
                  <span>{note.size}</span>
                  <span>{note.downloads} downloads</span>
                </div>
                
                <div className="flex space-x-2">
                  <Button size="sm" className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button size="sm" variant="outline">
                    <Share className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Load More Notes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotesPage;