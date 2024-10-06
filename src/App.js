import React from "react";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const [isOn, setIsOn] = React.useState(false);
  function handleClick() {
    setIsOn((prevState) => !prevState);
  }
  const dataMap = data.map((item) => (
    <Card
      text={isOn ? `${item.question}` : `${item.answer}`}
      onClick={setIsOn}
    />
  ));
  return <div className="container">{dataMap}</div>;
}
