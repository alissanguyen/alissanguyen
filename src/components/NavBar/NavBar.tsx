import Link from 'next/link';
import "./NavBar.css"
import * as React from 'react';
import BlogButton from '../BlogButton/BlogButton';

interface Props {
    navbarOpacity: number
}

const NavBar: React.FC<Props> = ({ navbarOpacity }) => {


    return (
        <nav className="NavBar__Wrapper text-dark-textSecondary px-20 flex flex-row justify-between items-center sticky top-0"
            style={{
                backgroundColor: `rgba(107, 107, 107, ${navbarOpacity})`,
                backdropFilter: `blur(${navbarOpacity * 50}px)`,
            }}>
            <ul className="flex flex-row justify-between items-center font-medium text-lg gap-20">
                <li className="NavBar__RouteButton hover:text-yellow-400">
                    <a href="/">Home</a>
                </li>
                <li className="NavBar__RouteButton hover:text-yellow-400">
                    <Link href="#portfolio">Portfolio</Link>
                </li>
                <li className="NavBar__RouteButton hover:text-yellow-400">
                    <Link href="#aboutme">About Me</Link>
                </li>
                <li className="NavBar__RouteButton hover:text-yellow-400">
                    <Link href="#resume">Resume</Link>
                </li>
                <li className="NavBar__RouteButton hover:text-yellow-400">
                    <Link href="#contact">Contact</Link>
                </li>
            </ul>
            <BlogButton />
        </nav>
    )
}

export default NavBar

/**
 * NavBar links: Home, Portfolio, About Me, Resume, Contact, Blog
 */