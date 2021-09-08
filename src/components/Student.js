import React from 'react';

function Student(props) {
    return (
        <div>
            <h3>nama: {props.item.name}</h3>
            <h3>nim: {props.item.nim}</h3>
        </div>
    )
}

export default Student;