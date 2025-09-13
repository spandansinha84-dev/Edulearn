import { Users, BookOpen, FileText, BarChart3, Calendar, Plus } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';

const TeacherDashboard = () => {
  const courses = [
    { name: 'Physics 101', students: 145, status: 'Active', nextClass: 'Tomorrow 10:00 AM' },
    { name: 'Advanced Physics', students: 89, status: 'Active', nextClass: 'Friday 2:00 PM' },
    { name: 'Quantum Mechanics', students: 34, status: 'Draft', nextClass: 'Not scheduled' }
  ];

  const stats = [
    { icon: Users, label: 'Total Students', value: '268', color: 'text-primary' },
    { icon: BookOpen, label: 'Active Courses', value: '3', color: 'text-accent' },
    { icon: FileText, label: 'Assignments', value: '12', color: 'text-success' },
    { icon: BarChart3, label: 'Avg. Rating', value: '4.8', color: 'text-warning' }
  ];

  const recentActivity = [
    { action: 'New assignment submitted', student: 'Sarah Johnson', time: '2 hours ago' },
    { action: 'Quiz completed', student: 'Mike Chen', time: '4 hours ago' },
    { action: 'Question posted', student: 'Emma Davis', time: '6 hours ago' },
    { action: 'Course enrollment', student: 'Alex Rodriguez', time: '1 day ago' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Teacher Dashboard 👩‍🏫
            </h1>
            <p className="text-muted-foreground">
              Manage your courses and track student progress.
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Course
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <IconComponent className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* My Courses */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-primary" />
                  My Courses
                </CardTitle>
                <CardDescription>
                  Manage and monitor your courses
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {courses.map((course, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold flex items-center">
                          {course.name}
                          <Badge 
                            variant={course.status === 'Active' ? 'default' : 'secondary'} 
                            className="ml-2"
                          >
                            {course.status}
                          </Badge>
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {course.students} students enrolled
                        </p>
                      </div>
                      <Button size="sm" variant="outline">Manage</Button>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Next class: {course.nextClass}</span>
                    </div>
                    {index < courses.length - 1 && <hr className="border-border" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full justify-start" variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Create Assignment
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  View Students
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Analytics
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Class
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="space-y-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">
                        {activity.student} • {activity.time}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;