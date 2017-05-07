import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      guests: [],
      errors: {
        firstName: false,
        lastName: false
      }
    }
  }
  
  validateForm(firstName, lastName) {
    if (!firstName || !lastName) {
      this.setState({
        errors: {
          firstName: !firstName,
          lastName: !lastName
        }
      })
      return false
    }
    return true
  } 

  addGuest(event) {
    event.preventDefault()
    const firstName = event.target['first-name'].value
    const lastName = event.target['last-name'].value
    if (this.validateForm(firstName, lastName)) {
      const newGuest = {
        firstName: firstName,
        lastName: lastName,
      }
      this.setState({
        guests: [...this.state.guests, newGuest],
        errors: {
          firstName: false,
          lastName: false
        }
      })
      event.target.reset()
    }
  }

  renderGuest(guest, index) {
    return (
      <tr key={index}>
        <td>{guest.firstName}</td>
        <td>{guest.lastName}</td>
      </tr>
    )
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.addGuest.bind(this)}>
              <div className={`form-group ${this.state.errors.firstName ? 'has-error' : null}`}>
                <label htmlFor="first-name">Nombre</label>
                <input type="text" className="form-control" name="first-name"  />
              </div>

              <div className={`form-group ${this.state.errors.lastName ? 'has-error' : null}`}>
                <label htmlFor="last-name">Apellido</label>
                <input type="text" className="form-control" name="last-name" />
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
                {this.state.guests.map(this.renderGuest)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App


