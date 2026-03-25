import { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description: "Covers the fundamentals of programming, algorithms, and computing concepts.",
    createdAt: "2026-03-25T09:00:00.000Z",
  },
  {
    id: 2,
    code: "MATH201",
    name: "Linear Algebra",
    department: "Mathematics",
    description: "Introduces vectors, matrices, systems of equations, and linear transformations.",
    createdAt: "2026-03-25T09:05:00.000Z",
  },
  {
    id: 3,
    code: "ENG150",
    name: "Academic Writing",
    department: "English",
    description: "Focuses on clear, structured writing for academic essays and reports.",
    createdAt: "2026-03-25T09:10:00.000Z",
  },
];
