import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updateUrl} from '../../ducks/reducer';
import {Link} from 'react-router-dom';

class Step2 extends Component {
  render() {
    return (
      <div>
        Image Url: <input value={this.props.url} onChange={(e) => this.props.updateUrl(e.target.value)} />
        <Link to='/wizard/step1'><button>Step 1</button></Link>
        <Link to='/wizard/step3'><button>Step 3</button></Link>
      </div> 
    )
  }
}

const mapStateToProps = (state) => {
  return {
    url: state.url
  }
}

export default connect(mapStateToProps, {updateUrl})(Step2);