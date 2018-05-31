module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'comhoavang',
      script    : 'tools/run.js',
      args: ["serve"],
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      },
      exec_interpreter: "./node_modules/.bin/babel-node",
      instances  : 4,
    }
  ],
};
