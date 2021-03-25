import React, { useState } from 'react';

const Tasks = ({ list }) => {

    return (
        <div>
            {list.map((v,i)=>{
                return(
                    <div id='Task'><input type="checkbox" /><input type="text" /></div>
                );
            })}
        </div>
    );
}

export { Tasks };