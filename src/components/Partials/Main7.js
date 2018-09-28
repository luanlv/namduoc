import React from 'react'
import Link from '../Link'
import FacebookProvider, { Comments } from 'react-facebook';

class Main extends React.Component {

  render() {
    // console.log(this.props.slug)
    if (this.props.products.length < 0) {
      return (
        <div id="mainContent">
          ...
        </div>
      )
    } else {
      const products = this.props.products
      const banchay = this.props.data.banchay.value.slice(0, 6)
      const khuyenmai = this.props.data.khuyenmai.value.slice(0, 6)
      return (
        <div id="colContent">
          <div id="bannerSub">
            <div className="slider-wrapper">
            </div>
          </div>

          <h2 className="title text-uppercase" style={{borderBottom: '1px solid #ddd', fontSize: 28}}>
            {mapCategory(this.props.slug)}
          </h2>

          <div className="wrap-section pro-site">
            <div className="product-tb pro-tb row">
              {products.length === 0 &&  <div style={{textAlign: 'center'}}>Hiện chưa có sản phẩm nào</div>}
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
              {banchay.map((el, index) => {
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
              {khuyenmai.map((el, index) => {
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

          <FacebookProvider appID="1054383868055783">
            <Comments href={"https://namduocquany.com/san-pham"} data-numposts="5" />
          </FacebookProvider>
        </div>
      )
    }
  }
}

export { Main as default }


function mapCategory(slug){
  console.log("slug!!")
  console.log(slug)
  switch(slug) {
    case 'ung-thu':
        return "Ung thư"
        break;
    case 'san-pham-bo-gan':
        return "Sản phẩm bổ gan"
        break;
    case 'duong-huyet-huyet-ap':
        return "Đường huyết - Huyết áp"
        break;
    case 'da-day':
        return "Dạ dày"
        break;
    case 'giam-can':
        return "Giảm cân"
        break;
    case 'lam-dep':
        return "Làm đẹp"
        break;
    case 'xuong-khop':
        return "Xương khớp"
        break;
    case 'bo-tong-hop':
      return "Bổ tổng hợp"
      break;
    case 'nano-curcumin':
        return "Nano Curcumin"
        break;
    case 'toi-den':
        return "Tỏi đen"
        break;
    default:
        return "Sản phẩm khác"
}

}