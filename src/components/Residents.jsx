import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Residents = ({ url }) => {

  const [resident, setResident] = useState({})

  useEffect(() => {
    axios.get(url)
      .then(res => setResident(res.data))
  }, [])

  console.log(resident);

  return (
    <div className='character-card'>
      <img src={resident.image} />
      <h2>{resident?.name}</h2>
      <div className='separator'></div>
      <h3>RACE</h3>
      <p>{resident.species}</p>
      <h3>STATUS</h3>
      <p><i className="fa-solid fa-circle" style={{ color: resident.status === "Alive" ? "green" : "red", fontSize: "18px" }}></i> {resident.status}</p>
      <h3>ORIGIN</h3>
      <p>{resident.origin?.name}</p>
      <h3>APPEARANCES IN EPISODES</h3>
      <p>{resident.episode?.length}</p>
    </div>
  );
};

export default Residents;