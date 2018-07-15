import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Header from '../../components/Partials/Header'
import Main from '../../components/Partials/Main'
import Aside from '../../components/Partials/Aside'
import Footer from '../../components/Partials/Footer'
import MenuMobile from '../../components/Partials/MenuMobile'

class Home extends React.Component {

  render() {
    return (
      <div >
        <div id="mainContent">
          <div className="container">
            <div id="banner-top" className="row">
              <div className="left col-md-3">
                <div
                  style={{
                    border: '2px solid #ddd',
                    height: '100%'
                  }}
                >
                  <div className="header"
                    style={{backgroundColor: '#5CB247', textAlign: 'center', color: 'white', textWeight: 'bold'}}
                  >
                    DANH MỤC SẢN PHẨM
                  </div>
                  <ul id="mainMenu" style={{height: 290,
                    padding: 5,
                    listStyle: 'none'
                  }}>
                    <li className="ungthu linkMenuWr"><a href="/">Ung thư</a></li>
                    <li className="bogan linkMenuWr"><a href="/">Sản phẩm bổ gan</a></li>
                    <li className="duonghuyet linkMenuWr"><a
                      href="/">Đường huyết - Huyết áp</a></li>
                    <li className="daday linkMenuWr"><a href="/">Dạ dày</a></li>
                    <li className="giamcan linkMenuWr"><a href="/">Giản cân</a></li>
                    <li className="lamdep linkMenuWr"><a href="/">Làm đẹp</a></li>
                    <li className="xuongkhop linkMenuWr"><a href="/">Xương khớp</a></li>
                    <li className="botonghop linkMenuWr"><a href="/">Bổ tổng hợp</a></li>
                    <li className="nano linkMenuWr"><a href="/">Nano Curcumin</a></li>
                    <li className="toiden linkMenuWr"><a href="/">Tỏi đen</a></li>
                    <li className="sanphamkhac linkMenuWr"><a href="/">Sản phẩm khác</a></li>
                  </ul>
                </div>
              </div>
              <div className="right col-md-9">
                <img src="/assets/banner.jpg" alt="banner 2"/>
              </div>
            </div>
            <Main  data={this.props.data} />
            <Aside data={this.props.data} />
          </div>
        </div>
      </div>
  );
  }
}

export default Home
