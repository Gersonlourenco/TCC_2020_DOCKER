import React from 'react';
import UserService from '../../../services/userService';

class CreateComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      name: '',
      email: '',
      submitted: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  save = () => {
    UserService.createUser(this.state).then(response => {
      if (response.status = 200) {
        this.setState({ 'submitted': true })
      } else {
        alert('Erro ' + response.status)
      }
    }).catch(error => {
      alert(error)
    })
  }

  onSubmit = event => {
    event.preventDefault();
    this.save();
  }

  render() {
    return (
      <div>
        <h3>Criar usuário</h3>
        <div hidden={this.state.submitted} style={{ width: '400px' }}>
          <form onSubmit={this.onSubmit}>
            <div class="form-group">
              <label for="name">Nome</label>
              <input type="text" class="form-control" id="name" required 
                  onChange={this.onChange}
                value={this.state.name === null ? '' : this.state.name} 
                  name="name" />
            </div>

            <div class="form-group">
              <label for="name">E-mail</label>
              <input type="email" class="form-control" id="email" required 
                  onChange={this.onChange}
                value={this.state.email === null ? '' : this.state.email} 
                  name="email" />
            </div>

            <button type="submit" class="btn btn-success">Submit</button>
          </form>
        </div>

        {this.state.submitted && (
          <div>
            <h4>Enviado com sucesso!</h4>
          </div>
        )}
      </div>
    );
  }
}

export default CreateComponent;