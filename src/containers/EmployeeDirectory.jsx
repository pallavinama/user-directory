import React, { Component } from "react";
import List from "../components/List";
import axios from "axios";

class Directory extends Component {
    state = {
      employees: [],
      employeesToDisplay: [],
      searchTerm: "",
    }

    componentDidMount() {
        this.getEmployees();
      }

      clearFilter = () => {
        this.setState({
          employeeFilter: this.state.employees,
          search: "",
        });
      };
      
    
    getEmployees = () => {
        axios
          .get("https://randomuser.me/api/?results=20")
        //   .get("http://dummy.restapiexample.com/api/v1/employees")
          .then((response) => {
            this.setState({
              employees: response.data.results,
              employeesToDisplay: response.data.results,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
      
      handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
          [name]: value,
        });
      };
    
      handleSubmit = (event) => {
        event.preventDefault();
        console.log("HandleSubmit");
        console.log(this.state.searchTerm);
        const employees = [...this.state.employees];
        const filteredEmployees = employees.filter((employee) => {
          const regex = new RegExp(this.state.searchTerm, "gi");
          return employee.name.first.match(regex);
        });
        this.setState({
          employeesToDisplay: filteredEmployees,
        });
      };

      render() {
        return (
          <div>
            {/* <h1>Welcome to the employee directory.</h1> */}
            <div className="container">
              <div className="row">
                <div className="col">
                  <form onSubmit={this.handleSubmit}>
                    <div className="row">
                      <div className="col-sm-10">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search Users by first Name"
                            name="searchTerm"
                            value={this.state.searchTerm}
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-sm-2">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </div>

                  </form>
                  {this.state.employees.length !==
                    this.state.employeesToDisplay.length && (
                    <button
                      className="btn btn-secondary"
                      onClick={this.clearFilter}
                    >
                      Clear Filter
                    </button>
                  )}
                </div>
              </div>
            </div>
            <List employees={this.state.employeesToDisplay} />
          </div>
        );
      }
    }
      export default Directory;