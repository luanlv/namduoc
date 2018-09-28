import React from 'react'
import Link from '../Link'
import FacebookProvider, { Page } from 'react-facebook';

class Footer extends React.Component {
  render () {

    let info = (((this.props.data || {}).info) || {}).value
    let menuBottom = JSON.parse(info.menuBottom)
    return (
      <div id="footer">
        <div className="footer-wrapper">
          <div className="container">

            <div className="footer-box mobi480h">
            <FacebookProvider appID="1054383868055783">
                <Page href="https://www.facebook.com/namduocquanyvn" data-numposts="5" />
              </FacebookProvider>
            </div>

            <div className="footer-right">
              <div className="row">
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="botHeading">
                    Menu </div>
                  <ul className="list-footer">
                    {menuBottom.map((el, idx) => {
                      return (
                        <li key={idx}><Link to={el.url}>
                          {el.title}
                          <span className="icona-left icon-chevron-right" /></Link></li>
                      )
                    })}

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

            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="col-md-6">
              © 2017 NAMDUOCQUANY. All rights reserved</div>
          </div>
        </div>
      </div>
    )
  }
}

export {Footer as default}
