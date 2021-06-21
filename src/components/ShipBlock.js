import React, { useEffect, useState } from "react";
import DOMUtils from "../helpers/DOMUtils";

import ElasticDiv from "../components/styles/ShipStyles";

const ShipBlock = ({
  length,
  location,
  orientation,
  player,
  placeShips,
  number,
  setShipLocations,
  rotate,
  setting,
  turn,
  mode,
  isSunk,
}) => {
  const [coords, setCoords] = useState({ top: "", left: "" });
  const { dragStart, handleShipClick, trackTargetCell } = DOMUtils();

  useEffect(() => {
    trackTargetCell(setCoords, setShipLocations, player, location);
  }, [location]);

  useEffect(() => {
    window.addEventListener(
      "resize",
      trackTargetCell.bind(null, setCoords, setShipLocations, player, location)
    );
  }, []);

  if (isSunk()) {
    document
      .getElementById(player?.type + length + number)
      .classList.add("sunk");
  }

  return (
    <ElasticDiv
      id={player?.type + length + number}
      onClick={() =>
        handleShipClick(
          rotate,
          setting,
          placeShips,
          setShipLocations,
          number,
          orientation
        )
      }
      onMouseDown={(e) =>
        dragStart(e, setting, rotate, placeShips, setShipLocations, number)
      }
      length={length}
      top={coords.top}
      left={coords.left}
      setting={setting}
      orientation={orientation}
      className={
        ((turn !== player?.type && mode !== "npc") ||
          (mode === "npc" && player?.type === "p-2")) &&
        "hidden"
      }
    />
  );
};

export default ShipBlock;
