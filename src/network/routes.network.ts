// Express instance
import express from 'express';
// Routes
import testComponent from '../components/test/test-component.network';

const routes = (server: express.Application) => {
  server.use("/test", testComponent);
}

export default routes;