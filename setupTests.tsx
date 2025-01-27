import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { beforeEach } from 'vitest';
beforeEach(() => {
  cleanup();
});
