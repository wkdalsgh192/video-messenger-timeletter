
const { configureStore, getDefaultMiddleware } = require('@reduxjs/toolkit');

const reducer = require('./_reducers');

const firstMiddleware = () => (next) => (action) => {
  console.log('로깅', action);
  next(action);
};

const store = configureStore({
  reducer,
  middleware: [firstMiddleware, ...getDefaultMiddleware()]
});

// module.exports = store;

export default store;