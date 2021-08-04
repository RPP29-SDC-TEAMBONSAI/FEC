import React from 'react';
import propTypes from 'prop-types';
import YourOutfitCard from './YourOutfitCard.jsx';
import AddToOutfitCard from './AddToOutfitCard.jsx';

const YourOutfitList = (props) => {
<<<<<<< HEAD
  // console.log(`outfititms ${JSON.stringify(props.outfitItems)}`)
=======
>>>>>>> ad01cd3bab4ae4107e90cadd957e39ae7194b577
  return (
    <div className='yourOutfitListContainer'>
      <h2>Your Outfit: </h2>
    <div className='yourOutfitList'>
    <AddToOutfitCard handleAddToOutfit={props.handleAddToOutfit} outfitProps={props.outfitProps} state={props.state} />
    {props.outfitItems.map((outfitItem, i) => {
      return (<div className='outfitItem' key={i}>
               <YourOutfitCard
                key={outfitItem.id}
                outfitProps={outfitItem}
                starRating={props.state.ratings}
                handleRemoveFromOutfit={props.handleRemoveFromOutfit}
                />
             </div>)
    })}
    </div>
    </div>
  )
}

YourOutfitList.propTypes = {
  handleAddToOutfit: propTypes.func,
  handleRemoveFromOutfit: propTypes.func,
  outfitProps: propTypes.object,
  state: propTypes.object,
  outfitItems: propTypes.array,
  };

export default YourOutfitList;