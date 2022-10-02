import './App.css';
import Apartment from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1 className='titulo-principal'>Apartments for Rent in New York City</h1>
        <Apartment
          amountBedroom='2' amountBathroom='1' location='Manhattan' 
          apartmentName='Radio City Apartments' imageName='macy'
          details='Dog and Cat Friendly - Fitness Center - Pool - Dishwasher - Refrigerator - In Unit Washer and Dryer - Walk-In Closets '/>
        <Apartment
          amountBedroom='3' amountBathroom='2' location='City Center' 
          apartmentName='Moxy East Village' imageName='moxy'
          details='Fitness Center - Pool - Dishwasher - Refrigerator - Balcony - Range - Microwave - CableReady '/>
        <Apartment
          amountBedroom='1' amountBathroom='1' location='Manhattan' 
          apartmentName='Macy Empire Apartments' imageName='radio'
          details='Dog and Cat Friendly - Fitness Center - Dishwasher - Refrigerator - Kitchen - Walk-In Closets - Balcony '/>
      </div>
    </div>
  );
}

export default App;
