module.exports = {
  apps: [{
    name: 'rmady',
    script: '/var/www/html/rmady/index.js',
    cwd: '/var/www/html/rmady',
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production',
      PORT: 3002
    },
    error_file: '/var/www/html/rmady/logs/err.log',
    out_file: '/var/www/html/rmady/logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    watch: false,
    max_memory_restart: '256M',
    autorestart: true,
    max_restarts: 10,
    min_uptime: '10s'
  }]
}
