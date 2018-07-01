/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {Icon, Input, Button, DatePicker, Row, Col, Card, Upload, message, Modal} from 'antd';
import fetch from '../../../../core/fetch';
var Waypoint = require('react-waypoint');
import CopyToClipboard from 'react-copy-to-clipboard';

const Dragger = Upload.Dragger;

var list=[]
for(let i = 0; i< 50; i++){
  list.push(i)
}

const props = {
  name: 'image',
  multiple: true,
  showUploadList: false,
  action: '/upload/image',
};

class Coupon extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false,
      url: '#'
    }
  }


  showModal (el) {
    this.setState({
      visible: true
    });
  }

  handleOk (e) {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel (e) {
    console.log(e);
    this.setState({
      visible: false,
    });
  }



  render() {
    return (
      <div>

        <Row className="padding-5 margin-5">
          <Col sm={24}>
            <Input size="large" placeholder="Search by name"
                   onChange={(e) => {
                     let newInput = e.target.value
                     this.setState({url: newInput})
                    }
                   }
            />
            <br/>
            <Button type="primary" onClick={() => this.props.handleSelect(this.state)}>Thêm link</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Coupon
