const initialMoviePool = [
  {
    "id": 92321,
    "title": "Hotarubi no Mori e",
    "release_date": "2011-09-17",
    "poster_path": "/mDqzHV8UXWWNpZkoAbKmKX1ZxEE.jpg",
    "genre_ids": [
      10749,
      16,
      14
    ],
    "watch_link": "https://www.themoviedb.org/movie/92321/watch"
  },
  {
    "id": 812225,
    "title": "Black Clover: Sword of the Wizard King",
    "release_date": "2023-06-16",
    "poster_path": "/9YEGawvjaRgnyW6QVcUhFJPFDco.jpg",
    "genre_ids": [
      16,
      14,
      28,
      12
    ],
    "watch_link": "https://www.themoviedb.org/movie/812225/watch"
  },
  {
    "id": 32085,
    "title": "Vincent",
    "release_date": "1982-10-01",
    "poster_path": "/sH8CMLnuXbQv9T61mUCPHxZotDJ.jpg",
    "genre_ids": [
      16,
      14
    ],
    "watch_link": "https://www.themoviedb.org/movie/32085/watch"
  },
  {
    "id": 10728,
    "title": "Faust",
    "release_date": "1926-10-13",
    "poster_path": "/rN703hMFxmkZfyEzsXvFtuFhkXE.jpg",
    "genre_ids": [
      14,
      18,
      27
    ],
    "watch_link": "https://www.themoviedb.org/movie/10728/watch"
  },
  {
    "id": 895,
    "title": "Andrei Rublev",
    "release_date": "1966-12-16",
    "poster_path": "/910xRIUmNJrWH2hkQifBJtoPp5R.jpg",
    "genre_ids": [
      18,
      36
    ],
    "watch_link": "https://www.themoviedb.org/movie/895/watch"
  },
  {
    "id": 508943,
    "title": "Luca",
    "release_date": "2021-06-17",
    "poster_path": "/9x4i9uKGXt8IiiIF5Ey0DIoY738.jpg",
    "genre_ids": [
      16,
      35,
      14,
      12,
      10751
    ],
    "watch_link": "https://www.themoviedb.org/movie/508943/watch"
  },
  {
    "id": 3870,
    "title": "1900",
    "release_date": "1976-08-28",
    "poster_path": "/deWzfCC59tmtEQvKSmflDe14FvR.jpg",
    "genre_ids": [
      18,
      36
    ],
    "watch_link": "https://www.themoviedb.org/movie/3870/watch"
  },
  {
    "id": 313106,
    "title": "Doctor Who: The Day of the Doctor",
    "release_date": "2013-11-23",
    "poster_path": "/yxLra5R61s5J4M5L3mqOY42K5md.jpg",
    "genre_ids": [
      878,
      12
    ],
    "watch_link": "https://www.themoviedb.org/movie/313106/watch"
  },
  {
    "id": 505262,
    "title": "My Hero Academia: Two Heroes",
    "release_date": "2018-08-03",
    "poster_path": "/hC4nTxdhXqFWzgqynGvvXVMiMNp.jpg",
    "genre_ids": [
      16,
      28,
      12,
      14
    ],
    "watch_link": "https://www.themoviedb.org/movie/505262/watch"
  },
  {
    "id": 279,
    "title": "Amadeus",
    "release_date": "1984-09-19",
    "poster_path": "/1n5VUlCqgmVax1adxGZm8oCFaKc.jpg",
    "genre_ids": [
      36,
      10402,
      18
    ],
    "watch_link": "https://www.themoviedb.org/movie/279/watch"
  },
  {
    "id": 2204,
    "title": "Alice in the Cities",
    "release_date": "1974-05-17",
    "poster_path": "/lw22wORmENkTZHGXI6bKmAIHxjO.jpg",
    "genre_ids": [
      18
    ],
    "watch_link": "https://www.themoviedb.org/movie/2204/watch"
  },
  {
    "id": 70,
    "title": "Million Dollar Baby",
    "release_date": "2004-12-05",
    "poster_path": "/jcfEqKdWF1zeyvECPqp3mkWLct2.jpg",
    "genre_ids": [
      18
    ],
    "watch_link": "https://www.themoviedb.org/movie/70/watch"
  },
  {
    "id": 25237,
    "title": "Come and See",
    "release_date": "1985-10-17",
    "poster_path": "/qNbMsKVzigERgJUbwf8pKyZogpb.jpg",
    "genre_ids": [
      18,
      10752
    ],
    "watch_link": "https://www.themoviedb.org/movie/25237/watch"
  },
  {
    "id": 51482,
    "title": "Death Note Relight 1: Visions of a God",
    "release_date": "2009-09-23",
    "poster_path": "/qDhbGqjZ7yFwa7FMIzuiQTQMfEQ.jpg",
    "genre_ids": [
      10770,
      80,
      18,
      14,
      53,
      16
    ],
    "watch_link": "https://www.themoviedb.org/movie/51482/watch"
  },
  {
    "id": 11104,
    "title": "Chungking Express",
    "release_date": "1994-07-14",
    "poster_path": "/43I9DcNoCzpyzK8JCkJYpHqHqGG.jpg",
    "genre_ids": [
      18,
      35,
      10749
    ],
    "watch_link": "https://www.themoviedb.org/movie/11104/watch"
  },
  {
    "id": 169813,
    "title": "Short Term 12",
    "release_date": "2013-08-23",
    "poster_path": "/qKnsyaJZLXfiL2JhIJEkpA8C3LU.jpg",
    "genre_ids": [
      18
    ],
    "watch_link": "https://www.themoviedb.org/movie/169813/watch"
  },
  {
    "id": 491480,
    "title": "The Boy Who Harnessed the Wind",
    "release_date": "2019-02-14",
    "poster_path": "/yOr7RxHw15MMXNxGMXSmngDqHyI.jpg",
    "genre_ids": [
      18,
      36
    ],
    "watch_link": "https://www.themoviedb.org/movie/491480/watch"
  },
  {
    "id": 553,
    "title": "Dogville",
    "release_date": "2003-05-21",
    "poster_path": "/lraVawavIXh5geMlVjpzCw9TGwR.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "watch_link": "https://www.themoviedb.org/movie/553/watch"
  },
  {
    "id": 20914,
    "title": "My Friends",
    "release_date": "1975-10-24",
    "poster_path": "/8Pm8SLjq2UHCwisd56ipHtzvZI1.jpg",
    "genre_ids": [
      35
    ],
    "watch_link": "https://www.themoviedb.org/movie/20914/watch"
  },
  {
    "id": 15121,
    "title": "The Sound of Music",
    "release_date": "1965-03-02",
    "poster_path": "/nv8bcyqXJh2tijWLa3MoUktlVZZ.jpg",
    "genre_ids": [
      18,
      10751,
      10402,
      10749
    ],
    "watch_link": "https://www.themoviedb.org/movie/15121/watch"
  },
  {
    "id": 110420,
    "title": "Wolf Children",
    "release_date": "2012-07-21",
    "poster_path": "/3Nllh6JgcrFdtOn6iFOWHudNInd.jpg",
    "genre_ids": [
      16,
      10751,
      18,
      14
    ],
    "watch_link": "https://www.themoviedb.org/movie/110420/watch"
  },
  {
    "id": 49687,
    "title": "Marriage Italian Style",
    "release_date": "1964-12-18",
    "poster_path": "/1VVQFXwr4i6QSAoPnCs9UmGTUVw.jpg",
    "genre_ids": [
      18,
      10749,
      35
    ],
    "watch_link": "https://www.themoviedb.org/movie/49687/watch"
  },
  {
    "id": 24,
    "title": "Kill Bill: Vol. 1",
    "release_date": "2003-10-10",
    "poster_path": "/v7TaX8kXMXs5yFFGR41guUDNcnB.jpg",
    "genre_ids": [
      28,
      80
    ],
    "watch_link": "https://www.themoviedb.org/movie/24/watch"
  },
  {
    "id": 521,
    "title": "Dial M for Murder",
    "release_date": "1954-05-29",
    "poster_path": "/clyd4ONJgWYSw1a0UdlbZ6NYrNo.jpg",
    "genre_ids": [
      53,
      80
    ],
    "watch_link": "https://www.themoviedb.org/movie/521/watch"
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
    "id": 28971,
    "title": "Limelight",
    "release_date": "1952-10-23",
    "poster_path": "/tDD11x3ZWCXXXwdpbGEU9uU4kh1.jpg",
    "genre_ids": [
      10749,
      18,
      10402
    ],
    "watch_link": "https://www.themoviedb.org/movie/28971/watch"
  },
  {
    "id": 843906,
    "title": "Straight Outta Nowhere: Scooby-Doo! Meets Courage the Cowardly Dog",
    "release_date": "2021-09-14",
    "poster_path": "/rlQJnQfPgaSGQtyMw35VOIqoIsj.jpg",
    "genre_ids": [
      16,
      35,
      9648,
      10751,
      14,
      12,
      27
    ],
    "watch_link": "https://www.themoviedb.org/movie/843906/watch"
  },
  {
    "id": 20271,
    "title": "Divorce Italian Style",
    "release_date": "1961-12-20",
    "poster_path": "/vZbdSpUFyFiDBBTY0AiSrN9f303.jpg",
    "genre_ids": [
      35,
      80
    ],
    "watch_link": "https://www.themoviedb.org/movie/20271/watch"
  },
  {
    "id": 435129,
    "title": "The Breadwinner",
    "release_date": "2017-11-17",
    "poster_path": "/2d6qmkJz9AWqmk9wBWtd2uFX89t.jpg",
    "genre_ids": [
      16,
      10752,
      18,
      10751
    ],
    "watch_link": "https://www.themoviedb.org/movie/435129/watch"
  },
  {
    "id": 609242,
    "title": "The Heist of the Century",
    "release_date": "2020-01-16",
    "poster_path": "/1zL4VCVin4S8kOXhszMDqfwWPCM.jpg",
    "genre_ids": [
      35,
      53,
      80
    ],
    "watch_link": "https://www.themoviedb.org/movie/609242/watch"
  }
];
