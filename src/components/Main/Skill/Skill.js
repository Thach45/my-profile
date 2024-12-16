import React, { useEffect } from 'react';
function Skill() {
   
    return (
        <>
            <section id="skills" className="py-20 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Kỹ năng của tôi</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="mb-4">
                            <div className="flex justify-between mb-1">
                                <span className="text-lg font-medium">JavaScript</span>
                                <span className="text-lg font-medium">90%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-blue-500 h-2.5 rounded-full" style={{width: "90%"}}></div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex justify-between mb-1">
                                <span className="text-lg font-medium">React</span>
                                <span className="text-lg font-medium">85%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-blue-500 h-2.5 rounded-full" style={{width: "85%"}}></div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex justify-between mb-1">
                                <span className="text-lg font-medium">Node.js</span>
                                <span className="text-lg font-medium">80%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-blue-500 h-2.5 rounded-full" style={{width: "80%"}}></div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex justify-between mb-1">
                                <span className="text-lg font-medium">Python</span>
                                <span className="text-lg font-medium">75%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-blue-500 h-2.5 rounded-full" style={{width: "75%"}}></div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex justify-between mb-1">
                                <span className="text-lg font-medium">SQL</span>
                                <span className="text-lg font-medium">70%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-blue-500 h-2.5 rounded-full" style={{width: "70%"}}></div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex justify-between mb-1">
                                <span className="text-lg font-medium">HTML/CSS</span>
                                <span className="text-lg font-medium">95%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-blue-500 h-2.5 rounded-full" style={{width: "85%"}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Skill;