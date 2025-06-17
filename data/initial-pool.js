const initialMoviePool = [
  {
    "id": 430424,
    "title": "See You Up There",
    "release_date": "2017-10-25",
    "poster_path": "/pkO5YoznMR9neuHVzhxHK9JJpAj.jpg",
    "genre_ids": [
      18,
      80,
      10752
    ],
    "watch_link": "https://www.themoviedb.org/movie/430424/watch"
  },
  {
    "id": 20139,
    "title": "The Children's Hour",
    "release_date": "1961-12-19",
    "poster_path": "/goyEWixvULM2IRN4KsKibyrJE4J.jpg",
    "genre_ids": [
      18
    ],
    "watch_link": "https://www.themoviedb.org/movie/20139/watch"
  },
  {
    "id": 792,
    "title": "Platoon",
    "release_date": "1986-12-19",
    "poster_path": "/m3mmFkPQKvPZq5exmh0bDuXlD9T.jpg",
    "genre_ids": [
      18,
      10752,
      28
    ],
    "watch_link": "https://www.themoviedb.org/movie/792/watch"
  },
  {
    "id": 492188,
    "title": "Marriage Story",
    "release_date": "2019-09-28",
    "poster_path": "/2JRyCKaRKyJAVpsIHeLvPw5nHmw.jpg",
    "genre_ids": [
      18
    ],
    "watch_link": "https://www.themoviedb.org/movie/492188/watch"
  },
  {
    "id": 42269,
    "title": "We All Loved Each Other So Much",
    "release_date": "1974-12-21",
    "poster_path": "/zGGWYpiKNwjpKxelPxOMqJnUgDs.jpg",
    "genre_ids": [
      18,
      35
    ],
    "watch_link": "https://www.themoviedb.org/movie/42269/watch"
  },
  {
    "id": 166428,
    "title": "How to Train Your Dragon: The Hidden World",
    "release_date": "2019-01-03",
    "poster_path": "/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
    "genre_ids": [
      16,
      10751,
      12
    ],
    "watch_link": "https://www.themoviedb.org/movie/166428/watch"
  },
  {
    "id": 205,
    "title": "Hotel Rwanda",
    "release_date": "2004-12-22",
    "poster_path": "/p3pHw85UMZPegfMZBA6dZ06yarm.jpg",
    "genre_ids": [
      18,
      36,
      10752
    ],
    "watch_link": "https://www.themoviedb.org/movie/205/watch"
  },
  {
    "id": 52629,
    "title": "El Infierno",
    "release_date": "2010-09-03",
    "poster_path": "/vry7NyLM6I0fL53H2KxCX4uAz5H.jpg",
    "genre_ids": [
      28,
      80,
      37,
      35,
      18
    ],
    "watch_link": "https://www.themoviedb.org/movie/52629/watch"
  },
  {
    "id": 472454,
    "title": "Ayla: The Daughter of War",
    "release_date": "2017-10-27",
    "poster_path": "/8RELLU0RK9hRIteLzHFZ0dK8YSi.jpg",
    "genre_ids": [
      18,
      10752,
      36
    ],
    "watch_link": "https://www.themoviedb.org/movie/472454/watch"
  },
  {
    "id": 504253,
    "title": "I Want to Eat Your Pancreas",
    "release_date": "2018-09-01",
    "poster_path": "/qDWA7fB4cZ4sBP6YgwlxvraDHi7.jpg",
    "genre_ids": [
      16,
      18,
      10749
    ],
    "watch_link": "https://www.themoviedb.org/movie/504253/watch"
  },
  {
    "id": 770,
    "title": "Gone with the Wind",
    "release_date": "1939-12-15",
    "poster_path": "/lNz2Ow0wGCAvzckW7EOjE03KcYv.jpg",
    "genre_ids": [
      18,
      10752,
      10749
    ],
    "watch_link": "https://www.themoviedb.org/movie/770/watch"
  },
  {
    "id": 712454,
    "title": "The Summit of the Gods",
    "release_date": "2021-09-22",
    "poster_path": "/iowz7MwaTWMYlfLUE6GeM0m3Hze.jpg",
    "genre_ids": [
      16,
      12,
      9648
    ],
    "watch_link": "https://www.themoviedb.org/movie/712454/watch"
  },
  {
    "id": 640,
    "title": "Catch Me If You Can",
    "release_date": "2002-12-16",
    "poster_path": "/ctjEj2xM32OvBXCq8zAdK3ZrsAj.jpg",
    "genre_ids": [
      18,
      80
    ],
    "watch_link": "https://www.themoviedb.org/movie/640/watch"
  },
  {
    "id": 238,
    "title": "The Godfather",
    "release_date": "1972-03-14",
    "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    "genre_ids": [
      18,
      80
    ],
    "watch_link": "https://www.themoviedb.org/movie/238/watch"
  },
  {
    "id": 572154,
    "title": "Rascal Does Not Dream of a Dreaming Girl",
    "release_date": "2019-06-15",
    "poster_path": "/AtFnN4OztDJy8IFwYd5JfU0jlEM.jpg",
    "genre_ids": [
      16,
      10749,
      18,
      14
    ],
    "watch_link": "https://www.themoviedb.org/movie/572154/watch"
  },
  {
    "id": 106646,
    "title": "The Wolf of Wall Street",
    "release_date": "2013-12-25",
    "poster_path": "/kW9LmvYHAaS9iA0tHmZVq8hQYoq.jpg",
    "genre_ids": [
      80,
      18,
      35
    ],
    "watch_link": "https://www.themoviedb.org/movie/106646/watch"
  },
  {
    "id": 96721,
    "title": "Rush",
    "release_date": "2013-09-02",
    "poster_path": "/5hpcfL3WH5ArSPUlfD4E1TtaOd0.jpg",
    "genre_ids": [
      18,
      28
    ],
    "watch_link": "https://www.themoviedb.org/movie/96721/watch"
  },
  {
    "id": 393,
    "title": "Kill Bill: Vol. 2",
    "release_date": "2004-04-16",
    "poster_path": "/2yhg0mZQMhDyvUQ4rG1IZ4oIA8L.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "watch_link": "https://www.themoviedb.org/movie/393/watch"
  },
  {
    "id": 37257,
    "title": "Witness for the Prosecution",
    "release_date": "1957-12-17",
    "poster_path": "/bCj4EfuehAlgBwVd3diyWyhuuau.jpg",
    "genre_ids": [
      18,
      9648,
      80
    ],
    "watch_link": "https://www.themoviedb.org/movie/37257/watch"
  },
  {
    "id": 33320,
    "title": "Millennium Actress",
    "release_date": "2002-09-14",
    "poster_path": "/p44UXOFBCY5xbpCKEsWpi4filCD.jpg",
    "genre_ids": [
      16,
      18,
      10749,
      14
    ],
    "watch_link": "https://www.themoviedb.org/movie/33320/watch"
  },
  {
    "id": 634649,
    "title": "Spider-Man: No Way Home",
    "release_date": "2021-12-15",
    "poster_path": "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    "genre_ids": [
      28,
      12,
      878
    ],
    "watch_link": "https://www.themoviedb.org/movie/634649/watch"
  },
  {
    "id": 680,
    "title": "Pulp Fiction",
    "release_date": "1994-09-10",
    "poster_path": "/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg",
    "genre_ids": [
      53,
      80
    ],
    "watch_link": "https://www.themoviedb.org/movie/680/watch"
  },
  {
    "id": 1162,
    "title": "The Miracle Worker",
    "release_date": "1962-05-23",
    "poster_path": "/dXbQE7t9JlLad0dSprWJ3jOiTua.jpg",
    "genre_ids": [
      18
    ],
    "watch_link": "https://www.themoviedb.org/movie/1162/watch"
  },
  {
    "id": 118340,
    "title": "Guardians of the Galaxy",
    "release_date": "2014-07-30",
    "poster_path": "/jPrJPZKJVhvyJ4DmUTrDgmFN0yG.jpg",
    "genre_ids": [
      28,
      878,
      12
    ],
    "watch_link": "https://www.themoviedb.org/movie/118340/watch"
  },
  {
    "id": 31442,
    "title": "Ivan's Childhood",
    "release_date": "1962-05-09",
    "poster_path": "/vmRWSLP1DE9WTta0hfzIafJ0dID.jpg",
    "genre_ids": [
      18,
      10752
    ],
    "watch_link": "https://www.themoviedb.org/movie/31442/watch"
  },
  {
    "id": 585,
    "title": "Monsters, Inc.",
    "release_date": "2001-11-01",
    "poster_path": "/qjlbN6aK1qgeg3SspFVovT2D1Me.jpg",
    "genre_ids": [
      16,
      35,
      10751
    ],
    "watch_link": "https://www.themoviedb.org/movie/585/watch"
  },
  {
    "id": 7345,
    "title": "There Will Be Blood",
    "release_date": "2007-12-26",
    "poster_path": "/fa0RDkAlCec0STeMNAhPaF89q6U.jpg",
    "genre_ids": [
      18
    ],
    "watch_link": "https://www.themoviedb.org/movie/7345/watch"
  },
  {
    "id": 678580,
    "title": "El mesero",
    "release_date": "2021-07-15",
    "poster_path": "/zvGC5jX5wQmU1GgPc0VGZz7Mtcs.jpg",
    "genre_ids": [
      35
    ],
    "watch_link": "https://www.themoviedb.org/movie/678580/watch"
  },
  {
    "id": 453,
    "title": "A Beautiful Mind",
    "release_date": "2001-12-14",
    "poster_path": "/rEIg5yJdNOt9fmX4P8gU9LeNoTQ.jpg",
    "genre_ids": [
      18,
      10749
    ],
    "watch_link": "https://www.themoviedb.org/movie/453/watch"
  },
  {
    "id": 887,
    "title": "The Best Years of Our Lives",
    "release_date": "1946-12-25",
    "poster_path": "/gd5EoAU4MM57sW3vlWxJ0NMM8cV.jpg",
    "genre_ids": [
      18,
      10749,
      10752
    ],
    "watch_link": "https://www.themoviedb.org/movie/887/watch"
  }
];
