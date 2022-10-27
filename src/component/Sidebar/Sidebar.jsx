import React from 'react'
import './sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatIcon from '@mui/icons-material/Chat';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ShopIcon from '@mui/icons-material/Shop';
import EmailIcon from '@mui/icons-material/Email';
import DockIcon from '@mui/icons-material/Dock';
import WorkIcon from '@mui/icons-material/Work';
import WifiIcon from '@mui/icons-material/Wifi';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import LayersIcon from '@mui/icons-material/Layers';
import BorderColorIcon from '@mui/icons-material/BorderColor';
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">LOGO</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MENU</p>
                <li>
                    <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
                <p className="title">APPLICATION</p>
                <li>
                    <CalendarMonthIcon className="icon"/>
                    <span>Calender</span>
                </li>
                <li>
                    <ChatIcon className="icon"/>
                    <span>Chat</span>
                </li>
                <li>
                    <Inventory2Icon className="icon"/>
                    <span>FileManager</span>
                </li>
                <li>
                    <ShopIcon className="icon"/>
                    <span>Ecommerce</span>
                </li>
                <li>
                    <EmailIcon className="icon"/>
                    <span>Email</span>
                </li>
                <li>
                    <DockIcon className="icon"/>
                    <span>Invoices</span>
                </li>
                <li>
                    <WorkIcon className="icon"/>
                    <span>Projects</span>
                </li>
                <li>
                    <WifiIcon className="icon"/>
                    <span>Contacts</span>
                </li>
                <p className="title">LAYOUT</p>
                <p className="title">PAGES</p>
                <li>
                    <PersonAddAltIcon className="icon"/>
                    <span>Authentication</span>
                </li>
                <li>
                    <ViewInArIcon className="icon"/>
                    <span>Utility</span>
                </li>
                <p className="title">COMPONENTS</p>
                <li>
                    <LayersIcon className="icon"/>
                    <span>UI Elements</span>
                </li>
                <li>
                    <BorderColorIcon className="icon"/>
                    <span>Forms</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar