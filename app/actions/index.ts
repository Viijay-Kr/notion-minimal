"use server";

import prisma from "@/prisma";
import { revalidatePath } from "next/cache";

export const createProject = async (data: FormData) => {
  const title = (data.get("title") ?? "") as string;
  if (!title) {
    throw new Error("Title is required");
  }
  const result = await prisma.project.create({
    data: {
      title,
    },
  });
  if (result.title) {
    revalidatePath("/");
  }
};

export const createTopic = (path: string) => async () => {
  // const title = (data.get("title") ?? "") as string;
  // if (!title) {
  //   throw new Error("Title is required");
  // }
  // if (result.title) {
  //   revalidatePath("/");
  // }
};
