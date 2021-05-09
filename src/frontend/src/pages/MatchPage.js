import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';

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
            <h1> MatchPage</h1>
            {/* <MatchDetailCard match={team.matches[0]} teamName={team.teamName} /> */}
            {matches.map(match => <MatchDetailCard match={match} key={match.id} teamName={teamName}/>)}
        </div>
    );
}

