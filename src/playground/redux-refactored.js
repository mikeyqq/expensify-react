import { createStore } from "redux";

/********************************************************************************** */
// PART 1. RESTRUCTURING AND REFACTORING TO IMPROVE CODES IN REDUX
// PART 2. Action GENERATORS --> Functions that return action objects
// PART 3. Action GENERATORS --> This is beneficial to catch errors in case of typos as it displays errors over inline action objects which doesnt display anything in case of an error.

//PART 4. THIS IS AN EXAMPLE OF REFACTORING FINAL FROM store.dispatch inline object to ACTION GENERATORS BELOW
//REMOVING THE payload "= {}" will throw an undefined error
// const incrementCount = ({ payload } = {}) => ({
//   type: "INCREMENT",
//   incrementBy: typeof payload.incrementBy === "number" ? payload.incrementBy : 1
// });

/*********************************************************************************** */
//AN EXAMPLE OF DESTRUCTRING ARGUMENTS COMING INTO A FUNCTION.
//THIS EXAMPLE CAN BE USED IN OUR ACTION GENERATOR
// console.log(add({ a: 1, b: 2 }));

//BEFORE DESTRUCTURING
// const add = data => {
//   return data.a + data.b;
// };

// //DESTRUCTURING
// const add = (a, b) => {
//   return a + b;
// };

/*********ACTION GENERATOR FOR INCREMENT****************************************************************************************************************************************************************/

//PART 5. THIS IS THE SHORTER REFACTORED OF THE INCREMENTCOUNT COMPARED TO ABOVE
//WE USED OBJECT DESTRUCTURING REPLACING PAYLOAD BECAUSE WE CAN ASSIGN THE ARGUMENT COMING IN TO ANY VARIABLE WE WANT, AND THEN CALLING ON THAT VARIABLE IN OUR STATEMENT
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

/*********ACTION GENERATOR FOR DECREMENT****************************************************************************************************************************************************************/

// const decrementCount = (payload = {}) => ({
//   type: "DECREMENT",
//   decrementBy: typeof payload.decrementBy === "number" ? payload.decrementBy : 1
// });

//REFACTORED OF THE CODE ABOVE
const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

/*********ACTION GENERATOR FOR RESET****************************************************************************************************************************************************************/

const resetCount = () => ({
  type: "RESET"
});

/*********ACTION GENERATOR FOR SET****************************************************************************************************************************************************************/

const setCount = ({ count } = {}) => ({
  type: "SET",
  count
});

/*************************************************************************************************************************************************************************/

//REDUCER EXAMPLE -> reducers are pure function. Output is determine by the input. If it depends on global variable, then its not a pure function.
const countReducer = (state = { count: 0 }, action) => {
  //YOU CAN USE SWITCH STATEMENT OR IF STATEMENT FOR THE ACTIONS COMING IN FROM DISPATCH
  switch (action.type) {
    case "INCREMENT":
      return {
        //THE ACTION IS COMING FROM DISPATCH FOR DECREMENTBY
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        //THE ACTION IS COMING FROM DISPATCH FOR DECREMENTBY
        count: state.count - action.decrementBy
      };
    case "RESET":
      return {
        count: 0
      };
    case "SET":
      return {
        count: action.count
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

//This will run everytime there is an change to the store.
//This will log out all 4 dispatch everytime the dispatch runs.
//This is kind of like useEFFECT
store.subscribe(() => {
  console.log(store.getState());
});

//logging the info in the state.
console.log(store.getState());

/******************INCREMENT ACTION GENERATOR******************************************* */
//PART 4.1 - REMOVING OLD inline object

//CONVENTION TO USE ALL CAPS
//dispatch will send this to the store to change the state.
// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });

// Part 4.2 IMPLEMENTING action generator
//THIS IS THE REFACTORED VERSION OF INCREMENT BY TO AN ACTION GENERATOR
//THIS WILL INCREMENT BY 5 SINCE WE ARE PASSING IT IN AN ARGUMENT
store.dispatch(incrementCount({ incrementBy: 5 }));

//THIS WILL INCREMENT BY THE DEFAULT PROVIDED IN THE ACTION GENERATOR SINCE WE ARE NOT PASSING ANY ARGUMEMNTS
store.dispatch(incrementCount());

/******************RESET ACTION GENERATOR************************************************ */

store.dispatch(resetCount());

/******************DECREMENT ACTION GENERATOR****************************************************************************************************************************************************/

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

/*********SET ACTION GENERATOR****************************************************************************************************************************************************************/

store.dispatch(setCount({ count: 101 }));
