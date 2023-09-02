import '@testing-library/jest-dom'

// refer to https://github.com/testing-library/jest-dom/issues/439
import { expect } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'

expect.extend(matchers)
