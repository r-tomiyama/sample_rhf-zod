import * as React from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

export default function NumberInput(props: {
  name: any;
  control: Control<FieldValues, any>;
}) {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <label>プロパティ{props.name}: </label>
          <input type="number" {...field} />
          {error?.message}
        </div>
      )}
    />
  );
}
