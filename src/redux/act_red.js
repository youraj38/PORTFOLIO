export const actionfun = (alt1) => {
  return {
    type: "increent",
    paylod: {
      alt: alt1,
    },
  };
};

const mystate = {
  altsarr: [],
  liks: 30,
};
export const reducer = (state = mystate, action) => {
  if (action.type === "increent") {
    if (state.altsarr.indexOf(action.paylod.alt) === -1) {
      return {
        ...state,
        altsarr: [...state.altsarr, action.paylod.alt],
        liks: state.liks + 1,
      };
    }
  }
  return state;
};
