import { Request, Response } from "express";
import { Pet } from '../models/pet';

import { createMenuObject } from "../helpers/createMenuObject";

export const home = (req: Request, res: Response) => {

  let list = Pet.getAll();

  res.json({
    menu: createMenuObject('all'),
    banner: {
      category: "Todos os Animais",
      background: "/images/allanimals.jpg",
    },
    list
  });
}

export const dogs = (req: Request, res: Response) => {
  let list = Pet.getFromType('dog');
  res.json({
    menu: createMenuObject('dog'),
    banner: {
      category: "Cachorros",
      background: "/images/banner_dog.jpg",
    },
    list
  });
}

export const cats = (req: Request, res: Response) => {
  // res.render('pages/page');
  let list = Pet.getFromType('cat');
  res.json({
    menu: createMenuObject('cat'),
    banner: {
      category: "Gatos",
      background: "/images/banner_cat.jpg"
    },
    list
  });
}

export const fishes = (req: Request, res: Response) => {
  // res.render('pages/page');
  let list = Pet.getFromType('fish');
  res.json({
    menu: createMenuObject('fish'),
    banner: {
      category: "Peixes",
      background: "/images/banner_fish.jpg"
    },
    list
  });
}

/*  Requisição a api
export const listPhrases = async (req: Request, res: Response) => {
    let list = await Phrase.findAll();
    res.json({ list });
} */