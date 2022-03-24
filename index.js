const Redux = require('redux');
/*
const ESTADO_INICIAL = {
  login: false,
  email: "",
};
    
const reducer = (state = ESTADO_INICIAL) => {
  return state;
};

const store = Redux.createStore(reducer);

console.log(store.getState()); */

const fazerLogin = (email, password) => ({
    type: "LOGIN",
    email, password});
  
  const ESTADO_INICIAL = {
    login: false,
    email: "",
    password: "",
  };
  
  const reducer = (state = ESTADO_INICIAL, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          login: !state.login,
          email: action.email,
          password: action.password
        };
      default:
        return state;
    }
  };
  
  const store = Redux.createStore(reducer);
  
  store.dispatch(fazerLogin("alguem@email.com", "1234@1234"));
  
  console.log(store.getState());