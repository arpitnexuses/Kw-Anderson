import React, { useState } from 'react';
import { CountrySelector } from './components/CountrySelector';
import { MapView } from './components/MapView';
import { OfficeDetails } from './components/OfficeDetails';
import { countries } from './data/countries';

function App() {
  const [selectedCountry, setSelectedCountry] = useState('');

  const selectedCountryData = countries.find(c => c.id === selectedCountry);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CountrySelector 
          selectedCountry={selectedCountry}
          onCountryChange={setSelectedCountry}
        />
        
        <MapView selectedCountry={selectedCountryData} />

        {selectedCountryData?.offices && selectedCountryData.offices.length > 0 && (
          <div className="grid md:grid-cols-2 gap-8">
            {selectedCountryData.offices.map(office => (
              <OfficeDetails 
                key={office.id} 
                office={office}
                logo={office.logo}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;