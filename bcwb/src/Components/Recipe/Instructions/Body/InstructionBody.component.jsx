import { useState,useEffect } from "react";
import { InstructionList } from "./InstructionBody.styles";

export const InstructionBody = (props) => {

    const { instructions,ingredients } = props

    const mappedIngredients = ingredients.map(el => {
        return <li key={el.ingredient_id} >{el.content}</li>
    })

    const mappedInstructions = instructions.map(el => {
        return <li key={el.ingredient_id} >{el.content}</li>
    })
    
    return (
        <InstructionList>
            {/* <h2>equiptment</h2> */}
            <ul>
                <li>equiptment</li>
                <li>mixer</li>
            </ul>

            {/* <h2>ingredients</h2> */}
            <ul>
                <li className="first-li">ingredients</li>
                {mappedIngredients}
                {/* <li>eggs</li>
                <li>milk</li> */}
            </ul>

            {/* <h2>instructions</h2> */}
            <ol>
                <li value={0}>instructions</li>
                {/* <li >mix for an hour</li> */}
                {mappedInstructions}

            </ol>
        </InstructionList>
        
    )
}