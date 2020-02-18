//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
const [lionscore, setLionScore] = useState(0);
const [tigerscore, setTigerScore] = useState(0);
const [quarter, setQuarter] = useState(1);


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionscore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigerscore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick = {() => setLionScore(lionscore + 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {() => setLionScore(lionscore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div>
          <button onClick ={() => (setLionScore(0), setTigerScore(0))} className='buttons'>Reset Score</button>
          <button onClick ={() => setQuarter(quarter + 1)} className ='buttons'>Quarter</button>
        </div>
        <div className="awayButtons">
          <button onClick = {() => setTigerScore(tigerscore + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {() => setTigerScore(tigerscore + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
