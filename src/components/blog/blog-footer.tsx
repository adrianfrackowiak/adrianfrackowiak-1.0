import React from 'react';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

const BlogFooter: React.FC = () => {
    return (
        <footer>
            <p>created by adrianfrackowiak</p>
            <nav className="nav-socials">
                <ul>
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

export default BlogFooter;
