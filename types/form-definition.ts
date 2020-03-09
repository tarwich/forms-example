export type FormFieldDefinition = {
  type: "text";
  label?: string;
};

export type FormSectionDefinition = {
  title?: string;
  fields: Record<string, FormFieldDefinition>;
};

export type FormDefinition = {
  title: string;
  method: "GET" | "POST";
  action: string;
  sections: FormSectionDefinition[];
};
