export function SquareBox({ color, style }) {
  return (
    <div
      className={`square h-16 w-16 border-4 ${color} absolute`}
      style={style}
    ></div>
  );
}

export function ManySquares() {
  return (
    <div className="card-bg relative w-full h-full">
      <SquareBox
        key={1}
        color={"border-color1"}
        style={{
          transform: "rotate(45deg)",
          top: `15%`,
          left: `5%`,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <SquareBox
        key={2}
        color={"border-color2"}
        style={{
          transform: "rotate(25deg)",
          top: `20%`,
          left: `30%`,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <SquareBox
        key={3}
        color={"border-color3"}
        style={{
          transform: "rotate(45deg)",
          top: `20%`,
          left: `55%`,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <SquareBox
        key={4}
        color={"border-color4"}
        style={{
          transform: "rotate(45deg)",
          top: `10%`,
          left: `80%`,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <SquareBox
        key={5}
        color={"border-color6"}
        style={{
          transform: "rotate(10deg)",
          bottom: `20%`,
          left: `5%`,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <SquareBox
        key={6}
        color={"border-color4"}
        style={{
          transform: "rotate(20deg)",
          bottom: `20%`,
          left: `30%`,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <SquareBox
        key={7}
        color={"border-color5"}
        style={{
          transform: "rotate(45deg)",
          bottom: `15%`,
          left: `55%`,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <SquareBox
        key={8}
        color={"border-color"}
        style={{
          transform: "rotate(45deg)",
          bottom: `10%`,
          left: `80%`,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
}
