// src/Scorecard.js
import React, { useState } from 'react';
import './Scorecard.css';

const Scorecard = () => {
  const initialPlayers = [
    { id: 1, name: 'Player 1', score: 0 },
    { id: 2, name: 'Player 2', score: 0 },
    { id: 3, name: 'Player 3', score: 0 },
    { id: 4, name: 'Player 4', score: 0 },
    { id: 5, name: 'Player 5', score: 0 },
    { id: 6, name: 'Player 6', score: 0 },
  ];

  const [players, setPlayers] = useState(initialPlayers);
  const [teamName, setTeamName] = useState('Team Name');

  const incrementScore = (id, increment) => {
    setPlayers(players.map(player => (
      player.id === id ? { ...player, score: player.score + increment } : player
    )));
  };

  const handleNameChange = (id, name) => {
    setPlayers(players.map(player => (
      player.id === id ? { ...player, name } : player
    )));
  };

  const totalScore = players.reduce((total, player) => total + player.score, 0);

  return (
    <div className="scorecard">
      <h1>{teamName}</h1>
      <input
        type="text"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
        placeholder="Edit Team Name"
      />
      <ul>
        {players.map(player => (
          <li key={player.id}>
            <input
              type="text"
              value={player.name}
              onChange={(e) => handleNameChange(player.id, e.target.value)}
            />
            <span>Score: {player.score}</span>
            <div className="buttons">
              <button onClick={() => incrementScore(player.id, 1)}>+1</button>
              <button onClick={() => incrementScore(player.id, 2)}>+2</button>
              <button onClick={() => incrementScore(player.id, 3)}>+3</button>
              <button onClick={() => incrementScore(player.id, 4)}>+4</button>
              <button onClick={() => incrementScore(player.id, 6)}>+6</button>
            </div>
            <div className="extra-buttons">
              <span>No Ball/Wide:</span>
              <button onClick={() => incrementScore(player.id, 1)}>+1</button>
              <button onClick={() => incrementScore(player.id, 2)}>+2</button>
              <button onClick={() => incrementScore(player.id, 3)}>+3</button>
              <button onClick={() => incrementScore(player.id, 4)}>+4</button>
              <button onClick={() => incrementScore(player.id, 6)}>+6</button>
            </div>
          </li>
        ))}
      </ul>
      <h2>Total Score: {totalScore}</h2>
    </div>
  );
};

export default Scorecard;
