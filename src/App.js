import React, {useReducer} from 'react';
import './App.css';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';
import ClassMouse from './components/ClassMouse';
import HookMouse from  './components/HookMouse'

import MouseContainer from './components/MouseContainer'
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';

import CounterOne from './components/CounterOne'
import CounterTwo from './components/CounterTwo';

import CounterThree from './components/CounterThree'
import ComponentHooksA from './components/ComponentHooksA';
import ComponentHooksB from './components/ComponentHooksB';
import ComponentHooksC from './components/ComponentHooksC';


export  const UserContext = React.createContext()  

export const ChannelContext = React.createContext()

export const CountContext = React.createContext()


const initialState = 0

// reducer(menerima 2 values dan return 1 value)
// 2 value yang diterima adalah reducer(currentState,action)
// 1 value yang di kembalikan adalah new state
// currentState itu adalh state yang baru2 ini`
const reducer = (state, action) => {
  // untuk mengeksekusi code berdasarkan action kita menggunakan switch statement
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState

    default:
      return state
  }
}


function App() {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <CountContext.Provider value={{countState: count,countDispatch: dispatch}}>
      <div className="App">

        count - {count}
        <ComponentHooksA />
        <ComponentHooksB />
        <ComponentHooksC />

        {/* <CounterThree /> */}

        {/* <CounterTwo /> */}
        {/* <CounterOne /> */}

        {/* <UserContext.Provider value={"coba"}>
          <ChannelContext.Provider value={'keren'}>
            <ComponentC />
          </ChannelContext.Provider>
        </UserContext.Provider> */}



        {/* <DataFetching /> */}

        {/* <IntervalClassCounter />
        <IntervalHookCounter /> */}


        {/* <ClassCounterOne/>  */}

        {/* <HookCounterOne /> */}

        {/* <ClassMouse /> */}
        {/* <HookMouse /> */}

        {/* <MouseContainer /> */}

        {/* <ClassCounter />
        <ClassCounter /> */}
        {/* <HookCounterTwo /> */}
        {/* <HookCounter3/> */}
        {/* <HookCounter4 /> */}
      </div>
    </CountContext.Provider>
  );
}

export default App;
