import React from 'react';
import { Office } from '../types';

interface OfficeDetailsProps {
  office: Office;
  logo?: string;
}

export const OfficeDetails: React.FC<OfficeDetailsProps> = ({ office, logo }) => {
  return (
    <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
      {logo && (
        <img src={logo} alt="Office Logo" className="h-12 mb-4" />
      )}
      <h3 className="text-xl font-semibold text-[#B22234] mb-2">{office.name}</h3>
      <p className="text-gray-700 font-medium mb-2">Office Managing Director</p>
      <p className="text-[#B22234] mb-4">{office.managingDirector}</p>
      
      <div className="space-y-2 text-gray-600">
        <p>{office.address}</p>
        {office.poBox && <p>{office.poBox}</p>}
        {office.state && <p>{office.state}</p>}
        <p>Tel: {office.phone}</p>
        {office.website && (
          <a 
            href={office.website} 
            className="text-[#B22234] hover:underline block"
            target="_blank" 
            rel="noopener noreferrer"
          >
            {office.website.replace('http://', '')}
          </a>
        )}
      </div>
    </div>
  );
}