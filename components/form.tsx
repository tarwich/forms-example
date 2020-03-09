import { h, FunctionComponent } from 'preact';
import { FormDefinition } from '../types/form-definition';
import { FormSection } from './form-section';
import './form.scss';

export const Form: FunctionComponent<{ json: FormDefinition }> = ({ json }) => {
  const { method, action, title } = json;

  return (
    <form className="FocusMinistryForm" method={method} action={action}>
      <h1 className="FocusMinistryForm__Title">{title}</h1>
      {json.sections.map((section, i) => (
        <FormSection key={i} {...section} />
      ))}
      <div className="FocusMinistryForm__Actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
