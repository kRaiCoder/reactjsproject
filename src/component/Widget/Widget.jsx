import React from 'react'
import './widget.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PieChartIcon from '@mui/icons-material/PieChart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PeopleIcon from '@mui/icons-material/People';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
const Widget = ({type}) => {
    let data;

    //optional
    const amount =100;
    const diff = 20;

    switch (type){
        
            case "revenue":
                data ={
                    title: "REVENUE",
                    isMoney: true,
                    link: "See Details",
                    icon: <PieChartIcon className='icon' style={{color:"crimson",backgroundColor:"rgba(255,0,0,0.2)",}}/>,
                };
                break;
               
                    case "order":
                        data ={
                            title: "ORDERS",
                            isMoney: false,
                            link: "View all Orders",
                            icon: <ShoppingBagIcon className='icon' style={{color:"golden",backgroundColor:"rgba(218,165,32,0.2)",}}/>,
                        };
                        break;
                        case "customer":
                            data ={
                                title: "CUSTOMERS",
                                isMoney: false,
                                link: "All Customers",
                                icon: <PeopleIcon className='icon'style={{color:"purple",backgroundColor:"rgba(128,0,128,0.2)",}}/>,
                            };
                            break;
                            case "earning":
                                data ={
                                    title: "Earning",
                                    isMoney: true,
                                    link: "See Details",
                                    icon: <AccountBalanceWalletIcon className='icon'style={{color:"green",backgroundColor:"rgba(0,128,0,0.2)",}}/>,
                                };
                                break;
            default:
            break;
    }
  return (
    
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counterr">
            {data.isMoney && "$"} {amount}
            </span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <ArrowUpwardIcon/>
                {diff}%
            </div>
            {data.icon}
        </div>
    </div>
    
    
  )
}

export default Widget