const initialMoviePool = [
  {
    "id": 688,
    "title": "The Bridges of Madison County",
    "release_date": "1995-06-02",
    "poster_path": "/8TfLAfIh5Qxp2J4ZjOafHYhWtDb.jpg",
    "genre_ids": [
      18,
      10749
    ],
    "watch_link": "https://www.themoviedb.org/movie/688/watch"
  },
  {
    "id": 644479,
    "title": "Dedicated to my ex",
    "release_date": "2019-11-01",
    "poster_path": "/xc4bTXVwYNXi10jG9dwcaYt5IpU.jpg",
    "genre_ids": [
      18,
      35
    ],
    "watch_link": "https://www.themoviedb.org/movie/644479/watch"
  },
  {
    "id": 938,
    "title": "For a Few Dollars More",
    "release_date": "1965-12-18",
    "poster_path": "/ooqASvA7qxlTVKL3KwOzBwy57Dh.jpg",
    "genre_ids": [
      37
    ],
    "watch_link": "https://www.themoviedb.org/movie/938/watch"
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
    "id": 805,
    "title": "Rosemary's Baby",
    "release_date": "1968-06-12",
    "poster_path": "/nclYFGpVzfbiORO5ELVVdxzt9Vg.jpg",
    "genre_ids": [
      18,
      27,
      53
    ],
    "watch_link": "https://www.themoviedb.org/movie/805/watch"
  },
  {
    "id": 930094,
    "title": "Red, White & Royal Blue",
    "release_date": "2023-07-27",
    "poster_path": "/ta3ReqbdEcLJM3mcHMzbYFZI8v7.jpg",
    "genre_ids": [
      35,
      10749
    ],
    "watch_link": "https://www.themoviedb.org/movie/930094/watch"
  },
  {
    "id": 24382,
    "title": "Big Deal on Madonna Street",
    "release_date": "1958-07-26",
    "poster_path": "/f5OxD8Nl0pR3DcYHtYhHRfpsmjl.jpg",
    "genre_ids": [
      35,
      80
    ],
    "watch_link": "https://www.themoviedb.org/movie/24382/watch"
  },
  {
    "id": 11010,
    "title": "The Postman",
    "release_date": "1994-04-07",
    "poster_path": "/cUaCpjVDefYShKyLmkcDsiPaBHn.jpg",
    "genre_ids": [
      35,
      18,
      10749
    ],
    "watch_link": "https://www.themoviedb.org/movie/11010/watch"
  },
  {
    "id": 615453,
    "title": "Ne Zha",
    "release_date": "2019-07-26",
    "poster_path": "/phM9bb6s9c60LA8qwsdk7U1N2cS.jpg",
    "genre_ids": [
      16,
      14,
      12
    ],
    "watch_link": "https://www.themoviedb.org/movie/615453/watch"
  },
  {
    "id": 13,
    "title": "Forrest Gump",
    "release_date": "1994-06-23",
    "poster_path": "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    "genre_ids": [
      35,
      18,
      10749
    ],
    "watch_link": "https://www.themoviedb.org/movie/13/watch"
  },
  {
    "id": 1280,
    "title": "3-Iron",
    "release_date": "2004-10-15",
    "poster_path": "/8ens4pTquSxN7J9EgL0NOehWwdZ.jpg",
    "genre_ids": [
      18,
      10749,
      80
    ],
    "watch_link": "https://www.themoviedb.org/movie/1280/watch"
  },
  {
    "id": 423,
    "title": "The Pianist",
    "release_date": "2002-09-17",
    "poster_path": "/2hFvxCCWrTmCYwfy7yum0GKRi3Y.jpg",
    "genre_ids": [
      18,
      10752
    ],
    "watch_link": "https://www.themoviedb.org/movie/423/watch"
  },
  {
    "id": 851,
    "title": "Brief Encounter",
    "release_date": "1945-11-24",
    "poster_path": "/jC9EwLJcGhYMSQAHu2LxkKN5v7O.jpg",
    "genre_ids": [
      18,
      10749
    ],
    "watch_link": "https://www.themoviedb.org/movie/851/watch"
  },
  {
    "id": 650031,
    "title": "The Shadow in My Eye",
    "release_date": "2021-10-28",
    "poster_path": "/jCKvbH3a4V5IPoRAG85eDaniNqO.jpg",
    "genre_ids": [
      10752,
      18,
      36
    ],
    "watch_link": "https://www.themoviedb.org/movie/650031/watch"
  },
  {
    "id": 1084736,
    "title": "The Count of Monte Cristo",
    "release_date": "2024-06-28",
    "poster_path": "/sAT1P3FGhtJ68anUyJScnMu8t1l.jpg",
    "genre_ids": [
      12,
      28,
      18
    ],
    "watch_link": "https://www.themoviedb.org/movie/1084736/watch"
  },
  {
    "id": 925,
    "title": "Do the Right Thing",
    "release_date": "1989-06-14",
    "poster_path": "/63rmSDPahrH7C1gEFYzRuIBAN9W.jpg",
    "genre_ids": [
      18
    ],
    "watch_link": "https://www.themoviedb.org/movie/925/watch"
  },
  {
    "id": 85,
    "title": "Raiders of the Lost Ark",
    "release_date": "1981-06-12",
    "poster_path": "/ceG9VzoRAVGwivFU403Wc3AHRys.jpg",
    "genre_ids": [
      12,
      28
    ],
    "watch_link": "https://www.themoviedb.org/movie/85/watch"
  },
  {
    "id": 1000492,
    "title": "All Your Faces",
    "release_date": "2023-03-29",
    "poster_path": "/zIgyDGsmIyMAf0ppg7QKTuIM1He.jpg",
    "genre_ids": [
      18
    ],
    "watch_link": "https://www.themoviedb.org/movie/1000492/watch"
  },
  {
    "id": 10674,
    "title": "Mulan",
    "release_date": "1998-06-18",
    "poster_path": "/5TYgKxYhnhRNNwqnRAKHkgfqi2G.jpg",
    "genre_ids": [
      16,
      10751,
      12
    ],
    "watch_link": "https://www.themoviedb.org/movie/10674/watch"
  },
  {
    "id": 674,
    "title": "Harry Potter and the Goblet of Fire",
    "release_date": "2005-11-16",
    "poster_path": "/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg",
    "genre_ids": [
      12,
      14
    ],
    "watch_link": "https://www.themoviedb.org/movie/674/watch"
  },
  {
    "id": 550,
    "title": "Fight Club",
    "release_date": "1999-10-15",
    "poster_path": "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    "genre_ids": [
      18
    ],
    "watch_link": "https://www.themoviedb.org/movie/550/watch"
  },
  {
    "id": 25538,
    "title": "Yi Yi",
    "release_date": "2000-09-20",
    "poster_path": "/mR8dSQZI8X6Z1NClJhFrtJp636z.jpg",
    "genre_ids": [
      18
    ],
    "watch_link": "https://www.themoviedb.org/movie/25538/watch"
  },
  {
    "id": 527774,
    "title": "Raya and the Last Dragon",
    "release_date": "2021-03-03",
    "poster_path": "/5nVhgCzxKbK47OLIKxCR1syulOn.jpg",
    "genre_ids": [
      16,
      10751,
      14,
      28,
      12
    ],
    "watch_link": "https://www.themoviedb.org/movie/527774/watch"
  },
  {
    "id": 791373,
    "title": "Zack Snyder's Justice League",
    "release_date": "2021-03-18",
    "poster_path": "/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
    "genre_ids": [
      28,
      12,
      14
    ],
    "watch_link": "https://www.themoviedb.org/movie/791373/watch"
  },
  {
    "id": 666,
    "title": "Central Station",
    "release_date": "1998-04-03",
    "poster_path": "/zJvp7XjQ2LhPbDVYhFXyucs40vR.jpg",
    "genre_ids": [
      18
    ],
    "watch_link": "https://www.themoviedb.org/movie/666/watch"
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
    "id": 552532,
    "title": "Charm City Kings",
    "release_date": "2020-01-27",
    "poster_path": "/8oiMFMarbRpcusASIX4cjVXoZKI.jpg",
    "genre_ids": [
      18
    ],
    "watch_link": "https://www.themoviedb.org/movie/552532/watch"
  },
  {
    "id": 996,
    "title": "Double Indemnity",
    "release_date": "1944-07-06",
    "poster_path": "/rVNYZZgfhwqVMMWlBmxOfWqnwCj.jpg",
    "genre_ids": [
      80,
      53
    ],
    "watch_link": "https://www.themoviedb.org/movie/996/watch"
  },
  {
    "id": 470044,
    "title": "The Hate U Give",
    "release_date": "2018-10-19",
    "poster_path": "/2icwBom0t5nmOuZI9FVXF3gkMK0.jpg",
    "genre_ids": [
      80,
      18
    ],
    "watch_link": "https://www.themoviedb.org/movie/470044/watch"
  }
];
