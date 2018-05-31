/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import axios from 'axios';
import Link from '../../components/Link'
import Aside from '../../components/Partials/Aside'

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: {
        name: '',
        phone: '',
        address: '',
        product: this.props.selectProduct || 'com-kho-hoa-vang',
        quantity: ''
      }
    }
    this.order = this.order.bind(this)
  }

  order() {
    axios.post('/api/order/new', this.state.data)
      .then(res => {
        $('#myModal').modal({
          show: true
        })
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div >
        <div id="mainContent">
          <div className="container">
            <div className="row">
              <div id="colContent">
                <div className="headno">
                  <h1 className="title text-uppercase">
                    <span id="ctl00_ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1_ContentPlaceHolder1_lblCategory">Câu hỏi thường gặp</span>
                  </h1>
                </div>

                <div>

                  <div className="panel-group">
                    <div className="panel">
                      <a data-toggle="collapse" href="#collapse1">
                        <div className="panel-heading">
                          <h2 className="panel-title">
                            Câu hỏi
                          </h2>
                        </div>
                      </a>
                      <div id="collapse1" className="panel-collapse collapse">
                        <div className="panel-body">Đang cập nhập</div>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
              <Aside />
            </div>
          </div>

          <Modal />
        </div>
      </div>
    );
  }
}

const Modal = () => {
  return (
    <div id="myModal" className="modal fade" role="dialog">
      <div className="modal-dialog">
        {/* Modal content*/}
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">×</button>
            <h4 className="modal-title">Modal Header</h4>
          </div>
          <div className="modal-body">
            <p>
              Đặt hàng thành công, chúng tôi sẽ sớm liên lạc với bạn, nếu có gì thắc mắc xin lên hệ qua số điện thoại tư vấn và hỗ trợ <b style={{color: 'red'}}>0973.318.868</b>
            </p>
          </div>
          <div className="modal-footer">
            <Link to={'/san-pham'} className="btn btn-primary">Trang sản phẩm</Link>
            <button type="button" className="btn btn-default" data-dismiss="modal">Đóng cửa sổ</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
