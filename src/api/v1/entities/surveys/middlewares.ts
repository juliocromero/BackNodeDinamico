import { NextFunction, Request, Response } from 'express';

export const surveyValid = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    body,
    body: { Enc_FechaDesdeVigencia, Enc_FechaHastaVigencia },
  } = req;
  try {
    if (Enc_FechaDesdeVigencia)
      body.Enc_FechaDesdeVigencia = new Date(
        Enc_FechaDesdeVigencia,
      ).toISOString();
    if (Enc_FechaHastaVigencia)
      body.Enc_FechaHastaVigencia = new Date(
        Enc_FechaHastaVigencia,
      ).toISOString();

    // console.log(body);
    next();
  } catch (error) {
    console.log(error);
  }
};
