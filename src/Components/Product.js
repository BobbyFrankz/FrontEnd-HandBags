import React from 'react';

function Product({span, img, text, price}) {
    return (
       <article>

           <span>{span}</span>
           <img src={img} alt={text}/>
           <p>{text}</p>
           <h4>{price}</h4>

       </article>
    );

}

export default Product;


