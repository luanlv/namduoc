/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';

const title = 'Thông tin chung';

export default {

  path: '/thongtin',

  async action({query}) {
    const {App, ThongTin } = await require('../AdminRequire')
    return {
      title,
      chunk: 'admin',
      disableSSR: true,
      component: <App
        name={title}
      >
        <ThongTin title={title} />
      </App>,
    };
  },
};
