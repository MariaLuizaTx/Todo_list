import React, {Component} from 'react';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { GoX } from 'react-icons/go';
import  * as S from './styleGlobal';


class Home extends Component{

    state = {
        tarefa: "",
        lista: [],
    };
    
    handleChange = (e) => {
        this.setState({
        tarefa: e.target.value
        });
    };
    
    addTarefa = () => {
        if (this.state.tarefa === "") {
        return;
        }
        this.setState({
        lista: this.state.lista.concat({
            tarefa: this.state.tarefa,
            id: Math.random()
        }),
        tarefa:""
        });
};

    limpar = () => {
        this.setState({
            lista: []
        })
    };

    apagar = (id) => {
        this.setState({
        lista: this.state.lista.filter((item) => {
            return item.id !== id; 
        })
        });
    };



    render(){
    return (
        <S.Container>
            <S.Formulario onSubmit={(e)=>{ e.preventDefault()}}>
                <h1>To Do List</h1>
                <S.addLista>
                    <button className='AddTarefas' onClick={this.addTarefa}  >+</button>
                    <input className='EntradaTarefas' value={this.state.tarefa} onChange={this.handleChange} placeholder="Adicionar Tarefa"/>
                    <button className='LimparTarefas' onClick={this.limpar}><RiDeleteBin2Fill/></button>
                </S.addLista>
                <S.Lista>
                    {this.state.lista.map((item) => (
                    <S.ItensLista>
                        <input className="Checkbox" type="checkbox" name="tarefa"  ></input>
                        <label className="Tarefa" for="tarefa" >{item.tarefa}</label>
                        <button className="Delete" onClick={() => {this.apagar(item.id)}}><GoX/></button>
                    </S.ItensLista>
                    ))}
                </S.Lista>
            </S.Formulario>
        </S.Container>
    )}}
    
    export default Home;