import React, { useState } from "react";
import "./App.css"

function App() {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png",
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png",
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png",
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png",
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png",
    },
    {
      id: 6,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png",
    },
    {
      id: 7,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png",
    },
    {
      id: 8,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png",
    },
    {
      id: 9,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png",
    },
    {
      id: 10,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png",
    },
  ]);



  const totalStrength = team.reduce((sum, f) => sum + f.strength, 0);
  const totalAgility = team.reduce((sum, f) => sum + f.agility, 0);

  const handleAddFighter = (fighter) => {
    if (money < fighter.price) return console.log("Not enough money");
    setTeam([...team, fighter]);
    setZombieFighters(zombieFighters.filter(f => f.id !== fighter.id));
    setMoney(money - fighter.price);
  };

  const handleRemoveFighter = (fighter) => {
    setTeam(team.filter(f => f.id !== fighter.id));
    setZombieFighters([...zombieFighters, fighter]);
    setMoney(money + fighter.price);
  };

  return (
    <div className="App">
      <h1> Zombie Fighter App</h1>
      <p> Money: ${money}</p>
      <p> Strength: {totalStrength} |  Agility: {totalAgility}</p>

      <h2>Recruit Fighters</h2>
      <ul className="fighter-list">
        {zombieFighters.map(f => (
          <li key={f.id} className="fighter-card">
            <img src={f.img} alt={f.name} />
            <h3>{f.name}</h3>
            <p>Price: ${f.price}</p>
            <p>STR: {f.strength} | AGI: {f.agility}</p>
            <button onClick={() => handleAddFighter(f)}>Add</button>
          </li>
        ))}
      </ul>

      <h2>Your Team</h2>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul className="fighter-list">
          {team.map(f => (
            <li key={f.id} className="fighter-card">
              <img src={f.img} alt={f.name} />
              <h3>{f.name}</h3>
              <p>Price: ${f.price}</p>
              <p>STR: {f.strength} | AGI: {f.agility}</p>
              <button onClick={() => handleRemoveFighter(f)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;