import React from 'react'
import Link from '../Link'

class Footer extends React.Component {
  render () {

    let info = (((this.props.data || {}).info) || {}).value

    return (
      <div id="footer">
        <div className="footer-wrapper">
          <div className="container">

            <div className="footer-box mobi480h">
              <div className="dangky">
                <a href="http://online.gov.vn/CustomWebsiteDisplay.aspx?DocId=27183" target="_blank"><img src="/assets/images/dangky.png" alt="img" /></a></div>
            </div>

            <div className="footer-right">
              <div className="row">
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="botHeading">
                    Menu </div>
                  <ul className="list-footer">
                    <li><Link to={'/'}>
                      Menu 1
                        <span className="icona-left icon-chevron-right" /></Link></li>
                    <li><Link to={'/'}>
                      Menu 2
                        <span className="icona-left icon-chevron-right" /></Link></li>
                    <li><Link to={'/'}>
                      Menu 3
                        <span className="icona-left icon-chevron-right" /></Link></li>
                    <li><Link to={'/'}>
                      Menu 4
                        <span className="icona-left icon-chevron-right" /></Link></li>
                    <li><Link to={'/'}>
                      Menu 5
                      <span className="icona-left icon-chevron-right" /></Link></li>
                  </ul>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="botHeading">
                    THÔNG TIN WEBSITE</div>
                  <ul className="list-footer">
                    <li><Link to={'/lien-he-dat-hang'}>
                        Hình thức thanh toán
                      <span className="icona-left icon-chevron-right" /></Link></li>
                    <li><Link to={'/lien-he-dat-hang'}>
                      Chính sách vận chuyển, giao nhận
                      <span className="icona-left icon-chevron-right" /></Link></li>
                    <li><Link to={'/lien-he-dat-hang'}>
                      Liên hệ đặt hàng
                      <span className="icona-left icon-chevron-right" /></Link></li>
                  </ul>
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12">
                  <div className="botHeading">THÔNG TIN LIÊN HỆ</div>
                  <ul className="address-box list-footer">
                    <li className="add-1"><span>Địa chỉ :{info.diachi}</span></li>
                    <li className="add-2"><span>Điện thoại : {info.phone}</span></li>
                    <li className="add-5"><span>Email: <a href={"mailto:" + info.email}>{info.email}</a></span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-box mobi480s">

              <div className="dangky">
                <a href="http://online.gov.vn/CustomWebsiteDisplay.aspx" target="_blank"><img src="/assets/images/dangky.png" alt="img" /></a></div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="col-md-6">
              © 2017 COMHOAVANG. All rights reserved | <a href="http://vnguy.com/" target="_blank">
                Thiet Ke Web</a> <a href="http://vnguy.com/" target="_blank">VnGuy.Com</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export {Footer as default}
