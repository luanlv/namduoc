import React from 'react'
import Link from '../Link'
import FacebookProvider, { Comments } from 'react-facebook';

class Main extends React.Component {
  render() {
    if (this.props.products.length < 1) {
      return (
        <div id="mainContent">
          Loading...
        </div>
      )
    } else {
      const products = this.props.products
      return (
        <div id="colContent">
          <div id="bannerSub">
            <div className="slider-wrapper">
            </div>
          </div>

          <h2 className="title text-uppercase" style={{borderBottom: '1px solid #ddd', fontSize: 28}}>
            UNG THƯ
          </h2>

          <div className="wrap-section pro-site">
            <div className="product-tb pro-tb row">
              {products.map((el, index) => {
                return (
                  <div key={index} className="col-md-3 col-xs-6 	.col-6 element-item">
                    <div className="product-box">
                      <Link to={'/san-pham/' + el.slug} className="product-img">
                        <img src={el.coverUrl.replace("\/image", "\/image\/small")} alt={el.title} /></Link>
                      <div className="product-content">
                        <h3 className="product-name">
                          <Link to={'/san-pham/' + el.slug} >
                            {el.name}</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>


          <h2 className="title text-uppercase" style={{borderBottom: '1px solid #ddd', fontSize: 18}}>
            SẢN PHẨM BÁN CHẠY
          </h2>

          <div className="wrap-section pro-site">
            <div className="product-tb pro-tb row">
              {products.map((el, index) => {
                return (
                  <div key={index} className="col-md-3 col-xs-6 	.col-6 element-item">
                    <div className="product-box">
                      <Link to={'/san-pham/' + el.slug} className="product-img">
                        <img src={el.coverUrl.replace("\/image", "\/image\/small")} alt={el.title} /></Link>
                      <div className="product-content">
                        <h3 className="product-name">
                          <Link to={'/san-pham/' + el.slug} >
                            {el.name}</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>



          <h2 className="title text-uppercase" style={{borderBottom: '1px solid #ddd', fontSize: 18}}>
            SẢN PHẨM KHUYẾN MÃI
          </h2>

          <div className="wrap-section pro-site">
            <div className="product-tb pro-tb row">
              {products.map((el, index) => {
                return (
                  <div key={index} className="col-md-3 col-xs-6 	.col-6 element-item">
                    <div className="product-box">
                      <Link to={'/san-pham/' + el.slug} className="product-img">
                        <img src={el.coverUrl.replace("\/image", "\/image\/small")} alt={el.title} /></Link>
                      <div className="product-content">
                        <h3 className="product-name">
                          <Link to={'/san-pham/' + el.slug} >
                            {el.name}</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <FacebookProvider appID="123093138237586">
            <Comments href={"http://comhoavang.com/san-pham"} data-numposts="5" />
          </FacebookProvider>
        </div>
      )
    }
  }
}

export { Main as default }
