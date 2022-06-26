import resume from '../resume.json'
import { useMemo } from 'react';

export function useResume() {
  return useMemo(() => resume, []);
}
