import "./Home.css";

function Home() {
    return (
        <>
            <section id="home" className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
                <div className="text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fadeInUp">
                        Xin chào, tôi là <span className="text-blue-500">HOÀNG THẠCH</span>
                    </h1>
                    <p className="text-xl typewriter md:text-2xl mb-8" >
                        FULL-STACK DEVELOPER
                    </p>
                    <a href="#contact"
                        className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-600 transition-colors animate-fadeInUp"
                        style={{ animationDelay: '0.4s' }}>
                        Liên hệ với tôi
                    </a>
                </div>
            </section>   
        </>
    )
    
}

export default Home;