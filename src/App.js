import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import Hook from './components/Hook';
import TodoHook from './components/TodoHooks';
import HookTut from './components/HookTut';
import HookObjectEg from './components/HookObjectEg';
import EffectHook from './components/EffectHook';
import MouseHook from './components/MouseHook';
import MouseContainer from './components/MouseContainer';
import HookIntervalCounter from './components/HookIntervalCounter';
import Counter from './components/Counter';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
import ReducerHook from './components/ReducerHook';
import ReducerHook2 from './components/ReducerHook2';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
        <>
          {/* <TodoHook/> */}
          {/* <HookTut/> */}
          {/* <HookObjectEg/> */}
          {/* <EffectHook/> */}
          {/* <MouseHook/> */}
          {/* <MouseContainer/> */}
          {/* <HookIntervalCounter/> */}
          {/* <Counter/> */}
          {/* <DataFetching/> */}
          {/* <UserContext.Provider value={'chandan'}>
            <ChannelContext.Provider value={'kumar'}>
              <ComponentC/>
            </ChannelContext.Provider>
          </UserContext.Provider> */}
          {/* <ReducerHook/> */}
          <ReducerHook2/>
          
        </>
  );
}

export default App;
