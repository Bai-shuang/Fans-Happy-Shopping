import {createStore,combineReducers,applyMiddleware} from "redux"


import reduxThunk from "redux-thunk";

import nineBao from "./reducers/nineBaoyou.js";

const reducer = combineReducers({
    nineBao
})

const store =createStore(reducer,applyMiddleware(reduxThunk))

export default store