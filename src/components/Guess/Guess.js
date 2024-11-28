import React from 'react';
import { range }  from '../../utils';

function Guess({ children }) {
  const evaluatedRow = (row) => range(5).map((col) => {
    return (<span key={crypto.randomUUID()} className="cell">
      {(children[row] ? children[row][col] : null)}
    </span>)
  })
  console.log(children);
  console.log(children.length)
  return <>
    <div className="guess-results">
      {
        (range(6).map((row) =>
          <p key={crypto.randomUUID()} className="guess">
            {evaluatedRow(row)}
          </p>
        ))
      }
    </div>
  </>
}

export default Guess;
