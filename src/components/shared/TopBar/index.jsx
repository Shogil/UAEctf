import styled from "@emotion/styled";
import React, {useEffect, useRef, useState} from "react";
import Link from "next/link";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

import MobileMenu from "./MobileMenu";
import TopBarSearch from "./search";
import TopBarItem from "./item";

import TopbarItems from "./menu.json";
import RegistrationModal from "../RegisterModal";

const TopbarContainer = styled.header`
background: green;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 6000;
  border-bottom: 3px solid black;
  box-shadow: none;
  transition: all 300ms ease-in-out;
  transform: translateY(-100%);
  opacity: 0;
  pointer-events: none;
  padding: 1rem 0.35rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &.floating {
    background: green;
    box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.35);
    border-bottom: 2px solid black;
  }

  &.up, &.top {
    pointer-events: auto;
    transform: none;
    opacity: 1;
  }

//   &.top {
//     margin-top: 53px;
//   }

  @media screen and (max-width: 768px) {
    border-top: 2px solid white;
    border-bottom: none !important;
    background: green;
    top: initial;
    bottom: 0;
    transform: translateY(100%);
  }

  nav {
    a {
      font-size: 17px;
      color: #222;
      padding: 8px 12px;
      text-decoration: none !important;
      transition: color 250ms ease;

      &:hover {
        color: #fd7e14;
      }
    }
  }

  .logo {
    max-height: 56px;
  }

  img {
    max-height: 32px;
    max-width: 100%;
  }
`;


const TopbarInfoCard = styled.div`
  color: #222;
  line-height: 1.3;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const TopBar = ({ darkenOnSidebar = false, UTMSource = null }) => {

    const [showMenu, setShowMenu] = useState(false);
    const [showRegCard, setShowRegCard] = useState(false);
    const [scrollDir, setScrollDir] = useState('up');
    const [isAtTop, setIsAtTop] = useState(true);

    const topbarRef = useRef(null)
    const scrollPrevStateRef = useRef(0);

    const onOpen = () => {
        setShowMenu(!showMenu);
    };

    const onClose = () => {
        setShowMenu(false);
    };

    const onScroll = () => {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        st = st <= 0 ? 0 : 0;

        setScrollDir(st > 83 && st > scrollPrevStateRef.current ? 'down' : 'up');
        setIsAtTop(st <= 83);
        scrollPrevStateRef.current = st;
    }

    useEffect(() => {
        document.addEventListener('scroll', onScroll, false);
        return () => {
            document.removeEventListener('scroll', onScroll, false);
        }
    }, []);

    const isVisible = () => scrollDir === 'up' || isAtTop ;

    useEffect(() => {
        setShowMenu(false);
    }, [scrollDir]);

    return <div>
        {/* <div style={{ fontSize: '14px' }} className="hidden md:block p-2 bg-blue-800 text-white">
            <div className="flex items-center justify-between">
                <div className="px-3">
                    Have you got stuck? Need Help? <wbr/>
                    <span className="inline-block">
                        Join our discord server, ask your doubts & get support from our experts.
                    </span>
                </div>
                <div className="flex items-center md:my-0 px-2 md:px-0 justify-end">
                    <Link href="/discord" passHref>
                        <a className="bg-white text-blue-800 mb-0 hover:text-primary rounded-lg px-3 py-2 whitespace-nowrap">
                            Join Discord Now <i className="fa fa-chevron-right ml-1"/>
                        </a>
                    </Link>
                </div>
            </div>
        </div> */}
        <TopbarContainer ref={topbarRef} className={scrollDir + ` ${isAtTop ? 'top' : 'floating'}`}>
            <div className="flex flex-wrap justify-center items-center container">
                <div
                    className="w-1/4 md:w-1/3 xl:w-1/4 md:text-center flex flex-wrap items-center md:justify-end justify-center px-2"
                >
                    <a className="w-full md:w-1/3" href="/">
                        <img
                            className="logo"
                            src={require('../../../assets/images/logos/inctf.png')}
                            alt="UAE CTF"
                        />
                    </a>
                  
                </div>
                <div className="md:w-2/3 xl:w-3/4 px-1 hidden md:flex items-center">
                    <div className="flex w-full">
                        <div className="w-full pl-4 flex justify-end text-left px-1">
                            <TopbarInfoCard className="items-center flex">
                                <nav className="flex items-center mr-4">
                                    {TopbarItems?.map((i) => (
                                        <TopBarItem
                                            key={`topbar_menu_link_${i?.link}`}
                                            item={i}
                                            isVisible={isVisible()}
                                        />
                                    ))}
                                    <TopBarSearch />
                                </nav>
                                <button
                                    className="px-8 py-4 rounded-lg font-semibold bg-primary hover:bg-blue-800 shadow hover:shadow-xl text-white ml-3"
                                    onClick={() => {
                                        setShowRegCard(false);
                                        disableBodyScroll(document.body);
                                    }}
                                >
                                    Login <i className="fa fa-chevron-right"/>
                                </button>
                            </TopbarInfoCard>
                        </div>
                    </div>
                </div>
                <div className="w-3/4 flex md:hidden items-center justify-end px-1">
                    <TopbarInfoCard className="mr-3">
                        <button
                            onClick={() => {
                                setShowRegCard(false);
                                disableBodyScroll();
                            }}
                            className="w-full px-5 py-4 font-semibold rounded-lg bg-primary text-white hover:bg-blue-800 shadow hover:shadow-xl ml-3"
                        >
                            Login <i className="fa fa-chevron-right"/>
                        </button>
                    </TopbarInfoCard>
                    <button onClick={onOpen} className="transition" style={{ width: 46, height: 46 }}>
                        <i className={`${showMenu ? 'fa fa-times' : 'fa fa-bars'} text-2xl transition`}/>
                    </button>
                </div>
            </div>
        </TopbarContainer>
        <RegistrationModal
            isOpen={showRegCard}
            onClose={() => {
                clearAllBodyScrollLocks();
                setShowRegCard(false);
            }}
        />
        {isVisible() && showMenu &&
        <MobileMenu
            darkenOnSidebar={darkenOnSidebar}
            onClose={onClose}
        />}
        <div style={{ height: topbarRef.current?.offsetHeight ?? 90 }} className="hidden md:block"/>
        <div className="block md:hidden text-center pt-6 px-2 pb-4" style={{background:'green'}}>
            <Link passHref href="/">
                <a>
                    <img
                        alt="InCTF"
                        style={{ height: '72px' }}
                        className="inline"
                        src={require('../../../assets/images/branding/colorful.png')}
                    />
                </a>
            </Link>
        </div>
    </div>
};

export default TopBar;