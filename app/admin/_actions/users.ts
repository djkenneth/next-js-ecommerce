"use server"

import db from "@/prisma/client"
import { notFound } from "next/navigation"

export async function deleteUser(id: string) {
    const user = await db.user.delete({
        where: { id },
    })

    if (user == null) return notFound()

    return user
}