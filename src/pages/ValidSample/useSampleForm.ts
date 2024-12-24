import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FormInput, schema } from './schema';
import { useEffect } from 'react';

export const useSampleForm = () => {
  const form = useForm<FormInput>({
    defaultValues: {
      a: '',
      numbers: {
        b: '0',
        c: '0',
      },
    },
    mode: 'onChange',
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    form.trigger();
  }, []);

  return {
    ...form,
    submit: form.handleSubmit((values) => {
      console.log(values);
    }),
  };
};
