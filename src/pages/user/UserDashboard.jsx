import React from 'react'
import Header from '../../components/Header'
import StatsCard from '../../components/StatsCard'

const UserDashboard = () => {
  const user = { name: 'Ranjit' }

  const dashboardStats = {
    totalUsers: 12340,
    userJoined: { currentMonth: 223, lastMonth: 175 },
    userRole: { total: 55, currentMonth: 47, lastMonth: 42 },
  }

  const { totalUsers, userJoined, userRole } = dashboardStats

  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? 'Guest'} 👋`}
        description="Track activity, trends and popular destinations in real time"
      />

      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          <StatsCard
            headerTitle="Total Users"
            total={totalUsers}
            currentMonthCount={userJoined.currentMonth}
            lastMonthCount={userJoined.lastMonth}
          />

          <StatsCard
            headerTitle="Active Users Today"
            total={userRole.total}
            currentMonthCount={userRole.currentMonth}
            lastMonthCount={userRole.lastMonth}
          />
          
        </div>
      </section>
    </main>
  )
}

export default UserDashboard
