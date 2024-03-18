import "dotenv/config";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
// @ts-ignore
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding the database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);

    await db.insert(schema.courses).values([
      { id: 1, title: "Spanish", imageSrc: "/es.svg" },
      { id: 2, title: "French", imageSrc: "/fr.svg" },
      { id: 3, title: "Croatian", imageSrc: "/hr.svg" },
      { id: 4, title: "Italian", imageSrc: "/it.svg" },
    ]);

    // Add a new unit
    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        title: "Unit 1",
        description: "Learn the basics of Spanish",
        order: 1,
      },
    ]);

    // Create a new lesson

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1,
        title: "Nouns",
        description: "Pick up some nouns in Spanish",
        order: 1,
      },
    ]);

    // Add a new challenge
    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        question: "What is the Spanish word for 'apple'?",
        order: 1,
      },
      {
        id: 2,
        lessonId: 1,
        type: "SELECT",
        question: "What is the Spanish word for 'banana'?",
        order: 2,
      },
    ]);

    // Add a new challenge option
    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1,
        text: "el hombre",
        correct: true,
        imageSrc: "/man.svg",
        audioSrc: "/es_man.svg",
      },
      {
        id: 2,
        challengeId: 1,
        text: "la mujer",
        correct: false,
        imageSrc: "/woman.svg",
        audioSrc: "/es_woman.svg",
      },
      {
        id: 3,
        challengeId: 1,
        text: "la manzana",
        correct: false,
        imageSrc: "/apple.svg",
        audioSrc: "/es_apple.svg",
      },
      {
        id: 4,
        challengeId: 1,
        text: "el robot",
        correct: false,
        imageSrc: "/robot.svg",
        audioSrc: "/es_robot.svg",
      },
    ]);

    console.log("Done seeding the database");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
