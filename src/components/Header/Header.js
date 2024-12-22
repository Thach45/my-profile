

function Header({handleShow}) {
    const show = () => {
        handleShow(true);
    }
    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md">
                <nav className="container mx-auto px-6 py-4">
                    <ul className="flex justify-center space-x-8">
                        <li><a href="#home" className="text-lg font-medium hover:text-blue-500 transition-colors">Home</a></li>
                        <li><a href="#about" className="text-lg font-medium hover:text-blue-500 transition-colors">About</a></li>
                        <li><a href="#projects" className="text-lg font-medium hover:text-blue-500 transition-colors">Projects</a>
                        </li>
                        <li><a href="#skills" className="text-lg font-medium hover:text-blue-500 transition-colors">Skills</a></li>
                        <li><button onClick={show} className="text-lg font-medium hover:text-blue-500 transition-colors">Contact</button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
