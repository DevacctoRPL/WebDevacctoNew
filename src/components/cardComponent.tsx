import React from 'react';

export default function CardComponent() {
    const projects = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
    ];

    return (
        <div className="min-h-screen w-full bg-[#7A7A7A] relative pb-10">
            <div className="container mx-auto px-4">
                <h1 className="pt-10 px-3 text-4xl font-bold text-white font-poppins [text-shadow:_1px_4px_0px_#D9D9D9]">
                    PROJECTS
                </h1>
                <div className="-mt-5 h-7 w-52 rounded-3xl bg-[#62929A]"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
                    {projects.map((project) => (
                        <div key={project.id} className="text-center">
                            <div className="w-full max-w-sm h-80 bg-[#62929A] rounded-3xl mx-auto"></div>
                            <p className="mt-3 text-white text-4xl font-poppins font-bold">
                                Project Name 
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}