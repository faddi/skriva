import React, { useState } from "react";
import "./App.css";
import { FaArrowRight } from "react-icons/fa";

const data = [
  {
    text: "ko",
    media: [
      <img
        src="https://imgs.aftonbladet-cdn.se/v2/images/128d0648-2d61-49bc-9209-7869059a4736?fit=crop&h=570&q=50&w=1100&s=54e93f5675ff8c5a982f64707ffcdc8f333d62e8"
        alt="ko"
        className="img"
      />,
      <img
        src="https://www.arla.se/4981f5/globalassets/bilder-kossor-och-gard/kossa-fromansgarden-2400x1000.jpg?preset=og"
        alt="ko"
        className="img"
      />,
    ],
  },
  {
    text: "katt",
    media: [
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgnL-6fb5PhgkCkH3odiqgPmhqoWm6HeRjwQ&usqp=CAU"
        alt="katt"
        className="img"
      />,
    ],
  },
];

const randomIndex = <T extends unknown>(arr: T[]): number => {
  return Math.floor(Math.random() * arr.length);
};

const randomChoice = <T extends unknown>(arr: T[]) => {
  return arr[randomIndex(arr)];
};

function App() {
  const [value, setValue] = useState("");
  const [correct, setCorrect] = useState(false);
  const [index, setIndex] = useState(randomIndex(data));

  const test = data[index];

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (correct) {
      return;
    }

    const val = e.currentTarget.value;

    if (val === test.text) {
      setCorrect(true);
    }

    setValue(val);
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && correct) {
      setCorrect(false);
      setValue("");
      setIndex(randomIndex(data));
    }
  };

  return (
    <div className="App">
      <main>
        <div>
          <h1 style={{ textTransform: "uppercase" }}>{test.text}</h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <input
              type="text"
              onChange={onValueChange}
              onKeyPress={onKeyPress}
              value={value}
              style={{
                padding: "10px",
                fontSize: "24px",
                textTransform: "uppercase",
                marginRight: "20px",
              }}
              autoFocus={true}
            />
            {correct ? (
              <FaArrowRight
                className="anim"
                style={{ fontSize: "28px", color: "green" }}
              />
            ) : (
              ""
            )}
          </div>
          <div>{correct ? randomChoice(test.media) : ""}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
