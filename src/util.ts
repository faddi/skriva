
export const randomIndex = <T extends unknown>(arr: T[]): number => {
  return Math.floor(Math.random() * arr.length);
};

export const randomChoice = <T extends unknown>(arr: T[]) => {
  return arr[randomIndex(arr)];
};
