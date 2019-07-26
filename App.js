import React from 'react';
import logo from './logo.svg';
import './App.css';



// Liste des taches 
const List = props => (
  <ul className="app-list">
    {
      props.items.map((item, index) => <li key={index}>{item}

        <a href="#" className="delete-btn" onClick={ props.handleDelete.bind(null,item)} > X </a>

        </li>)
    }
  </ul>
);



export default class App extends React.Component {
  
  // Initialisation 
  constructor(props) {
    super(props);
      this.state = {
      term: '',
      items: []
    };
   
  }
  

// Insertion et ajout d'une tache 
  onChange = (event) => {
    this.setState({term: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

 // handleDelete : suppression de la tache 

  handleDelete (taskToDelete){
      var newItems = this.state.items.filter((_item)=>{
      return _item !== taskToDelete
    });
      this.setState({ items : newItems});  
}
// Suppression de toutes les taches (reinitialisation de items[] à null)

  onReset = (event) => {
    event.preventDefault()
    this.setState({
       items : [] 
    });
  }


// Auto focus sur l'input
 componentDidUpdate(prevProps, prevState) {
    this._input.focus();
  }



  render() {


    return (


      
      <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
          <fieldset className="App-field">
           <form onSubmit={this.onSubmit} >
             <div>
               <input 
                  type="text" 
                  name="task" 
                  id="task" 
                  placeholder="Adding a new task" 
                  value={this.state.term} 
                  onChange={this.onChange}
                  required 
                  autoComplete="off"
                  autofocus="true"
                  ref={c => (this._input = c)}  
                />
         
               <button className="add-btn" name="add" id="add" > + </button>
               
               <List  items={this.state.items}   handleDelete={this.handleDelete.bind(this)} />
             
             </div>
           </form>
         

           <form onSubmit={this.onReset}>
             <button className="clear-btn"   > Remove All </button>
           </form>
         
        </fieldset>
      </header>
    </div>

   
      
    );
  }
}



