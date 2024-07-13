import React from 'react'
import JoinOurTeamForm from '../components/JoinOurTeamForm/JoinOurTeamForm'
// import PageTopComponent from '../components/PageTopComponent/PageTopComponent'

function JoinOurTeam() {
  return (
    <div className="w-full h-[700px] flex pt-20 justify-center items-center bg-gray-500">
      {/* <PageTopComponent type='Join'/> */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <JoinOurTeamForm />
    </div>
  </div>
  )
}

export default JoinOurTeam