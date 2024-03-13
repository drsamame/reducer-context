export const initialState = []
export const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case 'ADD_TO_CART': {
      const { id } = actionPayload
      const isProductExistIdx = state.findIndex((cart) => cart.id === id)
      if (isProductExistIdx >= 0) {
        const newCart = structuredClone(state)
        newCart[isProductExistIdx].quantity += 1
        return newCart
      }
      return [...state, { ...actionPayload, quantity: 1 }]
    }
    case 'REMOVE_FROM_CART': {
      const { id } = actionPayload
      return state.filter((el) => id !== el.id)
    }
    case 'CLEAR_CART': {
      return initialState
    }
  }
  return state
}
