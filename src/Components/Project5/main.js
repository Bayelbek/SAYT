import React from 'react';
import './style.css';
class App extends React.Component{
    state = {
        a: 0,
    }
    myIcon = (s) => {
        this.setState({a:s});
    }
    render() {
        return(
            <>
                <img className={'A'} style ={{display: this.state.a === 1 ? 'none' : 'inline-block', transition: '0.5s', }} onClick={() => this.myIcon(1)} src ='https://uploads.scratch.mit.edu/users/avatars/31053043.png'/>
                <img className={'A'} style ={{display: this.state.a === 2 ? 'none' : 'inline-block', transition: '0.5s', }} onClick={() => this.myIcon(2)} src ='https://i.pinimg.com/originals/98/27/cd/9827cdc276e43dccd6e30e269c1c664d.jpg'/>
                <img className={'A'} style ={{display: this.state.a === 3 ? 'none' : 'inline-block', transition: '0.5s', }} onClick={() => this.myIcon(3)} src ='https://st3.depositphotos.com/12982378/15926/i/600/depositphotos_159262458-stock-photo-beagle-dog-with-laptop.jpg'/>
            </>
            
        );
    }
}
export default App;