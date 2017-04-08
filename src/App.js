import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.updateName = this.updateName.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      guests: [],
      name: "",
      lastName: ""
    }
  }
  updateLastName(event){
    this.setState({
      lastName: event.target.value
    });
  }
  updateName(event){
    this.setState({
      name: event.target.value
    });
  }
  handleSubmit(event){
    event.preventDefault();
    this.setState({
      guests: this.state.guests.concat({id: this.state.guests.length +1, name: this.state.name, lastName: this.state.lastName}),
      name: "",
      lastName: ""
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" className="form-control" name="first-name" value={this.state.name}  onChange={this.updateName} />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" className="form-control" name="last-name" value={this.state.lastName} onChange={this.updateLastName} />
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                {this.state.guests.map((guest,index) => <tr key={index}><td>{guest.name}</td><td>{guest.lastName}</td></tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App


