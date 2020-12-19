// Express instance
import express from 'express';
// Routes
import studentNetwork from '../components/student/student.network';
import vacancyNetwork from '../components/vacancy/vacancy.network';

const routes = (server: express.Application) => {
  server.use("/student", studentNetwork);
  server.use("/vacancy", vacancyNetwork);
}

export default routes;