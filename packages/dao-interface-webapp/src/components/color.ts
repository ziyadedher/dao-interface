const Colors = ["green", "red", "gray"] as const;

type Color = typeof Colors[number];

export { Colors };
export default Color;
