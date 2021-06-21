import GameLoop from "../../helpers/GameLoop";

describe("should create basic game loop", () => {
  let game;
  beforeAll(() => {
    game = GameLoop();
  });
  test("should return an object", () => {
    expect(typeof game).toBe("object");
  });

  test("should create gameboards when ran", () => {
    expect(game.gameboardHome.ships.length).toBeGreaterThan(0);
  });

  test("should randomly place starting ships", () => {
    game.autoPlace(game.gameboardHome);
    const { ships } = game.gameboardHome;
    ships.map((ship) => {
      expect(ship.location.length).toBeGreaterThan(0);
    });
  });
});
