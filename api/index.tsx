import type { NextApiRequest, NextApiResponse };

type Response = {
  email: string;
  passwaord: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Response>) => {};
