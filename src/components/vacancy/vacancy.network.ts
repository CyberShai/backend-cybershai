import { Request, Response, NextFunction, Router } from 'express';
import response from '../../network/response.network';
import controller from './vacancy.controller';
import { IVacancy } from './vacancy.interface';

const router = Router();

router.get("/list", list());
router.get("/:id", get());
router.post("/", create());
router.patch("/:id", patch());
router.delete('/:id', remove());

function get() {
  return (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    controller
      .get(id)
      .then(({ data, code, status }) => {
        response.create(res, data, code, status);
      })
      .catch(next);
  };
}

function list() {
  return (req: Request, res: Response, next: NextFunction) => {
    controller
      .list({})
      .then(({ data, code, status }) => {
        response.create(res, data, code, status);
      })
      .catch(next);
  };
}


function create() {
  return (req: Request, res: Response, next: NextFunction) => {
    const iVacancy: IVacancy = JSON.parse(req.body.vacancy);
    controller
      .create(iVacancy)
      .then(({ data, code, status }) => {
        response.create(res, data, code, status);
      })
      .catch(next);
  };
}

function patch() {
  return (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const iVacancy: IVacancy = JSON.parse(req.body.vacancy);
    controller
      .patch(id, iVacancy)
      .then(({ data, code, status }) => {
        response.create(res, data, code, status);
      })
      .catch(next);
  }
}

function remove() {
  return (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    controller
      .remove(id)
      .then(({ data, code, status }) => {
        response.create(res, data, code, status);
      })
      .catch(next);
  }
}

export default router;
