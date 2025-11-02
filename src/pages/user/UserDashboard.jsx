import React from 'react'
import Header from '../../components/Header'

const UserDashboard = () => {
  const user = { name: 'Ranjit' }



  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? 'Guest'} 👋`}
        description="Track activity, trends and popular destinations in real time"
      />
    </main>
  )
}

export default UserDashboard
