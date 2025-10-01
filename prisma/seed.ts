import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.submission.deleteMany();
  await prisma.question.deleteMany();
  await prisma.quiz.deleteMany();

  // Create quiz
  const quiz = await prisma.quiz.create({
    data: {
      title: 'JavaScript Fundamentals',
      description: 'Test your knowledge of core JavaScript concepts',
      duration: 300,
      questions: {
        create: [
          {
            text: 'What is the output of: typeof null',
            options: ['null', 'undefined', 'object', 'number'],
            correctOptionIndex: 2,
            order: 1,
          },
          {
            text: 'Which method adds elements to the end of an array?',
            options: ['push()', 'pop()', 'shift()', 'unshift()'],
            correctOptionIndex: 0,
            order: 2,
          },
          {
            text: 'What does "===" check for in JavaScript?',
            options: ['Value only', 'Type only', 'Both value and type', 'Reference only'],
            correctOptionIndex: 2,
            order: 3,
          },
          {
            text: 'Which is NOT a primitive type in JavaScript?',
            options: ['string', 'boolean', 'array', 'number'],
            correctOptionIndex: 2,
            order: 4,
          },
          {
            text: 'What is a closure in JavaScript?',
            options: [
              'A function that returns another function',
              'A function with access to its outer scope',
              'A method of closing browser windows',
              'A loop termination condition',
            ],
            correctOptionIndex: 1,
            order: 5,
          },
        ],
      },
    },
  });

  console.log('Seed data created:', quiz);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });