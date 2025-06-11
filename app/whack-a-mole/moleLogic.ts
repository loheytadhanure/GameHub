// app/whack-a-mole/moleLogic.ts
export const getRandomMole = (): number => {
  return Math.floor(Math.random() * 9); // 0 to 8
};
