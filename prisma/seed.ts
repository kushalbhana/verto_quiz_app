import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.submission.deleteMany();
  await prisma.question.deleteMany();
  await prisma.quiz.deleteMany();

  // Node.js basics test
  const jsQuiz = await prisma.quiz.create({
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
              'A function with preserved access to its lexical scope',
              'A loop inside a function',
              'A way to close the browser window',
            ],
            correctOptionIndex: 1,
            order: 5,
          },
        ],
      },
    },
  });


  // Node.js basics test
  const reactQuiz = await prisma.quiz.create({
    data: {
      title: 'React Basics',
      description: 'Assess your foundational knowledge of React.js',
      duration: 300,
      questions: {
        create: [
          {
            text: 'Which hook is used to manage state in React functional components?',
            options: ['useEffect', 'useState', 'useRef', 'useMemo'],
            correctOptionIndex: 1,
            order: 1,
          },
          {
            text: 'What does JSX stand for?',
            options: [
              'JavaScript XML',
              'Java Syntax Extension',
              'JSON Syntax Extension',
              'Java Standard XML',
            ],
            correctOptionIndex: 0,
            order: 2,
          },
          {
            text: 'Which method is used to render React elements into the DOM?',
            options: ['React.mount()', 'React.render()', 'ReactDOM.render()', 'renderDOM()'],
            correctOptionIndex: 2,
            order: 3,
          },
          {
            text: 'What must be returned from a React component?',
            options: ['An object', 'A function', 'A JSX element', 'A string'],
            correctOptionIndex: 2,
            order: 4,
          },
          {
            text: 'What is the correct way to pass data from parent to child?',
            options: ['Using hooks', 'Using props', 'Using state', 'Using context'],
            correctOptionIndex: 1,
            order: 5,
          },
        ],
      },
    },
  });


  // Node.js basics test
  const nodeQuiz = await prisma.quiz.create({
    data: {
      title: 'Node.js Essentials',
      description: 'Evaluate your understanding of Node.js fundamentals',
      duration: 300,
      questions: {
        create: [
          {
            text: 'Which of the following is a core module in Node.js?',
            options: ['express', 'http', 'lodash', 'axios'],
            correctOptionIndex: 1,
            order: 1,
          },
          {
            text: 'What does npm stand for?',
            options: [
              'Node Programming Manager',
              'Node Package Manager',
              'Network Package Module',
              'New Project Manager',
            ],
            correctOptionIndex: 1,
            order: 2,
          },
          {
            text: 'Which method is used to import modules in CommonJS?',
            options: ['include()', 'import()', 'require()', 'fetch()'],
            correctOptionIndex: 2,
            order: 3,
          },
          {
            text: 'Which object is used to handle asynchronous events in Node.js?',
            options: ['EventEmitter', 'Promise', 'Callback', 'AsyncObject'],
            correctOptionIndex: 0,
            order: 4,
          },
          {
            text: 'What is the default scope of variables in Node.js modules?',
            options: ['Global', 'Local to module', 'Function scope', 'Block scope'],
            correctOptionIndex: 1,
            order: 5,
          },
        ],
      },
    },
  });

  console.log('Seed data created successfully ✅');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
