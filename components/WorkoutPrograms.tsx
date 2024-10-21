import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

const workoutPrograms = [
  {
    title: 'Weight Loss',
    description: 'Combines cardio and strength training to burn calories and reduce body fat.',
    bgColor: 'bg-orange-500',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    title: 'Bodybuilding',
    description: 'Focuses on hypertrophy to increase muscle size.',
    bgColor: 'bg-blue-200',
    image: 'https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    title: 'Endurance Training & Yoga',
    description: 'Enhances cardiovascular and muscular endurance.',
    bgColor: 'bg-pink-200',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    title: 'Strength Training',
    description: 'Aims to improve maximal strength through heavy lifting.',
    bgColor: 'bg-blue-100',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    title: 'Flexibility & Mobility Training',
    description: 'Improves range of motion and reduces injury risk.',
    bgColor: 'bg-yellow-100',
    image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
]

const WorkoutPrograms = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">More Workout Programs For You</h2>
      <div className="space-y-4">
        {workoutPrograms.map((program, index) => (
          <Card key={index} className={`${program.bgColor} text-black`}>
            <CardHeader className="relative h-32 overflow-hidden">
              <img src={program.image} alt={program.title} className="absolute inset-0 w-full h-full object-cover" />
            </CardHeader>
            <CardContent>
              <CardTitle>{program.title}</CardTitle>
              <CardDescription className="text-black">{program.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default WorkoutPrograms