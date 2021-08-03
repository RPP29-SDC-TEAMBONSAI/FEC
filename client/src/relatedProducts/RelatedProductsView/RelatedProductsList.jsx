import React from 'react';
import propTypes from 'prop-types';
import RelatedProductsCard from './RelatedProductsCard.jsx';


const RelatedProductsList = (props) => {

  return (
    <div className='relatedProductsListContainer'>
      <h2>Related Products:</h2>
    <div className='relatedProductsList'>
    {props.allProps.map((product, i) => {
      return <div key={i}>
        <RelatedProductsCard
               key={product.itemId}
               name={product.itemName}
               category={product.itemCategory}
               originalPrice={product.originalPrice}
               salePrice={product.salePrice}
               photo={product.photoUrl.thumbnail_url}
               id={product.itemId}
               handleProductChange={props.handleProductChange}
               starRating={product.starRating}
       />

       </div>
    })}

    </div>
    </div>
  )
}

RelatedProductsList.propTypes = {
  allProps: propTypes.any,
  handleProductChange: propTypes.any,
  };

export default RelatedProductsList;

