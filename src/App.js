import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
// 所有页面的公共底层页面
export default class App extends React.Component {
  constructor(props, content) {
    super(props, content);
    this.state = {};
  }
  render() {
    const style = {
      marginLeft: '30px',
    };
    return (
      <div>
        <h1>root</h1>
        <div>
          <Link style={style} to="/">
            home
          </Link>
          <Link style={style} to="/Inbox">
            Inbox
          </Link>
          <Link style={style} to="/About">
            About
          </Link>
        </div>
        {renderRoutes(this.props.route.routes)}
      </div>
    );
  }
}
