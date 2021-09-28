import React from 'react';

class About extends React.Component {
    state = {
        Item: [],

    }

    render() {
        return (
            <>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h1>Todo list <span className="badge badge-secondary">{this.state.Item.length}</span></h1>

                <button  style={{width:100, height: 40}}  onClick={() => {
                    const t = prompt('Пишите')
                    this.setState((p) => {
                        const a = [...p.Item, {text: t, done: false}];
                        return {Item: a,p};
                    });
                }}>Add todo</button>
            </div>
            <ul style={{userSelect:'none', cursor:'pointer', fontSize:'50px'}}>
                <lebel>

                        {this.state.Item.map((b, i) => <li onClick={()=> this.setState((r) => {
                        const s = [...r.Item];
                        s[i].done = !s[i].done;
                        return {done: s}
                    })} style={{color: b.done === true ? "green" : "red"}}>{b.text.substr(0,1).toUpperCase() + b.text.substr(1 ).toLowerCase()}</li>)}

                </lebel>
            </ul>
                <h1>({this.state.Item.filter(b => b.done === true).length})</h1>
                <h1>({this.state.Item.filter(b => b.done === false).length})</h1>
            </>
        );
    }
}

export default About;
