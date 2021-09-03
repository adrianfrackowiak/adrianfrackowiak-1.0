import React from 'react';

const Contact: React.FC = () => {
    return (
        <section
            className="px-4 max-w-7xl mx-auto min-h-screen pt-20 pb-20 flex justify-center items-center lg:px-6"
            id="contact"
        >
            <button>
                <h2 className="text-6xl font-black animate-bounce">
                    <a href="mailto: adrianfrackowiak@icloud.com">
                        Write to me! <span>👋</span>
                    </a>
                </h2>
            </button>
        </section>
    );
};

export default Contact;
