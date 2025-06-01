import { CourseList } from "./Course.type"
import { ExerciseType } from "./Exercise.type"

type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

export type AcceptablePrimitiveTypes = string | number | boolean | symbol | Date

export type AcceptableDataTypes =
  | AcceptablePrimitiveTypes
  | { [key: string]: AcceptablePrimitiveTypes | AcceptableDataTypes }
  | Array<AcceptablePrimitiveTypes | AcceptableDataTypes>

export enum UserProgressActionType {
  MODULE_START = "MODULE_START",
  MODULE_COMPLETE = "MODULE_COMPLETE",
  CHAPTER_START = "CHAPTER_START",
  CHAPTER_COMPLETE = "CHAPTER_COMPLETE",
  EXERCISE_START = "EXERCISE_START",
  EXERCISE_COMPLETE = "EXERCISE_COMPLETE",
  COURSE_COMPLETE = "COURSE_COMPLETE",
  COURSE_RESET = "COURSE_RESET",
}

export type ConsolidatedProgressStats = {
  totalExercises: number
  maxScore: number
  currentScore: number
  exercisesCompleted: number
  exerciseIds: string[]
}

export type UserProgressStatsType = {
  userId: number
  courseId: CourseList
  course: ConsolidatedProgressStats
  modules: {
    [moduleId: string]: ConsolidatedProgressStats
  }
  chapters: {
    [chapterId: string]: ConsolidatedProgressStats
  }
  createdAt: Date
  updatedAt: Date
}

export type UserProgressType = {
  actions: UserProgressAction[]
  stats: UserProgressStatsType
}

export type ExerciseCompleteAction = {
  id: string
  type: UserProgressActionType.EXERCISE_COMPLETE
  courseId: CourseList
  userId: number
  data: {
    exercise: ExerciseType
    score?: number
    userAnswer?: string
  }
  custom?: {
    [key: string]: AcceptableDataTypes
  }
  timestamp: Date
  sessionId: string
}

export type NonExerciseCompleteAction = {
  id: string
  type: Exclude<UserProgressActionType, "EXERCISE_COMPLETE">
  courseId: CourseList
  userId: number
  data?: Record<string, AcceptableDataTypes>
  custom?: {
    [key: string]: AcceptableDataTypes
  }
  timestamp: Date
  sessionId: string
}

export type UserProgressAction =
  | ExerciseCompleteAction
  | NonExerciseCompleteAction

export type UserProgressActionServerEntity = {
  dbId: number
  userId: number
  courseId: CourseList
  details: {
    id: string
    type: UserProgressActionType
    data?: AcceptableDataTypes
    timestamp: Date
    custom?: Record<string, AcceptableDataTypes>
    sessionId: string
  }[]
  lastUsedSessionId: string
  created_at: Date
  updated_at: Date
}
