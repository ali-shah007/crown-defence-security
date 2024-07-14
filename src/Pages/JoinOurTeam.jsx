import React from 'react'
import JoinOurTeamForm from '../components/JoinOurTeamForm/JoinOurTeamForm'
import PageTopComponent from '../components/PageTopComponent/PageTopComponent'

function JoinOurTeam() {
  return (
    <div className="w-full h-auto py-20 justify-center items-center bg-gray-900">
      <PageTopComponent type='Join Now!'/>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      
      <JoinOurTeamForm />
    </div>
  </div>
  )
}

export default JoinOurTeam