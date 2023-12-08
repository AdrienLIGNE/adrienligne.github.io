import axios from "axios";

const GithubService = {
    getProjects: async () => {
        const response = await axios.get("https://api.github.com/users/adrienligne/repos");
        return response.data;
    }
}

export default GithubService;
