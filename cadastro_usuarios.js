import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Nome" {...register("Nome", {required: true, maxLength: 80})} />
      <input type="undefined" placeholder="Data de Nascimento" {...register} />
      <input type="undefined" placeholder="Email" {...register} />
      <input type="undefined" placeholder="Celular" {...register} />
      <input type="undefined" placeholder="Usuário" {...register} />
      <input type="undefined" placeholder="Senha" {...register} />

      <input type="submit" />
    </form>
  );
}