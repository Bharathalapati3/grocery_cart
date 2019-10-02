import React from 'react';
import  './ProductStyles.css';

function Product({item,value}){
    const {id,brandName,productName,quantity,price,mrp,imageUrl,offerText,count} = item;
    const{increment,decrement} = value;
    return (
      <div>
        <div className='item'>
           <div className='item-align'> 
              <div className='item-left'>
              <img className ='img-pic' src={imageUrl} alt='img' />
              <h5>{offerText}</h5>
         </div>
         <div className='item-right'>
         
            <h3>{brandName}</h3>
            <h4>{productName}</h4>
            <h5>{quantity}</h5>
            <h5>Price:{price} RS</h5>
            <h5>MRP:{mrp} RS</h5> 
            <div className='modifyitems'>
            <button className='button' onClick={()=>increment(id)}>Add to cart</button>
            <div className='margin'>
             <span className="btn-black" onClick={()=>decrement(id)} >
             -
              </span>
             <span className="quantity">{count}</span> 
               <span className="btn-black" onClick={()=>increment(id)} > 
              + 
            </span>
 
     </div>
 
            </div>
            </div>
         </div>
         
         </div> 
         <hr/> 
         </div>
         )
}

export default Product;
