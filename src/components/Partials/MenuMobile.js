import React from 'react'
import Link from '../Link'
class MenuMobile extends React.Component {
  closeMenu(){
    if(process.env.BROWSER) {
      console.log('close')
      $('#close-menu').trigger('click')
    }
  }
  render() {
    let info = ((this.props.data || {}).info || {}).value
    let menu = JSON.parse(info.menu)
    return (
      <div id="menumobile" className="mobile-panel mobile-left" style={{transform: 'translate3d(-120%, 0px, 0px)'}}>
        <div className="close-menu">
          <a id="close-menu" href="#menumobile" className="glyphicon glyphicon-remove-circle" />
        </div>
        <div className="menu-in">
          <div className="menu-mobile">
            <div className="logo">
              <Link to="/"
                onClick={this.closeMenu}
              >
                <img src="/assets/logo_namduoc.png" alt="logo nam duoc quan y" /></Link></div>

            <ul className="menu-nav">
              <li>
                <Link to="/" onClick={this.closeMenu} >Trang chủ</Link>
              </li>
              {menu.map((el, idx) => {
                  return (
                    <li key={idx}><Link to={el.url} onClick={this.closeMenu} >{el.title}</Link>
                      <ul>
                        {el.children && el.children.map( (el2, idx2) => {
                          return (
                            <li key={idx2}>
                              <Link to={el2.url} onClick={this.closeMenu} >
                                {el2.title}
                              </Link></li>
                          )
                        })}
                      </ul>
                    </li>
                  )
                })
              }

            </ul>
            <div className="mo-box">
              <div className="hotline">
                Tổng đài CSKH: <strong>0915 055 951</strong></div>
            </div>
            <div className="mo-box">
              <div className="share">
                Follow me on <a target="_blank" href="https://www.facebook.com/namduocquanyvn/">
                  <img src="/assets/images/fa-1.png" alt /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { MenuMobile as default }
