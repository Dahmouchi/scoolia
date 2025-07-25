"use server"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { hash } from "bcrypt";


export async function RegisterClient(nom:string,prenom:string,email:string,phone:string,password:string) {
  try {
      const hashedPassword = await hash(password, 10);

    const blog = await prisma.user.create({
      data: {
        name:nom,
        username:email,
        prenom: prenom || null,
        email: email || "",
        password : hashedPassword,
        phone: parseInt(phone),
      },
    })

    revalidatePath("/")
    return { success: true, data: blog }
  } catch (error) {
    console.error("Error creating category:", error)
    return { success: false, error: "Failed to create category" }
  }
}



export async function getClientById(id: string) {
  try {
    const client = await prisma.user.findUnique({
      where: { id },
    })
    return client
  } catch (error) {
    console.error("Error fetching client:", error)
    return null
  }
}