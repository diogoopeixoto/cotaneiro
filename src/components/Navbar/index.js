import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { AppContext } from '../../context';
import './styles.css';
const Nav = () => {

    const appContext = useContext(AppContext);

    const handleNavToggle = () => {
        appContext.setIsNavbarOpened(!appContext.isNavbarOpened);
    }

    return(
    <nav className={ appContext.isNavbarOpened ? 'sidebar' : 'sidebar close' }>
        <header>
            <div className="image-text">
                <span className="image">
                    <img src="" alt=""/>
                </span>

                <div className="text logo-text">
                    <span className="name">Cotaneiro</span>
                    <span className="profession">Cotação On Line</span>
                </div>
            </div>

            <div className='bx bx-chevron-right toggle' onClick={handleNavToggle}></div>
        </header>

        <div className="menu-bar">
            <div className="menu">

                <li className="search-box">
                    <i className='bx bx-search icon'></i>
                    <input type="text" placeholder="Search..."/>
                </li>

                <ul className="menu-links">
                    <li className="nav-link">
                    <Link to="/">
                        
                            <i className='bx bx-home-alt icon' ></i>
                            <span className="text nav-text">Dashboard</span>
                            </Link>
                    </li>

                    <li className="nav-link">
                        <Link to="/customer">
                            <i className='bx bx-bar-chart-alt-2 icon' ></i>
                            <span className="text nav-text">Revenue</span>
                        </Link>
                    </li>

                    <li className="nav-link">
                        
                            <i className='bx bx-bell icon'></i>
                            <span className="text nav-text">Notifications</span>
                        
                    </li>

                    <li className="nav-link">
                       
                            <i className='bx bx-pie-chart-alt icon' ></i>
                            <span className="text nav-text">Analytics</span>
                        
                    </li>

                    <li className="nav-link">
                        
                            <i className='bx bx-heart icon' ></i>
                            <span className="text nav-text">Likes</span>
                        
                    </li>

                    <li className="nav-link">
                        
                            <i className='bx bx-wallet icon' ></i>
                            <span className="text nav-text">Wallets</span>
                       
                    </li>

                </ul>
            </div>

            <div className="bottom-content">
                <li className="">
                    
                        <i className='bx bx-log-out icon' ></i>
                        <span className="text nav-text">Logout</span>
                    
                </li>

               
                
            </div>
        </div>
    </nav>
        
    )   
}

export default Nav;