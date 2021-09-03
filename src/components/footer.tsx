import React from 'react';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="px-4 max-w-7xl mx-auto w-full pt-6 pb-6 flex flex-col lg:flex-row justify-between items-center text-base lg:px-6">
            <p className="mb-6 lg:mb-0">created by adrianfrackowiak</p>
            <nav>
                <ul className="flex space-x-8">
                    <li>
                        <a
                            href="https://github.com/adrianfrackowiak/"
                            target="_blank"
                        >
                            <AiFillGithub />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.instagram.com/adifrac_/"
                            target="_blank"
                        >
                            <AiFillInstagram />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/adrianfrackowiak/"
                            target="_blank"
                        >
                            <FaLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href="mailto: adrianfrackowiak@icloud.com">
                            <MdEmail />
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
