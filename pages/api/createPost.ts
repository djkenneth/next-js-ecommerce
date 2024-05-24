import { NextApiRequest, NextApiResponse } from "next";
import prisma from '../../prisma/client';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const post = req.body;
        if (req.method === 'POST') {
            if (!post.title) return res.json({ message: 'title is required' })
            if (!post.content) return res.json({ message: 'content is required' })

            try {
                const data = await prisma.post.create({
                    data: {
                        title: post.title,
                        content: post.content
                    }
                })
                return res.status(200).json(data)
            } catch (error) {
                return res.status(500).json({ message: 'Error creating a new post' })
            }
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json(error)
    }
}