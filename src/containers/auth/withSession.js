import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../services/auth';
import { getToken } from '../../selectors/session';

export const withSession = Component => {
  class WithSession extends PureComponent {
    static propTypes = {
      token: PropTypes.string.isRequired
    }
    componentDidMount() {
      console.log('hi');
      if(!this.props.token) {
        login();
      }
    }
    render() {
      console.log('bye');

      if(!this.props.token) {
        return <h1>NOT LOGGED IN</h1>;
      }
      return <Component {...this.props} />;
    }
  }
  const mapStateToProps = state => ({
    token: getToken(state)
  });

  return connect(
    mapStateToProps
  )(WithSession);
};
