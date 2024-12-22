import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';
function Contact({ show, handleShow }) {

    const onClose = () => {
        handleShow(false);
    }
    return (
        <>
            {show && (
                <div className="fixed  inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <section id="contact" className="motion-preset-expand py-20 bg-gray-100 dark:bg-gray-900 w-1/3 relative rounded-xl">
                        <FaTimes className="text-2xl  text-gray-500 cursor-pointer absolute top-4 right-4 z-10" onClick={onClose} />
                        <div className="container mx-auto px-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Liên hệ với tôi</h2>
                            <div className="max-w-3xl mx-10">
                                <form className="space-y-6" action="https://formspree.io/f/xdkorozk" method="POST">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2">Họ tên</label>
                                        <input type="text" id="name" name="name"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            required />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                        <input type="email" id="email" name="email"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            required />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium mb-2">Tin nhắn</label>
                                        <textarea id="message" name="message" rows="4"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            required></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Gửi</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </>
    );
}

export default Contact;