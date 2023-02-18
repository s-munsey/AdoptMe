import { useQuery } from "@tanstack/react-query";
import fetchBreedsList from "./fetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedsList);

  return [results?.data?.breeds ?? [], results.status];
}
