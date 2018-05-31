import React from 'react'
import Link from '../Link'

class Header extends React.Component {

  render () {
    let info = ((this.props.data || {}).info || {}).value
    let menu = JSON.parse(info.menu)
    return (
      <div id="header">
        <div className="container">
          <div id="logo">
            <Link to="/">
              <img src="/assets/images/main_logo.png" alt="logo"/>
            </Link>
          </div>
          <div className="header-right">

            <div className="button-menu mobile-showhide">
              <a className="panel-left" href="#menumobile"><span className="icon-bar">bar</span>
                <span className="icon-bar">bar</span> <span className="icon-bar">bar</span> </a>
            </div>
            <a href="#searchbox" className="finda mobile-showhide">search</a>



            <ul id="menu" className="desktop-showhide sf-js-enabled" style={{touchAction: 'pan-y'}}>



              <li className="home">
                <Link to="/">Trang chủ</Link></li>
              {menu.map((el, idx) => {
                if(el.children && el.children.length > 0) { return (
                  <li key={idx} className="hasSubMenu">
                    <Link to={el.url} className="sf-with-ul">{el.title}</Link>
                    <ul className="subMenu">
                      {el.children.map( (el2, idx2) => {
                        return (<li key={idx2}><Link to={el2.url} className="sf-with-ul">{el2.title}</Link></li>)
                      }) }
                    </ul>
                  </li>
                ) } else {
                  return (<li
                    key={idx}
                  ><Link to={el.url}>{el.title}</Link></li>)
                }
              })}

              {/*<li><Link to="/san-pham/cha-com">Chả Cốm</Link></li>*/}
              {/*<li><Link to="/mon-ngon">Món ngon</Link></li>*/}
              {/*<li><Link to="/tin-tuc">Tin tức</Link></li>*/}
              {/*<li><Link to="/cau-hoi-thuong-gap">Câu hỏi thuờng gặp</Link></li>*/}
              {/*<li className="last"><Link to="/lien-he-dat-hang">Liên hệ đặt hàng</Link></li>*/}
            </ul>




            <div className="header-bottom">
              <div id="searchbox" className="search-form">
                <input type="submit" name="ctl00$ctl00$ctl00$btnSearch" value="" id="ctl00_ctl00_ctl00_btnSearch"
                       className="search-btn"/>
                <div className="search-input">
                  <input name="ctl00$ctl00$ctl00$txtSearch" type="text" id="ctl00_ctl00_ctl00_txtSearch"
                         className="search-text"/>
                  <input type="hidden" name="ctl00$ctl00$ctl00$txtSearch_TextBoxWatermarkExtender_ClientState"
                         id="ctl00_ctl00_ctl00_txtSearch_TextBoxWatermarkExtender_ClientState"/>
                </div>
              </div>
              <div className="share desktop-showhide">
                Follow me on <a target="_blank" href={info.fanpage}>
                <img src="/assets/images/fa-1.png" alt=""/></a>
              </div>
              <div className="hotline desktop-showhide">
                Tổng đài CSKH: <strong>{info.phone}</strong>
              </div>
              <div className="clr">
              </div>
            </div>
            <div className="clr">
            </div>
          </div>
        </div>
        <div className="header-bgr desktop-showhide">
        </div>
        <div className="header-bgl desktop-showhide">
        </div>
      </div>
    )
  }
}

export {Header as default}
