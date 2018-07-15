import React from 'react'
import Link from '../Link'

class Header extends React.Component {

  render () {
    let info = ((this.props.data || {}).info || {}).value
    let menu = JSON.parse(info.menu)
    return (
      <div id="header"
        style={{backgroundColor: '#5CB247'}}
      >
        <div className="headerTop">
          <div className="container" style={{position: 'relative'}}>

          {/*<div className="header-right">*/}
            <div className="button-menu mobile-showhide">
              <a className="panel-left" href="#menumobile"><span className="icon-bar">bar</span>
                <span className="icon-bar">bar</span> <span className="icon-bar">bar</span> </a>
            </div>
            <a href="#searchbox" className="finda mobile-showhide">search</a>


            <div id="logo">
              <Link to="/">
                <img src="/assets/logo_namduoc.png" alt="logo"/>
              </Link>
            </div>

            <ul id="menu2" className="desktop-showhide sf-js-enabled" style={{touchAction: 'pan-y'}}>
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
            </ul>
          </div>
        </div>

        <div className="desktop-showhide sf-js-enabled headerBottom" >
          <div className="container">
            <div id="searchbox" className="search-form">
              {/*<input type="submit" name="ctl00$ctl00$ctl00$btnSearch" value="" id="ctl00_ctl00_ctl00_btnSearch"*/}
              {/*className="search-btn"/>*/}
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
        </div>
        {/*</div>*/}
        {/*<div className="header-bgr desktop-showhide">*/}
        {/*</div>*/}
        {/*<div className="header-bgl desktop-showhide">*/}
        {/*</div>*/}
      </div>
    )
  }
}

export {Header as default}
