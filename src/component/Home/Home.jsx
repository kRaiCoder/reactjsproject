
import React from 'react'
import Chart from '../Chart/Chart'
import Featured from '../featured/Featured'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import Widget from '../Widget/Widget'
import Table from '../Table/Table'
import "./Home.css"
const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
           <div className="homeContainer">
            <Navbar/>
            <div className="widgets">
                <Widget type="revenue"/>
                <Widget type="order"/> 
                <Widget type="customer"/> 
                <Widget type="earning"/>    
            </div>
            <div className="charts">
              <Featured/> 
              <Chart title="Last 6 Months (Revenue)" aspect={2 / 1}/> 
            </div>
            <div className="listContainer">
              <div className="listTitle">Latest Transactions</div>
              <Table/>
            </div>
            </div>
    </div>
  )
}

export default Home