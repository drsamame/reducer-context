export const initialState = []

export const CART_ACTIONS_TYPE = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

export const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case CART_ACTIONS_TYPE.ADD_TO_CART: {
      const { id } = actionPayload
      const isProductExistIdx = state.findIndex((cart) => cart.id === id)
      if (isProductExistIdx >= 0) {
        const newCart = structuredClone(state)
        newCart[isProductExistIdx].quantity += 1
        return newCart
      }
      return [...state, { ...actionPayload, quantity: 1 }]
    }
    case CART_ACTIONS_TYPE.REMOVE_FROM_CART: {
      const { id } = actionPayload
      return state.filter((el) => id !== el.id)
    }
    case CART_ACTIONS_TYPE.CLEAR_CART: {
      return initialState
    }
  }
  return state
}
