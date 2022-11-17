import React from 'react';

function Tile({image, title, children}) {
    return (

        <section>

            {image && <img src={image} alt={title}/>}
            <h2>{title}</h2>
            {children}

        </section>

    );
}

export default Tile;