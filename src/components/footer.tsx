import React from 'react';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

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
                        <FaLinkedin />
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
