interface AssertErrorParams {
  key: string
  value: unknown
  expectedType: AssertType
  receivedType: AssertType
}

type Validators = {
  [validator in AssertType]: (value: unknown) => boolean
}

type AssertType = keyof AssertMap

interface AssertMap {
  number: number
  string: string
  boolean: boolean
  null: null
  undefined: undefined
  object: object
}

const validators: Validators = {
  number: (value) => typeof value === 'number' && !isNaN(value),
  string: (value) => typeof value === 'string',
  boolean: (value) => typeof value === 'boolean',
  object: (value) => typeof value === 'object' && value !== null,
  null: (value) => value === null,
  undefined: (value) => typeof value === 'undefined',
}

class AssertError extends Error {
  public constructor({
    key,
    value,
    expectedType,
    receivedType,
  }: AssertErrorParams) {
    const stringValue = JSON.stringify(value, null, 2)
    const message = `"${key}: ${stringValue}" - ожидался тип значения ${expectedType}, но пришел ${receivedType}`

    super(message)

    this.name = AssertError.name
  }
}

export function assertType<T extends AssertType>(
  key: string,
  value: unknown,
  expectedType: T,
): asserts value is AssertMap[T] {
  if (validators[expectedType](value)) {
    return
  }

  let receivedType!: AssertType

  for (receivedType in validators) {
    if (receivedType === expectedType) {
      continue
    }

    if (validators[receivedType](value)) {
      break
    }
  }

  throw new AssertError({ key, value, expectedType, receivedType })
}

interface EnsureTypeParams<T> {
  key: string
  value: unknown
  expectedType: T
}

export function ensureType<T extends keyof AssertMap>({
  key,
  value,
  expectedType,
}: EnsureTypeParams<T>): AssertMap[T] {
  assertType(key, value, expectedType)

  return value
}
