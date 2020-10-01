export const initialState = {
    basket:[],
    user: null
}
export const getBasketTotal = 
(basket)=>
basket?.reduce((amount,item)=>item.price + amount , 0);


const reducer =  (state = initialState, action)=>{
    console.log(action)
    switch(action.type)
    
    
    {
         case "SET_USER":
             return{
                 ...state,
                 user: action.user
             }

        case 'ADD_TO_BASKET':
        //logic of add to cart
        return{
            ...state,
            basket:[...state.basket, action.item]
        }

   
       case 'REMOVE_FROM_BASKET':
       //logic of removing from cart
           let newBasket = [...state.basket]
           const index = state.basket.findIndex((baksetItem)=> baksetItem.id ===action.id)
           if(index >= 0){
               //item in basket remove it
               newBasket.splice(index,1)
               
           }else{
               console.warn(
                   `can't remove product(id: ${action.id}) `
               )
           }
           return{...state,basket: newBasket}
        
   
       default:
           return state
    }
}
export default reducer