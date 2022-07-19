const CarDetails =  ({marca , km , color , newCar})  => {
    return( 
    <div>
<h1>Marca:{ marca} </h1>
<h1>Kilometragem: {km} </h1>
<h1>Cor: {color} </h1>
{newCar && <p>O carro é novo!</p>}
    </div>
    )
}
export default CarDetails;