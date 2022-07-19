import { useState } from "react";

const ConditionalRender = () =>{

   

    const[name,setName] = useState("matheus")

    return (
        <div>
          
                {name === "João" ? 
                (
                    <div>
    <p>O nome é João</p>
</div>

                ):
                (
                    <div>
                    <p>Nome não encontrado</p>
                </div>

                )}
                   <button onClick={() => setName("João")}>Clique</button>

        </div>

        
    );
};
export default ConditionalRender;

