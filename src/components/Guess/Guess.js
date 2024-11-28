import React from 'react';
import { range }  from '../../utils';
import { checkGuess }  from '../../game-helpers';


function Guess({ children, answer }) {
  const classResolver = (row, col) => {
    if (!children[row]) return 'cell'
    const resolvedArr = checkGuess(children[row], answer)
    return `cell ${resolvedArr[col].status}`
  }
  const evaluatedRow = (row) => range(5).map((col) => {
    return (<span key={crypto.randomUUID()} className={classResolver(row, col)}>
      {(children[row] ? children[row][col] : null)}
    </span>)
  })
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
