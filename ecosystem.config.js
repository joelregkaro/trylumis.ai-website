const port = process.env.PORT || 3002;
const hostname = process.env.HOSTNAME || "127.0.0.1";

module.exports = {
  apps: [
    {
      name: "lumis-web",
      cwd: __dirname,
      script: "npm",
      args: `start -- --hostname ${hostname} --port ${port}`,
      exec_mode: "fork",
      instances: 1,
      autorestart: true,
      watch: false,
      min_uptime: "10s",
      max_restarts: 10,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: port,
        HOSTNAME: hostname,
      },
    },
  ],
};
