import React from 'react';

const IngredientDetail = ({ingredient}) => {
    return(
        <div>
            <li>
                {
                    ingredient.text.split("\n").map((item, i) => {
                        return(
                            <li key={i}>{item}</li>
                        )
                    })
                }
            </li>
        </div>
    )
}
export default IngredientDetail