import React from "react";
import { useState, useEffect } from "react";
import Footer from "./Components/Footer";
import StateData from "./Components/StateData";

const App = () => {
    const api_url = "https://api.rootnet.in/covid19-in/stats/latest";
    const [ApiData, setApiData] = useState([]);
    const [search, setSearch] = useState("");

    //   useEffect(() => {
    //     GetApiData();
    //   }, []);

    //   const GetApiData = async () => {
    //     const response = await fetch(api_url);
    //     const data = await response.json();
    //     console.log(data);
    //     setApiData(data);
    //   };

    return (
        <div className="bg-slate-900">
            <div className="bg-slate-800 flex flex-col justify-center items-center text-white p-10 lg:h-[60vh]">
                {/* <video className="w-40 h-32" autoPlay loop muted>
          <source
            src={
              "https://cdn.dribbble.com/users/1027121/screenshots/10905584/media/233b66283622b482eff68f266042224c.mp4"
            }
            type="video/mp4"
          />
        </video> */}
                <h1 className="text-center text-3xl md:text-5xl font-bold py-5">
                    COVID-19 Data India
                </h1>
                <div className="flex max-md:flex-col">
                    <h3 className=" max-md:my-3 mx-4 text-xl">
                        Confirmed Cases:
                        <span className="text-yellow-400 font-bold ml-2">
                            {ApiData.data && ApiData.data.summary.total}
                        </span>
                    </h3>
                    <h3 className=" max-md:my-3 mx-4 text-xl">
                        Total Discharged:
                        <span className="text-green-500 font-bold ml-2">
                            {ApiData.data && ApiData.data.summary.discharged}
                        </span>
                    </h3>
                    <h3 className=" max-md:my-3 mx-4 text-xl">
                        Total Deaths:
                        <span className="text-red-500 font-bold ml-2">
                            {ApiData.data && ApiData.data.summary.deaths}
                        </span>
                    </h3>
                </div>
                {/* =================================================================== */}
                <input
                    type="text"
                    placeholder="Search State"
                    className="bg-gray-200 text-slate-900 rounded-md p-2 my-10 mx-1"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="flex flex-wrap justify-center items-center">
                {
                    ApiData.data &&
                    ApiData.data.regional
                        .filter((state) => {
                            if (search === "") {
                                return state;
                            }
                            else if (state.loc.toLowerCase().includes(search.toLowerCase())) {
                                return state;
                            }
                            return null;
                        })
                        .map((state) => <StateData data={state} />)
                }
            </div>

            <Footer />
        </div>
    );
};

// export default App;


// =========================================================


import React from "react";

const StateData = (props) => {
    return (
        <div className="bg-white backdrop-blur-md flex items-center flex-col m-10 w-96 shadow-md shadow-teal-500 h-64 hover:bg-teal-50 hover:scale-105 duration-300 cursor-pointer">
            <h2 className="font-bold text-teal-800 mt-5 mb-8 text-2xl ">
                {props.data.loc}
            </h2>
            <h3 className="font-mono my-3">
                Confirmed Cases:
                <span className="font-bold text-yellow-600 mx-2 ">
                    {props.data.totalConfirmed}
                </span>
            </h3>
            <h3 className="font-mono my-3">
                Discharged:
                <span className="font-bold text-green-700 mx-2 ">
                    {props.data.discharged}
                </span>
            </h3>
            <h3 className="font-mono my-3">
                Total Deaths:
                <span className="font-bold text-red-500 mx-2 ">
                    {props.data.deaths}
                </span>
            </h3>
        </div>
    );
};

export default StateData;

// =======================================================

import * as React from "react";
import useAxios from "./useAxios";
import axios from "../api/covidapi";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Header from "./header";

const Post = () => {
    const [covidData, loading] = useAxios({
        axios: axios,
        method: "GET",
        url: "/",
    });
    console.log(covidData);
    return (
        <>
            {loading && <p>Loading....</p>}

            <Header covidData={covidData} /> //+====================
            <Box sx={{ flexGrow: 1, width: "80%", m: "auto", mt: 5 }}>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {
                        covidData?.data?.regional.map((data) => (
                            <Grid item xs={12} sm={4} md={4} key={data.loc}>
                                <Card sx={{ maxWidth: 280, height: 200, m: "auto" }}>
                                    <CardContent>
                                        <Typography
                                            variant="h6"
                                            sx={{ fontWeight: 700, textAlign: "center" }}
                                            gutterBottom
                                        >
                                            {data.loc.length > 20 ? data.loc.slice(0, 20) : data.loc}
                                        </Typography>
                                        <Typography
                                            color="text.secondary"
                                            variant="subtitle1"
                                            sx={{ mb: 1, mt: 4 }}
                                        >
                                            Total confirmed Cases :- {data.confirmedCasesIndian}
                                        </Typography>
                                        <Typography variant="subtitle1" color="green" sx={{ mb: 1 }}>
                                            Discharged :- {data.discharged}
                                        </Typography>
                                        <Typography sx={{ mb: 0 }} variant="subtitle1" color="red">
                                            Total Deaths :- {data.deaths}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </>
    );
};

export default Post;
