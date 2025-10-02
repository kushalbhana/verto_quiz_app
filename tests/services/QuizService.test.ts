import { QuizService } from '@/lib/services/QuizService';
import { IQuizRepository } from '@/lib/db/repositories/IQuizRepository';
import { QuestionWithAnswer } from '@/types/quiz.types';

// Mock Repository
class MockQuizRepository implements IQuizRepository {
  private mockQuestions: QuestionWithAnswer[] = [
    {
      id: 'q1',
      text: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctOptionIndex: 1,
      order: 1,
    },
    {
      id: 'q2',
      text: 'What is the capital of France?',
      options: ['London', 'Berlin', 'Paris', 'Madrid'],
      correctOptionIndex: 2,
      order: 2,
    },
  ];

  async findQuizById(id: string) {
    return {
      id,
      title: 'Test Quiz',
      duration: 300,
      questions: this.mockQuestions.map(q => ({
        id: q.id,
        text: q.text,
        options: q.options,
        order: q.order,
      })),
    };
  }

  async findQuestionsWithAnswers(quizId: string) {
    return this.mockQuestions;
  }

  async createSubmission(
    quizId: string,
    answers: Record<string, number>,
    score: number,
    totalQuestions: number
  ) {
    // Mock implementation
  }
}

describe('QuizService', () => {
  let service: QuizService;
  let repository: MockQuizRepository;

  beforeEach(() => {
    repository = new MockQuizRepository();
    service = new QuizService(repository);
  });

  describe('submitQuiz', () => {
    it('should calculate correct score for all correct answers', async () => {
      const answers = {
        q1: 1, // Correct
        q2: 2, // Correct
      };

      const result = await service.submitQuiz('test-quiz', answers);

      expect(result.score).toBe(2);
      expect(result.totalQuestions).toBe(2);
      expect(result.percentage).toBe(100);
      expect(result.breakdown).toHaveLength(2);
      expect(result.breakdown[0].isCorrect).toBe(true);
      expect(result.breakdown[1].isCorrect).toBe(true);
    });

    it('should calculate correct score for partial correct answers', async () => {
      const answers = {
        q1: 1, // Correct
        q2: 0, // Incorrect
      };

      const result = await service.submitQuiz('test-quiz', answers);

      expect(result.score).toBe(1);
      expect(result.totalQuestions).toBe(2);
      expect(result.percentage).toBe(50);
      expect(result.breakdown[0].isCorrect).toBe(true);
      expect(result.breakdown[1].isCorrect).toBe(false);
    });

    it('should calculate correct score for all incorrect answers', async () => {
      const answers = {
        q1: 0, // Incorrect
        q2: 0, // Incorrect
      };

      const result = await service.submitQuiz('test-quiz', answers);

      expect(result.score).toBe(0);
      expect(result.totalQuestions).toBe(2);
      expect(result.percentage).toBe(0);
    });

    it('should handle missing answers', async () => {
      const answers = {
        q1: 1, // Correct
        // q2 is not answered
      };

      const result = await service.submitQuiz('test-quiz', answers);

      expect(result.score).toBe(1);
      expect(result.totalQuestions).toBe(2);
      expect(result.percentage).toBe(50);
      expect(result.breakdown[1].userAnswer).toBe(-1);
      expect(result.breakdown[1].isCorrect).toBe(false);
    });

    it('should include correct breakdown information', async () => {
      const answers = {
        q1: 1,
        q2: 2,
      };

      const result = await service.submitQuiz('test-quiz', answers);

      expect(result.breakdown[0]).toMatchObject({
        questionId: 'q1',
        userAnswer: 1,
        correctAnswer: 1,
        isCorrect: true,
      });

      expect(result.breakdown[0].questionText).toBe('What is 2 + 2?');
      expect(result.breakdown[0].options).toEqual(['3', '4', '5', '6']);
    });
  });

  describe('getQuiz', () => {
    it('should return quiz without correct answers', async () => {
      const quiz = await service.getQuiz('test-quiz');

      expect(quiz).toBeDefined();
      expect(quiz?.id).toBe('test-quiz');
      expect(quiz?.title).toBe('Test Quiz');
      expect(quiz?.questions).toHaveLength(2);
      
      // Ensure questions don't have correctOptionIndex
      quiz?.questions.forEach(question => {
        expect(question).not.toHaveProperty('correctOptionIndex');
      });
    });
  });
});