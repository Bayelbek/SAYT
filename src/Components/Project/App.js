import React, {Component} from 'react';


class App extends Component {
  constructor(p) {
    super(p);
    const a = JSON.parse(localStorage.getItem('students'))||[];
    this.state= {
      student:a,

    }

  }

  incs = (i) => {
    console.log('kl')
    const d = +prompt('grade');
    this.setState((p)=>{
      console.log('jj')
      const b = [...p.student];
      console.log(b);
        b[i].grade += (d < 6 ? d : 5);
        console.log(b);
      return {student: b};
    })
  }

  Add =()=> {
    const name= prompt('Name');
    if( name !== '') {
      if (name !== null) {
        const grade = +prompt('score');
        console.log(name)
        this.setState((p) => {
          const a = [...p.student, {name: name, grade: grade}];
          return {student: a}
        })
      }
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.student !== this.state.student) {
      localStorage.setItem('students', JSON.stringify(this.state.student))
    }
  }


  render() {

    return (
        <>
          <div style={{position:"relative"}} className={'container mt-5 p-4 bg-light p-relative'}>
            <button
                onClick={()=>this.Add()}
                style={{position:"absolute",right:'20px'}}
                className={'btn btn-success mb-3  '}> Add student</button>
            <table className="table table-hover table-dark">
              <thead>
              <tr>
                <th className={'table-active'} scope="col">#</th>
                <th className={'table-active'} scope="col">Name</th>
                <th className={'table-active'} scope="col">Score</th>
                <th className={'table-active'} scope="col">Action</th>
              </tr>
              {this.state.student.map((item ,i)=>{
                return <tr>
                  <td className={'bg-success'}>{i+1}</td>
                  <td className={'bg-success'}>{item.name}</td>
                  <td className={'bg-success'}>{item.grade}</td>
                  <td className={'bg-success'}>
                    <button onClick={() => {
                      this.incs(i)

                    }}  className={'btn btn-info '}>change</button>
                  </td>
                </tr>
              })}
              </thead>
              <tbody>
              </tbody>
            </table>
          </div>
        </>
    );
  }
}

export default App;
