import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


    window.location.href = "mailto:mayor@springfield-or.gov" +
      "?bcc=svangordon@springfield-or.gov, smoe@springfield-or.gov, smoore@springfield-or.gov, lstoehr@springfield-or.gov, mwoodrow@springfield-or.gov, jpishioneri@springfield-or.gov" +
    "&subject=SPD%20Body%20Camera%20Program"+
    "&body=Dear Springfield Official, " +
      "My name is [NAME], and I am a resident of [CITY, STATE]. I am emailing you as a concerned citizen regarding the Springfield City Council’s debate over whether or not to defund the Springfield Police Department’s body camera program. Across the country, Americans are protesting the ongoing police brutality that plagues this nation - and specifically communities of color. Now is the time for communities like ours to take the necessary steps to increase the accountability and transparency of police departments. Springfield must step up to protect the safety and wellbeing of its residents by requiring the SPD to implement the body camera program. There are many areas where the SPD budget can be reduced or cut - but this expenditure is not one of them. Instead of cutting the body camera program - which I believe is absolutely necessary - I call on the Springfield City Council to reexamine the budgetary allocations in the following areas, the defunding of which could be alternatives to cutting the body camera program: ___________________________________________________*.\n" +
      "I urge you to stand up against the budget cut of the body camera program, and demand that this needed program be included in the budget and implemented by the SPD. " +
      " " +
      "Sincerely, " +
      "[NAME] "

  return (
    <div
      className="App"
      >
      <header className="App-header">
        <img src={"https://cdn.pixabay.com/photo/2017/08/06/11/44/people-2591693_1280.jpg"} />
      </header>
    </div>
  );
}

export default App;
