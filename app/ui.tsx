"use client";

import Image from "next/image";
import { Input } from "@material-tailwind/react";
import { useState } from "react";
import Link from "next/link";
//api
import { useQuery } from "@tanstack/react-query";
import { searchMovie } from "actions/movie-action";

export default function UI() {
  const [search, setSearch] = useState("");

  //   movie 불러오기
  const getmovieQuery = useQuery({
    queryKey: ["getMovies", search],
    queryFn: () => searchMovie(search),
  });

  return (
    <div className="relative">
      {/* Header */}
      <div className="flex justify-between w-full gap-4 p-2  bg-gray-900 text-white fixed top-0 left-0 z-10">
        <Image src="/tmdbflix_logo.png" width={100} height={100} alt="logo" />
        <div className="max-w-md w-full text-gray-900 bg-white rounded-md ">
          <Input
            placeholder="Search Movie"
            className="placeholder:text-gray-600 placeholder:opacity-100"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            color="blue"
            icon={<i className="fas fa-magnifying-glass" />}
          />
        </div>
      </div>
      <div className="h-14"></div>
      {/* Movie List */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {getmovieQuery.data?.map((movie, i) => (
          <Link
            href={`/detail/${movie.id}?title=${encodeURIComponent(movie.title)}`}
            key={movie.id}
            className="relative group"
          >
            <img src={movie.image_url} alt="" className="w-full h-auto" />
            <div className="absolute inset-0 bg-black bg-opacity-55 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity duration-300">
              <span>{movie.title}</span>
            </div>
          </Link>
        ))}
      </div>
      {/* Footer */}
      <div className="flex justify-center w-full p-1 text-sm font-semibold bg-gray-900 text-white fixed bottom-0 left-0 z-5">
        Movie Database Scraped from TMDB
      </div>
    </div>
  );
}
