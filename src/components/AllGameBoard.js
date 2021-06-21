import React from "react";
import GameboardUI from "./GameboardUI";
import GameboardContainer from "./styles/GameboardContainer";

const AllGameBoard = (props) => {
  const {
    setting,
    mode,
    game,
    homeShipLocations,
    awayShipLocations,
    setAwayShipLocations,
    setHomeShipLocations,
    turn,
    setTurn,
    setGameOver,
  } = props;
  return (
    <GameboardContainer>
      <GameboardUI
        setGameOver={setGameOver}
        setting={setting}
        locations={homeShipLocations}
        setShipLocations={setHomeShipLocations}
        player={game?.playerOne}
        mode={mode}
        board={game?.gameboardHome}
        receiveAttack={game?.gameboardHome?.receiveAttack}
        setTurn={setTurn}
        turn={turn}
      ></GameboardUI>
      <GameboardUI
        setGameOver={setGameOver}
        setting={setting}
        locations={awayShipLocations}
        setShipLocations={setAwayShipLocations}
        player={game?.playerTwo}
        mode={mode}
        board={game?.gameboardAway}
        receiveAttack={game?.gameboardAway?.receiveAttack}
        setTurn={setTurn}
        turn={turn}
      ></GameboardUI>
    </GameboardContainer>
  );
};

export default AllGameBoard;
