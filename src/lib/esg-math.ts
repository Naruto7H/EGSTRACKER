// Conversion factors (Standard averages)
const CO2E_PER_KWH = 0.85; // lbs of CO2 per kWh
const CO2E_PER_FLIGHT_MILE = 0.53; // lbs of CO2 per mile flown
const CO2E_PER_GALLON_GASOLINE = 19.6; // lbs of CO2 per gallon
const CO2E_PER_TON_WASTE = 1000; // lbs of CO2 per ton of landfilled waste

export function calculateElectricityCO2(kwh: number, regionFactor: number = CO2E_PER_KWH): number {
  return (kwh * regionFactor) / 2000; // Returns Tons
}

export function calculateFlightCO2(miles: number): number {
  return (miles * CO2E_PER_FLIGHT_MILE) / 2000; // Returns Tons
}

export function calculateFuelCO2(gallons: number): number {
  return (gallons * CO2E_PER_GALLON_GASOLINE) / 2000; // Returns Tons
}

export function calculateWasteCO2(tons: number): number {
  return (tons * CO2E_PER_TON_WASTE) / 2000; // Returns Tons
}
