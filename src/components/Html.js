/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import serialize from 'serialize-javascript';
import { analytics } from '../config';

class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    styles: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      cssText: PropTypes.string.isRequired,
    }).isRequired),
    scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
    // eslint-disable-next-line react/forbid-prop-types
    state: PropTypes.object,
    children: PropTypes.string.isRequired,
  };

  static defaultProps = {
    styles: [],
    scripts: [],
    state: null,
  };

  render() {
    const { title, description, styles, scripts, state, children, v, seo } = this.props;
    return (
      <html className="no-js" lang="vi">
        <head>
          {/*<base href="http://comhoavang.com" />*/}
          {/*<base href="http://localhost:3000" />*/}
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="apple-touch-icon" href="/ico.png" />
          <link rel="icon" type="image/png" href="ico.png" />
          {/*Og tag*/}
          <meta property="og:locale" content="vi_VN" />
          <meta property="og:type" content="website" />
          <meta property='fb:app_id' content='123093138237586' />
          <meta property='fb:admins' content='100004231235930' />
          <meta property='fb:admins' content='100008346038178' />
          {(seo && seo.og_title) ? (<meta property="og:title" content={seo.og_title} />) : (<meta property="og:title" content='Cơ sở chuyên sản xuất và cung cấp đặc sản Hà Nội - Cốm Mễ Trì, Chả Cốm, Cốm Khô . Địa chỉ bán cốm Mễ Trì uy tín, chất lượng, giá cả hợp lý' />) }
          {(seo && seo.url) ? (<meta property="og:url" content={'http://comhoavang.com' + seo.url} />) : (<meta property="og:url" content={'http://comhoavang.com'} />) }
          {(seo && seo.og_image) ? (<meta property="og:image" content={'http://comhoavang.com' + seo.og_image} />) : (<meta property="og:image" content='http://comhoavang.com/image/705cP8xYVH-083610_c1mh.jpg' />)}

          <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css' />
          {/*<link href="https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic&amp;subset=latin,vietnamese" rel="stylesheet" type="text/css" async />*/}
          {/*<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,300,300italic,400italic,700,700italic&amp;subset=latin,vietnamese" rel="stylesheet" type="text/css" async />*/}
          {/*<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic&amp;subset=latin,vietnamese" rel="stylesheet" type="text/css" async />*/}
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
          <link href={"/assets/styles/style.min.css?v=" + v} rel="stylesheet" />
          <link rel="stylesheet" type="text/css"  href={"/css/app.css?v=" +v }/>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/headjs/1.0.3/head.min.js" />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <script dangerouslySetInnerHTML={{ __html: this.props.scriptTop }} />
        </head>

        <body>
        <style dangerouslySetInnerHTML={{__html: ".fb-livechat, .fb-widget{display: none}.ctrlq.fb-button, .ctrlq.fb-close{position: fixed; right: 24px; cursor: pointer}.ctrlq.fb-button{z-index: 999; background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEyOCAxMjgiIGhlaWdodD0iMTI4cHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB3aWR0aD0iMTI4cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxyZWN0IGZpbGw9IiMwMDg0RkYiIGhlaWdodD0iMTI4IiB3aWR0aD0iMTI4Ii8+PC9nPjxwYXRoIGQ9Ik02NCwxNy41MzFjLTI1LjQwNSwwLTQ2LDE5LjI1OS00Niw0My4wMTVjMCwxMy41MTUsNi42NjUsMjUuNTc0LDE3LjA4OSwzMy40NnYxNi40NjIgIGwxNS42OTgtOC43MDdjNC4xODYsMS4xNzEsOC42MjEsMS44LDEzLjIxMywxLjhjMjUuNDA1LDAsNDYtMTkuMjU4LDQ2LTQzLjAxNUMxMTAsMzYuNzksODkuNDA1LDE3LjUzMSw2NCwxNy41MzF6IE02OC44NDUsNzUuMjE0ICBMNTYuOTQ3LDYyLjg1NUwzNC4wMzUsNzUuNTI0bDI1LjEyLTI2LjY1N2wxMS44OTgsMTIuMzU5bDIyLjkxLTEyLjY3TDY4Ljg0NSw3NS4yMTR6IiBmaWxsPSIjRkZGRkZGIiBpZD0iQnViYmxlX1NoYXBlIi8+PC9zdmc+) center no-repeat #0084ff; width: 60px; height: 60px; text-align: center; bottom: 50px; border: 0; outline: 0; border-radius: 60px; -webkit-border-radius: 60px; -moz-border-radius: 60px; -ms-border-radius: 60px; -o-border-radius: 60px; box-shadow: 0 1px 6px rgba(0, 0, 0, .06), 0 2px 32px rgba(0, 0, 0, .16); -webkit-transition: box-shadow .2s ease; background-size: 80%; transition: all .2s ease-in-out}.ctrlq.fb-button:focus, .ctrlq.fb-button:hover{transform: scale(1.1); box-shadow: 0 2px 8px rgba(0, 0, 0, .09), 0 4px 40px rgba(0, 0, 0, .24)}.fb-widget{background: #fff; z-index: 1000; position: fixed; width: 360px; height: 435px; overflow: hidden; opacity: 0; bottom: 0; right: 24px; border-radius: 6px; -o-border-radius: 6px; -webkit-border-radius: 6px; box-shadow: 0 5px 40px rgba(0, 0, 0, .16); -webkit-box-shadow: 0 5px 40px rgba(0, 0, 0, .16); -moz-box-shadow: 0 5px 40px rgba(0, 0, 0, .16); -o-box-shadow: 0 5px 40px rgba(0, 0, 0, .16)}.fb-credit{text-align: center; margin-top: 8px}.fb-credit a{transition: none; color: #bec2c9; font-family: Helvetica, Arial, sans-serif; font-size: 12px; text-decoration: none; border: 0; font-weight: 400}.ctrlq.fb-overlay{z-index: 0; position: fixed; height: 100vh; width: 100vw; -webkit-transition: opacity .4s, visibility .4s; transition: opacity .4s, visibility .4s; top: 0; left: 0; background: rgba(0, 0, 0, .05); display: none}.ctrlq.fb-close{z-index: 4; padding: 0 6px; background: #365899; font-weight: 700; font-size: 11px; color: #fff; margin: 8px; border-radius: 3px}.ctrlq.fb-close::after{content: \"X\"; font-family: sans-serif}.bubble{width: 20px; height: 20px; background: #c00; color: #fff; position: absolute; z-index: 999999999; text-align: center; vertical-align: middle; top: -2px; left: -5px; border-radius: 50%;}.bubble-msg{width: 120px; left: -140px; top: 5px; position: relative; background: rgba(59, 89, 152, .8); color: #fff; padding: 5px 8px; border-radius: 8px; text-align: center; font-size: 13px;}" }} /><div className="fb-livechat"> <div className="ctrlq fb-overlay" /><div className="fb-widget"> <div className="ctrlq fb-close" /><div className="fb-page" data-href="https://www.facebook.com/namduocquany0973318868/" data-tabs="messages" data-width={360} data-height={400} data-small-header="true" data-hide-cover="true" data-show-facepile="false"> </div><div className="fb-credit"> <a href="https://chanhtuoi.com" target="_blank">Powered by Chanhtuoi</a> </div><div id="fb-root" /></div><a href="https://m.me/namduocquany0973318868" title="Gửi tin nhắn cho chúng tôi qua Facebook" className="ctrlq fb-button"> <div className="bubble">1</div><div className="bubble-msg">Bạn cần hỗ trợ?</div></a></div>
        <script src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script dangerouslySetInnerHTML={{__html: `$(document).ready(function(){function detectmob(){if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ){return true;}else{return false;}}var t={delay: 125, overlay: $(".fb-overlay"), widget: $(".fb-widget"), button: $(".fb-button")}; setTimeout(function(){$("div.fb-livechat").fadeIn()}, 8 * t.delay); if(!detectmob()){$(".ctrlq").on("click", function(e){e.preventDefault(), t.overlay.is(":visible") ? (t.overlay.fadeOut(t.delay), t.widget.stop().animate({bottom: 0, opacity: 0}, 2 * t.delay, function(){$(this).hide("slow"), t.button.show()})) : t.button.fadeOut("medium", function(){t.widget.stop().show().animate({bottom: "30px", opacity: 1}, 2 * t.delay), t.overlay.fadeIn(t.delay)})})}});`}} />
          <div
            id="app"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: children }}
          />
          {state && (
            <script
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html:
              `window.APP_STATE=${serialize(state, { isJSON: true })}` }}
            />
          )}

          {/*{scripts.map(script => <script key={script} src={script} />)}*/}
          <script
            dangerouslySetInnerHTML={{ __html:
                `head.load("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js")`
                + `.js("https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" )`
                + `.js("/assets/js/jquery.ui.datepicker-vi-VN.js?v=${v}")`
                + `.js("/assets/js/jquery.easing.1.3.js?v=${v}")`
                + `.js("/assets/js/jquery.mb.browser.min.js?v=${v}")`
                + `.js("/assets/js/jquery.textheight.js?v=${v}")`
                + `.js("/assets/js/hoverIntent.js?v=${v}")`
                + `.js("/assets/js/imagesloaded.pkgd.min.js?v=${v}")`
                + `.js("/assets/js/bootstrap.min.js?v=${v}")`
                + `.js("/assets/js/jquery.uniform.min.js?v=${v}")`
                + `.js("/assets/js/isotope.pkgd.min.js")`
                + `.js("/assets/js/slick.min.js")`
                + `.js("/assets/js/jquery.panel.mobile.js?v=${v}")`
                + `.js("/assets/js/jquery.main.js?v=${v}")`
                + `.js("https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.2.0/js.cookie.min.js?v=${v}")`
                +  `.js("${scripts[0]}?v=${v}")`
                +  `.js("${scripts[1]}?v=${v}")`}}
          >
          </script>

          <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async='async' />

          <script dangerouslySetInnerHTML={{ __html: this.props.scriptBottom }} />


        </body>
      </html>
    );
  }
}

export default Html;
