import { h, FunctionalComponent } from 'preact';
import { useEffect, useState } from 'preact/compat';
import { Form } from './form';

export const FormLoader: FunctionalComponent<{
  pathToJson: string;
}> = ({ pathToJson }) => {
  const [json, setJson] = useState(null);

  useEffect(() => {
    (async () => {
      var response = await fetch(pathToJson);
      setJson(await response.json());
    })();
  }, []);

  if (json) return <Form json={json} />;

  return <div>Loading...: {pathToJson}</div>;
};
