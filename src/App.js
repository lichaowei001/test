import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
// import Txt from './t.js'
import './App.css';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import asyncComp from './asyncComp'
const Hoc = asyncComp(() => import('./view/Hoc'))
const Hooks = asyncComp(() => import('./view/Hooks'))
// const Ho = ()=>{
//   const flag=true;
//   if(flag){
//     return <div>false</div>
//   }
//   return <div>true</div>
// }
// function Hok(props) {
//   const [count,setCount] = useState(3)
//   useEffect(()=>{
//     console.log('count变了');
//     console.log('卸载了');
//   },[count])
//   const set = (a)=>{
//     console.log(count);
//     console.log(a);
//     setCount(count+1)//依然是异步的
//     console.log(count);
//   }
//   return (
//     <div>
//       {count}
//       <button onClick={set.bind(null,2)}>+</button>
//     </div>
//   )
// }
// const View =(props)=>{
//   const change = ()=>{
//     console.log(props);
//     props.history.push('/hok')
//   }
//   return(
//     <div>
//     <button onClick={change}>切换组件</button>
//     {/* <Prompt when={true} message={location=>'确定要跳转？'}></Prompt> */}
//     <Switch>

//     <Route path='/ho' component={Ho}></Route>
//     <Route path='/hok' component={Hok}></Route>
//     </Switch>
//     </div>
//   )
// }
// const Vw = withRouter(View)
function App(props) {
  console.log(props);
  const skip = (p) => {
    props.history.push(p)
  }
  return (
    <div className="App">
      <button onClick={skip.bind(null, '/hoc')}>跳转1</button>
      <button onClick={skip.bind(null, '/hooks')}>跳转2</button>
      <Switch>
        <Route path='/hoc' component={Hoc}></Route>
        <Route path='/hooks' component={Hooks}></Route>
        <Redirect from='/' to='/hoc' />
      </Switch>
    </div>
  );
}

export default withRouter(App);
