//middleware function
export const apiMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type === "api/makeCall") {
      next(action);
      const { URL, onSuccess, onStart, onError } = action.payload;
      const baseUrl = "https://fakestoreapi.com";
      dispatch({
        type: onStart,
      });
      fetch(`${baseUrl}/${URL}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          dispatch({
            type: onSuccess,
            payload: data,
          });
        })
        .catch((err) => {
          dispatch({
            type: onError,
            payload: err.message,
          });
        });
    } else {
      next(action);
    }
  };

export const fetchData = (payload) => {
  return { type: "api/makeCall", payload };
};
