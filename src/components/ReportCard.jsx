import React from 'react'
import { simpleRelativeDay } from '../utils/time';

const ReportCard = ({ report }) => {



  return (
    <div className='report-card'>
        
        <div className="report-card-head">
            <strong>{report.type }({report.location})</strong>
            <strong>{simpleRelativeDay(report.createdAt)}</strong>
        </div>

        <div className="report-card-body">
            <h5>{report.description}</h5>
        </div>

        <div className="report-card-footer">
            <span className={`bage ${report.stauts === `Pending` ? `padding-bage` : `resolved-bage`} `}>{report.stauts}</span>
        </div>

    </div>
  )
}

export default ReportCard