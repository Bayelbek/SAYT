import React from "react";
class About extends React.Component {


    constructor(props) {
        super(props);
        const a =  JSON.parse(localStorage.getItem('items'))||[];
        this.state = {
            item:a,
            i: '',
            value:'all'
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.a !== this.state.item) {
            localStorage.setItem('items', JSON.stringify(this.state.item)) 
        }
    }

    render() {
        return(
            <div className={'container '}>
                <div className={'containerb border my-5 p-3'}>
                    <input
                        value={this.state.i}
                        onChange={(e) => {
                            this.setState({i:e.target.value})}}
                        className={'form-control'} style={{
                        width: 900,
                        marginLeft: 100,
                        marginTop: 50,
                    }} type="text"/>
                    <br/>
                    <button onClick={() => {
                        this.setState((p)=> {
                            const a = [...p.item,
                                { name :p.i , done:false}
                            ]
                            
                            return{item:a,i:''}
                        })}}
                            disabled={this.state.i.length === 0}
                            className={'btn btn-danger'}> Добавить</button>
                    <select onChange={(e)=>this.setState({value:e.target.value})}  className={'ml-3 sl btn btn-outline-secondary'}>
                        <option  value={'all'} className={'op'}>Все задачи</option>
                        <option value={'done'} className={'op'}>Выполненные задачи</option>
                        <option value={'not_done'} className={'op'}>Невыполненные задачи</option>
                    </select>
                    <button
                        onClick={()=> {
                            const h = window.confirm('Вы уверены!');
                            if(h){
                                const d = this.state.item;
                                d.splice(0,d.length);
                                this.setState({item:d})
                                
                            }
                        }}
                        className={'btn  btn-danger ml-3'}>
                        Удалить все</button>
                </div>
                <ul>
                    {this.state.item.filter((i) => {
                        if(this.state.value === 'all'){
                            return true
                        }else if(this.state.value === 'done'){
                            return i.done
                        }else if(this.state.value === 'not_done'){
                            return !i.done
                        }
                    }).map((i,r) => {
                        return <div className={'help border p-2  container'}> <li key={r}
                                style={{color:i.done ?'green':'red',userSelect:"none"}}
                        >{i.name}
                            <button disabled={i.done}  onClick={() => {
                                this.setState((p) => {
                                    const b = [...p.item];
                                    b[r].done=true;
                                    return {item :b};
                                })
                            }} className={ ' btn btn-info btn_1 ml-3 '}>Выполнить</button>
                            <button onClick={() => {
                                const f = this.state.item
                                f.splice(r,1);
                                this.setState({item:f})
                            }} disabled={!i.done} className={'btn_2 btn btn-danger ml-3'}>Удалить</button>
                            </li> </div>
                    })}
                </ul>
            </div>
        );
    }
}
export default About;