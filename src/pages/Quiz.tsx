import React, { useState } from 'react';
import { CheckCircle, X, ArrowRight, ArrowLeft, Trophy, Mic } from 'lucide-react';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { TTSButton } from '@/components/TTSButton';
import { AccessibleButton } from '@/components/AccessibleButton';
import { useSpeechRecognition } from '@/hooks/useSpeechRecognition';

export const Quiz = () => {
  const { translate } = useLanguageContext();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isListening, setIsListening] = useState(false);
  
  const { 
    startListening, 
    stopListening, 
    transcript, 
    resetTranscript,
    isSupported: speechSupported 
  } = useSpeechRecognition();

  const quizData = {
    title: 'Mathematics: Basic Algebra',
    description: 'Test your understanding of basic algebraic concepts',
    questions: [
      {
        id: 1,
        question: 'What is the value of x in the equation: 2x + 5 = 15?',
        options: ['5', '10', '7.5', '3'],
        correctAnswer: 0,
        explanation: 'To solve 2x + 5 = 15, subtract 5 from both sides: 2x = 10, then divide by 2: x = 5'
      },
      {
        id: 2,
        question: 'Which of the following is a linear equation?',
        options: ['x² + 3x = 5', 'y = 2x + 1', 'x³ - 4 = 0', '1/x = 3'],
        correctAnswer: 1,
        explanation: 'A linear equation has variables raised to the power of 1 only. y = 2x + 1 is linear.'
      },
      {
        id: 3,
        question: 'What is the coefficient of x in the expression 7x - 3?',
        options: ['7', '-3', 'x', '4'],
        correctAnswer: 0,
        explanation: 'The coefficient is the number that multiplies the variable. In 7x - 3, the coefficient of x is 7.'
      },
      {
        id: 4,
        question: 'Simplify: 3(x + 2) = ?',
        options: ['3x + 2', '3x + 6', 'x + 6', '3x + 5'],
        correctAnswer: 1,
        explanation: 'Using the distributive property: 3(x + 2) = 3·x + 3·2 = 3x + 6'
      }
    ]
  };

  const handleVoiceAnswer = () => {
    if (isListening) {
      stopListening();
      setIsListening(false);
      
      // Process voice input to match with options
      const spokenAnswer = transcript.toLowerCase().trim();
      const currentQ = quizData.questions[currentQuestion];
      
      // Try to match spoken answer with options
      const matchedIndex = currentQ.options.findIndex(option => 
        option.toLowerCase().includes(spokenAnswer) || 
        spokenAnswer.includes(option.toLowerCase()) ||
        spokenAnswer.includes('option') && spokenAnswer.includes((currentQ.options.indexOf(option) + 1).toString())
      );
      
      if (matchedIndex !== -1) {
        setSelectedAnswer(matchedIndex);
      }
      
      resetTranscript();
    } else {
      resetTranscript();
      setIsListening(true);
      startListening({ continuous: false });
    }
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = selectedAnswer;
    setUserAnswers(newAnswers);
    
    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(userAnswers[currentQuestion + 1] || null);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(userAnswers[currentQuestion - 1] || null);
    }
  };

  const calculateScore = () => {
    return userAnswers.reduce((score, answer, index) => {
      return score + (answer === quizData.questions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setUserAnswers([]);
    setShowResults(false);
    resetTranscript();
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / quizData.questions.length) * 100);
    
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card-accessible text-center">
            <Trophy size={64} className="mx-auto mb-6 text-success" />
            <h1 className="text-4xl font-bold mb-4">Quiz Complete!</h1>
            <div className="mb-8">
              <div className="text-6xl font-bold text-success mb-2">{percentage}%</div>
              <p className="text-xl text-muted-foreground">
                You scored {score} out of {quizData.questions.length} questions correctly
              </p>
            </div>
            
            <div className="mb-8">
              <div className="progress-bar h-6 mb-4">
                <div 
                  className="progress-fill h-full" 
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <p className="text-muted-foreground">
                {percentage >= 80 ? 'Excellent work!' : 
                 percentage >= 60 ? 'Good job!' : 
                 'Keep practicing!'}
              </p>
            </div>

            <div className="flex gap-4 justify-center">
              <AccessibleButton
                variant="hero"
                onClick={restartQuiz}
              >
                Retake Quiz
              </AccessibleButton>
              <AccessibleButton
                variant="large"
                onClick={() => window.history.back()}
              >
                Back to Dashboard
              </AccessibleButton>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = quizData.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizData.questions.length) * 100;

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">{quizData.title}</h1>
            <div className="text-lg text-muted-foreground">
              Question {currentQuestion + 1} of {quizData.questions.length}
            </div>
          </div>
          <div className="progress-bar h-3">
            <div 
              className="progress-fill h-full transition-all duration-500" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="card-accessible mb-8">
          <div className="flex items-start justify-between mb-6">
            <h2 className="text-2xl font-semibold pr-4">{currentQ.question}</h2>
            <TTSButton 
              text={currentQ.question}
              className="bg-primary text-primary-foreground"
            />
          </div>

          {/* Voice Input Section */}
          {speechSupported && (
            <div className="mb-6 p-4 bg-accent/10 rounded-lg border-2 border-dashed border-accent">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-accent">Voice Answer</h3>
                <AccessibleButton
                  onClick={handleVoiceAnswer}
                  className={`p-2 ${isListening ? 'speaking-pulse bg-accent text-accent-foreground' : 'bg-accent text-accent-foreground'}`}
                  ariaLabel={isListening ? 'Stop listening' : 'Start voice answer'}
                >
                  <Mic size={20} />
                </AccessibleButton>
              </div>
              <p className="text-sm text-muted-foreground">
                {isListening ? 'Listening... Speak your answer' : 'Click the microphone to answer with your voice'}
              </p>
              {transcript && (
                <p className="mt-2 text-accent font-medium">
                  Heard: "{transcript}"
                </p>
              )}
            </div>
          )}

          {/* Answer Options */}
          <div className="space-y-4">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-6 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary ${
                  selectedAnswer === index
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border hover:border-primary/50 hover:bg-muted/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                    selectedAnswer === index
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border'
                  }`}>
                    {selectedAnswer === index && <CheckCircle size={16} />}
                  </div>
                  <span className="text-lg">{option}</span>
                  <TTSButton 
                    text={option}
                    className="ml-auto opacity-70 hover:opacity-100"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <AccessibleButton
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            variant="large"
            className="flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Previous
          </AccessibleButton>

          <div className="flex gap-2">
            {quizData.questions.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentQuestion
                    ? 'bg-primary'
                    : userAnswers[index] !== undefined
                    ? 'bg-success'
                    : 'bg-muted'
                }`}
              />
            ))}
          </div>

          <AccessibleButton
            onClick={handleNext}
            disabled={selectedAnswer === null}
            variant="success"
            className="flex items-center gap-2"
          >
            {currentQuestion === quizData.questions.length - 1 ? 'Finish' : 'Next'}
            <ArrowRight size={20} />
          </AccessibleButton>
        </div>
      </div>
    </div>
  );
};