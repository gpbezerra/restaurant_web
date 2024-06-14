"use server";

const cardapios = ["Menu fit", "Menu light", "Promoção"];

const CardapioNavBar = () => {
    return(
       <select name="cardapios">
        {cardapios.map((cardapios) => {
            return(
                <option value={cardapios} id={cardapios}>{cardapios}</option>
            )
        })}
       </select>
);

}

export default CardapioNavBar;