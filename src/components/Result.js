import React from 'react';

function Result({score,size}){
    return(
        <div className="py-4" style={{"fontFamily": "ubuntu"}}>
            {score<(size/2)?(<h1 className="text-center text-danger bg-light">OOps!!! You Scored <span className="text-dark">{score}/{size}</span>. Better luck next time!!!</h1>):(<h1 className="text-center bg-light text-success">Congradulations!!! You Scored <span className="text-dark">{score}/{size}</span>. </h1>)}
        </div>
    )
}

export default Result;