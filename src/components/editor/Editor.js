import { QEditor } from './QEditor';

export const Editor = () => {
  return (
    <div>
      Editor
      <QEditor initialContent={'<h1>this is first editable heading</h1>'} />
    </div>
  );
};
