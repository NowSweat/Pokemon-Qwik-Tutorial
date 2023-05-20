import { $, component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { PokemonImage } from "~/components/pokemons/pokemon-image";

export default component$(() => {
  const pokemonId = useSignal(1);
  const changeFront = useSignal(false);
  const visibleChange = useSignal(false);
  const changedPokemonId = $((value: number) => {
    if (pokemonId.value + value <= 0) return;
    pokemonId.value += value;
  });
  return (
    <>
      <span class="text-2xl">Busqueda de Pokémons</span>

      <span class="text-9xl">{pokemonId}</span>

      <PokemonImage
        id={pokemonId.value}
        backImage={changeFront.value}
        isVisible={visibleChange.value}
      />
      <div class="mt-2">
        <button
          onClick$={() => changedPokemonId(-1)}
          class="btn btn-primary mr-2"
        >
          Anterior
        </button>
        <button onClick$={() => changedPokemonId(+1)} class="btn btn-primary">
          Siguiente
        </button>

        <button
          onClick$={() => (changeFront.value = !changeFront.value)}
          class="btn btn-primary ml-2"
        >
          Voltear
        </button>

        <button
          onClick$={() => (visibleChange.value = !visibleChange.value)}
          class="btn btn-primary ml-2"
        >
          Revelar
        </button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
