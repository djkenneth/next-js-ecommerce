import { NextApiRequest, NextApiResponse } from "next";
import prisma from '../../prisma/client';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        if (req.method === 'GET') {
            const data = await prisma.post.findMany()
            return res.status(200).json(data)
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json(error)
    }
}