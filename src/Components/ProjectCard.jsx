import React from "react";

const ProjectCard = ({ project }) => {

    return (
        <div className="max-w-sm w-30p lg:max-w-full lg:flex m-5 p-3 min-w-max">
            <div className="w-full shadow-md shadow-gray-700 rounded-2xl p-4 flex flex-col justify-between leading-normal bg-card-bg bg-cover ">
                <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center"></p>
                    <div className="text-gray-600 font-bold text-xl mb-2 cursor-pointer hover:text-blue-900 cursor-pointer w-min" onClick={() => window.location.href = project.html_url} >{project.name}</div>
                    <p className="text-gray-700 text-base">Repository créé le {new Date(project.created_at).toLocaleDateString()}</p>
                    <p className="text-gray-700 text-base">Dernière mise à jour le {new Date(project.updated_at).toLocaleDateString()}</p>
                    <p className="text-gray-700 text-base">Langage principal : {project.language}</p>

                </div>
                <div className="flex items-center cursor-pointer w-min" onClick={() => window.location.href = project.owner.html_url} >
                    <img className="w-10 h-10 rounded-full mr-4" src={project.owner.avatar_url} alt="Avatar"/>
                    <div className="text-sm">
                            <p className="text-gray-900 leading-none">{project.owner.login}</p>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;