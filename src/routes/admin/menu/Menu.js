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
      setting: {}
    }
    this.updateMenu = this.updateMenu.bind(this)
    this.init()
  }

  async init () {
    // const menu = await axios.get('/api/menu/get')
    // window.data = menu.data
    // console.log(window.data)
  }

  async componentDidMount(){
    // console.log(JSON.stringify([]))
    // console.log(JSON.stringify(window.data))
    // console.log(window.data)
    const menu = await axios.get('/api/menu/get')
    console.log(menu.data)
    window.domenu = $('#domenu-0').domenu({
      maxDepth: 1,
      data: menu.data
    }).parseJson()
  }

  updateMenu = () => {
    let menu = window.domenu.toJson()
    axios.post('/api/menu/new', {menu: menu})
      .then(res => {
        console.log(res.data)
      })
  }

  render() {
    return (
        <div>
          <div className="dd" id="domenu-0">
            <button className="dd-new-item">+</button>
            <li className="dd-item-blueprint">
              <button className="collapse" data-action="collapse" type="button" style={{display: 'none'}}>–</button>
              <button className="expand" data-action="expand" type="button" style={{display: 'none'}}>+</button>
              <div className="dd-handle dd3-handle">Drag</div>
              <div className="dd3-content">
                <span className="item-name">[item_name]</span>
                <div className="dd-button-container">
                  <button className="item-add">+</button>
                  <button className="item-remove" data-confirm-class="item-remove-confirm">×</button>
                </div>
                <div className="dd-edit-box" style={{display: 'none'}}>
                  <input type="text" name="title" autoComplete="off" placeholder="Item" data-placeholder="Tựa đề menu!" data-default-value="Tựa đề" />
                  <input type="text" name="url" id="url" autoComplete="off" placeholder="Item" data-placeholder="Link web" data-default-value="/" />
                  <i className="end-edit">save</i>
                </div>
              </div>
            </li>
            <ol className="dd-list" />
          </div>

          <hr/>

          <Button type="primary"
            onClick={this.updateMenu}
          >Cập nhập</Button>
        </div>
    );
  }
}

export default Menu
