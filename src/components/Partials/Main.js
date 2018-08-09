import React from 'react'
import Link from '../../components/Link'
class Main extends React.Component {
  render() {
    const first_foodNews = this.props.data.foodNews.value.data[0]
    const foodNews = this.props.data.foodNews.value.data.slice(1, 4)
    const news = this.props.data.news.value.data.slice(0, 3)
    const products = this.props.data.products.value
    const noibat = this.props.data.noibat.value.slice(0, 8)
    const banchay = this.props.data.banchay.value.slice(0, 8)
    const khuyenmai = this.props.data.khuyenmai.value.slice(0, 8)
    return (
      <div id="colContent">

        <h1 className="title text-uppercase" style={{borderBottom: '1px solid #ddd'}}>
          SẢN PHẨM NỔI BẬT
        </h1>

        <div className="wrap-section pro-site">
          <div className="product-tb pro-tb row">
            {noibat.map((el, index) => {
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


        <h1 className="title text-uppercase" style={{borderBottom: '1px solid #ddd'}}>
          SẢN PHẨM BÁN CHẠY
        </h1>

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


        <h1 className="title text-uppercase" style={{borderBottom: '1px solid #ddd'}}>
          SẢN PHẨM KHUYẾN MẠI
        </h1>

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
        {/*<div className="head lineh">*/}
          {/*<h2 className="title-2" style={{lineHeight: 37}}>*/}
            {/*Món ngon*/}
          {/*</h2>*/}
          {/*<div className="head-list">*/}
            {/*<Link to={'/danh-muc/mon-ngon-tu-com'}>*/}
              {/*Món ngon từ cốm</Link>*/}
            {/*<Link to="/danh-muc/cach-lam-mon-ngon-tai-nha" >*/}
              {/*Cách làm món ngon tại nhà</Link>*/}
          {/*</div>*/}
        {/*</div>*/}

        {/*<div className="wrap-section">*/}
          {/*<div className="section-box">*/}
            {/*<Link to={'/bai-viet/' + first_foodNews.slug} className="section-img">*/}
              {/*<img src={first_foodNews.coverUrl.replace("\/image", "\/image\/small")}*/}
                   {/*alt={first_foodNews.title}/>*/}
              {/*<span className="section-name">*/}
                    {/*{first_foodNews.title}*/}
                  {/*</span> </Link>*/}
            {/*<div className="description">*/}
              {/*{first_foodNews.description}*/}
            {/*</div>*/}
          {/*</div>*/}


          {/*<ul className="section-list">*/}
            {/*{foodNews.map((el, index) => {*/}
              {/*return (*/}
                {/*<li key={index}>*/}
                  {/*<Link className="section-img" to={'/bai-viet/' + el.slug}>*/}
                    {/*<img src={el.coverUrl.replace("\/image", "\/image\/small")}*/}
                         {/*alt={el.title} /></Link>*/}
                  {/*<div className="section-content">*/}
                    {/*<h3 className="section-name">*/}
                      {/*<Link to={'/bai-viet/' + el.slug}>*/}
                        {/*{el.title}*/}
                      {/*</Link>*/}
                    {/*</h3>*/}
                    {/*<div className="description">*/}
                      {/*{el.description.slice(0, 50)} ...*/}
                    {/*</div>*/}
                  {/*</div>*/}
                {/*</li>*/}
              {/*)*/}
            {/*})}*/}
          {/*</ul>*/}
          {/*<div className="more-all">*/}
            {/*<Link to="/mon-ngon"><span>Xem tất cả</span></Link>*/}
          {/*</div>*/}
        {/*</div>*/}

        <div className="head lineh">
          <h2 className="title-2" style={{lineHeight: 37}}>
            Tin tức
          </h2>
          <div className="head-list">
            <Link to="/category/su-kien">
              Sự kiện</Link>
            <Link to="/category/tin-tuc-tong-hop">
              Tin tức tổng hợp</Link>
            
          </div>
        </div>


        <div className="wrap-section">
          <div id="isotopelist" className="section-tb row mobile100"
               style={{position: 'relative', height: '305.25px'}}>
            {news.map((el, index) => {
              return (
                <div key={index} className="col-lg-4 col-md-6 col-sm-4 col-xs-6  element-item">
                  <div className="box-news">
                    <Link className="section-img"
                          to={'/bai-viet/' + el.slug}>
                      <img
                        src={el.coverUrl.replace("\/image", "\/image\/small")}
                        alt={el.title}
                      /></Link>
                    <div className="section-content">
                      <h3 className="section-name">
                        <Link to={'/bai-viet/' + el.slug}>
                          {el.title}</Link>
                      </h3>
                      <div className="description">
                        {el.description.slice(0, 50)} ...
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="more-all">
            <Link to="/tin-tuc"><span>Xem tất cả</span></Link>
          </div>
        </div>

      </div>
    )
  }
}

export { Main as default }
