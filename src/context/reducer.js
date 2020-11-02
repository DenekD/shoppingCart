export const initialState = {
  basket: [],
  isOpenDrawer: false,
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      //check if product is already added to cart if it is only increment quantity property
      const b = state.basket.map((p) => {
        if (p.id === action.item.id) {
          p.quantity += 1;
        }
        return p;
      });
      //if there is no such item in cart add new to it
      b.some((m) => m.id === action.item.id) || b.push(action.item);

      return {
        ...state,
        basket: [...b],
        isOpenDrawer: action.isOpen,
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.removeID),
      };
    case 'CHANGE_ITEM_QTY':
      return {
        ...state,
        basket: state.basket.map((item) => {
          if (item.id === action.id) {
            item.quantity = action.value;
          }
          return item;
        }),
      };
    case 'CLOSE_BASKET':
      return {
        ...state,
        isOpenDrawer: action.isOpen,
      };
    default:
      return state;
  }
};

export default reducer;
