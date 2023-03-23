import React from 'react';
import "./Style.css"
// import "./StyleCopy.css"

function StateData(props) {
    return (
        <div>

            <div className="state_card">
                <div className="state_div state_name">
                    {/* <h2>{state.loc}</h2> */}
                    <h2>{props.state_name}</h2>
                </div>
                <div className="state_div confirmed_cases">
                    <h3>CONFIRMED CASES</h3>
                    {/* <p>{state.confirmedCasesIndian}</p> */}
                    <p>{props.confirmed_cases}</p>
                </div>
                <div className="state_div discharged">
                    <h3>DISCHARGED</h3>
                    {/* <p>{state.discharged}</p> */}
                    <p>{props.discharged}</p>
                </div>
                <div className="state_div deaths">
                    <h3>DEATHS</h3>
                    {/* <p>{state.deaths}</p> */}
                    <p>{props.deaths}</p>
                </div>
            </div>

            {/* <hr id='hr'></hr> */}


        </div>
    );
}

export default StateData;