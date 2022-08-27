import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/firebase.config";

// initialise data from firestore
export const getUserData = createAsyncThunk(
  "data/getUserData",
  async (userID) => {
    const docRef = doc(db, "users", `${userID}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      //console.log("Document data:", docSnap.data());
      const storedData = window.localStorage.state
        ? JSON.parse(localStorage.getItem("state"))
        : undefined;

      localStorage.removeItem("state");
      return { dataDB: docSnap.data(), storedData };
    } else {
      //console.log("No such document");
    }
  }
);

// initialise data from local storage
export const getGuestData = createAsyncThunk("data/getGuestData", () => {
  //console.log("guest data");
  const storedData = window.localStorage.state
    ? JSON.parse(localStorage.getItem("state"))
    : undefined;

  return storedData;
});

const initialState = {
  listItems: {},
  totalQuantity: 0,
  wishList: {},
  initUser: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //add item to the cart or add quantity of an item already in the cart
    addItem: (state, { payload }) => {
      if (state.listItems[payload.modelID]) {
        state.listItems[payload.modelID].quantity += payload.quantity;
      } else {
        state.listItems[payload.modelID] = { ...payload };
      }

      state.totalQuantity += payload.quantity;
    },

    //remove an item from the cart
    removeItem: (state, { payload }) => {
      state.totalQuantity -= state.listItems[payload.modelID].quantity;
      delete state.listItems[payload.modelID];
    },

    //adding quantity to an item from the cart
    addQuantity: (state, { payload }) => {
      state.totalQuantity += 1;
      state.listItems[payload.modelID].quantity += 1;
    },

    //removing quantity to an item from the cart
    removeQuantity: (state, { payload }) => {
      state.totalQuantity -= 1;
      state.listItems[payload.modelID].quantity -= 1;
    },

    //delete listItems
    deleteCart: (state) => {
      state.listItems = {};
      state.totalQuantity = 0;
    },

    //add to wishList
    toggleWishlistItem: (state, { payload }) => {
      if (state.wishList[payload.id]) {
        delete state.wishList[payload.id];
      } else {
        state.wishList[payload.id] = { ...payload };
      }
    },

    //reset the store on session logout
    resetStore: (state) => {
      state.listItems = {};
      state.totalQuantity = 0;
      state.wishList = {};
    },
  },

  // initialise async data from firestore
  extraReducers: {
    [getUserData.pending]: (state) => {
      state.initUser = false;
    },
    [getUserData.fulfilled]: (state, { payload }) => {
      state.listItems = payload.dataDB.listItems;
      state.totalQuantity = payload.dataDB.totalQuantity;
      state.wishList = payload.dataDB.wishList;

      // case localStorage is not empty
      if (payload.storedData !== undefined) {
        // ----- listItems -----
        // merge both listItems // add quantities without duplicate keys
        if (Object.keys(payload.dataDB.listItems).length > 0) {
          Object.keys(payload.storedData.listItems).forEach((item) => {
            if (state.listItems[item]) {
              state.listItems[item].quantity +=
                payload.storedData.listItems[item].quantity;
            } else {
              state.listItems[item] = { ...payload.storedData.listItems[item] };
            }
          });
        } else {
          state.listItems = payload.storedData.listItems;
        }

        // ----- totalQuantity -----
        state.totalQuantity += payload.storedData.totalQuantity;

        // ----- wishList -----
        if (Object.keys(payload.dataDB.wishList).length > 0) {
          Object.keys(payload.storedData.wishList).forEach((item) => {
            if (!state.wishList[item]) {
              state.wishList[item] = { ...payload.storedData.wishList[item] };
            }
          });
        } else {
          state.wishList = payload.storedData.wishList;
        }
      }
      state.initUser = true;
    },
    [getUserData.rejected]: (state) => {
      state.initUser = false;
    },

    //initialise data from local storage
    [getGuestData.pending]: (state) => {
      state.initUser = false;
    },
    [getGuestData.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.listItems = payload.listItems;
        state.totalQuantity = payload.totalQuantity;
        state.wishList = payload.wishList;
      }
      state.initUser = true;
    },
    [getGuestData.rejected]: (state) => {
      state.initUser = false;
    },
  },
});

export const {
  addItem,
  removeItem,
  addQuantity,
  removeQuantity,
  deleteCart,
  toggleWishlistItem,
  resetStore,
} = cartSlice.actions;
export default cartSlice.reducer;
