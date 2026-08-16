// import { configureStore } from "@reduxjs/toolkit";

// import authReducer from "./slices/authSlice";
// import cartReducer from "./slices/cartSlice";
// import themeReducer from "./slices/themeSlice";


// const store = configureStore({

//     reducer: {

//         auth: authReducer,
//         cart: cartReducer,
//         theme: themeReducer

//     }

// });


// export default store;

import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./slices/cartSlice";

const store = configureStore({

    reducer: {

        cart: cartReducer

    }

});

export default store;