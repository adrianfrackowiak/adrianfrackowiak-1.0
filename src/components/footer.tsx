import React from 'react';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

const Footer: React.FC = () => {
    return (
        <footer>
            <p>created by adrianfrackowiak</p>
            <nav className="nav-socials">
                <ul>
                    <li>
                        <AiFillGithub />
                    </li>
                    <li>
                        <AiFillInstagram />
                    </li>
                    <li>
                        <MdEmail />
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
