import React from 'react';
import UserService from '../../../services/userService';
import { Link } from "react-router-dom";

class DetailsComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      name: '',
      email: ''
    };
  }

  componentDidMount() {
    if (this.props.match.params) {
      UserService.getUser(this.props.match.params.id).then(response => {
        if (response.status = 200) {
          const { id, name, email } = response.data
          this.setState({ id, name, email })
        } else {
          alert('Erro ' + response.status)
        }        
      }).catch(error => {
        alert(error)
      })
    }
  }

  render() {
    return (
      <div>
        <h2>Detalhes usuário</h2>

        <hr />
        <div>
          <div>
            <label><b>Nome: </b></label> {this.state.name === null ? '' : this.state.name}
          </div>
          <div>
            <label><b>Email: </b></label> {this.state.email === null ? '' : this.state.email}
          </div>
        </div>

        <br />
        <br />
        <Link to='/users' class="btn btn-primary">Voltar para lista usuários</Link>
        <br />        
      </div>
    );
  }
}

export default DetailsComponent;