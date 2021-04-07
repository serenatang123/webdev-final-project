import React from 'react';

const InstructionDetail = ({instruction}) => {
    return(
        <div>
            <ul>
                {
                    instruction.text.split("\n").map((item, i) => {
                        return(
                            <li key={i}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default InstructionDetail