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
import history from '../../core/history'
class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: {
        name: '',
        phone: '',
        address: ''
      },
      cart: []
    }
    this.order = this.order.bind(this)
  }

  componentDidMount(){
    let that = this;
    if(process.env.BROWSER) {
      console.log('browser')
      let sessionStorage = (window && window.sessionStorage) ? window.sessionStorage : {}
      let cart = JSON.parse(sessionStorage.getItem("cart") || '[]')
      that.setState({cart: cart})
    }
  }

  order() {
    axios.post('/api/order/new', this.state)
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
    let sum = 0;
    this.state.cart.forEach(el => {
      sum += el.number * el.product.newPrice;
    })
    return (
      <div >
        <div id="mainContent">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <table className="dathang">
                <thead>
                <tr>
                  <th>Sản phẩm</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th>Thành tiền</th>
                </tr>
                </thead>
                <tbody style={{fontSize: '18'}}>
                {
                  this.state.cart.map((el, idx) => {
                    return (
                      <tr key={idx}>
                        <td>
                          <div className="" style={{padding: 10}}>
                            <img className="dt-img" src={el.product.coverUrl} alt=""
                              style={{height: 80, width: 'auto'}}
                            />
                              <span className="dt-name" style={{paddingLeft: 20}}>{el.product.name}</span>
                          </div>
                          </td>
                        <td>
                          <span className="dt-price" > {el.product.newPrice.toLocaleString()} VNĐ </span>
                        </td>
                        <td>

                          <input type="number"
                            className="dt-numberWr" 
                            defaultValue={el.number}
                            onChange={(event) => {
                              let value = event.target.value
                              let that = this
                              if(value > 0){
                                if(process.env.BROWSER) {
                                    let sessionStorage = (window && window.sessionStorage) ? window.sessionStorage : {}
                                    let cart = JSON.parse(sessionStorage.getItem("cart") || '[]')
                                    let index = idx
                                    if (index >= 0) {
                                      cart[index].number = value
                                      sessionStorage.setItem('cart', JSON.stringify(cart))
                                      $(".cart-counter").text(cart.length)
                                    } else {
                                      cart.push({
                                        slug: that.state.product.slug,
                                        number: value,
                                        product: that.state.product
                                      })
                                      sessionStorage.setItem('cart', JSON.stringify(cart))
                                    }
                                    // $(".cart-counter").text(cart.length)
                                    this.setState({cart: cart})
                                  }
                              }
                            }}
                          />

                        </td>
                        <td style={{color: '#5CB247', fontWeight: 'bold'}}>
                          { (el.product.newPrice * el.number).toLocaleString()} VNĐ
                        </td>
                      </tr>
                    )
                  })
                }

                </tbody>
                {this.state.cart.length > 0 && <tfoot style={{marginTop: 20}}>
                  <tr>
                    <td>
                      <div
                        style={{margin: 10}}
                      >
                        <Link
                          style={{
                            // width: '100%',
                            display: 'inline-block',
                            // borderRadius: '60%',
                            background: '#5CB247',
                            padding: '5px 20px',
                            borderTopRightRadius: '1.5em',
                            borderBottomRightRadius: '1.5em',
                            borderTopLeftRadius: '1.5em',
                            borderBottomLeftRadius: '1.5em',
                            color: 'white',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                          }}
                          href="/"
                          to="/"
                        >Mua thêm</Link>
                      </div>
                    </td>

                    <td />
                    <td style={{textAlign: 'right', paddingRight: 20, fontSize: 22}}>
                      Tổng tiền :
                    </td>

                    <td style={{fontSize: 22, fontWeight: 'bold', color: '#5CB247'}}>
                      {sum.toLocaleString()} VNĐ
                    </td>
                  </tr>
                </tfoot>}
              </table>
              </div>
            </div>

            <div className="row" style={{margin: '10px 0 0 0', fontSize: 20, border: '1px solid #ddd', borderRadius: 10, padding: 20}}>
              <div className="col-md-6" style={{padding: 0}}>
                <div className="form-horizontal">
                  <fieldset>
                    <legend style={{color: '#5CB247', fontWeight: 'bold'}}>Thông tin đặt hàng</legend>
                    {/* Text input*/}
                    <div className="form-group">
                      <label className="col-md-4 control-label" htmlFor="product_id">Họ Và Tên:</label>
                      <div className="col-md-8">
                        <input id="product_id" name="product_id" placeholder="Họ Và Tên" className="form-control input-md" required type="text"
                          defaultValue={this.state.data.name}
                          onChange={(e) => {
                            let value = e.target.value
                            this.setState(prev => {
                              return {
                                ...prev,
                                data: {
                                  ...prev.data,
                                  name: value
                                }
                              }
                            })
                          }}
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label className="col-md-4 control-label" htmlFor="product_name">Số điện thoại:</label>
                      <div className="col-md-8">
                        <input id="product_name" name="product_name" placeholder="Số điện thoại" className="form-control input-md" required type="text"
                               defaultValue={this.state.data.phone}
                               onChange={(e) => {
                                 let value = e.target.value
                                 this.setState(prev => {
                                   return {
                                     ...prev,
                                     data: {
                                       ...prev.data,
                                       phone: value
                                     }
                                   }
                                 })
                               }}
                        />
                      </div>
                    </div>
                    {/* Text input*/}
                    <div className="form-group">
                      <label className="col-md-4 control-label" htmlFor="product_description">Địa chỉ:</label>
                      <div className="col-md-8">
                        <textarea className="form-control" id="product_description" name="product_description"
                            defaultValue={this.state.data.address}
                            onChange={(e) => {
                              let value = e.target.value
                              this.setState(prev => {
                                return {
                                  ...prev,
                                  data: {
                                    ...prev.data,
                                    address: value
                                  }
                                }
                              })
                            }}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="col-md-4 control-label" htmlFor="singlebutton" />
                      <div className="col-md-8">
                        <a
                          style={{
                            display: 'inline-block',
                            background: '#5CB247',
                            padding: '5px 20px',
                            borderTopRightRadius: '1em',
                            borderBottomRightRadius: '1em',
                            borderTopLeftRadius: '1em',
                            borderBottomLeftRadius: '1em',
                            color: 'white',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                          }}
                          onClick={this.order}
                        >Đặt hàng</a>
                      </div>
                    </div>

                  </fieldset>
                </div>
              </div>
              <div className="col-md-6">
                <h3 style={{color: '#5CB247', fontWeight: 'bold', borderBottom: '1px solid #ddd', marginBottom: 5}}>Liên hệ</h3>
                
                <span style={{width: 60}}>Hotline:</span> <b style={{color: 'red'}}>0915.055.951</b>
                <p>Địa chỉ : 27 – Huỳnh Thúc Kháng – Quận Đống Đa – Hà Nội</p>
              </div>
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
            <Link to={'/'} className="btn btn-primary">Trang sản phẩm</Link>
            <button type="button" className="btn btn-default" data-dismiss="modal" style={{background: '#5CB247 !impotant'}}>Đóng cửa sổ</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
