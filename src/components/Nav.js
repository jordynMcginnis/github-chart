import React, { Component } from 'react';
import Contributions from './Contributions.js';
import Followers from './Followers.js';
import Fan from './Fan.js';
import Events from './Events.js';
import Issues from './Issues.js';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: 'Contributions'
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick (e, selection) {
    this.setState(({render: selection}))
  }
  render() {
    return (
      <div className="Nav">
        <div className='Nav-bar'>
          <div onClick = {(e) => this.handleClick(e, 'Contributions')}>Contributions</div>
          <div onClick = {(e) => this.handleClick(e, 'Followers')}> Popular Followers</div>
          <div onClick = {(e) => this.handleClick(e, 'Events')}> Events</div>
          <div onClick = {(e) => this.handleClick(e, 'Fan')}> Stalker</div>
          <div onClick = {(e) => this.handleClick(e, 'Issues')}> Issues</div>
        </div>
        <div className='results'>
          {this.state.render === 'Contributions' ? <Contributions contributions={this.props.contributions}/> : null}
          {this.state.render === 'Followers' ? <Followers contributions={this.props.followers}/> : null}
          {this.state.render === 'Events' ? <Events events={this.props.events}/> : null}
          {this.state.render === 'Fan' ? <Fan events={this.props.events} person={this.props.person}/> : null}
          {this.state.render === 'Issues' ? <Issues issues={this.props.issues}/> : null}
        </div>
        <div className='tweet'>
          <button> Download </button>
          <button>Tweet </button>
        </div>
      </div>
    );
  }
}

export default Nav;