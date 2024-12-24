import React, { useState } from 'react';
import { MapPin, Phone, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import { Country } from '../types';

interface CountryOfficesProps {
  country: Country;
}

export const CountryOffices: React.FC<CountryOfficesProps> = ({ country }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center space-x-3">
          <img
            src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`}
            alt={`${country.name} flag`}
            className="w-8 h-6 object-cover rounded"
          />
          <h2 className="text-xl font-semibold text-gray-900">{country.name}</h2>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>

      {isExpanded && (
        <div className="px-6 py-4 bg-gray-50">
          <div className="grid md:grid-cols-2 gap-6">
            {country.offices.map((office) => (
              <div
                key={office.id}
                className="bg-white p-6 rounded-lg shadow-sm space-y-4"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {office.name}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{office.address}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <a
                      href={`tel:${office.phone}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {office.phone}
                    </a>
                  </div>
                  {office.email && (
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {office.email}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};