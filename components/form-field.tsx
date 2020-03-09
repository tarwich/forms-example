import { h, FunctionComponent } from 'preact';
import { FormFieldDefinition } from '../types/form-definition';
import { AtomicNumber } from '../types/atomic-number';
import './form-field.scss';

let __atom = AtomicNumber.next;

export const FormField: FunctionComponent<FormFieldDefinition & {
  name: string;
}> = ({ label, name, type }) => {
  const id = `FormField__${++__atom}`;

  return (
    <span className="FormField">
      <label for={id}>{label || name}</label>
      <input id={id} name={name} type={type} />
    </span>
  );
};
