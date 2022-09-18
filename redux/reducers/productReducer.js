import * as type from 'redux/types/productType'

const initialState = {
  loading: false
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ON_LOADING:
      return {
        ...state,
        loading: action.data,
      };
    default:
      return state;

  }
}

export default productReducer