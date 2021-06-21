import React, { useState } from "react";

import GameLoop from "../helpers/GameLoop";
import NextPlayerScreen from "./screens/NextPlayerScreen";
import AllShips from "./AllShips";
import AllGameBoard from "./AllGameBoard";
import GameButtons from "./GameButtons";
import GameOverScreen from "./screens/GameOverScreen";

const App = () => {
  const [gameOver, setGameOver] = useState(true);
  const [homeShipLocations, setHomeShipLocations] = useState([]);
  const [awayShipLocations, setAwayShipLocations] = useState([]);
  const [rotate, setRotate] = useState(false);
  const [game, setGame] = useState({});
  const [setting, setSetting] = useState(true);
  const [turn, setTurn] = useState("p-1");
  const [mode, setMode] = useState("npc");

  const startGame = () => {
    setGameOver(false);
    const game = GameLoop(mode);
    setGame(game);
    setHomeShipLocations(() => {
      const newLocations = [];
      game.gameboardHome.ships.map((ship) => {
        ship.location.map((coord) => newLocations.push(coord));
      });
      return newLocations;
    });
    setAwayShipLocations(() => {
      const newLocations = [];
      game.gameboardAway.ships.map((ship) => {
        ship.location.map((coord) => newLocations.push(coord));
      });
      return newLocations;
    });
    setSetting(true);
  };

  console.warn("-------------------");

  return (
    <div>
      {gameOver && <GameOverScreen startGame={startGame} turn={turn} />}
      <h1>BATTLESHIP</h1>
      {!setting && mode !== "npc" && <NextPlayerScreen turn={turn} />}
      <AllGameBoard
        setting={setting}
        mode={mode}
        game={game}
        homeShipLocations={homeShipLocations}
        setHomeShipLocations={setHomeShipLocations}
        awayShipLocations={awayShipLocations}
        setAwayShipLocations={setAwayShipLocations}
        turn={turn}
        setTurn={setTurn}
        setGameOver={setGameOver}
      />
      <button onClick={startGame}>START GAME</button>
      {setting && (
        <GameButtons
          setSetting={setSetting}
          setRotate={setRotate}
          setTurn={setTurn}
          mode={mode}
          turn={turn}
          rotate={rotate}
        />
      )}
      <AllShips
        game={game}
        turn={turn}
        setting={setting}
        rotate={rotate}
        mode={mode}
        setHomeShipLocations={setHomeShipLocations}
        setAwayShipLocations={setAwayShipLocations}
      />
    </div>
  );
};

export default App;