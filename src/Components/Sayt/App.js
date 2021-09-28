import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './products.json';
import './App.css';
import numberSeparator from "number-separator";
import {Navbar,Modal, FormControl, Alert, Nav, NavDropdown, Form, Container, Card, Button, Col, Row} from 'react-bootstrap';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            item:'',
            trash:[],
            show: false,
        }
    }

    componentDidMount() {
        this.setState({trash: JSON.parse(localStorage.getItem("names"))||[]
            }
        )
    }


    Price = y => {
        if (y.discount === null) {
            return (
                <Card.Text style={{fontSize:30, color:'green'}}>
                    {numberSeparator(y.price)}<u>c</u>
                </Card.Text>
            )
        }else{
            return (
                <>
                    <Alert style={{paddingTop:'10px',alignItems:'center', backgroundColor:'red', position:'absolute',color:'white', top:'10px', right:'10px', width:'55%', height:'45px'}} key={1} variant={'danger'}>
                        Скидка {y.discount}%
                    </Alert>
                    <Card.Text style={{fontSize:30, color:'green'}}>
                        <span style={{color:'green'}}>{numberSeparator(y.price - (y.price*y.discount / 100))}<u>c</u></span>
                        <span style={{color:'red'}}> <del>{numberSeparator(y.price)} <u>c</u></del> </span>
                    </Card.Text>
                </>
            )
        }
    }
    trashs = (y) => {
        this.setState(prev =>{
            return {
                trash: prev.trash.includes(y.id)? prev.trash.filter(v => v !== y.id) : [...prev.trash, y.id]
            }
        })
    }
    componentDidUpdate(prevProps, prevState){
        if (prevState.trash !== this.state.trash) {
            localStorage.setItem("names", JSON.stringify(this.state.trash));
        }
    }
    render() {
            let summ = 0;
        const p = Products.filter(y => y.title.toLowerCase().indexOf(this.state.item.toLowerCase()) !== -1);
        {this.state.trash.map((t) => {
            const a = Products.find(g => g.id === t);
            summ += a.discount ? a.price - (a.price * a.discount / 100) : a.price
        })}
        return (
            <>

                {/*<Navbar bg="dark" variant='dark' expand="lg">*/}
                {/*    <Container>*/}
                {/*        <Navbar.Brand  href="#" >Besoft_kg</Navbar.Brand>*/}
                {/*        <Navbar.Toggle aria-controls="navbarScroll" />*/}
                {/*        <Navbar.Collapse id="navbarScroll">*/}
                {/*            <Nav*/}
                {/*                className="me-auto my-2 my-lg-0"*/}
                {/*                style={{ maxHeight: '100px' }}*/}
                {/*                navbarScroll*/}
                {/*            >*/}
                {/*                <Nav.Link  onClick={()=>{this.setState({show:true})}}>Корзина({this.state.trash.length})</Nav.Link>*/}


                {/*                <Modal*/}
                {/*                    show={this.state.show}*/}
                {/*                    onHide={()=>{this.setState({show:false})}}*/}
                {/*                    backdrop="static "*/}
                {/*                    keyboard={false}*/}
                {/*                >*/}
                {/*                    <Modal.Header closeButton>*/}
                {/*                        <Modal.Title>Корзинка ({numberSeparator(summ)})</Modal.Title>*/}
                {/*                    </Modal.Header>*/}
                {/*                    <Modal.Body>*/}
                {/*                        {this.state.trash.length === 0 ? <h1>Нет товаров Асан</h1> :   this.state.trash.map((v, i) =>{*/}
                {/*                                const modal = p.find(l => l.id === v);*/}
                {/*                                return(*/}
                {/*                                    <div>{modal.title} <Button  style={{width:'80px', marginLeft: '12px'}} onClick={()=>{*/}
                {/*                                        const a = [...this.state.trash];*/}
                {/*                                        a.splice(i, 1);*/}
                {/*                                        this.setState({trash:a})*/}
                {/*                                    }}>Удалить</Button></div>*/}
                {/*                                )*/}
                {/*                            })}*/}

                {/*                    </Modal.Body>*/}
                {/*                    <Modal.Footer>*/}
                {/*                        <Button variant="secondary" onClick={()=>{this.setState({show:false})}}>*/}
                {/*                            Close*/}
                {/*                        </Button>*/}
                {/*                        <Button variant="primary" disabled={this.state.trash.length === 0 ? true : false}>Understood</Button>*/}
                {/*                    </Modal.Footer>*/}
                {/*                </Modal>*/}
                {/*            </Nav>*/}
                {/*            <Form className="d-flex">*/}
                {/*                <FormControl*/}
                {/*                    onChange={e => this.setState({item: e.target.value})}*/}
                {/*                    type="search"*/}
                {/*                    placeholder="Поиск..."*/}
                {/*                    value={this.state.item}*/}
                {/*                    className=""*/}
                {/*                    aria-label="Search"*/}
                {/*                />*/}
                {/*            </Form>*/}
                {/*        </Navbar.Collapse>*/}
                {/*    </Container>*/}
                {/*</Navbar>*/}

                <h1 className="mt-3 container">Продукт({p.length})</h1>
                <div className="d-flex justify-content-evenly flex-wrap mt-2 container">
                    {p.map((y, i) => {
                        return (
                            <>
                                        <Card style={{ width: '18rem'}} className='cards mt-5'>
                                            {/*<div  className="images" style={{backgroundImage:`url(${y.main_image})`, }}/>*/}
                                            <Card.Img className={'images'} variant="top" src={y.main_image}/>
                                            <Card.Body>
                                                <Card.Title>{y.title}</Card.Title>
                                                {this.Price(y)}
                                                <div className="ml-5">
                                                </div>

                                            </Card.Body>

                                            <Button  style={{width:'90%', marginLeft: '12px',marginBottom:'5px', backgroundColor: this.state.trash.includes(y.id)? 'red':'blue'}} onClick={()=>this.trashs(y)}>{this.state.trash.includes(y.id)? 'Удалить': 'Добавить в корзинку'}</Button>

                                        </Card>

                            </>

                        )
                    })}
                </div>
            </>
        );
    }
}
