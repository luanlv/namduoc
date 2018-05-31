import React, { PropTypes } from 'react';
import { Button, DatePicker, Switch, Row, Col, message, Collapse, Input} from 'antd';
// import CodeMirror from '../Components/CodeMirror'
import fetch from '../../../core/fetch';
import axios from 'axios'
const Panel = Collapse.Panel;
var CodeMirror = require('react-codemirror')
if(process.env.BROWSER) {
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/css/css');
}

class Menu extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props){
    super(props)
    this.state = {

    }
    this.updateMenu = this.updateMenu.bind(this)
    this.init()
  }

  async init () {

  }

  async componentWillMount() {
    const thongtin = await axios.get('/api/thongtin/get')
    console.log('===phone===')
    console.log(thongtin.data)
    console.log(thongtin.data.phone)
    this.setState({
      fanpage: thongtin.data.fanpage || '',
      phone: thongtin.data.phone || '',
      diachi: thongtin.data.diachi || '',
      thanhtoan: thongtin.data.thanhtoan || '',
      init: true
    })
  }

  async componentDidMount(){

  }

  updateMenu = () => {
    let that = this
    axios.post('/api/thongtin', {
      fanpage: that.state.fanpage,
      phone: that.state.phone,
      diachi: that.state.diachi,
      thanhtoan: that.state.thanhtoan,
    })
      .then(res => {
        console.log(res.data)
      })
  }

  render() {
    if(!this.state.init) {
      return (
        <div>Loading ...</div>
      )
    }
    return (
        <div>
          <Row className="padding-5">
            <b>fanpage: </b>
            <br/>
            <Input size="large"  defaultValue={this.state.fanpage} onChange={(e) => {
              let value = e.target.value
              this.setState({fanpage: value})
            }} />
          </Row>
          <Row className="padding-5">
            <b>Hotline: </b>
            <br/>
            <Input size="large"  defaultValue={this.state.phone} onChange={(e) => {
              let value = e.target.value
              this.setState({phone: value})
            }} />
          </Row>
          <Row className="padding-5">
            <b>Địa chỉ: </b>
            <br/>
            <Input size="large"  defaultValue={this.state.diachi} onChange={(e) => {
              let value = e.target.value
              this.setState({diachi: value})
            }} />
          </Row>
          <Row className="padding-5">
            <b>Thanh Toán: </b>
            <br/>
            <Input size="large"  defaultValue={this.state.thanhtoan} onChange={(e) => {
              let value = e.target.value
              this.setState({thanhtoan: value})
            }} />
          </Row>
          <hr/>
          <Button type="primary"
                  onClick={this.updateMenu}
          >Cập nhập</Button>
        </div>
    );
  }
}

export default Menu
