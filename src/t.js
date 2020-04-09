import React, { Component,PureComponent } from 'react'

class Child extends PureComponent{
  constructor(props){
    super(props)
    console.log('props',props);
    this.state={
      a:props.a//派生状态
    }
  }
static getDerivedStateFromProps(props,state){//获取派生状态 
 //受控组件可以利用此钩子决定组件更新
   console.log({props,state});
   if(props.a!==state.a){
   return {a:props.a}}
   return null
 }
   render(){
     console.log('child');
     return <div>
       {this.props.a}
      
     </div>
   }
 }
 class Txt extends React.Component{
   constructor(){
     super()
     this.state={
       a:2
     }
   }
   add=(e)=>{
     console.log('button',e);
     e.stopPropagation()
    //  e.preventDefault()
     this.setState({a:this.state.a+1})
     
   }
   div=(e)=>{
     console.log('div')
   }
   render(){
     return <div>
       {this.state.a}
       <Child a={this.state.a}/> 
       <div onClick={this.div}>0000

       <button onClick={this.add}>+++</button>
       </div>
     </div>
   }
 }
export default Txt