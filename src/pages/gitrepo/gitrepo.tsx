import React, { useEffect, useState } from "react";
import axios from 'axios';
import Header from './../header';
// interface Iuser {
//     name: string,
//     username: string,
//     email: string,
//     phone: string
// }

function GitReposPage() {
    const [repos, setRepos] = useState([])

    useEffect(() => {
        fetchRepoData();
    }, []);

    const fetchRepoData = async () => {
        const response = await axios.get('https://api.github.com/users/facebook/repos');
        setRepos(response.data);
    }
    return (
        <div style={{marginTop:"100px"}}>
         <Header />
        <h2>
            This is the real time data of facebook projects in GIT
        </h2>
            {repos.length > 0 ?
                <table className="repos-table">
                    <thead>
                        <tr>
                            <th colSpan={1}>S.NO</th>
                            <th colSpan={1}>Name</th>
                            {/* <th colSpan={1}>full Name</th> */}
                            <th colSpan={1}>Description</th>
                            <th colSpan={1}>HTML URL</th>
                            {/* <th>User Email</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {repos.map((person, index) =>
                            <tr>
                                <td colSpan={1}>{index + 1}</td>
                                <td colSpan={1}>{person.name}</td>
                                {/* <td colSpan={1}>{person.full_name}</td> */}
                                <td colSpan={1}>{person.description}</td>
                                <td colSpan={1}>
                                <a target="_blank" href={person.html_url}>{person.html_url}</a>
                                </td>
                                {/* <td>{person.email}</td> */}
                            </tr>
                        )}
                    </tbody>
                </table> : <p> Loading Repos... </p>}
        </div>
    );
}

export default GitReposPage;
