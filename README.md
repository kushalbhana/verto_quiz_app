# Quiz Application

A full-stack quiz application built with clean design principles where users can take a quiz and view their scores instantly. It features a backend with a structured database and scoring API, and a responsive frontend that offers smooth navigation through questions, real-time answer tracking, and a detailed results page. Bonus features include a timer and answer breakdown. Scalable and maintainable beacause followed all the desing principles.

![Alt text](https://f7txk9tsyx.ufs.sh/f/8gUdVkfGZyYUWJa1s20dGT5gK6bewh7mcPFX2VHu0Z3ECLIz)

## Features

- ✅ Multiple choice questions with navigation
- ⏱️ Countdown timer
- 📊 Real-time progress tracking
- 📈 Detailed results with answer breakdown
- 🎨 Beautiful, responsive UI with Tailwind CSS
- 🏗️ Clean architecture following SOLID principles
- 🧪 Unit tests for business logic

## Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd quiz-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory:
```
DATABASE_URL="postgresql://user:password@localhost:5432/quiz_db?schema=public"
```

4. Run Prisma migrations:
```bash
npx prisma migrate dev
```

5. Seed the database:
```bash
 npx tsx prisma/seed.tsD     
```

6. Start the development server:
```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
quiz-app/
├── prisma/              # Database schema and migrations
├── src/
│   ├── app/            # Next.js app router pages and API routes
│   ├── components/     # React components
│   ├── context/        # React context for state management
│   ├── lib/            # Business logic, services, and repositories
│   └── types/          # TypeScript type definitions
├── __tests__/          # Unit tests
└── package.json
```

## Architecture

The application follows clean architecture principles:

- **Repository Pattern**: Database access layer (`IQuizRepository`, `QuizRepository`)
- **Service Layer**: Business logic (`IQuizService`, `QuizService`)
- **Dependency Injection**: Services depend on abstractions, not implementations
- **Separation of Concerns**: Clear boundaries between layers

## Running Tests

```bash
npm test
```

## API Endpoints

- `GET /api/quiz/:id` - Fetch quiz questions (without answers)
- `POST /api/quiz/:id/submit` - Submit quiz answers and get results

## Deployment

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## License

MIT