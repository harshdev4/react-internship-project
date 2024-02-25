import { useEffect, useRef } from 'react';
import './Navbar.scss';

const Navbar = ()=>{
    const menu = useRef();
    const search = useRef();

    const toggleMenu = ()=>{
        menu.current.classList.toggle("show");
        console.log(menu.current);
    }

    const toggleSearch = ()=>{
        search.current.classList.toggle("showBar");
    }

    return (
        <> 
            <nav>
                <div className="navbar">
                    <form action="" className='searchContainer'>
                        <input type="search" name="search" id="searchBar" ref={search}/>
                        <img src='img/search.png' className="searchIcon" />
                        <img src='img/search.png' className="searchIcon" id="searchIconMini" onClick={toggleSearch} />
                    </form>
                    
                    <div className="menuBar close" onClick={toggleMenu}><i className="fa-solid fa-bars"></i></div>

                    <div className="nav-linkContainer" ref={menu}>
                    <ul className='nav-links'>
                        <li className="nav-link">Categories</li>
                        <li className="nav-link">Website Builder</li>
                    </ul> 

                    <a className="nav-link">Today's Deal</a></div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;