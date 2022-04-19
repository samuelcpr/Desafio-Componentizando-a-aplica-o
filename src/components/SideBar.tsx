import React, { useEffect, useState } from "react";
import { api } from "../services/api";


interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}
type Props = {
  selectedGenreId: number;
  setSelectedGenreId: (id: number) => void;
};
export function SideBar({ setSelectedGenreId, selectedGenreId }: Props) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data);
    });
  }, []);