import profileImage from '../../../assets/img/anh2.png';
function About() {
    return (
        <>
            <section id="about" className="py-20 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Về tôi</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img src={profileImage} alt="Profile" className="rounded-full flex items-center justify-center mx-auto" />
                        </div>
                        <div>
                            <p className="text-lg mb-6">
                            Tôi là một sinh viên năm 2 đam mê phát triển web full-stack. 
                            Mặc dù mới bắt đầu hành trình lập trình, nhưng tôi luôn cố gắng học hỏi và phát triển các kỹ năng để xây dựng những ứng dụng web hiện đại, thân thiện với người dùng.

                            </p>
                            <p className="text-lg mb-6">
                                Kỹ năng của tôi bao gồm JavaScript (React, Node.js), Python, và các công nghệ web hiện đại
                                khác. Tôi
                                luôn tìm kiếm cơ hội để học hỏi và áp dụng các công nghệ mới vào dự án của mình.
                            </p>
                            <a href="#projects"
                                className="bg-blue-500 text-white px-6 py-2 rounded-full text-lg font-medium hover:bg-blue-600 transition-colors">
                                Xem dự án của tôi
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;