$( document ).ready( readyNow );

const budget = 25000;
let purchases = [];

function addPurchase(){
  console.log( 'in addPurchase' );
  // get user input and create new Object
  let newPurchase = {
    name: $( '#purchaseNameIn' ).val(), //dont forget to use .val() if you try to capture user input
    price: $( '#purchasePriceIn' ).val()
  }
  // push the new purchase into the array
  purchases.push( newPurchase );
  // empty inputs
  $( '#purchaseNameIn' ).val( '' );
  $( '#purchasePriceIn' ).val( '' );
  // calculate remainingBudget
} // end addPurchase

function readyNow(){
  //console.log( 'JQ' );
  // display budget
  // target budgetOut by id
  let el = $( '#budgetOut' );
  el.empty();
  el.append( budget );
  // handle click event
  $( '#addPurchaseButton' ).on( 'click', addPurchase );
} // end readyNow
