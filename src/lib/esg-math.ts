// Conversion factors (Standard averages)
const CO2E_PER_KWH = 0.85; // lbs of CO2 per kWh
const CO2E_PER_FLIGHT_MILE = 0.53; // lbs of CO2 per mile flown

export function calculateElectricityCO2(kwh: number): number {
  return (kwh * CO2E_PER_KWH) / 2000; // Returns Tons
}

export function calculateFlightCO2(miles: number): number {
  return (miles * CO2E_PER_FLIGHT_MILE) / 2000; // Returns Tons
}
