import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

    

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: [
        {name: 'John C.', surname:'Tener', salary: 5000, increase: true, liked:true,  id: 1  },
        {name: 'Bob K.', surname:'Potter', salary: 3000, increase: false, liked:false, id: 2  },
        {name: 'Kate S.', surname:'Pinter', salary: 19000, increase: false,liked:false, id: 3  }
      ]
    } 
    this.maxId = 4;
  }
  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
       data: data.filter(index => index.id !== id)
      }
    })
  }


  onAdd = (name, salary) => {
    const newItem = {
      name, 
      salary,
      increase: false,
      liked: false,
      id: this.maxId++
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return{
        data: newArr
      }
    });
  }

  onToggleIncrease = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, increase: !item.increase}
        }
        return item;
      })
    }))
  }

  onToggleLiked = (id) => {
    console.log(`this is liked ${id}`)
  }


  render () {
    
    
    return (
      <div className="app">
          <AppInfo />
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList 
          data= {this.state.data}
          onDelete = {this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleLiked={this.onToggleLiked}/>
          <EmployeesAddForm onAdd={this.onAdd}/>
      </div>
    );
  }
  }
  

export default App;

