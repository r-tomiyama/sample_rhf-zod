import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FormInput, schema } from './schema';

export const useSampleForm = () => {
  const form = useForm<FormInput>({
    defaultValues: {
      a: '',
      b: '0',
      c: '0',
    },
    mode: 'onChange',
    resolver: zodResolver(schema),
  });

  return {
    ...form,
    submit: form.handleSubmit((values) => {
      console.log(values);
    }),
  };
};
