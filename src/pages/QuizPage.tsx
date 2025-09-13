import { useState } from 'react';
import { Brain, Clock, Award, ChevronRight, ChevronLeft } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Navbar from '@/components/Navbar';

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);

  const quiz = {
    title: 'Physics - Wave Motion Quiz',
    description: 'Test your understanding of wave motion concepts',
    difficulty: 'Intermediate',
    timeLimit: 30,
    totalQuestions: 5,
    questions: [
      {
        id: 1,
        question: 'What is the relationship between frequency and wavelength in a wave?',
        options: [
          'They are directly proportional',
          'They are inversely proportional',
          'They are independent of each other',
          'They have a quadratic relationship'
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: 'Which type of wave requires a medium to propagate?',
        options: [
          'Electromagnetic waves',
          'Light waves',
          'Sound waves',
          'Radio waves'
        ],
        correctAnswer: 2
      },
      // More questions would go here
    ]
  };

  const currentQ = quiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quiz.totalQuestions) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (currentQuestion < quiz.totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
    }
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card className="border-0 shadow-card text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-success" />
              </div>
              <CardTitle className="text-2xl">Quiz Completed! 🎉</CardTitle>
              <CardDescription>Great job on completing the quiz</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">85%</div>
                  <div className="text-muted-foreground">Final Score</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-success mb-2">4/5</div>
                  <div className="text-muted-foreground">Correct Answers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-warning mb-2">12:34</div>
                  <div className="text-muted-foreground">Time Taken</div>
                </div>
              </div>
              <div className="flex justify-center space-x-4">
                <Button>Review Answers</Button>
                <Button variant="outline">Take Another Quiz</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quiz Header */}
        <Card className="border-0 shadow-card mb-8">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl flex items-center">
                  <Brain className="h-6 w-6 mr-2 text-primary" />
                  {quiz.title}
                </CardTitle>
                <CardDescription className="mt-2">{quiz.description}</CardDescription>
              </div>
              <div className="text-right">
                <Badge variant="secondary">{quiz.difficulty}</Badge>
                <div className="flex items-center mt-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  {quiz.timeLimit} minutes
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Question {currentQuestion + 1} of {quiz.totalQuestions}</span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="w-full" />
            </div>
          </CardHeader>
        </Card>

        {/* Question Card */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle className="text-xl">
              {currentQ?.question}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {currentQ?.options.map((option, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                    selectedAnswer === index 
                      ? 'border-primary bg-primary/5' 
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => handleAnswerSelect(index)}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswer === index 
                        ? 'border-primary bg-primary text-white' 
                        : 'border-muted-foreground'
                    }`}>
                      <span className="text-sm font-medium">
                        {String.fromCharCode(65 + index)}
                      </span>
                    </div>
                    <span className="text-foreground">{option}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between pt-6">
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button 
                onClick={handleNext}
                disabled={selectedAnswer === null}
              >
                {currentQuestion === quiz.totalQuestions - 1 ? 'Finish Quiz' : 'Next Question'}
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuizPage;