import imgProject1 from '../../../assets/img/anh-project1.png'
import imgProject2 from '../../../assets/img/anh-project2.png'
function Project() {
    const projects = [
        {
            Name: "E-commerce Platform",
            Description: "A full-featured online shopping platform built with Node.js.",
            Image: imgProject1,
            URL: "#",
            tags: ["Node.js", "MongoDB"]
        },
        {
            Name: "Personal Finance Management",
            Description: "A web application designed to help users manage their personal finances, including accounts, transactions, loans, and financial reports.",
            Image: imgProject2,
            URL: "https://finace-manager.onrender.com",
            tags: ["Flask", "Python", "MongoDB", "Tailwind CSS"]
        },
        {
            Name: "Task Manager",
            Description: "A task manager app that helps users keep track of their daily tasks and activities.",
            Image: "https://via.placeholder.com/400x300?text=Task+Manager",
            URL: "#",
            tags: ["React", "Node.js"]
        }
    ]


    return (
        <>
            <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Dự án của tôi</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) =>
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                                <img src={project.Image} alt="E-commerce Platform"
                                    className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{project.Name}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.Description}</p>
                                    <div className="flex mt-2 mb-2">
                                        {project.tags.map((tag) =>

                                            <span className="inline-flex mr-2 mt-2 mb-5 items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">{tag}</span>
                                        )}
                                    </div>
                                    <a href={project.URL} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Xem chi tiết</a>
                                </div>
                            </div>


                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project