module.exports = {
  apps: [
    {
      name: "demo",
      script: "./app.js",
      instances: 0,
      exec_mode: "cluster",
      watch: true,
      env: {
        NODE_ENV: "production",
        PORT: "3000",
      },
    },
  ],
};
