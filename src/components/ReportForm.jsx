import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import { nowISO } from '../utils/time';

import './../styles/reportForm.scss';

const ReportForm = ({ onCreate, UserName }) => {

    const [type, setType] = useState(`Fire`);
    const [location, setLocation] = useState(``);
    const [description, setDescription] = useState(``);
    const [doTask, setDoTask] = useState(``);



    const handleSubmit = (e) => {
      e.preventDefault();
      
      if (!location.trim()) return setDoTask('Please add your location');
      if (!description.trim()) return setDoTask('Please add your description');
      
      

      const newReports = {
        id: uuidv4(),
        type,
        location,
        description,
        stauts : 'Pending',
        createdAt : nowISO(),
      }

      onCreate(newReports);
      setDescription(``);
      setDoTask('Sent to admin');
      setTimeout(() => setDoTask(''), 3500);
      setLocation(``);
      setType(`Fire`);
    }

  return (
    <div className='report-form'>
        {doTask && <div><p className={`${doTask === `Sent to admin`? `green` : ``}`}>{doTask}</p></div>}
        <form onSubmit={handleSubmit}>
            <label htmlFor="type">Incident Type</label>
            <select name="type" value={type} onChange={e => setType(e.target.value)}>
                <option value="Fire">Fire</option>
                <option value="Theft">Theft</option>
                <option value="Bullying">Bullying</option>
                <option value="Other">Other</option>
            </select>

            <label htmlFor="location">Location</label>
            <input type="text" name='location' placeholder='e.g. Cafeteria' value={location} onChange={e => setLocation(e.target.value)}/>

            <label htmlFor="Description">Description</label>
            <textarea type="text" name='Description' placeholder='What happened?' value={description} onChange={e => setDescription(e.target.value)} rows={4}/>

            <button type='submit'>Submit Report</button>

        </form>
    </div>
  )
}

export default ReportForm