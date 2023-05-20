import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
    <span class='text-5xl'>Hola mundo</span>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
