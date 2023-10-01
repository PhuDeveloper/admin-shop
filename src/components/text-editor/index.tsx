import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { TextEditorComponentProps } from './type';
import { useCallback, useRef } from 'react';
import { uploadFile } from '@/services/upload';

export const TextEditorComponent = (props: TextEditorComponentProps) => {
  const { valueEditor, setValueEditor } = props;
  const reactQuillRef = useRef<ReactQuill>(null);

  const imageHandler = useCallback(() => {
    if (process.browser) {
      const input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');
      input.click();
      input.onchange = async () => {
        if (input !== null && input.files !== null) {
          const file = input.files[0];
          const url = await uploadFile({ file: file });
          const quill = reactQuillRef.current;

          if (quill) {
            const range = quill.getEditorSelection();

            range && quill.getEditor().insertEmbed(range.index, 'image', url.payload?.url);
          }
        }
      };
    }
  }, []);

  return (
    <ReactQuill
      ref={reactQuillRef}
      theme="snow"
      value={valueEditor}
      onChange={setValueEditor}
      formats={[
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'video',
        'code-block',
      ]}
      modules={{
        toolbar: {
          container: [
            [{ header: '1' }, { header: '2' }, { font: [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
            ['link', 'image', 'video'],
            ['code-block'],
            ['clean'],
          ],
          handlers: {
            image: imageHandler, // <-
          },
        },
        clipboard: {
          matchVisual: false,
        },
      }}
    />
  );
};
