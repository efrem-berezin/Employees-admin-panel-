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
        {name: 'John C.', surname:'Tener', salary: 5000, increase: false, liked:false,  id: 1  },
        {name: 'Bob K.', surname:'Potter', salary: 3000, increase: false, liked:true, id: 2  },
        {name: 'Kate S.', surname:'Pinter', salary: 19000, increase: false,liked:false, id: 3  }
      ],
      term:'',
      filter: 'all'
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


  addItem = (name, salary) => {
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

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id){
          return {...item, [prop]: !item[prop]}
        }
        return item;
      })
    }))
  }
  
  

  onUpdateSearch = (term) => {
    this.setState({term : term})
  }
  

  searchEmp = (items, term) => {
    if(term.length === 0 ){
      return items;
    }
    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }
  
  filterPost = (items, filter) => {
    switch (filter) {
      case 'liked':
        return items.filter(item => item.liked);
      case 'increase':
        return items.filter(item => item.increase);
      default:
        return items
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter: filter})
  }

  render () {
    const {data, term, filter} = this.state;
    const allEmployee = this.state.data.length;
    const increaseEmployee = this.state.data.filter(item => item.increase).length;
    const visiableData = this.filterPost(this.searchEmp(data, term), filter);


    return (
      <div className="app">
          <AppInfo allEmployee={allEmployee} increaseEmployee={increaseEmployee} />
  
          <div className="search-panel">
              <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
              <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
          </div>
          
          <EmployeesList 
          data= {visiableData}
          onDelete = {this.deleteItem}
          onToggleProp={this.onToggleProp}
          />
          <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );
  }
  }
  

export default App;

