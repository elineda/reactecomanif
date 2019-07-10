import React from "react";

function Footer(){
    return(

            <div className="container-fluid text-white" id="foot">
                <div className="d-flex justify-content-around">
                    <div  id="desinscrire">Se désinscrire</div>
                    <div  id="rgpd" data-toggle="modal" data-target="#rgpd_modal">Politique de confidentialité</div>

                </div>
            </div>
    )
}

export default Footer
