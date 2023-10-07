module.exports = {
    apps : [{
      name: 'myapp',
      script: 'npm',
      args: 'start -- --port=3170', // Your start command with the port
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }]
  };

//please ingore this file for now
//this is for production with pm2