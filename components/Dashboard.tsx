"use client"

import React from 'react'
import Sidebar from './Sidebar'
import ProgressSection from './ProgressSection'
import WorkoutPrograms from './WorkoutPrograms'
import MyPlan from './MyPlan'

const Dashboard: React.FC = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ProgressSection />
            <MyPlan />
          </div>
          <div className="lg:col-span-1">
            <WorkoutPrograms />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard