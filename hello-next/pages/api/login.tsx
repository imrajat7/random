import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

const KEY = "bchdsbbkskvrhkubkvmjvnjxncshyybsj";

export default function (req: NextApiRequest, res: NextApiResponse) {
    if (!req.body) {
        res.statusCode = 404;
        res.end("Error");
        return;
    }
    const { username, password } = req.body;
    console.log(username,password);
    res.json({
        token: jwt.sign(
            {
                username,
                admin: username === "admin" && password === "admin",
            },
            KEY
        ),
    });
}
