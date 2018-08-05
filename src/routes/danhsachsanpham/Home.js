/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Main7 from '../../components/Partials/Main7'
import Aside from '../../components/Partials/Aside'

class Home extends React.Component {

  render() {
    console.log(this.props.slug)
    return (
      <div >
        <div id="mainContent">
          <div className="container">
            <Main7 slug={this.props.slug} products={this.props.products} data={this.props.data} />
            <Aside banchay={true} data={this.props.data.banchay.value.slice(0, 3)} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home
