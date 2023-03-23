import React, { useState } from 'react';
import "./Style.css";
// import "./StyleCopy.css";
import StateData from './StateData';

function Search(props) {

    let [search_value, setSearch_value] = useState("")

    function search(event) {
        // let search_value = event.target.value.toLowerCase();
        setSearch_value(event.target.value.toLowerCase())
        console.log(search_value);

        matchSearch(search_value);
    }

    function matchSearch(search_value) {

        console.log(search_value);
        console.log("search_props:", props);

        props.state_name.map((state) => {
            return (

                console.log(state.loc)

            )
        })


    }


    return (
        <div>
            <input type="text" onChange={search} placeholder="Search State..."></input>


            <div>

                <div className="state_cases">

                    {
                        props.state_name
                            .filter((state) => {
                                if (search_value === "") {
                                    return state;
                                }
                                else if (state.loc.toLowerCase().includes(search_value.toLowerCase())) {
                                    return state;
                                }
                                else {
                                    return null;
                                }
                            })

                            .map((state) => {
                                return (
                                    <StateData
                                        state_name={state.loc}
                                        confirmed_cases={state.confirmedCasesIndian}
                                        discharged={state.discharged}
                                        deaths={state.deaths}
                                    />

                                )
                            })
                    }

                </div>
            </div>


        </div>
    );
}

export default Search;