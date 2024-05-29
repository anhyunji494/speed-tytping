import React from "react";
import { faker } from "@faker-js/faker";
import RestartButton from "./components/RestartButton";
import Results from "./components/Results";

const words = faker.random.words(10);

function App() {
  return (
    <>
      <CountdownTimer timeLeft={30} />
      <GenerateWords words={words} />
      <RestartButton
        className={"m-auto mt-10 text-slate-500"}
        onRestart={() => null}
      />
      <Results
        className="mt-10"
        errors={10}
        accuracyPercentage={100}
        total={200}
      />
    </>
  );
}

const GenerateWords = ({ words }: { words: string }) => {
  return <div className="text-4xl text-center text-slate-500">{words}</div>;
};

const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="font-medium text-primary-400">Time: {timeLeft}</h2>;
};

export default App;
