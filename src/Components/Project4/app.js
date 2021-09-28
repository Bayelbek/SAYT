import React from 'react';
import './style.css';

class Element extends React.Component{
    state = {
        x1: '',
        x2: '',
        x3: '',
        x4: '',
        x5: '',
        x6: '',
        x7: '',
        x8: '',
        x9: '',
        n: 'X',
    }
    


    render() {
        return(
            <>
                <h1><strong>Сложный проект 1</strong></h1>
                <div className="contener" style={{userSelect:'none'}}>
                    <div style={{color: this.state.x1 === 'X'? 'rgb(8, 37, 66)':" black"}} className="blok" onClick={() => this.setState( (prev) => (prev.x1 === '' ? {x1: prev.n,  n: prev.n === "X" ? "0" : "X"}:{}))}>{this.state.x1}</div>
                    <div style={{color: this.state.x2 === 'X'? 'rgb(8, 37, 66)':" black"}} className="blok" onClick={() => this.setState( (prev) => (prev.x2 === '' ? {x2: prev.n,  n: prev.n === "X" ? "0" : "X"}:{}))}>{this.state.x2}</div>
                    <div style={{color: this.state.x3 === 'X'? 'rgb(8, 37, 66)':" black"}} className="blok" onClick={() => this.setState( (prev) => (prev.x3 === '' ? {x3: prev.n,  n: prev.n === "X" ? "0" : "X"}:{}))}>{this.state.x3}</div>
                    <div style={{color: this.state.x4 === 'X'? 'rgb(8, 37, 66)':" black"}} className="blok" onClick={() => this.setState( (prev) => (prev.x4 === '' ? {x4: prev.n,  n: prev.n === "X" ? "0" : "X"}:{}))}>{this.state.x4}</div>
                    <div style={{color: this.state.x5 === 'X'? 'rgb(8, 37, 66)':" black"}} className="blok" onClick={() => this.setState( (prev) => (prev.x5 === '' ? {x5: prev.n,  n: prev.n === "X" ? "0" : "X"}:{}))}>{this.state.x5}</div>
                    <div style={{color: this.state.x6 === 'X'? 'rgb(8, 37, 66)':" black"}} className="blok" onClick={() => this.setState( (prev) => (prev.x6 === '' ? {x6: prev.n,  n: prev.n === "X" ? "0" : "X"}:{}))}>{this.state.x6}</div>
                    <div style={{color: this.state.x7 === 'X'? 'rgb(8, 37, 66)':" black"}} className="blok" onClick={() => this.setState( (prev) => (prev.x7 === '' ? {x7: prev.n,  n: prev.n === "X" ? "0" : "X"}:{}))}>{this.state.x7}</div>
                    <div style={{color: this.state.x8 === 'X'? 'rgb(8, 37, 66)':" black"}} className="blok" onClick={() => this.setState( (prev) => (prev.x8 === '' ? {x8: prev.n,  n: prev.n === "X" ? "0" : "X"}:{}))}>{this.state.x8}</div>
                    <div style={{color: this.state.x9 === 'X'? 'rgb(8, 37, 66)':" black"}} className="blok" onClick={() => this.setState( (prev) => (prev.x9 === '' ? {x9: prev.n,  n: prev.n === "X" ? "0" : "X"}:{}))}>{this.state.x9}</div>
                </div>
            </>
        )
    }
}
export default Element;