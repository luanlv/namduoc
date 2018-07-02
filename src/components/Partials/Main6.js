import React from 'react'
import Link from '../Link'
import FacebookProvider, { Comments } from 'react-facebook';
import ReactImageZoom from 'react-image-zoom';
import Carousel from 'nuka-carousel';
class Main extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      image: 0,
      loaded: false
    }

    this.initialState = {
      image: 0,
      loaded: true
    };
    this.setState(this.initialState);
  }

  componentDidMount(){
    if(process.env.BROWSER) {
      // $("#img_01").elevateZoom();
    }
  }

  render() {
    if (!this.props.product && this.state.loaded) {
      return (
        <div id="mainContent">
          Loading...
        </div>
      )
    } else {
      const product = this.props.product
      const products = this.props.products || []
      let imgs = []
      imgs.push(product.coverUrl)
      product.coverUrl2.forEach(el => {
        imgs.push(el)
      })
      return (
        <div id="colContent">
              <div className="wrapper-details">
                <div className="details-content">
                  <h1 className="title">
                    {product.name}
                    </h1>
                </div>
              </div>
              <div className="wrapper-text detail-text">
                <div className="wrap-product">
                  <div className="details-img" style={{paddingRight: 5}}>
                    {imgs.map((img, idx) => {
                      return (
                        <div key={'zoom' + idx} style={{display: this.state.image === idx ? 'block': 'none'}}>
                          <ReactImageZoom {...{width: 345, zoomWidth: 345, offset: {"vertical":0,"horizontal":10}, img: img}}/>
                        </div>
                      )
                    })}

                    <div>
                      {product.coverUrl2.map((img, idx) => {
                        return (
                          <img key={'sub' + idx} src={img} style={{height: 60, width: 'auto !important', maxWidth: 100, margin: '5px 5px 0 0', padding: 3, borderRadius: 3, border: "2px solid " + (this.state.image === idx ? "#005aa8" : "transparent")}}
                                 onClick={() => {
                                   this.setState({image: idx})
                                 }}
                          />
                        )
                      })
                      }
                    </div>

                  </div>

                  <div className="details-content details-content2">
                    <h4 className="title-2" style={{textAlign: 'center'}}>Thông tin sản phẩm</h4>
                    {product.price === product.newPrice && <div className="price-product" style={{textAlign: 'center'}}>
                      <em style={{color: 'red'}}>{numberWithCommas(product.price)} đ/kg</em>
                    </div>}
                    {product.price !== product.newPrice && <div className="price-product" style={{textAlign: 'center'}}>
                      <del><em style={{color: '666'}}>{numberWithCommas(product.price)} đ/kg</em></del>
                      <br/>
                      <em style={{color: 'red'}}>{numberWithCommas(product.newPrice)} đ/kg</em>
                      <br/>
                      <p style={{fontSize: 16}}>(Giảm {(100 - Math.round((product.newPrice/product.price)*100))}%)</p>
                    </div>}
                    {/*<div className="product-status" style={{textAlign: 'center', borderTop: '1px solid #ddd'}}>*/}
                      {/*Mua trên 3kg giảm <b style={{color: 'blue'}}>10%</b>*/}
                    {/*</div>*/}
                    <div className="product-ship" style={{textAlign: 'center', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd'}}>
                      <div className="centerText" style={{display: 'inline-block', paddingRight: 5}}>
                        Vận chuyển
                      </div>
                      <div style={{display: 'inline-block', borderLeft: '1px solid #ddd', paddingLeft: 5}}>
                        <div>{'<20km : 25k/đơn'}</div>
                        <div>{'>20km : 25k/kg' }</div>
                      </div>
                    </div>
                    <div className="wrap-button" style={{textAlign: 'center'}}>

                      <div className="col-w230 w258" style={{width: 250, float: 'none', textAlign: 'center'}}>
                        <div className="box-in" style={{margin: '0 auto'}}>
                          <Link to={"/lien-he-dat-hang?sp=" + product.slug} className="button-btn btn-b corner text-center blink_me2">Đặt hàng ngay!</Link>
                        </div>
                      </div>

                      <div className="col-w230 w298" style={{width: 250, float: 'none'}}>
                        <div className="box-in">
                          <a href="tel:0973318868" className="button-btn phone corner blink_me" style={{fontSize: 18, fontWeight: 'bold'}}>
                            Tư vấn: <b>097 331 8868</b></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrapper-text" style={{marginTop: 20}}>
                  <div className="post-body" dangerouslySetInnerHTML={{__html: product.body}} />
                </div>
              </div>

          <div className="headno headpo">
            <h2 className="title">
              Khách hàng</h2>
          </div>

          <div className="wrap-section prom">
            <div className="product-tb pro-tb row">
              <Carousel autoplay={true} slidesToShow={2} style={{margin: 20}}
                        renderTopCenterControls={({ currentSlide }) => (
                          <span></span>
                        )}
                        renderCenterLeftControls={({ previousSlide }) => (
                          <span></span>
                        )}
                        renderCenterRightControls={({ nextSlide }) => (
                          <span></span>
                        )}
              >
                {product.coverUrl3.map((img, idx) => {
                  return (
                    <img src={img} key={idx} />
                  )
                })}
              </Carousel>
            </div>
          </div>


              <div className="headno headpo">
                <h2 className="title">
                  Sản phẩm liên quan</h2>
              </div>

          <div className="wrap-section prom">
            <div className="product-tb pro-tb row">
              {products.map((el, index) => {
                return (
                  <div key={index} className="col-xs-4 element-item">
                    <div className="product-box">
                      <Link to={'/san-pham/' + el.slug} className="product-img"
                        // onClick={() => {
                        //   this.forceUpdate()
                        // }}
                      >
                        <img src={el.coverUrl.replace("\/image", "\/image\/small")} alt={el.name} /></Link>
                      <div className="product-content">
                        <h3 className="product-name">
                          <Link to={'/san-pham/' + el.slug}>
                            {el.name}</Link></h3>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>


          <FacebookProvider appID="123093138237586">
            <Comments href={"http://comhoavang.com/san-pham/" + product.slug} data-numposts="5" />
          </FacebookProvider>
      </div>
      )
    }
  }
}

export { Main as default }


function numberWithCommas(x = 0) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
