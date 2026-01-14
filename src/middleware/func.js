//middleware function
export const func = ({dispatch}) => (next) => (action) => {
  if (typeof action === "function") {
    next(dispatch);
  } else {
    next(action);
  }
};
