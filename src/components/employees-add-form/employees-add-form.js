import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state ={ 
            name: '',
            salary: ''
        }
    }

    onPush = (e) => {
        this.setState({            
            [e.target.name]: [e.target.value]
        })        
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {

        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Add a new employee</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Name"
                        name="name"
                        value={name} 
                        onChange={this.onPush}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Compensation"
                        name="salary"
                        value={salary} 
                        onChange={this.onPush}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Submit</button>
                </form>
            </div>
        )
    }
    }

    

export default EmployeesAddForm;