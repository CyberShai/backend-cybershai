// Node packages
import http from 'http';
import path from 'path';

// Express
import express from 'express';

// cors
import cors from "cors";

// Config
import config from '../config';

// Compression
import compression from 'compression';

// database
import db from '../database';

// Routes
import routes from "../network/routes.network";

export default class Server {
  public httpServer = new http.Server;
  private static _instance: Server;

  public app: express.Application;
  public port: number;

  public static get instance() {
    return this._instance || (this._instance = new this());
  }

  private constructor() {
    this.app = express();
    this.port = config.port;
    this.httpServer = new http.Server(this.app);

  }

  public init(cb: any) {
    this.setEncoded();
    this.setCors();
    this.setDatabase();
    this.setRoutes();
    this.setPublicFolder();
    this.setCompression();
    this.httpServer.listen(this.port, cb);
  }

  private setDatabase() {
    db.connect(this.app);
  }

  private setRoutes() {
    routes(this.app);
  }

  private setEncoded() {
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
  }

  private setCors() {
    this.app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
  }

  private setPublicFolder() {
    this.app.use("/public", express.static(path.resolve(__dirname, "../../public")));
  }

  private setCompression() {
    this.app.use(compression);
  }
}

