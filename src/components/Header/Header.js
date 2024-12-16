

function Header() {
    return (
        <>
            <header class="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md">
                <nav class="container mx-auto px-6 py-4">
                    <ul class="flex justify-center space-x-8">
                        <li><a href="#home" class="text-lg font-medium hover:text-blue-500 transition-colors">Home</a></li>
                        <li><a href="#about" class="text-lg font-medium hover:text-blue-500 transition-colors">About</a></li>
                        <li><a href="#projects" class="text-lg font-medium hover:text-blue-500 transition-colors">Projects</a>
                        </li>
                        <li><a href="#skills" class="text-lg font-medium hover:text-blue-500 transition-colors">Skills</a></li>
                        <li><a href="#contact" class="text-lg font-medium hover:text-blue-500 transition-colors">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
