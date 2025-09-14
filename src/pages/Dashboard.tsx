import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, TrendingUp, Clock, CheckCircle, PlayCircle } from 'lucide-react';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { TTSButton } from '@/components/TTSButton';
import { AccessibleButton } from '@/components/AccessibleButton';

export const Dashboard = () => {
  const { translate } = useLanguageContext();

  // Dummy progress data
  const progressData = {
    overallProgress: 68,
    coursesCompleted: 4,
    totalCourses: 8,
    hoursLearned: 45,
    streakDays: 12,
    achievements: 7,
  };

  const recentActivities = [
    { type: 'quiz', title: 'Mathematics Quiz Chapter 5', score: 85, date: '2 hours ago' },
    { type: 'note', title: 'Science Notes: Photosynthesis', progress: 100, date: '1 day ago' },
    { type: 'quiz', title: 'English Grammar Assessment', score: 92, date: '2 days ago' },
    { type: 'note', title: 'History Notes: World War II', progress: 75, date: '3 days ago' },
  ];

  const currentCourses = [
    { title: 'Advanced Mathematics', progress: 75, nextLesson: 'Calculus Basics' },
    { title: 'Environmental Science', progress: 60, nextLesson: 'Ecosystem Balance' },
    { title: 'English Literature', progress: 45, nextLesson: 'Poetry Analysis' },
    { title: 'Computer Science', progress: 80, nextLesson: 'Data Structures' },
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <h1 className="text-4xl font-bold">{translate('dashboard')}</h1>
            <TTSButton text="Welcome to your learning dashboard" />
          </div>
          <div className="text-lg text-muted-foreground">
            Welcome back! Ready to continue learning?
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card-accessible text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="p-4 bg-success/10 rounded-full">
                <TrendingUp className="text-success" size={32} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-success">{progressData.overallProgress}%</h3>
            <p className="text-muted-foreground">Overall Progress</p>
          </div>

          <div className="card-accessible text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="p-4 bg-primary/10 rounded-full">
                <BookOpen className="text-primary" size={32} />
              </div>
            </div>
            <h3 className="text-2xl font-bold">{progressData.coursesCompleted}/{progressData.totalCourses}</h3>
            <p className="text-muted-foreground">Courses Completed</p>
          </div>

          <div className="card-accessible text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="p-4 bg-accent/10 rounded-full">
                <Clock className="text-accent" size={32} />
              </div>
            </div>
            <h3 className="text-2xl font-bold">{progressData.hoursLearned}h</h3>
            <p className="text-muted-foreground">Hours Learned</p>
          </div>

          <div className="card-accessible text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="p-4 bg-destructive/10 rounded-full">
                <Award className="text-destructive" size={32} />
              </div>
            </div>
            <h3 className="text-2xl font-bold">{progressData.achievements}</h3>
            <p className="text-muted-foreground">Achievements</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Current Courses */}
          <div className="card-accessible">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Current Courses</h2>
              <TTSButton text="Your current courses and progress" />
            </div>
            <div className="space-y-6">
              {currentCourses.map((course, index) => (
                <div key={index} className="border border-border rounded-lg p-4 hover:shadow-medium transition-all duration-200">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold">{course.title}</h3>
                    <span className="text-sm text-muted-foreground">{course.progress}%</span>
                  </div>
                  <div className="progress-bar mb-3">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-muted-foreground">Next: {course.nextLesson}</p>
                    <AccessibleButton
                      variant="default"
                      className="px-4 py-2"
                    >
                      <PlayCircle size={16} className="mr-2" />
                      Continue
                    </AccessibleButton>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activities */}
          <div className="card-accessible">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Recent Activities</h2>
              <TTSButton text="Your recent learning activities" />
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-all duration-200">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {activity.type === 'quiz' ? (
                      <CheckCircle className="text-success" size={24} />
                    ) : (
                      <BookOpen className="text-primary" size={24} />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{activity.title}</h3>
                    <p className="text-sm text-muted-foreground">{activity.date}</p>
                  </div>
                  <div className="text-right">
                    {activity.type === 'quiz' && (
                      <span className="text-lg font-bold text-success">{activity.score}%</span>
                    )}
                    {activity.type === 'note' && (
                      <div className="progress-bar w-20">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${activity.progress}%` }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/notes" className="block">
            <div className="card-accessible text-center group cursor-pointer">
              <BookOpen size={48} className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform duration-200" />
              <h3 className="text-xl font-semibold mb-2">Study Notes</h3>
              <p className="text-muted-foreground">Access your course materials</p>
            </div>
          </Link>

          <Link to="/quiz" className="block">
            <div className="card-accessible text-center group cursor-pointer">
              <CheckCircle size={48} className="mx-auto mb-4 text-success group-hover:scale-110 transition-transform duration-200" />
              <h3 className="text-xl font-semibold mb-2">Take Quiz</h3>
              <p className="text-muted-foreground">Test your knowledge</p>
            </div>
          </Link>

          <Link to="/search" className="block">
            <div className="card-accessible text-center group cursor-pointer">
              <TrendingUp size={48} className="mx-auto mb-4 text-accent group-hover:scale-110 transition-transform duration-200" />
              <h3 className="text-xl font-semibold mb-2">Explore Courses</h3>
              <p className="text-muted-foreground">Find new learning paths</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};