import React, {Component} from 'react';
import { connect } from 'react-redux';

class AllUsers extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_ALL_USERS',
        });
    }

  render() {
    return (
      <div>
        <ul>
          {this.props.allUsersReducer.map(users => (
            <li>
              {users.username}
            </li>
                ))}
            </ul>
          
      </div>
    );
  }
}

const mapStateToProps = state => ({
    allUsersReducer: state.allUsersReducer,
});

export default connect(mapStateToProps)(AllUsers);
