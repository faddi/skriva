import React from "react";
import { EntryType } from "./App";
import { randomChoice } from "./util";

interface IEntryProps {
  entry: EntryType;
}

export const Entry = (props: IEntryProps) => {
  const { entry } = props;

  let output;

  if (entry.type === "image") {
    output = <img src={randomChoice(entry.imageLinks)} alt={entry.text} />;
  }

  return <div>{output}</div>;
};
