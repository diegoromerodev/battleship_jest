import Ship from "../../helpers/Ship";

describe("testing basic ship creation", () => {
  let newShip;
  beforeAll(() => {
    newShip = Ship(2);
  });

  test("basic ship object creation", () => {
    expect(typeof newShip).toBe("object");
  });

  test("length, hit, sunk properties present in ship", () => {
    expect(newShip.length).not.toBeUndefined();
    expect(newShip.hits).not.toBeUndefined();
    expect(newShip.sunk).not.toBeUndefined();
  });

  test("should receive hits", () => {
    const result = newShip.hit(1);
    expect(result).toBeTruthy();
  });

  test("should reject missed hits", () => {
    const result = newShip.hit(9);
    expect(result).toBeFalsy();
  });

  test("should sink when all positions hit", () => {
    newShip.hit(0);
    expect(newShip.isSunk()).toBeTruthy();
  });
});
