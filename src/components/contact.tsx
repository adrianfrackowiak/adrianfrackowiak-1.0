import React from 'react';

const Contact: React.FC = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-field">
                <button>
                    <h2 className="contact-title">
                        <a href="mailto: adrianfrackowiak@icloud.com">
                            Write to me! <span className="wave">👋</span>
                        </a>
                    </h2>
                </button>
            </div>
        </section>
    );
};

export default Contact;
