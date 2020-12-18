import { Request, Response, NextFunction, Router } from "express";
import response from "../../network/response.network";

const router = Router();

router.get("/test", test());

function test() {
  return (req: Request, res: Response, next: NextFunction) => {    
    response.create(res, { message: "test" }, 200, "success");
  };
}

export default router;
