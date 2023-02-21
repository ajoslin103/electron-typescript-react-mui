import React from "react";
import { Rect } from "react-konva";
import Konva from "konva";

export default function KonvaSample(): JSX.Element {
  const [color, setColor] = React.useState('green')
  const handleClick = () => {
    setColor(Konva.Util.getRandomColor());
  };

  return (
    <Rect
      x={20}
      y={20}
      width={50}
      height={50}
      fill={color}
      shadowBlur={5}
      onClick={handleClick}
    />
  );
}
