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
import Parser from 'html-react-parser';

let myAttr = {
  attribution: "setup_tool",
  page_id : "181757592661149",
  logged_in_greeting : "Chúng tôi có thể giúp gì được cho bạn?",
  logged_out_greeting : "Chúng tôi có thể giúp gì được cho bạn?"
}

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

  componentDidMount(){

  }

  render() {
    const { title, description, styles, scripts, state, children, v, seo } = this.props;
    return (
      <html className="no-js" lang="vi">
        <head>
          {/* <base href="http://namduocquany.com" /> */}
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
          <meta property='fb:app_id' content='1054383868055783' />
          <meta property='fb:admins' content='100004231235930' />
          <meta property='fb:admins' content='100008346038178' />
          {(seo && seo.og_title) ? (<meta property="og:title" content={seo.og_title} />) : (<meta property="og:title" content='Cơ sở chuyên sản xuất và cung cấp đặc sản Hà Nội - Cốm Mễ Trì, Chả Cốm, Cốm Khô . Địa chỉ bán cốm Mễ Trì uy tín, chất lượng, giá cả hợp lý' />) }
          {(seo && seo.url) ? (<meta property="og:url" content={'http://namduocquany.com' + seo.url} />) : (<meta property="og:url" content={'http://namduocquany.com'} />) }
          {(seo && seo.og_image) ? (<meta property="og:image" content={'http://namduocquany.com' + seo.og_image} />) : (<meta property="og:image" content='http://namduocquany.com/image/m5bZaSxOJG-banner.jpg' />)}

          {/* <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css' /> */}
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

          <script dangerouslySetInnerHTML={{ __html: this.props.scriptBottom }} />

          <script 
            dangerouslySetInnerHTML={{ __html:
              `WebFontConfig = {
                google: { families: [ 'Roboto+Condensed:400,700:latin', 'Source+Sans+Pro:400,600,400italic,700italic,700:latin' ] }
              };
              (function() {
                var wf = document.createElement('script');
                wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
                  '://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js';
                wf.type = 'text/javascript';
                wf.async = 'true';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(wf, s);
              })();`
            }}
          ></script>
        </body>
      </html>
    );
  }
}

var Facebook = React.createClass({
  componentDidMount: function() {
      this.refs.facebook.getDOMNode().setAttribute('attribution', 'setup_tool');
  },
  render: function() {
      return <div ref="facebook" className="fb-customerchat">
      </div>;
  }
});

export default Html;
// attribution: "setup_tool",
//   page_id : "181757592661149",
//   logged_in_greeting : "Chúng tôi có thể giúp gì được cho bạn?",
//   logged_out_greeting : "Chúng tôi có thể giúp gì được cho bạn?"