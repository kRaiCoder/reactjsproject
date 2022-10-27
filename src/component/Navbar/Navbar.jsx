import React from 'react'
import './navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Notifications from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
          <div className="search">
            <input type="text" placeholder='Search...' />
             <SearchIcon className='icon'/>
            </div>  
            <div className="items">
                <div className="item">
                   <LanguageIcon className='icon'/>
                </div>
                <div className="item">
                   <WidgetsIcon className='icon'/>
                </div>
                <div className="item">
                   <Notifications className='icon'/>
                   <div className="counter">1</div>
                </div>
                <div className="item">
                   <SettingsIcon className='icon'/>
                </div>
                <div className="item">
                    <img src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/01/09/12/malemodel9.jpg?width=640" alt="" className='avatar' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar