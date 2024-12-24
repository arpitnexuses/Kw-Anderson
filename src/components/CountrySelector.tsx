import React from 'react';
import { ChevronDown } from 'lucide-react';
import { countries } from '../data/countries';

interface CountrySelectorProps {
  selectedCountry: string;
  onCountryChange: (country: string) => void;
}

export const CountrySelector: React.FC<CountrySelectorProps> = ({ selectedCountry, onCountryChange }) => {
  return (
    <div className="max-w-md mx-auto text-center mb-8">
      <h2 className="text-2xl font-semibold text-[#B22234] mb-2">Select a Country</h2>
      <p className="text-gray-600 mb-4">This will provide the address for each location.</p>
      <div className="relative">
        <select
          value={selectedCountry}
          onChange={(e) => onCountryChange(e.target.value)}
          className="w-full p-3 text-gray-700 bg-white border border-gray-300 rounded-md appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#B22234] focus:border-transparent"
        >
          <option value="">Select a country</option>
          {countries.map(country => (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );
}