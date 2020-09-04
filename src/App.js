import React from 'react';
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



export  const UserContext = React.createContext()  

export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">

      <UserContext.Provider value={"coba"}>
        <ChannelContext.Provider value={'keren'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>



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
  );
}

export default App;
