import { h, FunctionComponent } from 'preact';
import { FormSectionDefinition } from '../types/form-definition';
import { FormField } from './form-field';
import './form-section.scss';

export const FormSection: FunctionComponent<FormSectionDefinition> = ({
  title,
  fields,
}) => {
  return (
    <div className="FormSection">
      <h2 className="FormSection__Title">{title}</h2>
      <div className="FormSection__Fields">
        {Object.entries(fields).map(([name, field], i) => (
          <FormField key={i} {...{ ...field, name }} />
        ))}
      </div>
    </div>
  );
};
