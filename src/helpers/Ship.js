const Ship = (length = 0) => {
  const hits = new Array(length).fill(false);
  let sunk = false;
  const location = [];
  // eslint-disable-next-line prefer-const
  let orientation = Math.random() > 0.5 ? "x" : "y";

  const hit = (pos) => {
    if (pos <= length && !hits[pos]) {
      hits[pos] = true;
      return hits[pos];
    }

    return false;
  };

  const isSunk = () => {
    for (let i = 0; i < length; i++) {
      if (!hits[i]) return false;
    }

    sunk = true;
    return sunk;
  };

  return {
    get length() {
      return length;
    },
    hits,
    sunk,
    location,
    orientation,
    hit,
    isSunk,
  };
};

export default Ship;
