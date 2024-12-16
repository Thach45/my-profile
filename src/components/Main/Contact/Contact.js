function Contact() {
    return (
        <>
            <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Liên hệ với tôi</h2>
                    <div className="max-w-3xl mx-auto">
                        <form className="space-y-6" action="https://formspree.io/f/xdkorozk" method="POST">
                            <div>
                                <label for="name" className="block text-sm font-medium mb-2">Họ tên</label>
                                <input type="text" id="name" name="name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required />
                            </div>
                            <div>
                                <label for="email" className="block text-sm font-medium mb-2">Email</label>
                                <input type="email" id="email" name="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required/>
                            </div>
                            <div>
                                <label for="message" className="block text-sm font-medium mb-2">Tin nhắn</label>
                                <textarea id="message" name="message" rows="4"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required></textarea>
                            </div>
                            <div>
                                <button type="submit"
                                    className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                    Gửi tin nhắn
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>

    )

}

export default Contact;