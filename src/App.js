import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import Hook_useState from './components/Hook_useState';
import Hook_array from './components/Hook_array';
import HookMouce from './components/HookMouce';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import DataFetching2 from './components/DataFetching2';
import ComponentC from './components/ComponentC';
import MyUseReducer from './components/MyUseReducer';
import MyUseReducer2 from './components/MyUseReducer2';
import MyUseReducer3 from './components/MyUseReducer3';
import MyUserReducer4 from './components/MyUserReducer4';
import DataFetchingUseState from './components/DataFetchingUseState';
import DataFetchingUseReducer from './components/DataFetchingUseReducer';
import UseHookParent from './components/UseHookParent';
import UseMemoCounter from './components/UseMemoCounter';
import UseRefFocus from './components/UseRefFocus';
import UseRefHookTimer from './components/UseRefHookTimer';
import DocTitleOne from './components/DocTitleOne';
import CustomHookCounterOne from './components/CustomHookCounterOne';
import CustomHookUserForm from './components/CustomHookUserForm';
import CustomHookUserForm2 from './components/CustomHookUserForm2';
import Navbar from './react-context-hooks/Navbar';
import BookList from './react-context-hooks/BookList';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <HookCounterTwo /> <br /> */}
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <Hook_useState /> */}
      {/* <Hook_array /> */}
      {/* <HookMouce /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      {/* <DataFetching2 /> */}
      {/* <UserContext.Provider value={'Noyon'}>
        <ChannelContext.Provider value={"item1"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <MyUseReducer /> */}
      {/* <MyUseReducer2 /> */}
      {/* <MyUseReducer3 /> */}
      {/* <MyUserReducer4 /> */}
      {/* <DataFetchingUseState /> */}
      {/* <DataFetchingUseReducer /> */}
      {/* <UseHookParent /> */}
      {/* <UseMemoCounter /> */}
      {/* <UseRefFocus /> */}
      {/* <UseRefHookTimer /> */}
      {/* <DocTitleOne /> */}
      {/* <CustomHookCounterOne /> */}
      {/* <CustomHookUserForm /> */}
      {/* <CustomHookUserForm2 /> */}
      <Navbar />
      <BookList />
    </div>
  );
}

export default App;
