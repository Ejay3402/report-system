import React, { useEffect, useState } from 'react';
// import { } from '../utils/time';


import ReportCard from './ReportCard';

import './../styles/paddingList.scss';

const PaddingList = ({ reports = [] }) => {

  const todayCount = reports.filter(r => r.stauts === `Pending`).length;

  return (
    <div className='padding-report'>
        <div className="report-head">
            <h2 className='h2'>{todayCount}</h2>
            <h2 className='o33'>Pending incident{todayCount > 1 ? `s` : ``}</h2>
        </div>

        <div className="report-list_list">
            {reports.length === 0 ? <div className="no_report"><h3>No report Yet </h3></div> : reports.map( r => <ReportCard key={Math.random() } report={r}/>) } 
        </div>
    </div>
  )
}

export default PaddingList;