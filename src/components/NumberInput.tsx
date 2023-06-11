import * as React from 'react';
import {
  Control,
  Controller,
  FieldValues,
  UseFormTrigger,
} from 'react-hook-form';

export default function NumberInput(props: {
  name: any;
  control: Control<FieldValues, any>;
  trigger?: UseFormTrigger<any>;
  triggerKey?: any;
}) {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <label>プロパティ{props.name}: </label>
          <input
            type="number"
            {...field}
            onChange={(e) => {
              field.onChange(e);
              if (props.trigger && props.triggerKey) {
                props.trigger(props.triggerKey);
              }
            }}
          />
          {error?.message}
        </div>
      )}
    />
  );
}
