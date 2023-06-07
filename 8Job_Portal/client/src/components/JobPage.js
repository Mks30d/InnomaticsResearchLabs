// import React, { useEffect, useState } from 'react';

// function JobPage() {

//     const [jobData, setJobData] = useState([])

//     useEffect(() => {
//         fetchApiData()
//         // submitJob()
//     }, [])

//     const url = "http://localhost:5000/getJobs"
//     const fetchApiData = () => {
//         fetch(url)
//             .then(response => {
//                 return response.json()
//             })
//             .then(data => {
//                 // console.log(data);
//             })
//     }

//     function submitJob() {
//         console.log("Submit Job");

//         fetch('http://localhost:5000/createJob', {
//             method: "POST",
//             body: JSON.stringify(
//                 {
//                     // title: 'test product',
//                     // price: 13.5,
//                     // description: 'lorem ipsum set',
//                     // image: 'https://i.pravatar.cc',
//                     // category: 'electronic'
//                     company: "mks",
//                     position: "mks Full Stack",
//                     jobType: "mks"
//                 }
//             )
//         })
//             .then(res => res.json())
//             .then(json => console.log(json))
//     }

//     return (
//         <div>
//             <div>JobPage</div>
//             <div>
//                 <form>

//                     <input type="text" placeholder="Enter company name" />
//                     <input type="text" placeholder="Enter position name" />
//                     <button type="submit" onSubmit={submitJob} onClick={fetchApiData} >Submit</button>

//                 </form>

//             </div>
//         </div>
//     );
// }

// export default JobPage;


import React, { useEffect, useState } from 'react';

function JobPage() {
    // const [jobData, setJobData] = useState([]);
    const [company_name, setCompany_name] = useState([]);
    const [position_name, setPosition_name] = useState([]);
    const [job_type, setJob_type] = useState([]);
    const [work_location, setWork_location] = useState([]);

    const url = "http://localhost:5000/createJob";

    function companyNameFunc(e) {
        return (
            setCompany_name(e.target.value)
        )
    }

    function positionNameFunc(e) {
        return (
            setPosition_name(e.target.value)
        )
    }

    function jobTypeFunc(e) {
        return (
            setJob_type(e.target.value)
        )
    }

    function workLocationFunc(e) {
        return (
            setWork_location(e.target.value)
        )
    }


    const submitJob = (event) => {
        // console.log(event);
        event.preventDefault();

        if (!company_name || !position_name || !job_type) {
            console.log("Empty company_name");
            alert("All fields are mandatory");
        }
        else {
            const data = {
                // company: event.target.company.value,
                // position: event.target.elements.position.value,
                // jobType: event.target.elements.jobType.value,
                company: company_name,
                position: position_name,
                jobType: job_type
            };

            fetch("http://localhost:5000/createJob", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data);
                    setCompany_name("");
                    setPosition_name("");
                    setJob_type("");
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    };

    return (
        <div>
            <div>JobPage</div>
            <div>
                <form>
                    <input
                        type="text"
                        name="company"
                        onChange={companyNameFunc}
                        value={company_name}
                        placeholder="Enter company name"
                    />
                    <input
                        type="text"
                        name="position"
                        onChange={positionNameFunc}
                        value={position_name}
                        placeholder="Enter position name"
                    />
                    <input
                        type="text"
                        name="jobType"
                        onChange={jobTypeFunc}
                        value={job_type}
                        placeholder="Enter job type"
                    />
                    {/* <input
                        type="text"
                        name="workType"
                        onChange={workTypeFunc}
                        value={work_type}
                        placeholder="Enter work type"
                    /> */}
                     <select name="workType" id="workType">
                        <option value="workType">Work Type</option>
                        <option value="Full_Time">Full-Time</option>
                        <option value="Part_Time">Part-Time</option>
                        <option value="Internship">Internship</option>
                        <option value="Contract">Contract</option>
                    </select>

                    <input
                        type="text"
                        name="workLocation"
                        onChange={workLocationFunc}
                        value={work_location}
                        placeholder="Enter work location"
                    />
                    <button type="submit" onClick={submitJob}>Submit</button>
                </form>

            </div>
        </div>
    );
}

export default JobPage;
