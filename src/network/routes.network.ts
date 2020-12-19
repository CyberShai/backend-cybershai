// Express instance
import express from 'express';
// Routes
import studentNetwork from '../components/student/student.network';
import vacancyNetwork from '../components/vacancy/vacancy.network';
import postulationNetwork from '../components/postulations/postulation.network';
import companyNetwork from '../components/company/company.network';
import postulationsClosedNetwork from '../components/postulation-closed/postulation-closed.network';

const routes = (server: express.Application) => {
  server.use("/student", studentNetwork);
  server.use("/vacancy", vacancyNetwork);
  server.use("/postulation", postulationNetwork);
  server.use("/company", companyNetwork);
  server.use("/postulation-closed", postulationsClosedNetwork);
}


export default routes;