import React from 'react';
import UserService from '../../../services/userService';
import { Link } from "react-router-dom";

class ListUserComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      submitted: false,
      users: []
    };
  }


  deleteUser = id => {

    UserService.deleteUser(id).then(response => {
      if (response.status = 200) {
        this.componentDidMount();
      } else {
        alert('Erro ' + response.status)
      }
    }).catch(error => {
      alert(error)
    })
  }

  userDetails = id => {
    alert("userDetails")
  }

  componentDidMount() {
    UserService.getUserList().then(response => {
      if (response.status = 200) {
        this.setState({ 'users': response.data })
      } else {
        alert('Erro ' + response.status)
      }
    }).catch(error => {
      alert(error)
    })
  }

  render() {
    return (
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h2>Lista de usuários</h2>
        </div>
        <div class="panel-body">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user, index) => {
                return (
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <button onClick={() => this.deleteUser(user.id)} class="btn btn-danger">Deletar</button>
                      <Link to={'/details/' + user.id} class="btn btn-info" style={{ marginLeft: '10px' }} >Visualizar</Link>
                      <Link to={'/update/' + user.id} class="btn btn-warning" style={{ marginLeft: '10px' }} >Editar</Link>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListUserComponent;