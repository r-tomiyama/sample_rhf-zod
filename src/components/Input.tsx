import * as React from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

export default function Input(props: {
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
          <input type="text" {...field} />
          {error?.message}
        </div>
      )}
    />
  );
}
