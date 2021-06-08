import React from 'react';
import ContactForm from './contactform';

const Contact: React.FC = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-field">
                <button
                    data-sal="slide-up"
                    data-sal-delay="100"
                    data-sal-duration="1200"
                    data-sal-easing="ease-out-bounce"
                >
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
