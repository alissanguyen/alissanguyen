import Link from 'next/link';

import * as React from 'react';

interface Props {

}

const NavBar: React.FC<Props> = ({ }) => {

    return (
        <div className="NavBar__Wrapper text-dark-textPrimary px-20">
            <ul className="flex flex-row justify-between items-center">
                <li className="NavBar__RouteButton hover:text-dark-textSecondary">
                    <a href="/">Home</a>
                </li>
                <li className="NavBar__RouteButton hover:text-dark-textSecondary">
                    <Link href="#portfolio">Portfolio</Link>
                </li>
                <li className="NavBar__RouteButton hover:text-dark-textSecondary">
                    <Link href="#aboutme">About Me</Link>
                </li>
                <li className="NavBar__RouteButton hover:text-dark-textSecondary">
                    <Link href="/resume">Resume</Link>
                </li>
                <li className="NavBar__RouteButton hover:text-dark-textSecondary">
                    <Link href="#contact">Contact</Link>
                </li>
                <li className="NavBar__RouteButton hover:text-dark-textSecondary">
                    <Link href="/blog">Blog</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar

/**
 * NavBar links: Home, Portfolio, About Me, Resume, Contact, Blog
 */