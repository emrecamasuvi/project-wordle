import React from 'react';

function Result({ gameResult, answer, attempt }) {
  return <>
    { gameResult === 'success' && 
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{` ${attempt}`} guesses</strong>.
      </p>
    </div>
    }
    { gameResult === 'failure' && 
    <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>
    }
  </>;
}

export default Result;
