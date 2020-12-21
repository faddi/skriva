import React, { useState } from "react";
import "./App.css";
import { FaArrowRight } from "react-icons/fa";
import { randomIndex } from "./util";
import { Entry } from "./Entry";

export interface IImageEntry {
  type: "image";
  text: string;
  imageLinks: string[];
}

export type EntryType = IImageEntry;

const data: IImageEntry[] = [
  {
    type: "image",
    text: "ko",
    imageLinks: [
      "https://imgs.aftonbladet-cdn.se/v2/images/128d0648-2d61-49bc-9209-7869059a4736?fit=crop&h=570&q=50&w=1100&s=54e93f5675ff8c5a982f64707ffcdc8f333d62e8",
      "https://www.arla.se/4981f5/globalassets/bilder-kossor-och-gard/kossa-fromansgarden-2400x1000.jpg?preset=og",
    ],
  },
  {
    type: "image",
    text: "katt",
    imageLinks: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgnL-6fb5PhgkCkH3odiqgPmhqoWm6HeRjwQ&usqp=CAU",
      "https://d25tv1xepz39hi.cloudfront.net/2016-07-16/files/cat-sample_1313-3.jpg",
      "https://d25tv1xepz39hi.cloudfront.net/2016-07-16/files/cat-sample_1313-4.jpg",
      "https://d25tv1xepz39hi.cloudfront.net/2016-07-16/files/cat-sample_1313-2.jpg",
    ],
  },
];

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
          <div>{correct ? <Entry entry={test} /> : ""}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
