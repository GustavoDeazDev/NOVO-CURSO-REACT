
const UserDetails = ({name , age , profissão}) => {
   
   return(
        <div>
           
<h1>Name:{ name} </h1>

<h1>Profissão: {profissão} </h1>

<h1>Idade: {age} </h1>
{age >= 18 ? (<p>"O Motorista pode dirigir" </p>) :
 (<p>"O Motorista não pode dirigir" </p>)}
    </div>
            
)
}
export default UserDetails;
            
               
          



