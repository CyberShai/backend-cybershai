// Express instance
import express from 'express';
// Routes
import studentNetwork from '../components/student/student.network';
import vacancyNetwork from '../components/vacancy/vacancy.network';
import postulationNetwork from '../components/postulations/postulation.network';

const routes = (server: express.Application) => {
  server.use("/student", studentNetwork);
  server.use("/vacancy", vacancyNetwork);
  server.use("/postulation", postulationNetwork);
}

export default routes;