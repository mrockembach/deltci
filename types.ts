
import { ReactNode } from 'react';

export interface DictionaryEntry {
  term: string;
  definition: ReactNode;
  seeAlso: ReactNode;
  references: ReactNode;
}
