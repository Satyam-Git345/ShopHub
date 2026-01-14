import { combineReducers } from "redux";
import wishListReducer from "../slices/wishListSlice";
import productReducer from "../slices/productSlice";
import cartReducer from "../slices/cartSlice";
import userReducer from "../slices/userSlice";
import { produce } from "immer";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { apiMiddleware } from "../middleware/apiMiddleware";
import { func } from "../middleware/func";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["carts", "wishlists", "user"], // persist only these
};


const rootReducer = combineReducers({
  products: productReducer,
  wishlists: wishListReducer,
  carts: cartReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }).concat(apiMiddleware, func),
});
store.subscribe(() => {
  console.log("State", store.getState());
});

// store.dispatch(increaseCartItemQty(12));

// store.dispatch(increaseCartItemQty(12));

// store.dispatch(increaseCartItemQty(13));

// store.dispatch(increaseCartItemQty(13, 2));

// store.dispatch(increaseCartItemQty(14, 2));

// store.dispatch(increaseCartItemQty(12, 5));

// store.dispatch(increaseCartItemQty(18));
// store.dispatch(increaseCartItemQty(18));
// store.dispatch(increaseCartItemQty(18));
// store.dispatch(increaseCartItemQty(18));
// // store.dispatch({ type: DECREASECARTQTY, payload: { ProductID: 12 } });
// store.dispatch(decreaseCartItemQty(12));
// store.dispatch(decreaseCartItemQty(13));
// store.dispatch(decreaseCartItemQty(14));
// store.dispatch(decreaseCartItemQty(12));
// store.dispatch(decreaseCartItemQty(12));

// store.dispatch(AddwishListTiem(1));
// store.dispatch(AddwishListTiem(2));
// store.dispatch(AddwishListTiem(12));
// store.dispatch(AddwishListTiem(17));

// store.dispatch(AddwishListTiem(18));

// store.dispatch(RemovewishListTiem(1));
// store.dispatch(RemovewishListTiem(18));
// console.log(store.getState());

const users = [
  {
    name: "Satyam",
    age: 22,
  },
  {
    name: "Naman",
    age: 28,
  },
  {
    name: "Shivam",
    age: 29,
  },
];

// const modifiedUsers=users.map((user,i)=>{
//      if(i==1){
//          return {...user,age:12,name:'Satyam Shukla'}
//      }
//      else{
//         return user
//      }
// })

// console.log(modifiedUsers)

const modifiedUsers = produce(users, (userCopy) => {
  userCopy[1].age = 87;
  userCopy[1].name = "Satyam Shukla";
});

console.log(modifiedUsers);


export const persistor = persistStore(store);


