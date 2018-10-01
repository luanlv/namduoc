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
      const products = (this.props.products || []).slice(0, 6)
      let imgs = []
      imgs.push(product.coverUrl)
      product.coverUrl2.forEach(el => {
        imgs.push(el)
      })
      console.log(imgs)
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
                      {imgs.map((img, idx) => {
                        return (
                          <img key={'sub' + idx} src={img} style={{height: 60, width: 'auto', maxWidth: 80, margin: '5px 5px 0 0', padding: 3, borderRadius: 3, border: "2px solid " + (this.state.image === idx ? "#005aa8" : "transparent")}}
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

                    <div
                      style={{
                        position: 'relative',
                        verticalAlign: 'middle'
                      }}
                    >
                      <div
                        style={{
                          display: 'inline-block',
                          width: 90,
                          textAlign: 'left',
                          // verticalAlign: 'middle'
                        }}
                      >
                        <div
                          style={{
                            position: 'absolute',
                            top: '25%',
                            left: 0
                          }}
                        >
                          Giá:
                        </div>
                      </div>
                      <div
                        style={{
                          display: 'inline-block',
                          width: 'calc(100% - 95px)',
                        }}
                      >
                        {product.price === product.newPrice && <div className="price-product" style={{textAlign: 'left'}}>
                          <em style={{color: 'red'}}>{numberWithCommas(product.price)} VNĐ</em>
                        </div>}
                        {product.price !== product.newPrice && <div className="price-product" style={{textAlign: 'left'}}>
                          <del><em style={{color: '999', fontSize: 16}}>{numberWithCommas(product.price)} VNĐ</em></del>
                          <br/>
                          <em style={{color: 'red', fontWeight: 'bold'}}>{numberWithCommas(product.newPrice)} VNĐ</em>
                          <br/>
                          <p style={{fontSize: 16}}>(Giảm {(100 - Math.round((product.newPrice/product.price)*100))}%)</p>
                        </div>}
                      </div>

                      <div
                        style={{
                          display: 'inline-block',
                          width: 90,
                          height: '100%',
                          textAlign: 'left',
                          verticalAlign: 'middle'
                        }}
                      >Quy cách:</div>
                      <div
                        style={{
                          display: 'inline-block',
                          width: 'calc(100% - 95px)',
                          textAlign: 'left',
                          fontWeight: 'bold'
                        }}
                      >
                        {product.unit}
                      </div>
                    </div>

                    {/*<table>*/}
                      {/*<tr>*/}
                        {/*<td*/}
                          {/*style={{textAlign: 'center', fontWeight: 'bold'}}*/}
                        {/*>*/}
                          {/*Quy cách:*/}
                        {/*</td>*/}

                        {/*<td*/}
                          {/*style={{textAlign: 'center'}}*/}
                        {/*>30 viên/hộp</td>*/}
                      {/*</tr>*/}

                    {/*</table>*/}

                    {/*<div className="product-status" style={{textAlign: 'center', borderTop: '1px solid #ddd'}}>*/}
                      {/*Mua trên 3kg giảm <b style={{color: 'blue'}}>10%</b>*/}
                    {/*</div>*/}
                    {/*<div className="product-ship" style={{textAlign: 'center', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd'}}>*/}
                      {/*<div className="centerText" style={{display: 'inline-block', paddingRight: 5}}>*/}
                        {/*Vận chuyển*/}
                      {/*</div>*/}
                      {/*<div style={{display: 'inline-block', borderLeft: '1px solid #ddd', paddingLeft: 5}}>*/}
                        {/*<div>{'<20km : 25k/đơn'}</div>*/}
                        {/*<div>{'>20km : 25k/kg' }</div>*/}
                      {/*</div>*/}
                    {/*</div>*/}
                    <div className="wrap-button" style={{textAlign: 'center', marginTop: 20}}>

                      {/*<div className="col-w230 w258" style={{width: 250, float: 'none', textAlign: 'center'}}>*/}
                        {/*<div className="box-in" style={{margin: '0 auto'}}>*/}
                          {/*<Link to={"/lien-he-dat-hang?sp=" + product.slug} className="button-btn btn-b corner text-center blink_me2">Đặt hàng ngay!</Link>*/}
                        {/*</div>*/}
                      {/*</div>*/}

                      {/*<div className="col-w230 w298" style={{width: 250, float: 'none'}}>*/}
                        {/*<div className="box-in">*/}
                          {/*<a href="tel:0973318868" className="button-btn phone corner blink_me" style={{fontSize: 18, fontWeight: 'bold'}}>*/}
                            {/*Tư vấn: <b>097 331 8868</b></a>*/}
                        {/*</div>*/}
                      {/*</div>*/}
                      <div
                        style={{margin: 10}}
                      >
                        <div
                          style={{
                            display: 'inline-block',
                            width: 100
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.41 17.36"><defs><style dangerouslySetInnerHTML={{__html: ".cls-1{fill:#5cb247;fill-rule:evenodd;}" }} /></defs><title>Asset 2</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><path className="cls-1" d="M11.87,11.91H6c-.29,0-.39-.12-.39-.41V9.74c0-.15,0-.2-.2-.2q-1.61,0-3.21,0a.78.78,0,0,1-.78-1A.76.76,0,0,1,2.16,8H5.39c.07,0,.18,0,.19-.11s0-.2-.17-.2H3.83a.77.77,0,0,1-.75-.6.79.79,0,0,1,.41-.91.89.89,0,0,1,.36-.07H5.4c.11,0,.18,0,.18-.15s-.07-.15-.18-.15H.83A.75.75,0,0,1,0,5.12a.76.76,0,0,1,.76-.93c1.5,0,3,0,4.51,0a.86.86,0,0,1,.16,0c.09,0,.13,0,.13-.14s0-.18-.12-.18H2.75a.81.81,0,0,1-.58-.17A.8.8,0,0,1,2,2.79a.71.71,0,0,1,.73-.49H5.35c.23,0,.23,0,.23-.23v-1a1,1,0,0,1,.94-1A3.59,3.59,0,0,1,7,0h9.9a2.16,2.16,0,0,1,.51.06,1,1,0,0,1,.75,1V11.51c0,.26-.09.36-.34.4H11.87Zm-6-7.41H.8a.46.46,0,0,0-.46.64c.07.22.23.31.53.31H11a.45.45,0,0,0,.41-.38.46.46,0,0,0-.5-.57ZM8.93,7.34H14a.46.46,0,0,0,.44-.59c-.05-.25-.21-.36-.51-.36H3.8a.45.45,0,0,0-.42.55c.05.28.21.4.53.4ZM7.78,2.61H2.69A.43.43,0,0,0,2.21,3a.46.46,0,0,0,.38.51H12.85a.47.47,0,0,0,.48-.5.46.46,0,0,0-.51-.45C11.14,2.62,9.46,2.61,7.78,2.61ZM7.25,8.27H2.17a.46.46,0,0,0-.43.23.49.49,0,0,0,0,.52.47.47,0,0,0,.45.21H12.39a.48.48,0,0,0-.1-1Z" /><path className="cls-1" d="M13.84,13H19c.24,0,.24,0,.24-.24v-.1c0-3.16,0-6.31,0-9.47,0-.12,0-.24,0-.36a.65.65,0,0,1,.69-.67q1.62,0,3.24,0a2.77,2.77,0,0,1,2.41,1.27l2.09,3.1a2.94,2.94,0,0,1,.5,1.7v4.52c0,.23,0,.24.25.24l.51,0a.4.4,0,0,1,.48.43v.91a.32.32,0,0,1-.31.37,3.23,3.23,0,0,1-.53,0h-2c-.29,0-.32,0-.4-.3a2.78,2.78,0,0,0-2.3-2.15,2.88,2.88,0,0,0-3.33,2.19c-.06.22-.1.26-.33.26H15c-.23,0-.28,0-.33-.24a2.65,2.65,0,0,0-.81-1.42A.1.1,0,0,1,13.84,13Zm9.52-5.76c.69,0,1.37,0,2.06,0a.46.46,0,0,0,.46-.23c.11-.19,0-.34-.1-.48-.5-.72-1-1.44-1.51-2.17a.75.75,0,0,0-.66-.34H21.42a1.33,1.33,0,0,0-.28,0c-.23,0-.34.1-.35.33,0,.81,0,1.62,0,2.43,0,.32.16.42.49.42Z" /><path className="cls-1" d="M23.35,13a2.17,2.17,0,1,1-2.17,2.16A2.15,2.15,0,0,1,23.35,13Zm-1.12,2.16a1.09,1.09,0,0,0,1.1,1.11,1.11,1.11,0,1,0,0-2.22A1.08,1.08,0,0,0,22.23,15.19Z" /><path className="cls-1" d="M14,15.2A2.17,2.17,0,1,1,11.86,13,2.16,2.16,0,0,1,14,15.2Zm-2.16,1.1A1.1,1.1,0,0,0,13,15.18a1.11,1.11,0,1,0-1.11,1.12Z" /><path className="cls-1" d="M9.86,13l-.25.29A2.78,2.78,0,0,0,9,14.62c0,.12-.09.14-.2.14l-1.58,0-1.9,0H5.14c-.4-.07-.44-.15-.43-.49s0-.59,0-.88A.31.31,0,0,1,5,13l.24,0,4.49,0Z" /><path className="cls-1" d="M22.23,15.19a1.08,1.08,0,0,1,1.12-1.11,1.11,1.11,0,1,1,0,2.22A1.09,1.09,0,0,1,22.23,15.19Z" /><path className="cls-1" d="M11.85,16.3a1.09,1.09,0,0,1-1.11-1.12,1.11,1.11,0,0,1,2.22,0A1.1,1.1,0,0,1,11.85,16.3Z" /></g></g></svg>
                        </div>

                        <div
                          className="mienphi-right"
                        >
                          Miễn phí vận chuyển cho hóa đơn trên 500.000 VNĐ
                        </div>
                      </div>

                      <div
                        style={{margin: 10}}
                      >
                        <div
                          style={{
                            width: '40%',
                            display: 'inline-block',
                            // borderRadius: '60%',
                            background: '#5CB247',
                            borderTopRightRadius: '2em',
                            borderBottomRightRadius: '2em',
                            borderTopLeftRadius: '2em',
                            borderBottomLeftRadius: '2em',
                            color: 'white',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                          }}
                             onClick={() => {
                               let that = this
                               if(process.env.BROWSER) {
                                 let sessionStorage = (window && window.sessionStorage) ? window.sessionStorage : {}
                                 let cart = JSON.parse(sessionStorage.getItem("cart") || '[]')
                                 // console.log(product)
                                 let index = cart.findIndex(el => {
                                   return el.slug === product.slug
                                 })
                                 if (index >= 0) {
                                   cart[index].number = parseInt(cart[index].number) + 1
                                   sessionStorage.setItem('cart', JSON.stringify(cart))
                                 } else {
                                   cart.push({
                                     slug: product.slug,
                                     number: 1,
                                     product: product
                                   })
                                   sessionStorage.setItem('cart', JSON.stringify(cart))
                                   // $(".cart-counter").text(cart.length)
                                 }
                                 // console.log(cart)
                                 // $(".cart-counter").text(cart.length)
                                 document.location.href = '/lien-he-dat-hang'
                               }
                             }}
                        >Đặt hàng</div>
                        <div style={{
                          width: '40%',
                          borderTopRightRadius: '2em',
                          borderBottomRightRadius: '2em',
                          borderTopLeftRadius: '2em',
                          borderBottomLeftRadius: '2em',
                          display: 'inline-block',
                          border: '2px solid #5CB247',
                          color: '#5CB247',
                          marginLeft: 5
                        }}>Tư vấn</div>
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

          <FacebookProvider appID="1054383868055783">
            <Comments href={"https://namduocquany.com/san-pham/" + product.slug} data-numposts="5" />
          </FacebookProvider>


              <div className="headno headpo">
                <h2 className="title">
                  Sản phẩm liên quan</h2>
              </div>

          <div className="wrap-section prom">
            <div className="product-tb pro-tb row">
              {products.map((el, index) => {
                return (
                  <div key={index} className="col-xs-4 col-6  element-item">
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


          
      </div>
      )
    }
  }
}

export { Main as default }


function numberWithCommas(x = 0) {
  return (x||0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
