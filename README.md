# Quiz Application

A full-stack quiz application built with clean design principles where users can take a quiz and view their scores instantly. It features a backend with a structured database and scoring API, and a responsive frontend that offers smooth navigation through questions, real-time answer tracking, and a detailed results page. Bonus features include a timer and answer breakdown. The app is designed to be scalable and maintainable by following SOLID and clean architecture principles. Server side rendered components caches the courses minimizing the database calls and improves the load time.

👉 **Live Demo:** [https://quiz.kushalbhana.dev](https://quiz.kushalbhana.dev)

![Alt text](https://f7txk9tsyx.ufs.sh/f/8gUdVkfGZyYUWJa1s20dGT5gK6bewh7mcPFX2VHu0Z3ECLIz)

## ✨ Features

* ✅ Multiple choice questions with navigation
* ⏱️ Countdown timer
* 📊 Real-time progress tracking
* 📈 Detailed results with answer breakdown
* 🎨 Beautiful, responsive UI with Tailwind CSS
* 🏗️ Clean architecture following SOLID principles

## 🧰 Tech Stack

* **Frontend**: Next.js 14 (App Router), TypeScript
* **Backend**: Next.js API Routes
* **Database**: PostgreSQL with Prisma ORM
* **Styling**: Tailwind CSS
* **Icons**: Lucide React

---

## 🚀 Getting Started

### 1. Prerequisites

* **Node.js 18+**
* **PostgreSQL** 

---

### 2. Clone the Repository

```bash
git clone https://github.com/kushalbhana/verto_quiz_app.git
cd verto_quiz_app
```

---

### 3. Install Dependencies

```bash
npm install
```

---

### 4. Set Up Environment Variables

Create a `.env` file in the root directory with the following content:

```env
DATABASE_URL="postgresql://admin:admin_quiz_app@localhost:5432/verto_quiz_app" // Replace with your URL if not using docker
DATABASE_USER_NAME="admin"
DATABASE_USER_PASSWORD="admin_quiz_app"
DATABASE_NAME="verto_quiz_app"
NODE_ENV="development"
```

---

### 🐳 **(Optional) Run PostgreSQL with Docker Compose**

If want to run postgres using `docker`, simply run:

```bash
docker-compose up -d
```

This will start a local PostgreSQL instance using the credentials defined in your `.env` file.

---

### 5. Run Prisma Migrations

```bash
npx prisma migrate dev
```

---

### 6. Seed the Database

```bash
npx tsx prisma/seed.ts
```

---

### 7. Start the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) 🎉

---

## 🧭 Project Structure

```
quiz-app/
├── prisma/             # Database schema and migrations
├── app/                # Next.js app router pages and API routes
├── components/         # React components
├── context/            # React context for state management
├── lib/                # Business logic, services, and repositories
└── types/              # TypeScript type definitions
└── package.json
```

---

## 🏗️ Architecture

Application folllows **solid design principles** and design patterns to make it maintainable, scalable and minimizes the bugs.

* **Repository Pattern** → Database access layer (`IQuizRepository`, `QuizRepository`)
* **Service Layer** → Business logic (`IQuizService`, `QuizService`)
* **Dependency Injection** → Services depend on abstractions, not implementations
* **Separation of Concerns** → Clear boundaries between layers

---

## 🌐 API Endpoints

* `GET /api/quiz/:id` → Fetch quiz questions (without correct answers)
* `POST /api/quiz/:id/submit` → Submit quiz answers and receive results

---

## 📦 Deployment

1. Build the application:

```bash
npm run build
```

2. Start the production server:

```bash
npm start
```

---

## 📄 License

MIT
