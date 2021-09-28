import React from 'react';
import  './style.css';

class App extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        input: '',
        value: 'USD',
        items: ""
    }
}



  render() {
    return(
        <>
          <input value={this.state.input}
                 onChange={(e) => {
                     this.setState({input:e.target.value})}}
                 className={'form-control'} type="number"/>
            <select value={this.state.value} onChange={(e)=>this.setState({value:e.target.value})}  className={'form-control s btn btn-outline-secondary'}>
                <option value={'USD'} >USD</option>
                <option value={'KZT'} >KZT</option>
                <option value={'RUB'} >RUB</option>
            </select>
            <button  onClick={()=> {
                this.setState((prev) => {
                    if(prev.value === "USD") {

                        let a =  prev.input / 85 + ' USD';
                        return {
                            items: a
                        };
                    } else if(prev.value === "KZT") {
                        let a = prev.input * 5 + ' KZT';
                        return {
                            items: a
                        };
                    }  else if(prev.value === "RUB"){
                        let a =  prev.input / 0.85 + ' RUB';
                        return {
                            items: a
                        }
                    }
                })

                 }
            }
                className={'btn but btn-danger'}>Convert</button>
            <h1>{this.state.items}</h1>
        </>
    )
  }
}
export default App;



