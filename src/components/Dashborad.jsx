import React, { useEffect, useState } from 'react'
import ReportForm from './ReportForm';
import PaddingList from './PaddingList';

import './../styles/dashborad.scss';
import Messages from './Messages';

const STORAGE_KEY = 'emergency_reports_v1';

/* localStorage.removeItem('emergency_reports_v1');  */

const Dashborad = ({user}) => {

  const [reports, setReports] = useState(() => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
      }
      catch {
        return [];
      }
  });

  useEffect(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(reports)) , [reports]);

  const handleCreate = (newReports) => setReports(prev => [newReports , ...prev]);

  return (
    <div className='dashboard'>

      <div className="report-center">
        <div className="left">
      <h2 className='h2'>Incident Reporting</h2>
          <ReportForm onCreate={handleCreate} UserName={user.name}/>
        </div>
        <div className="middle">
          <h3 className='h3'>Real-time Update</h3>
          <PaddingList reports={reports}/>
        </div>
        <div className="right">
          <Messages />
        </div>
      </div>

    </div>
  )
}

export default Dashborad