import { BrowserRouter as Router } from 'react-router-dom';
import { ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg';
import { ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg';
import { ReactComponent as PersonOutlineIcon } from '../assets/svg/personOutlineIcon.svg';

// Navbar component
function Navbar() {
    const pathMatchRoute = (route) => {
        return window.location.pathname === route;
    }

    return (
        <footer className='navbar'>
            <nav className='navbarNav'>
                <ul className='navbarListItems'>
                    <li className='navbarListItem'>
                        <a href="/" className="navLink">
                            <ExploreIcon
                                fill={pathMatchRoute('/') ? '#2c2c2c' : '#8f8f8f'}
                                width='36px'
                                height='36px'
                            />
                            <p className={pathMatchRoute('/') ? 'navbarListItemNameActive' : 'navbarListItemName'}>
                                Explore
                            </p>
                        </a>
                    </li>
                    <li className='navbarListItem'>
                        <a href="/offers" className="navLink">
                            <OfferIcon
                                fill={pathMatchRoute('/offers') ? '#2c2c2c' : '#8f8f8f'}
                                width='36px'
                                height='36px'
                            />
                            <p className={pathMatchRoute('/offers') ? 'navbarListItemNameActive' : 'navbarListItemName'}>
                                Offers
                            </p>
                        </a>
                    </li>
                    <li className='navbarListItem'>
                        <a href="/profile" className="navLink">
                            <PersonOutlineIcon
                                fill={pathMatchRoute('/profile') ? '#2c2c2c' : '#8f8f8f'}
                                width='36px'
                                height='36px'
                            />
                            <p className={pathMatchRoute('/profile') ? 'navbarListItemNameActive' : 'navbarListItemName'}>
                                Profile
                            </p>
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default function NavbarWithRouter() {
    return (
        <Router>
            <Navbar />
        </Router>
    );
}