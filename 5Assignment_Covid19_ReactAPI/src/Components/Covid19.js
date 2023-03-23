import { useState } from "react"
import { useEffect } from "react"
import "./Style.css"
// import "./StyleCopy.css"
import Search from "./Search";

export default function Covid19() {

    let url = "https://api.rootnet.in/covid19-in/stats/latest"
    // let url1 = " https://data.covid19india.org/v4/min/data.min.json "

    // let [info, setInfo] = useState([]);
    let [info, setInfo] = useState({
        data: {
            summary: {
                confirmedCasesIndian: 0,
                discharged: 0,
                deaths: 0
            },
            regional: []
        }
    });


    function fetchAPI() {
        console.log("Loading data....")

        // const loading = document.querySelector("#loading_data")
        // loading.innerHTML = "Loading..."

        fetch(url).then(response => {
            return response.json()
        }).then(data => {
            // console.log(data)
            // console.log(data.data.summary.confirmedCasesIndian)
            // console.log(data.data.summary.deaths)
            // console.log(data.data.summary.discharged)

            // console.log(data.data.regional[4].loc)
            // console.log(data.data.regional[4].confirmedCasesIndian)
            // console.log(data.data.regional[4].deaths)
            // console.log(data.data.regional[4].discharged)
            // console.log("length:", data.data.regional.length)


            setInfo(data)
        })
    }
    // fetchAPI()

    useEffect(() => {
        fetchAPI()
    }, [])

    return (
        <div>
            <div className="main_div">
                <h1 className="main_div_h1">COVID-19 TRACKER</h1>

                <div className="india">

                    <h1>COVID-19 INDIA CASES</h1>
                    <div className="india_cases">
                        <div>
                            <h2>CONFIRMED CASES</h2>
                            <p>{info.data.summary.confirmedCasesIndian}</p>
                        </div>
                        <div>
                            <h2>DISCHARGED</h2>
                            <p>{info.data.summary.discharged}</p>
                        </div>
                        <div>
                            <h2>DEATHS</h2>
                            <p>{info.data.summary.deaths}</p>
                            {/* <p id="loading_data"></p> */}
                        </div>
                    </div>

                </div>
            </div>

            
            <Search state_name={info.data.regional} />

        </div>
    )
}
