import React from 'react';
import Navbar from '../Components/Navbar';
import ProjectCard from "../Components/ProjectCard";
import githubService from "../Services/GithubService";


export default function NotFoundErrorPage() {
    const [projects, setProjects] = React.useState([]);

    React.useEffect(() => {
        githubService.getProjects().then((data) => {
            setProjects(data);
        });
    }, []);

    console.log(projects);

    return (
        <>
            <Navbar/>
            <h1 className="text-3xl text-center mt-10 mb-10">Repositories GitHub</h1>

            <div className="flex flex-wrap">
            {projects.map((project) => (
                <ProjectCard project={project} />
            ))
            }
            </div>
        </>
    );
}

export class ProjectsPage {
}