import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { UserPlus, UserCheck, UserX, Users, ChevronRight, ChevronLeft } from 'lucide-react'

import { userActivityData, recentUsers } from '@/components/hooks/resumeActiviteUtilisateur'

const Sidebar = ({ isOpen, toggleSidebar, activeComponent, setActiveComponent }) => {
  const sidebarItems = [
    { title: "Tableau de bord", component: "dashboard" },
    { title: "Statistiques", component: "stats" },
    { title: "Paramètres", component: "settings" },
  ]

  return (
    <div className={`bg-gray-800 text-white h-screen ${isOpen ? 'w-64' : 'w-16'} transition-all duration-300 ease-in-out`}>
      <div className="p-4 flex justify-between items-center">
        <h2 className={`font-bold ${isOpen ? 'block' : 'hidden'}`}>Menu</h2>
        <Button 
  variant="ghost" 
  size="icon" 
  onClick={toggleSidebar}
  className="animate-pulse hover:animate-none transition-all duration-300"
>
  {isOpen ? <ChevronLeft className="animate-bounce" /> : <ChevronRight className="animate-bounce" />}
</Button>
      </div>
      <nav>
        {sidebarItems.map((item) => (
          <Button
            key={item.component}
            variant="ghost"
            className={`w-full justify-start ${activeComponent === item.component ? 'bg-gray-700' : ''}`}
            onClick={() => setActiveComponent(item.component)}
          >
            {isOpen ? item.title : item.title.charAt(0)}
          </Button>
        ))}
      </nav>
    </div>
  )
}

const UserDashboard = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Tableau de bord des utilisateurs</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Utilisateurs</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+20% par rapport au mois dernier</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Nouveaux Utilisateurs</CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">145</div>
            <p className="text-xs text-muted-foreground">Cette semaine</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Utilisateurs Actifs</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">892</div>
            <p className="text-xs text-muted-foreground">72% du total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Utilisateurs Inactifs</CardTitle>
            <UserX className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-muted-foreground">28% du total</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Activité des utilisateurs (7 derniers jours)</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={userActivityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Utilisateurs récents</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nom</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Statut</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <Button>Gérer les utilisateurs</Button>
      </div>
    </div>
  )
}

const DashboardWithSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [activeComponent, setActiveComponent] = useState('dashboard')

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <div className="flex">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />
      <div className={`flex-grow transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-16'}`}>
        {activeComponent === 'dashboard' && <UserDashboard />}
        {activeComponent === 'stats' && <div className="p-8">Contenu des statistiques</div>}
        {activeComponent === 'settings' && <div className="p-8">Contenu des paramètres</div>}
      </div>
    </div>
  )
}

export default DashboardWithSidebar 