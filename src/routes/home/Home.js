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
                    <li>Ung thư</li>
                    <li>Sản phẩm bổ gan</li>
                    <li>Đường huyết - Huyết áp</li>
                    <li>Dạ dày</li>
                    <li>Giản cân</li>
                    <li>Làm đẹp</li>
                    <li>Xương khớp</li>
                    <li>Bổ tổng hợp</li>
                    <li>Nano Curcumin</li>
                    <li>Tỏi đen</li>
                    <li>Sản phẩm khác</li>
                  </ul>
                </div>
              </div>
              <div className="right col-md-9">
                <img src="/assets/banner.jpg" alt="banner 2"/>
              </div>
            </div>
            <Main data={this.props.data} />
            <Aside data={this.props.data} />
          </div>
        </div>
      </div>
  );
  }
}

export default Home
