import express, { Request, Response, NextFunction, Router } from 'express';
import response from '../../network/response.network';
import controller from './postulation-closed.controller';
import { IPostulationClosed } from './postulation-closed.interface';

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
    const iPostulationClosed: IPostulationClosed = JSON.parse(req.body.postulation_closed);
    controller
      .create(iPostulationClosed)
      .then(({ data, code, status }) => {
        response.create(res, data, code, status);
      })
      .catch(next);
  };
}

function patch() {
  return (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const iPostulationClosed: IPostulationClosed = JSON.parse(req.body.postulation_closed);
    controller
      .patch(id, iPostulationClosed)
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
