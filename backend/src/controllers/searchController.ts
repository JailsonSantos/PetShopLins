import { Request, Response } from "express";

import { createMenuObject } from "../helpers/createMenuObject";
import { Pet } from '../models/pet';

export const search = (req: Request, res: Response) => {
  // res.render('pages/search');

  let query: string = req.query.q as string;
  let list = Pet.getFromName(query)

  res.json({
    list,
    query,
  });
}