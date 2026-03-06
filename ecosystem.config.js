module.exports = {
  apps: [
    {
      name: "lumis-web",
      cwd: __dirname,
      script: "npm",
      args: "start -- --hostname 0.0.0.0 --port 3002",
      exec_mode: "fork",
      instances: 1,
      autorestart: true,
      watch: false,
      min_uptime: "10s",
      max_restarts: 10,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
