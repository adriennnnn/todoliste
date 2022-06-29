import React, { Component } from 'react';
import './page.css';

// function Page() {
//   //export default class Page extends React.Component {
class Todolist extends Component {
  constructor() {
    super();
    this.state = {
      userInpute: "",
      items: [],
    };
  }
  increment(event) {
    this.setState({
      userInpute: event.target.value
    },
    //  () => console.log(this.state.userInpute)
     );
  }
  addTodo(event) {
    event.preventDefault();//pour ne pas relaod la page  a cause du form
    this.setState({
      userInpute: '',
      items: [...this.state.items, this.state.userInpute]
      // let = item.push(this.state.userInpute)
    }, () => console.log(this.state));
  }
  deleteTodo(item) {
    // no event 
    // pass the item to indexOf
    const array = this.state.items;
    const index = array.indexOf(item);
    array.splice(index, 1);
    this.setState({
      items: array
    });
  }
  edtiTodo()
  {
    // const array = this.state.items;
    // const index = array.indexOf(item);
    // window.document.getElementById().value=(index, 1);
    // this.setState({
    //   items: array
    // });


  }
  finichTodo() {


  }
  renderTodos() {
    return this.state.items.map((item) => {
      return (
        <div className="list-group-item" key={item}>
          <input type="checkbox" checked={this.renderTodos.done} />
          <button className='Edit' onClick={this.edtiTodo.bind(this, item)}>Edit</button>
           <button className='Delet' onClick={this.deleteTodo.bind(this, item)}> Delet</button> 
           {item}  
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <body>
          <div className='list'>
            <form>
              <label itemType='submit'>ecriver votre tâche</label>
              <input className='PN' onChange={this.increment.bind(this)} placeholder='nouvelle tache' value={this.state.userInpute} type={"text"} />
              <button onClick={this.addTodo.bind(this)}>ajouté une tâche</button>
            </form>
            <div className='Ma-liste'>
            <ul className='theList'>
              <li>
                {this.renderTodos()}
                 
            
              </li>
            </ul>
            </div>
          </div>
        </body>
      </div>
    );
  }
}



export default Todolist;