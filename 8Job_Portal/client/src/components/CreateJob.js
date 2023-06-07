import React, { useState } from 'react';
import "./CreateJob.css"


function CreateJob() {
    const [company_name, setCompany_name] = useState('Oracle');
    const [position_name, setPosition_name] = useState('Backend Dev.');
    // const [job_type, setJob_type] = useState('');
    const [work_location, setWork_location] = useState('India');
    const [workType, setWorkType] = useState('Work Type')

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

    // function jobTypeFunc(e) {
    //     return (
    //         setJob_type(e.target.value)
    //     )
    // }

    function workLocationFunc(e) {
        return (
            setWork_location(e.target.value)
        )
    }
    function handleSelect(e) {
        return (
            setWorkType(e.target.value)
        )
    }
    // console.log("select: ", workType);



    const handleSubmit = (event) => {
        event.preventDefault();

        if (!company_name || !position_name || !workType || !work_location) {
            // console.log("All fields are mandatory");fgfg
            alert("All fields are mandatory");
        }
        else {
            const data = {
                // company: event.target.company.value,
                // position: event.target.elements.position.value,
                // jobType: event.target.elements.jobType.value,
                company: company_name,
                position: position_name,
                // jobType: job_type,
                workType: workType,
                workLocation: work_location
            };

            fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data);
                    setCompany_name("Walmart");
                    setPosition_name("Frontend Dev.");
                    // setJob_type("");
                    setWorkType('Work Type');
                    setWork_location('Hyderabad');
                })
                .catch((error) => {
                    console.error("Error:", error); 
                });
        }
    };



    return (
        <div className='container'>
            <h1 className='title'>CREATE JOB</h1>
            {/* <form>
                <input type="text" placeholder="Company" />
                <input type="text" placeholder="Position" />
                <input type="text" placeholder="Work Location" />
                <input type="text" placeholder="Work Type" />
            </form> */}
            <form className='form'>
                <input
                    type='text'
                    name='company'
                    onChange={companyNameFunc}
                    value={company_name}
                    placeholder='Company'
                    className='form-input'
                />
                <input
                    type='text'
                    name='position'
                    onChange={positionNameFunc}
                    value={position_name}
                    placeholder='Position'
                    className='form-input'
                />
                {/* <input
                    type='text'
                    name='jobType'
                    onChange={jobTypeFunc}
                    value={job_type}
                    placeholder='Job Type'
                    className='form-input'
                /> */}
                <select
                    name='workType'
                    id='workType'
                    value={workType}
                    onChange={handleSelect}
                    className='form-select'
                >
                    <option value='workType'>Work Type</option>
                    <option value='Full-Time'>Full-Time</option>
                    <option value='Part-Time'>Part-Time</option>
                    <option value='Internship'>Internship</option>
                    <option value='Contract'>Contract</option>
                </select>
                <input
                    type='text'
                    name='workLocation'
                    onChange={workLocationFunc}
                    value={work_location}
                    placeholder='Work Location'
                    className='form-input'
                />
                <button type='submit' onClick={handleSubmit} className='form-button'>
                    ADD JOB
                </button>
            </form>
            {/* <form>
                    <input
                        type="text"
                        name="company"
                        onChange={companyNameFunc}
                        value={company_name}
                        placeholder="Company"
                    />
                    <input
                        type="text"
                        name="position"
                        onChange={positionNameFunc}
                        value={position_name}
                        placeholder="Position"
                    />
                    <input
                        type="text"
                        name="jobType"
                        onChange={jobTypeFunc}
                        value={job_type}
                        placeholder="Job Type"
                    />

                    <select name="workType" id="workType" value={workType} onChange={handleSelect}>
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
                        placeholder="Work Location"
                    />
                    <button type="submit" onClick={handleSubmit}>ADD JOB</button>
                </form> */}
        </div>
    );
}

export default CreateJob;