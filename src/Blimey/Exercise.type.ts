import { PressKeyAction, TypingAction } from './actionKeyMap'
import { SystemActionValidator } from './systemActionValidators'
import { AcceptableDataTypes } from './UserProgress.type'

export type STWordType = {
  id: string
  word: string
  complexity_score: number
  module_id: string
}

export type ExerciseType = {
  id: string
  question: string
  description?: string
  data: {
    score: number
    template: ExerciseTemplateTypes
    templateData:
      | MCQSingleExerciseTemplateData
      | MCQMultipleExerciseTemplateData
      | TextAnswerExerciseTemplateData
      | FillInTheBlankExerciseTemplateData
      | STFillInTheBlankExerciseTemplateData
      | FillInTheBlankExerciseTemplateDataMissing
      | STDropdownExerciseTemplateData
      | STMCQSingleExerciseTemplateData
      | STSentenceTypingExerciseTemplateData
      | STSelfEvaluationResultTemplateData
      | DragAndDropExerciseTemplateData
      | SystemActionExerciseTemplateData
    systemPreSteps?: PreparatoryStep[]
    userPreSteps?: Omit<SystemActionExerciseTemplateData, 'correct'>[]
    words?: STWordType[]
    custom?: {
      [key: string]: AcceptableDataTypes
    }
  }
}

export type ExerciseTemplateTypes =
  | 'mcq-single'
  | 'mcq-multiple'
  | 'text-answer'
  | 'fill-in-the-blank'
  | 'st-fill-in-the-blank'
  | 'fill-in-the-blank-missing'
  | 'st-mcq-single'
  | 'st-sentence-typing'
  | 'st-dropdown'
  | 'st-self-evaluation-result'
  | 'drag-and-drop'
  | 'system-action'

export type MCQSingleExerciseTemplateData = {
  type: 'mcq-single'
  options: {
    id: string
    text: string
  }[]
  correct: string
}

export type MCQMultipleExerciseTemplateData = {
  type: 'mcq-multiple'
  options: {
    id: string
    text: string
  }[]
  matchAll?: boolean
  correct: string[]
}

export type TextAnswerExerciseTemplateData = {
  type: 'text-answer'
  correct: string
}

export type FillInTheBlankExerciseTemplateData = {
  wordsToBlank?: string[]
  type: 'fill-in-the-blank'
  correct: string[]
}

export type STFillInTheBlankExerciseTemplateData = {
  wordsToBlank?: string[]
  type: 'st-fill-in-the-blank'
  correct: string[]
}

export type STMCQSingleExerciseTemplateData = {
  type: 'st-mcq-single'
  correct: string[]
  incorrect: string[]
}

export type STSentenceTypingExerciseTemplateData = {
  type: 'st-sentence-typing'
  correct: string
}

export type STDropdownExerciseTemplateData = {
  type: 'st-dropdown'
  items: {
    word: string
    definition: string
  }[]
  correct: string[]
}

export type FillInTheBlankExerciseTemplateDataMissing = {
  wordsToBlank?: string[]
  type: 'fill-in-the-blank-missing'
  correct: string[]
  showVowels: boolean
}
export type STSelfEvaluationResultTemplateData = {
  type: 'st-self-evaluation-result'
  data?: {
    [key: string]: AcceptableDataTypes
  }
  correct: string[]
}

export type DragAndDropExerciseTemplateData = {
  type: 'drag-and-drop'
  columns: {
    id: string
    text: string[]
  }[]
  correct: { [key: string]: string }[]
}

export type SystemActionExerciseTemplateData = {
  type: 'system-action'
  steps: (TypingAction | PressKeyAction)[]
  correct: SystemActionValidator[]
}

export type PreparatoryStep = {
  action: {
    fn: string
    fnArgs: string[]
  }
}
