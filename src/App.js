
import { useReducer } from 'react';
import './App.css';
const initialstate ={
  balance :0,
  loan: 0,
  isActive:false,
  isloan:false,
}
function reducer(state,action){
  console.log(state)
  switch(action.type){
    case "openAccount":
    return {
      ...state, balance : 500 , isActive:true,
    }
    case "deposit" : return  {
      ...state , balance : state.balance + 150 ,
    }
    case "withdrow" : return  {
      ...state , balance : state.balance - 50 ,
    }
    case "requestloan" :  return  {
      ...state , balance : state.balance +5000 ,loan :5000,isloan:true,
    }
    case "payLoan" :  return  {
      ...state , balance : state.balance > 5000 ? state.balance-5000 : state.balance  ,loan :state.balance > 5000 ?0:state.loan,isloan:false,
    }
    case "closeAccount" : return  {
      ...state , balance : 0 ,isActive:false
    }
    default:
      throw new Error("unkown")



  }
}

function App() {
  const [{balance,loan ,isActive ,isloan},dispatch] = useReducer(reducer,initialstate)
  return (
    <div className="App">
    <h2>UseReducer Bank Account </h2>
    <h5>Balance :{balance} </h5>
    <h5>Loan : {loan}</h5>
    <button onClick={()=>dispatch({type:"openAccount"})} disabled={isActive}>Open Account</button>
    <button onClick={()=>dispatch({type:"deposit"})} disabled={!isActive}>Deposit 150 Account</button>
    <button onClick={()=>dispatch({type:"withdrow"})} disabled={!isActive}>Withdrow 50</button>
    <button onClick={()=>dispatch({type:"requestloan"})} disabled={isloan===true || isActive===false ?true:false}>Request a loan of 5000</button>
    <button onClick={()=>dispatch({type:"payLoan"})} disabled={!isloan===true || isActive===false ?true:false}>pay loan</button>
    <button onClick={()=>dispatch({type:"closeAccount"})} disabled={!isActive}>close account</button>






    </div>
  );
}

export default App;
