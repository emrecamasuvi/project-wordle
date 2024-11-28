import React from 'react';

function Guess({ children }) {
  return <>
    <div className="guess-results">
      {
        (children.length>0 && children.map((child) => (<p key={crypto.randomUUID()} className="guess">{child}</p>)))
      }
    </div>
  </>
}

export default Guess;
