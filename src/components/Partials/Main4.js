import React from 'react'
import FacebookProvider, { Comments } from 'react-facebook';
import history from '../../core/history'

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

function onClick(event) {
  if (
    event.target.tagName === 'A' &&
    isLeftClickEvent(event) &&
    !isModifiedEvent(event) &&
    event.target.host === window.location.host
  ) {
    event.preventDefault();
    history.push({
      pathname: event.target.pathname,
      search: event.target.search,
    });
  }
}

const Main = ({post}) => {
    return (
      <div id="colContent">
        <div className="headno">
          <div className="title text-uppercase">
            <span id="ctl00_ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1_ContentPlaceHolder1_lblTitleNews">
              {mapSlugToName(post.category)}
            </span></div>
        </div>

        <div className="wrapper-text">
          <h1>{post.title}</h1>
          <div className="post-body" dangerouslySetInnerHTML={{__html: post.body}}
               onClick={onClick}
          />
        </div>

        <FacebookProvider appID="123093138237586">
          <Comments href={"http://comhoavang.com/bai-viet/" + post.slug} data-numposts="5" />
        </FacebookProvider>

      </div>
    )
}

export { Main as default }

function mapSlugToName(slug) {
  switch(slug) {
    case 'mon-ngon-tu-com':
      return 'Món ngon từ cốm';
      break;
    case 'cach-lam-mon-ngon-tai-nha':
      return 'Cách làm món ngon tại nhà';
      break;
    case 'su-kien':
      return 'Sự kiện';
      break;
    case 'tin-tuc-tong-hop':
      return 'Tin tức tổng hợp'
      break;
    default:
      return ''
  }
}
