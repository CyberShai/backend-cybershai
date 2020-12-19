import { Request, Response, NextFunction, Router } from 'express';
import response from '../../network/response.network';
import controller from './vacancy.controller';
import { IVacancy } from './vacancy.interface';

const router = Router();

router.get("/list", list());
router.get("/list-test", listTest());
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

function listTest() {
  return (req: Request, res: Response, next: NextFunction) => {
    // controller
    // .list({})
    // .then(({ data, code, status }) => {
    const data = {
      length: 10,
      vacancies: [
        {
          _id: "5fdd6e039179cd045cfb4715",
          vacancy_category: {
            name: "Remoto",
          },
          company: {
            name: "Platzi",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
            website: "https://platzi.com",
            photo: "https://www.w3schools.com/howto/img_avatar.png",
          },
          name: "Backend developer",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
          ubication: "CDMX, México",
          requirements:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
          responsibilities:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
          min_salary: 1000,
          max_salary: 2000,
          tags: ["Javascript", "Node.js"],
          created: "2020-12-19 01:37:03.222Z",
        },
        {
          _id: "5fdd6e039179cd045cfb4715",
          vacancy_category: {
            name: "Remoto",
          },
          company: {
            name: "Platzi",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
            website: "https://platzi.com",
            photo: "https://www.w3schools.com/howto/img_avatar.png",
          },
          name: "Backend developer",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
          ubication: "CDMX, México",
          requirements:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
          responsibilities:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
          min_salary: 1000,
          max_salary: 2000,
          tags: ["Javascript", "Node.js"],
          created: "2020-12-19 01:37:03.222Z",
        },
        {
          _id: "5fdd6e039179cd045cfb4715",
          vacancy_category: {
            name: "Remoto",
          },
          company: {
            name: "Platzi",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
            website: "https://platzi.com",
            photo: "https://www.w3schools.com/howto/img_avatar.png",
          },
          name: "Backend developer",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
          ubication: "CDMX, México",
          requirements:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
          responsibilities:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
          min_salary: 1000,
          max_salary: 2000,
          tags: ["Javascript", "Node.js"],
          created: "2020-12-19 01:37:03.222Z",
        },
        {
          _id: "5fdd6e039179cd045cfb4715",
          vacancy_category: {
            name: "Remoto",
          },
          company: {
            name: "Platzi",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
            website: "https://platzi.com",
            photo: "https://www.w3schools.com/howto/img_avatar.png",
          },
          name: "Backend developer",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
          ubication: "CDMX, México",
          requirements:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
          responsibilities:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
          min_salary: 1000,
          max_salary: 2000,
          tags: ["Javascript", "Node.js"],
          created: "2020-12-19 01:37:03.222Z",
        },
        {
          _id: "5fdd6e039179cd045cfb4715",
          vacancy_category: {
            name: "Remoto",
          },
          company: {
            name: "Platzi",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
            website: "https://platzi.com",
            photo: "https://www.w3schools.com/howto/img_avatar.png",
          },
          name: "Backend developer",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
          ubication: "CDMX, México",
          requirements:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
          responsibilities:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
          min_salary: 1000,
          max_salary: 2000,
          tags: ["Javascript", "Node.js"],
          created: "2020-12-19 01:37:03.222Z",
        },
        {
          _id: "5fdd6e039179cd045cfb4715",
          vacancy_category: {
            name: "Remoto",
          },
          company: {
            name: "Platzi",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
            website: "https://platzi.com",
            photo: "https://www.w3schools.com/howto/img_avatar.png",
          },
          name: "Backend developer",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
          ubication: "CDMX, México",
          requirements:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
          responsibilities:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
          min_salary: 1000,
          max_salary: 2000,
          tags: ["Javascript", "Node.js"],
          created: "2020-12-19 01:37:03.222Z",
        },
        {
          _id: "5fdd6e039179cd045cfb4715",
          vacancy_category: {
            name: "Remoto",
          },
          company: {
            name: "Platzi",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
            website: "https://platzi.com",
            photo: "https://www.w3schools.com/howto/img_avatar.png",
          },
          name: "Backend developer",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
          ubication: "CDMX, México",
          requirements:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
          responsibilities:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
          min_salary: 1000,
          max_salary: 2000,
          tags: ["Javascript", "Node.js"],
          created: "2020-12-19 01:37:03.222Z",
        },
        {
          _id: "5fdd6e039179cd045cfb4715",
          vacancy_category: {
            name: "Remoto",
          },
          company: {
            name: "Platzi",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
            website: "https://platzi.com",
            photo: "https://www.w3schools.com/howto/img_avatar.png",
          },
          name: "Backend developer",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
          ubication: "CDMX, México",
          requirements:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
          responsibilities:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
          min_salary: 1000,
          max_salary: 2000,
          tags: ["Javascript", "Node.js"],
          created: "2020-12-19 01:37:03.222Z",
        },
        {
          _id: "5fdd6e039179cd045cfb4715",
          vacancy_category: {
            name: "Remoto",
          },
          company: {
            name: "Platzi",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
            website: "https://platzi.com",
            photo: "https://www.w3schools.com/howto/img_avatar.png",
          },
          name: "Backend developer",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
          ubication: "CDMX, México",
          requirements:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
          responsibilities:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
          min_salary: 1000,
          max_salary: 2000,
          tags: ["Javascript", "Node.js"],
          created: "2020-12-19 01:37:03.222Z",
        },
        {
          _id: "5fdd6e039179cd045cfb4715",
          vacancy_category: {
            name: "Remoto",
          },
          company: {
            name: "Platzi",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
            website: "https://platzi.com",
            photo: "https://www.w3schools.com/howto/img_avatar.png",
          },
          name: "Backend developer",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
          ubication: "CDMX, México",
          requirements:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
          responsibilities:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus officia esse sit? Veritatis fuga omnis, commodi nostrum suscipit repellendus amet eveniet sequi, itaque non magni voluptas aperiam tenetur natus.",
          min_salary: 1000,
          max_salary: 2000,
          tags: ["Javascript", "Node.js"],
          created: "2020-12-19 01:37:03.222Z",
        }
      ]
    }

    response.create(res, data, 200, "success");
    // })
    // .catch(next);
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
