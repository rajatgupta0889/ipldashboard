import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { YearSelector } from '../components/YearSelector';
import './MatchPage.scss';
export const MatchPage = () => {
    const [matches, setMatches] = useState([]);
    const { teamName, year } = useParams();
    useEffect(
        () => {
            const fetchMatches = async () => {
                // Chennai%20Super%20Kings
                const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`)
                const data = await response.json();
                setMatches(data);
                console.log(data)
            }
            fetchMatches();
        }, [teamName, year]
    );
    // if (!team || !team.teamName) return <h1> Team Not found</h1>
    return (
        <div className="MatchPage">
            <div className="year-selector">
                <h3>Select Year</h3>
                <YearSelector teamName={teamName}/>
            </div>
            <div>
            <h1 className="page-heading"> {teamName} matches in {year}</h1>
            {/* <MatchDetailCard match={team.matches[0]} teamName={team.teamName} /> */}
            {matches.map(match => <MatchDetailCard match={match} key={match.id} teamName={teamName}/>)}
            </div>
        </div>
    );
}

