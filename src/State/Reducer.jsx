export const initialState = {
  tv: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TV": {
      return {
        tv: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
