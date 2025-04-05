import { useState } from 'react'
import './dashBoard.css'
import Header from '../../components/header/header'
import BoardHeader from '../../components/boardHeader/boardHeader'
import CardSection from '../../components/cardSection/cardSection'

function DashBoard() {
  return (
    <div className="app-container1">
      <div className="fixed-header1">
        <Header />
        <BoardHeader />
      </div>
      <div className="scroll-area">
        <CardSection />
      </div>
    </div>
  )
}

export default DashBoard
