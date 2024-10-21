import React from 'react'
import { Button } from './ui/button'
import { Home, BarChart2, User, Dumbbell, Heart, Apple, Users, BookOpen, Video, Bell, Settings, LogOut } from 'lucide-react'

const menuItems = [
  { label: 'Dashboard', icon: Home },
  { label: 'Your Data', icon: BarChart2 },
  { label: 'Profile', icon: User },
  { label: 'Workout Plan', icon: Dumbbell, highlight: true },
  { label: 'Personal Health Assistant', icon: Heart },
  { label: 'Meal Plans', icon: Apple },
  { label: 'Community Support', icon: Users },
  { label: 'Learning Hub', icon: BookOpen },
  { label: 'Virtual Consultations', icon: Video },
  { label: 'Announcement Avenue', icon: Bell },
]

const Sidebar = () => {
  return (
    <aside className="w-64 bg-black text-white p-6 flex flex-col h-screen">
      <h1 className="text-2xl font-bold mb-8">Shakti.io</h1>
      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Button
                variant="ghost"
                className={`w-full justify-start ${item.highlight ? 'text-orange-500' : ''}`}
              >
                {React.createElement(item.icon, { className: 'mr-2 h-4 w-4' })}
                {item.label}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto">
        <h2 className="text-sm font-semibold mb-2">Quick Actions</h2>
        <Button variant="ghost" className="w-full justify-start mb-2">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <LogOut className="mr-2 h-4 w-4" />
          Log Out
        </Button>
      </div>
    </aside>
  )
}

export default Sidebar