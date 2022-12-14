import React from 'react';
import { style } from '@mui/system';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import styled from '../styles/Navbar.module.css';

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={styled.nav}>
      {isOpen && (
        <div className={styled.closeTab} id="nav-close">
          <div className={styled.absolute}>
            <div className={styled.mobilecloseTab}>
              <h2>ARTSY.</h2>
              <i
                className={`${styled.closetoggle} uil uil-times`}
                onClick={toggleMenu}
              ></i>
            </div>

            <ul className={`${styled.navCenterList} ${styled.mobilegap47}`}>
              <li
                className={
                  router.pathname === '/'
                    ? 'mobilenavList mobileactive'
                    : 'mobilenavList'
                }
              >
                <Link href="/" className="link">
                  Home
                </Link>
              </li>
              <li
                className={
                  router.pathname === '/MarketPlace'
                    ? 'mobilenavList mobileactive'
                    : 'mobilenavList'
                }
              >
                <Link href="/MarketPlace">Marketplace</Link>
              </li>
              <li
                className={
                  router.pathname === '/Auction'
                    ? 'mobilenavList mobileactive'
                    : 'mobilenavList'
                }
              >
                <Link href="/Auction">Auctions</Link>
              </li>
              <li
                className={
                  router.pathname === '/Drops'
                    ? 'mobilenavList mobileactive'
                    : 'mobilenavList'
                }
              >
                <Link href="/Drops">Drop</Link>
              </li>
            </ul>
            <Image
              src="/68560398-white-message-icon-on-blue-web-button.webp"
              width={64}
              height={64}
              alt="live message"
              className={styled.mobilenavMessage}
            />
          </div>
        </div>
      )}

      <div className="nav__toggle" id="nav-toggle">
        <i
          className={`${styled.toggle} uil uil-align-center`}
          onClick={toggleMenu}
        ></i>
      </div>
      <h1>ARTSY.</h1>

      <ul className={`${styled.navCenterList} ${styled.gap47}`}>
        <li className={router.pathname === '/' ? 'navList active' : 'navList'}>
          <Link href="/">Home</Link>
        </li>
        <li
          className={
            router.pathname === '/MarketPlace' ? 'navList active' : 'navList'
          }
        >
          <Link href="/MarketPlace">Marketplace</Link>
        </li>
        <li
          className={
            router.pathname === '/Auction' ? 'navList active' : 'navList'
          }
        >
          <Link href="/Auction">Auctions</Link>
        </li>
        <li
          className={
            router.pathname === '/Drops' ? 'navList active' : 'navList'
          }
        >
          <Link href="/Drops">Drop</Link>
        </li>
      </ul>

      <ul className={`${styled.navCenterList} ${styled.gap10}`}>
        <li className={styled.navListIcon}>
          <i className="uil uil-search"></i>
        </li>
        <li className={styled.navListIcon}>
          <i className="uil uil-shopping-cart-alt"></i>
        </li>
        <li className={`${styled.navListIcon} ${styled.bell}`}>
          <i className="uil uil-bell"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
