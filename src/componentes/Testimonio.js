import '../stylesheets/Testimonio.css'

function Apartment(props){
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio' 
        src={require(`../imagenes/apartment-${props.imageName}.png`)}
        alt='Foto'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><b>{props.apartmentName}</b> located at <b>{props.location}</b></p>
        <p className='cargo-testimonio'>{props.amountBedroom} Bedrooms and {props.amountBathroom} Bathrooms</p>
        <p className='texto-testimonio'>{props.details}</p>
      </div>
    </div>
  );
}

export default Apartment;