import React, { useEffect, useState } from 'react';
import "./AllJobs.css";
import Modal from 'react-modal';

function AllJobs() {

  const [jobDetails, setJobDetails] = useState([]);
  const [company_name, setCompany_name] = useState("")
  const [position_name, setPosition_name] = useState("")
  const [workType, setWorkType] = useState("")
  const [work_location, setWork_location] = useState("")
  const [job_id, setJob_id] = useState("")
  const [job_index, setJob_index] = useState(null)

  const [modal, setModal] = useState(false)
  const [isPopupVisible, setIsPopupVisible] = useState(false);


  const url = "http://localhost:5000/getJobs"

  function fetchApiData() {
    fetch(url)
      .then(response => {
        return response.json()
      }).then(data => {
        setJobDetails(data.jobs)

        // setCompany_name(data.jobs[0].company)
        // setPosition_name(data.jobs[0].position)
        // setWorkType(data.jobs[0].workType)
        // setWork_location(data.jobs[0].workLocation)
      })
  }
  useEffect(() => {
    fetchApiData();
  }, [])

  function handleDelete(_id) {
    const confirmDelete = window.confirm('Are you sure you want to delete this job?');
    if (confirmDelete) {
      fetch(`http://localhost:5000/deleteJob/${_id}`, {
        method: 'DELETE'
      })
        .then(response => response.json())
        .then(data => {
          console.log("data.message: ", data.message);
          setJobDetails(jobDetails.filter(job => job._id !== _id));
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  }

  // ==================handleEdit====================
  function handleEdit(_id, index) {
    console.log("_id: ", _id);
    console.log("index: ", index);
    console.log("jobDetails[0]", jobDetails[index]);

    setCompany_name(jobDetails[index].company)
    setPosition_name(jobDetails[index].position)
    // setWorkType(jobDetails[index].workType)
    setWork_location(jobDetails[index].workLocation)
    setJob_id(_id)
    setJob_index(index)
  }


  // ==================handleUpdate====================
  function handleUpdate(event) {
    event.preventDefault();
    console.log(company_name, position_name, workType, work_location, job_id, job_index);

    let updated_value = {
      company: company_name,
      position: position_name,
      workLocation: work_location
    };

    // console.log("company:", company_name);

    fetch(`http://localhost:5000/updateJob/${job_id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated_value)
    })
      .then(res => res.json())
      .then(json => console.log(json))

  }

  // ==================handleUpdate====================

  const customStyles = {
    content: {
      top: '40%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   subtitle.style.color = '#f00';
  // }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div id='alljobs'>
        <h1>Available Jobs</h1>
        {/* ===================modal 3================= */}
        <div>
          <button onClick={openModal}>Open</button>

          <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            // onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
            <div>
              <form>
                <input
                  type='text'
                  name='company'
                  value={company_name}
                  placeholder='Company'
                  onChange={(e) => setCompany_name(e.target.value)}
                />
                <input
                  type='text'
                  name='position'
                  value={position_name}
                  placeholder='Position'
                  onChange={(e) => setPosition_name(e.target.value)}
                />
                {/* <input
              type='text'
              name='workType'
              // onChange={workLocationFunc}
              value={workType}
              placeholder='Work Location'
            // className='form-input'
            /> */}
                <input
                  type='text'
                  name='workLocation'
                  value={work_location}
                  placeholder='Work Location'
                  onChange={(e) => setWork_location(e.target.value)}
                />

                <button onClick={handleUpdate}>Update</button>
                <button onClick={closeModal}>close</button>

              </form>
            </div>
          </Modal>
        </div>


        {/* ===================EDIT================= */}
        <div>
          <form>
            <input
              type='text'
              name='company'
              value={company_name}
              placeholder='Company'
              onChange={(e) => setCompany_name(e.target.value)}
            />
            <input
              type='text'
              name='position'
              value={position_name}
              placeholder='Position'
              onChange={(e) => setPosition_name(e.target.value)}
            />
            {/* <input
              type='text'
              name='workType'
              // onChange={workLocationFunc}
              value={workType}
              placeholder='Work Location'
            // className='form-input'
            /> */}
            <input
              type='text'
              name='workLocation'
              value={work_location}
              placeholder='Work Location'
              onChange={(e) => setWork_location(e.target.value)}
            />

            <button onClick={handleUpdate}>Update</button>
          </form>
        </div>
        {/* ===================EDIT================= */}


        <div className='allJobsCard'>
          {
            jobDetails.map((job, index) => {
              return (

                <div className='JobsCard' key={job._id}>
                  <div>{index}</div>
                  <div className='jobDetails'>
                    <div className='jobDetails_1'>
                      <h5>{job.company}</h5>
                      <div>{job.workLocation}</div>
                    </div>
                    <div className='jobDetails_2'>
                      <h5>{job.position}</h5>
                      <div>{job.workType}</div>
                    </div>
                  </div>

                  <div>
                    <button onClick={() => handleDelete(job._id)}>Delete</button>
                    <button onClick={() => handleEdit(job._id, index)}>Edit</button>
                    <button onClick={openModal}>Open</button>

                  </div>
                </div>
              )
            }
            )
          }
        </div>


      </div>

    </>
  );
}

export default AllJobs;