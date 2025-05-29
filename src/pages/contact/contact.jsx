import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { BiSend } from 'react-icons/bi';
import { VscError, VscCheck } from 'react-icons/vsc';

const Contact = () => {
    const form = useRef();
    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState({ show: false, success: false, message: '' });

    // Add useEffect to handle viewport height
    useEffect(() => {
        const handleResize = () => {
            // Set a CSS variable for the real viewport height
            document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
        };

        // Initial call
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        setSending(true);
        setStatus({ show: false, success: false, message: '' });

        emailjs.sendForm(
            'service_pskhc3n',
            'template_6rbf9k4',
            form.current,
            'bVylr36BWxkpWZglD'
        )
        .then((result) => {
            setStatus({
                show: true,
                success: true,
                message: 'Message sent successfully!'
            });
            form.current.reset();
        })
        .catch((error) => {
            setStatus({
                show: true,
                success: false,
                message: 'Failed to send message. Please try again.'
            });
        })
        .finally(() => {
            setSending(false);
        });
    };

    return (
        <div className="flex flex-col min-h-[calc(100vh-2rem)] bg-gradient-to-br from-[#0b2042] via-[#0b2042] to-[#162e4d] p-4 sm:p-6 md:p-10">
            <div className="flex-1 flex flex-col max-w-3xl mx-auto w-full font-mono">
                {/* Title Section */}
                <div className="mb-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-13">_contact-me</h1>
                    <p className="text-[#4ec9b0]">// Submit the form below or send me an email - abousaid11araqi@gmail.com</p>
                </div>

                {/* Contact Form */}
                <div className="flex-1 bg-[#0b2042]/60 backdrop-blur-md p-6 rounded-lg border border-[#753ce8]/30 shadow-xl mb-8">
                    <form ref={form} onSubmit={sendEmail} className="h-full flex flex-col space-y-6">
                        {/* Name Input */}
                        <div className="space-y-2">
                            <label className="block text-[#4ec9b0] text-sm">
                                const name =
                            </label>
                            <div className="flex items-center">
                                <span className="text-[#ce9178]">"</span>
                                <input
                                    type="text"
                                    name="from_name"
                                    required
                                    className="flex-1 bg-[#162e4d] border-b border-[#753ce8] text-[#ce9178] px-2 py-1 focus:outline-none focus:border-[#753ce8] transition-colors"
                                    placeholder="your name"
                                />
                                <span className="text-[#ce9178]">"</span>
                            </div>
                        </div>

                        {/* Email Input */}
                        <div className="space-y-2">
                            <label className="block text-[#4ec9b0] text-sm">
                                const email =
                            </label>
                            <div className="flex items-center">
                                <span className="text-[#ce9178]">"</span>
                                <input
                                    type="email"
                                    name="from_email"
                                    required
                                    className="flex-1 bg-[#162e4d] border-b border-[#753ce8] text-[#ce9178] px-2 py-1 focus:outline-none focus:border-[#753ce8] transition-colors"
                                    placeholder="youremail@email.com"
                                />
                                <span className="text-[#ce9178]">"</span>
                            </div>
                        </div>

                        {/* Message Input */}
                        <div className="space-y-2 flex-1 flex flex-col">
                            <label className="block text-[#4ec9b0] text-sm">
                                const message =
                            </label>
                            <div className="flex flex-1">
                                <span className="text-[#ce9178]">"</span>
                                <textarea
                                    name="message"
                                    required
                                    className="flex-1 bg-[#162e4d] border-b border-[#753ce8] text-[#ce9178] px-2 py-1 focus:outline-none focus:border-[#753ce8] transition-colors resize-none"
                                    placeholder="Your message here..."
                                    style={{ minHeight: '150px' }}
                                />
                                <span className="text-[#ce9178]">"</span>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex items-center justify-between mt-auto">
                            <button
                                type="submit"
                                disabled={sending}
                                className={`flex items-center space-x-2 px-6 py-2 rounded bg-[#753ce8] text-white hover:bg-[#8b5cf6] transition-colors ${sending ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                <span>{sending ? 'Sending...' : 'Send Message'}</span>
                                <BiSend className={`text-lg ${sending ? 'animate-bounce' : ''}`} />
                            </button>

                            {/* Status Message */}
                            {status.show && (
                                <div className={`flex items-center space-x-2 ${status.success ? 'text-green-400' : 'text-red-400'}`}>
                                    {status.success ? (
                                        <VscCheck className="text-lg" />
                                    ) : (
                                        <VscError className="text-lg" />
                                    )}
                                    <span className="text-sm">{status.message}</span>
                                </div>
                            )}
                        </div>
                    </form>
                </div>

                {/* Code Comments */}
                <div className="text-gray-400">
                    <p className="text-sm">
                        {`// You can also find me on:`}
                    </p>
                    <p className="text-sm text-[#ce9178]">
                        {`// LinkedIn: linkedin.com/in/said-bourhabi`}
                    </p>
                    <p className="text-sm text-[#ce9178]">
                        {`// GitHub: github.com/saidbourhabi`}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;