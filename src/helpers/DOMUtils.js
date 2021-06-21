const DOMUtils = () => {
  let target;
  const trackTargetCell = (setCoords, setShipLocations, player, location) => {
    const targetCell = document.getElementById(player.type + location[0]);
    if (!targetCell) return;
    const targetLocate = targetCell.getBoundingClientRect();

    const { top } = targetLocate;
    const { left } = targetLocate;

    setCoords({ top, left });
    setShipLocations((prevState) => [...prevState]);
  };

  const dragStart = (
    e,
    setting,
    rotate,
    placeShips,
    setShipLocations,
    number
  ) => {
    if (!setting || rotate) return;
    target = e.target;
    target.style.pointerEvents = "none";
    target.style.opacity = 0.5;
    window.addEventListener("mousemove", drag);
    window.addEventListener(
      "mouseup",
      (e) => {
        const locate = e.target.id.substr(3);
        target.style.pointerEvents = "";
        target.style.opacity = 0.8;
        placeShips(number, locate);
        target.style.top = "";
        target.style.left = "";
        setShipLocations((prevState) => {
          return [...prevState];
        });
        window.removeEventListener("mousemove", drag);
      },
      { once: true }
    );
  };

  const drag = (e, orientation) => {
    console.log(target.style.top, target.style.left);
    const offTop = orientation === "x" ? target.offsetHeight / 2 : 0;
    const offLeft = orientation === "y" ? target.offsetWidth / 2 : 0;
    target.style.top = e.y - offTop + "px";
    target.style.left = e.x - offLeft + "px";
  };

  const handleShipClick = (
    rotate,
    setting,
    placeShips,
    setShipLocations,
    number,
    orientation,
    location
  ) => {
    console.log(rotate);
    if (rotate && setting) {
      placeShips(number, location[0], orientation === "x" ? "y" : "x");
      setShipLocations((prevState) => {
        console.log(prevState, number, location, orientation);
        return [...prevState];
      });
      return true;
    }
  };

  return { dragStart, handleShipClick, trackTargetCell };
};

export default DOMUtils;
