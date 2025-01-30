import React from 'react';

const Footer = () => {
    return (
        <footer
            style={{
                backgroundColor: '#121618',
                color: '#857878',
                padding: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '14px',
                width: '100%',
                marginTop: '80px',
                textAlign: 'center',
            }}
        >
            {/* Left Side: Copyright */}
            <div
                style={{
                    marginBottom: '10px',
                    flex: '1 1 auto',
                    textAlign: 'left',
                }}
            >
                <p style={{ margin: 0 }}>
                    &copy; 2024 Deepnetsoft Solutions. All rights reserved.
                </p>
            </div>

            {/* Right Side: Terms & Privacy */}
            <div
                style={{
                    flex: '1 1 auto',
                    textAlign: 'right',
                }}
            >
                <p style={{ margin: 0 }}>
                    <a
                        href="#"
                        style={{
                            color: '#857878',
                            textDecoration: 'none',
                            marginRight: '10px',
                        }}
                    >
                        Terms & Conditions
                    </a>
                    |
                    <a
                        href="#"
                        style={{
                            color: '#857878',
                            textDecoration: 'none',
                            marginLeft: '10px',
                        }}
                    >
                        Privacy Policy
                    </a>
                </p>
            </div>

            {/* Responsive Styling */}
            <style>{`
                @media (max-width: 768px) {
                    footer {
                        flex-direction: column; /* Stack the content vertically */
                        text-align: center;
                    }
                    footer div:first-child {
                        margin-bottom: 10px;
                    }
                    footer div:last-child {
                        margin-top: 10px;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
