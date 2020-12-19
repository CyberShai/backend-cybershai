// Express instance
import express from 'express';
// Routes
import studentNetwork from '../components/student/student.network';

const routes = (server: express.Application) => {
  server.use("/student", studentNetwork);
}

export default routes;