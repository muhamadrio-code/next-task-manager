"use server";

import prisma from "@/lib/database/client";
import { Task } from "@/lib/types";

export async function getTasks() {
  throw new Error("Something went wrong!");
  // return await prisma.task.findMany().catch((e) => console.log(e));
}

export async function getTasksByUserIdActions(userId: string) {
  // const result = await prisma.task.findMany({
  //   where: {
  //     userId,
  //   },
  // });

  return [
    {
      id: "awad1-123",
      title: "test title",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus sint consectetur facilis expedita, dolorum ullam ad explicabo quibusdam eveniet fuga quam praesentium totam commodi repellat libero voluptatibus in deserunt saepe.",
      date: "08/12/1999",
      isCompleted: false,
      isImportant: false,
      createdAt: "",
      updatedAt: "",
      userId: "awda",
    },
    {
      id: "awad1-124",
      title: "test title",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus sint consectetur facilis expedita, dolorum ullam ad explicabo quibusdam eveniet fuga quam praesentium totam commodi repellat libero voluptatibus in deserunt saepe.",
      date: "08/12/1999",
      isCompleted: true,
      isImportant: false,
      createdAt: "",
      updatedAt: "",
      userId: "awda",
    },
    {
      id: "awad1-16",
      title: "test title",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus sint consectetur facilis expedita, dolorum ullam ad explicabo quibusdam eveniet fuga quam praesentium totam commodi repellat libero voluptatibus in deserunt saepe.",
      date: "08/12/1999",
      isCompleted: false,
      isImportant: true,
      createdAt: "",
      updatedAt: "",
      userId: "awda",
    },
    {
      id: "awad1-67",
      title: "test title",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus sint consectetur facilis expedita, dolorum ullam ad explicabo quibusdam eveniet fuga quam praesentium totam commodi repellat libero voluptatibus in deserunt saepe.",
      date: "08/12/1999",
      isCompleted: false,
      isImportant: false,
      createdAt: "",
      updatedAt: "",
      userId: "awda",
    },
    {
      id: "awad1-123",
      title: "test title",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus sint consectetur facilis expedita, dolorum ullam ad explicabo quibusdam eveniet fuga quam praesentium totam commodi repellat libero voluptatibus in deserunt saepe.",
      date: "08/12/1999",
      isCompleted: false,
      isImportant: false,
      createdAt: "",
      updatedAt: "",
      userId: "awda",
    },
    {
      id: "awad1-124",
      title: "test title",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus sint consectetur facilis expedita, dolorum ullam ad explicabo quibusdam eveniet fuga quam praesentium totam commodi repellat libero voluptatibus in deserunt saepe.",
      date: "08/12/1999",
      isCompleted: true,
      isImportant: false,
      createdAt: "",
      updatedAt: "",
      userId: "awda",
    },
    {
      id: "awad1-16",
      title: "test title",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus sint consectetur facilis expedita, dolorum ullam ad explicabo quibusdam eveniet fuga quam praesentium totam commodi repellat libero voluptatibus in deserunt saepe.",
      date: "08/12/1999",
      isCompleted: false,
      isImportant: true,
      createdAt: "",
      updatedAt: "",
      userId: "awda",
    },
    {
      id: "awad1-67",
      title: "test title",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus sint consectetur facilis expedita, dolorum ullam ad explicabo quibusdam eveniet fuga quam praesentium totam commodi repellat libero voluptatibus in deserunt saepe.",
      date: "08/12/1999",
      isCompleted: false,
      isImportant: false,
      createdAt: "",
      updatedAt: "",
      userId: "awda",
    },
    {
      id: "awad1-123",
      title: "test title",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus sint consectetur facilis expedita, dolorum ullam ad explicabo quibusdam eveniet fuga quam praesentium totam commodi repellat libero voluptatibus in deserunt saepe.",
      date: "08/12/1999",
      isCompleted: false,
      isImportant: false,
      createdAt: "",
      updatedAt: "",
      userId: "awda",
    },
    {
      id: "awad1-124",
      title: "test title",
      description: "test description",
      date: "08/12/1999",
      isCompleted: true,
      isImportant: false,
      createdAt: "",
      updatedAt: "",
      userId: "awda",
    },
    {
      id: "awad1-16",
      title: "test title",
      description: "test description",
      date: "08/12/1999",
      isCompleted: false,
      isImportant: true,
      createdAt: "",
      updatedAt: "",
      userId: "awda",
    },
    {
      id: "awad1-67",
      title: "test title",
      description: "test description",
      date: "08/12/1999",
      isCompleted: false,
      isImportant: false,
      createdAt: "",
      updatedAt: "",
      userId: "awda",
    },
  ];
}
