import * as React from 'react';
import Input from '../../components/Input';
import NumberInput from '../../components/NumberInputWithoutTrigger';
import { useSampleForm } from './useSampleForm';

export default function InvalidSample2() {
  const {
    control,
    formState: { isValid },
    submit,
  } = useSampleForm();
  return (
    <div>
      <h1>フォームサンプル</h1>

      <Input name="a" control={control} />
      <NumberInput name="numbers.b" control={control} />
      <NumberInput name="numbers.c" control={control} />

      <div>
        <button onClick={submit} disabled={!isValid}>
          submit
        </button>
      </div>
    </div>
  );
}
