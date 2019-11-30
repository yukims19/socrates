import React from "react";
import "./App.css";

function Result({ yesReasons, noReasons }) {
  return (
    <div>
      <h1>Here are the reasons why you are hesitant</h1>
      <div className="result-wrapper">
        <div className="reasons">{yesReasons}</div>
        <div className="reasons">{noReasons}</div>
      </div>
      <h3>So now, what's the next action?</h3>

      <h5>If you still cannot decide, here is some sugguestions</h5>
      <p>Is there anyway to clear the concerns?</p>
      <p>Is that just a fear we can face?</p>
      <p>Do you really want to do it?</p>
      <p>Let gather more information that will help you make the decision</p>
    </div>
  );
}

export default Result;
