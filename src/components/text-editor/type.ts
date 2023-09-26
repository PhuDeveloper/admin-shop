import { Dispatch, SetStateAction } from 'react';

export interface TextEditorComponentProps {
  valueEditor: string;
  setValueEditor: Dispatch<SetStateAction<string>>;
}
