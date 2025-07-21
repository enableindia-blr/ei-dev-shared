export type ExistsValidator = {
  type: 'exists'
  validate: ({
    path,
    fileName,
  }: {
    path: string
    fileName: string
  }) => Promise<boolean>
}

export type ExcelValueInCellValidator = {
  type: 'excelValueInCell'
  validate: ({
    path,
    fileName,
    sheetName,
    cell,
    expectedValue,
  }: {
    path: string
    fileName: string
    sheetName: string
    cell: string
    expectedValue: string
  }) => Promise<boolean>
}

export type SystemActionValidatorFunctions =
  | ExistsValidator
  | ExcelValueInCellValidator

export type SystemActionValidator = {
  [K in SystemActionValidatorFunctions['type']]: {
    validatorFn: K
    validationArgs: Parameters<
      Extract<SystemActionValidatorFunctions, { type: K }>['validate']
    >[0]
  }
}[SystemActionValidatorFunctions['type']]
