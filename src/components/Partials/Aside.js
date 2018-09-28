import React from 'react'
import Link from '../Link'
import FacebookProvider, { Page } from 'react-facebook';

class Aside extends React.Component {
  render() {
    let info = ((this.props.data || {}).info || {}).value || {}
    // console.log(this.props.data)
    // console.log(info)
    return (
      <div id="colAside">
        {this.props.banchay && <div className="row">
          <h3 className="title"
              style={{
                fontSize: 14
              }}
          >
            SẢN PHẨM BÁN CHẠY</h3>
          {this.props.data.map((el, idx) => {
            return (
              <div className="col-md-12" key={idx}
              >
                <div
                  style={{
                    padding: '5px 15px'
                  }}
                >
                  <Link to={'/san-pham/' + el.slug}>
                    <img
                        style={{width: '100%'}}
                      src={el.coverUrl.replace("\/image", "\/image\/small")} alt={el.name} />
                  </Link>
                  <Link to={'/san-pham/' + el.slug}
                    style={{
                      textAlign: 'center',
                      display: 'block',
                      color: '#5CB247'
                    }}
                  >
                    {el.name}
                  </Link>
                </div>
              </div>
            )
          })}
        </div>}
        <div className="row">
          <div className="col-md-12">
            <div className="adv">
              <Link to={'/'}>
                <img src="/assets/right.jpg" alt="Hotline" /></Link>
            </div>
            <div className="adv">
              <FacebookProvider appID="1054383868055783">
                <Page href="https://www.facebook.com/namduocquanyvn" data-numposts="5" />
              </FacebookProvider>
            </div>
            {/*<div className="adv">*/}
              {/*<Link to={'/'}>*/}
                {/*<img src="/assets/images/mon-ngon-tu-com.jpg" alt="cac mon ngon tu com" /></Link>*/}
            {/*</div>*/}
          </div>
        </div>

        {/*<div className="row">*/}
          {/*<div className="col-md-12 col-xs-6">*/}
          {/*</div>*/}
          {/*<div className="col-md-12 col-xs-6">*/}
            {/*<div className="wrap-video">*/}
              {/*<a href="https://www.youtube.com/watch?v=L74dhO4i-0w" target="_blank" className="videob">*/}
                {/*<img src="/assets/images/video-com.jpg"*/}
                     {/*alt="video-com.jpg"/>*/}
                {/*<span className="ico-play">*/}
                    {/*</span></a>*/}
              {/*<div className="video-content">*/}
                {/*<h3 className="video-name">*/}
                  {/*<Link to="/">*/}
                    {/*Rộn ràng ngày hội văn hóa Cốm Mễ Trì</Link></h3>*/}
              {/*</div>*/}
            {/*</div>*/}
            {/*<ul className="list-video">*/}
              {/*<li><Link to="/bai-viet/thuc-don-3-mon-gian-di-ma-ngon-cho-ngay-luoi-vao-bep" className="video-box"><span className="video-img">*/}
                        {/*<img src="/image/small/niolaFMsg1-1492484092-14924837329720-untitled-1.jpg" id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_lstVideo_ctrl0_lstListVideo_ctrl0_Img3" alt="R8cvtxxu3g-che-com-03.jpg" />*/}
                      {/*</span><span className="video-content"><span className="video-name">*/}
                          {/*Thực đơn 3 món giản dị mà ngon cho ngày lười vào bếp </span> </span></Link>*/}
              {/*</li>*/}
              {/*<li><Link to="/bai-viet/com-me-tri-thom-ngon-duoc-lam-cong-phu-the-nao" className="video-box"><span className="video-img">*/}
                        {/*<img src="/image/small/q8u9mdGl1f-8dd01a94-a7ba-44f0-9469-026371258284.jpg" id="ctl00_ctl00_ctl00_ContentPlaceHolder1_cphAside_lstVideo_ctrl0_lstListVideo_ctrl1_Img3" alt="Cốm Mễ Trì thơm ngon được làm công phu thế nào.jpg" />*/}

                      {/*</span><span className="video-content"><span className="video-name">*/}
                          {/*Cốm Mễ Trì thơm ngon được làm công phu thế nào?</span> </span></Link>*/}
              {/*</li>*/}
            {/*</ul>*/}
          {/*</div>*/}
        {/*</div>*/}
        {/*<FacebookProvider appID="123093138237586">*/}
          {/*<Page href={info.fanpage} data-numposts="5" />*/}
        {/*</FacebookProvider>*/}

      </div>
    )
  }
}

export {Aside as default}
