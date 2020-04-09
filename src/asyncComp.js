import React, {
  Component
} from 'react'

const asyncComp = (impComponent) => {
  return class extends Component {
    state = {
      component: null
    }
    componentDidMount() {
      impComponent()
        .then(res => {
          console.log(res);
          this.setState({component:res.default})
        })
    }
    render() {
      let C = this.state.component;
      return C?<C {...this.props} />:null;
    }
  }
}
export default asyncComp