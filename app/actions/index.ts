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

export const createTopic = async (data: FormData) => {
  const title = (data.get("title") ?? "") as string;
  const projectId = parseInt((data.get("projectId") ?? "") as string, 10);

  const result = await prisma.topic.create({
    data: {
      title,
      projectId,
    },
  });

  if (result.title) {
    revalidatePath(`/project/${projectId}`);
  }
};

export const createTask = async (data: FormData) => {
  const title = (data.get("title") ?? "") as string;
  const topicId = parseInt((data.get("topicId") ?? "") as string, 10);
  const projectId = parseInt((data.get("projectId") ?? "") as string, 10);

  const result = await prisma.task.create({
    data: {
      title,
      topicId,
      priority: 0,
      status: 0,
    },
  });

  if (result.title) {
    revalidatePath(`/project/${projectId}`);
  }
};
