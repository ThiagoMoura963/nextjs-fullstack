import { createClient } from "@supabase/supabase-js";
import { NextApiRequest, NextApiResponse } from "next";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

const dbClient = createClient(SUPABASE_URL, SUPABASE_KEY);

const httpStatus = {
  Success: 200,
  BadRequest: 400,
  InternalServerError: 500,
  NotFound: 404,
}

const controllerByMethod = {
  async GET(req: NextApiRequest, res: NextApiResponse) {
    const { data } = await dbClient
      .from("newsletter_users")
      .select("*");

    res.
      status(httpStatus.Success)
      .json({ message: 'GET Success', data: { data } });
  },
  async POST(req: NextApiRequest, res: NextApiResponse) {
    const email = req.body.email;

    if(!email && !email.includes('@')) {
      res
        .status(httpStatus.BadRequest)
        .json({ message: 'email fornecido é inválido' });

        return;
    }

    await dbClient.from("newsletter_users").insert({ email: email, optin: true });

    await dbClient.auth.admin.createUser({ email: email });

    res
      .status(httpStatus.Success)
      .json({ message: 'POST Success' });
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const controller = controllerByMethod[req.method];

  if(!controller) {
    res
      .status(httpStatus.NotFound)
      .json({ message: 'Método não encontrado' });

    return;
  }

  controller(req, res);
}