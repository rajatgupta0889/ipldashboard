import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'
import { TeamTile } from '../components/TeamTile';
import './HomePage.scss';
export const HomePage = () => {
    const [teams, setTeams] = useState([]);
    const { teamName } = useParams();
    useEffect(
        () => {
            const fetchAllTeams = async () => {
                // Chennai%20Super%20Kings
                const response = await fetch(`http://localhost:8080/team`)
                const data = await response.json();
                setTeams(data);
                console.log(data)
            }
            fetchAllTeams();
        }, []
    );
    return (
        <div className="HomePage">
            <div className="header-section">
                <h1 className="app-name"> IPL Dashboard </h1>
            </div>
            <div className="team-grid">
                {teams.map(team => <TeamTile teamName={team.teamName}/>)}
            </div>
        </div>
    );
}

