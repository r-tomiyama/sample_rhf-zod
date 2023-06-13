import * as React from 'react';
import Input from '../../components/Input';
import NumberInput from '../../components/NumberInputWithoutTrigger';
import { useSampleForm } from './useSampleForm';

export default function Sample() {
  const {
    control,
    formState: { isValid },
    submit,
  } = useSampleForm();
  return (
    <div>
      <h1>フォームサンプル</h1>

      <Input name="a" control={control} />
      <NumberInput name="b" control={control} />
      <NumberInput name="c" control={control} />

      <div>
        <button onClick={submit} disabled={!isValid}>
          submit
        </button>
      </div>
    </div>
  );
}
