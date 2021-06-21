import Player from "../../helpers/Player";

describe("test basic player functionality", () => {
  let newPlayer;
  beforeAll(() => {
    newPlayer = Player("p-1");
  });
  test("should create player object", () => {
    expect(typeof newPlayer).toBe("object");
  });

  test("should make random moves as npc", () => {
    newPlayer.makeMove("A-7");
    expect(newPlayer.madeMoves).toHaveLength(1);
    expect(newPlayer.madeMoves[0]).toBe("A-7");
  });
  test("should set player type", () => {
    expect(newPlayer.type).toBe("p-1");
  });
});
