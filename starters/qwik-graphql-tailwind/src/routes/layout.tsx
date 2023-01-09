import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <main className="bg-blue-50 min-h-screen">
      <section class="py-5">
        <Slot />
      </section>
    </main>
  );
});
