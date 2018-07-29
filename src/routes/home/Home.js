import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Header from '../../components/Partials/Header'
import Main from '../../components/Partials/Main'
import Aside from '../../components/Partials/Aside'
import Footer from '../../components/Partials/Footer'
import MenuMobile from '../../components/Partials/MenuMobile'
import Link from '../../components/Link'

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
                    padding: 3,
                    listStyle: 'none'
                  }}>
                    <li className="ungthu linkMenuWr"><Link to="/danh-muc/ung-thu">Ung thư</Link></li>
                    <li className="bogan linkMenuWr"><Link to="/danh-muc/san-pham-bo-gan">Sản phẩm bổ gan</Link></li>
                    <li className="duonghuyet linkMenuWr"><Link to="/danh-muc/duong-huyet-huyet-ap">Đường huyết - Huyết áp</Link></li>
                    <li className="daday linkMenuWr"><Link to="/danh-muc/da-day">Dạ dày</Link></li>
                    <li className="giamcan linkMenuWr"><Link to="/danh-muc/giam-can">Giản cân</Link></li>
                    <li className="lamdep linkMenuWr"><Link to="/danh-muc/lam-dep">Làm đẹp</Link></li>
                    <li className="xuongkhop linkMenuWr"><Link to="/danh-muc/xuong-khop">Xương khớp</Link></li>
                    <li className="botonghop linkMenuWr"><Link to="/danh-muc/bo-tong-hop">Bổ tổng hợp</Link></li>
                    <li className="nano linkMenuWr"><Link to="/danh-muc/nano-curcumin">Nano Curcumin</Link></li>
                    <li className="toiden linkMenuWr"><Link to="/danh-muc/toi-den">Tỏi đen</Link></li>
                    <li className="sanphamkhac linkMenuWr"><Link to="/danh-muc/san-pham-khac">Sản phẩm khác</Link> </li>
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
