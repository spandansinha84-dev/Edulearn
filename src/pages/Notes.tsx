import React, { useState } from 'react';
import { Book, FileText, Download, Search } from 'lucide-react';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { TTSButton } from '@/components/TTSButton';
import { AccessibleButton } from '@/components/AccessibleButton';
import { VoiceSearch } from '@/components/VoiceSearch';

export const Notes = () => {
  const { translate } = useLanguageContext();
  const [selectedNote, setSelectedNote] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const noteCategories = [
    {
      id: 'math',
      title: 'Mathematics',
      icon: '📐',
      notes: [
        {
          id: 1,
          title: 'Algebra Basics',
          content: `Algebra is a branch of mathematics that uses symbols and letters to represent numbers and express mathematical relationships. In algebra, we work with variables, which are symbols (usually letters like x, y, or z) that represent unknown values.

Key concepts in algebra include:

1. Variables: Symbols that represent unknown numbers
2. Coefficients: Numbers that multiply variables
3. Constants: Numbers that don't change
4. Expressions: Combinations of variables, coefficients, and constants
5. Equations: Mathematical statements showing that two expressions are equal

For example, in the expression 3x + 5, the number 3 is the coefficient, x is the variable, and 5 is the constant. This expression represents three times some number plus five.

Solving algebraic equations involves finding the value of the variable that makes the equation true. We use various techniques like adding, subtracting, multiplying, or dividing both sides of the equation by the same number.`,
          lastUpdated: '2 days ago'
        },
        {
          id: 2,
          title: 'Geometry Fundamentals',
          content: `Geometry is the study of shapes, sizes, and properties of space. It deals with points, lines, angles, surfaces, and solids.

Basic geometric elements:

1. Points: A location in space with no size
2. Lines: Straight paths that extend infinitely in both directions
3. Line segments: Parts of lines with two endpoints
4. Rays: Parts of lines with one endpoint that extend infinitely
5. Angles: Formed when two rays share a common endpoint

Types of angles:
- Acute angle: Less than 90 degrees
- Right angle: Exactly 90 degrees  
- Obtuse angle: Greater than 90 degrees but less than 180 degrees
- Straight angle: Exactly 180 degrees

Common geometric shapes include triangles, squares, rectangles, circles, and polygons. Each shape has specific properties and formulas for calculating area and perimeter.`,
          lastUpdated: '5 days ago'
        }
      ]
    },
    {
      id: 'science',
      title: 'Science',
      icon: '🔬',
      notes: [
        {
          id: 3,
          title: 'Photosynthesis Process',
          content: `Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods with the help of chlorophyll pigments. During this process, plants convert carbon dioxide and water into glucose and oxygen.

The photosynthesis equation:
6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂

This process occurs in two main stages:

1. Light-dependent reactions (Photophase):
   - Occur in the thylakoid membranes of chloroplasts
   - Chlorophyll absorbs light energy
   - Water molecules are split, releasing oxygen
   - ATP and NADPH are produced

2. Light-independent reactions (Dark phase/Calvin Cycle):
   - Occur in the stroma of chloroplasts
   - Carbon dioxide is fixed into organic molecules
   - Glucose is synthesized using ATP and NADPH

Photosynthesis is crucial for life on Earth as it produces oxygen for respiration and forms the base of most food chains. Plants are called producers because they make their own food through this process.`,
          lastUpdated: '1 day ago'
        }
      ]
    },
    {
      id: 'english',
      title: 'English',
      icon: '📚',
      notes: [
        {
          id: 4,
          title: 'Parts of Speech',
          content: `Parts of speech are the basic categories that describe how words function in sentences. Understanding parts of speech helps us construct clear and grammatically correct sentences.

The eight main parts of speech are:

1. Nouns: Words that name people, places, things, or ideas
   Examples: teacher, school, book, happiness

2. Pronouns: Words that replace nouns
   Examples: he, she, it, they, we

3. Verbs: Words that express action or state of being
   Examples: run, jump, is, was, have

4. Adjectives: Words that describe or modify nouns
   Examples: big, red, beautiful, intelligent

5. Adverbs: Words that modify verbs, adjectives, or other adverbs
   Examples: quickly, very, well, often

6. Prepositions: Words that show relationships between other words
   Examples: in, on, under, beside, through

7. Conjunctions: Words that connect other words or groups of words
   Examples: and, but, or, because, although

8. Interjections: Words that express emotion
   Examples: wow, ouch, hurray, oh

Each part of speech has specific rules for usage and placement in sentences.`,
          lastUpdated: '3 days ago'
        }
      ]
    }
  ];

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const filteredCategories = noteCategories.map(category => ({
    ...category,
    notes: category.notes.filter(note =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.notes.length > 0);

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <h1 className="text-4xl font-bold">{translate('notes')}</h1>
            <TTSButton text="Study notes with text to speech support" />
          </div>
        </div>

        {/* Search */}
        <div className="mb-8">
          <VoiceSearch
            onSearch={handleSearch}
            placeholder="Search notes by title or content..."
            className="max-w-2xl"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Notes List */}
          <div className="lg:col-span-1">
            <div className="card-accessible">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FileText size={24} />
                Available Notes
              </h2>
              
              <div className="space-y-6">
                {filteredCategories.map((category) => (
                  <div key={category.id} className="border-b border-border pb-6 last:border-b-0">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <span className="text-2xl">{category.icon}</span>
                      {category.title}
                    </h3>
                    <div className="space-y-2">
                      {category.notes.map((note) => (
                        <button
                          key={note.id}
                          onClick={() => setSelectedNote(note)}
                          className={`w-full text-left p-4 rounded-lg border transition-all duration-200 hover:shadow-medium focus:outline-none focus:ring-2 focus:ring-primary ${
                            selectedNote?.id === note.id
                              ? 'bg-primary text-primary-foreground border-primary'
                              : 'border-border hover:bg-muted/50'
                          }`}
                        >
                          <h4 className="font-semibold mb-1">{note.title}</h4>
                          <p className="text-sm opacity-70">Updated {note.lastUpdated}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Note Content */}
          <div className="lg:col-span-2">
            {selectedNote ? (
              <div className="card-accessible">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <h2 className="text-3xl font-bold">{selectedNote.title}</h2>
                    <TTSButton 
                      text={selectedNote.content}
                      className="bg-accent text-accent-foreground"
                    />
                  </div>
                  <div className="flex gap-2">
                    <AccessibleButton
                      variant="default"
                      className="flex items-center gap-2"
                    >
                      <Download size={16} />
                      Download
                    </AccessibleButton>
                  </div>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <div className="text-lg leading-relaxed whitespace-pre-line">
                    {selectedNote.content}
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-muted-foreground">
                    Last updated: {selectedNote.lastUpdated}
                  </p>
                </div>
              </div>
            ) : (
              <div className="card-accessible text-center py-20">
                <Book size={64} className="mx-auto mb-6 text-muted-foreground" />
                <h2 className="text-2xl font-bold mb-4">Select a Note to Read</h2>
                <p className="text-muted-foreground text-lg">
                  Choose from the available notes on the left to start reading. 
                  You can use the text-to-speech feature to listen to any content.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};