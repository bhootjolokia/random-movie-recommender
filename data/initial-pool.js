const initialMoviePool = [
  {
    "id": 103,
    "title": "Taxi Driver",
    "release_date": "1976-02-09",
    "poster_path": "/ekstpH614fwDX8DUln1a2Opz0N8.jpg",
    "genre_ids": [
      80,
      18
    ],
    "watch_link": "https://www.themoviedb.org/movie/103/watch"
  },
  {
    "id": 273248,
    "title": "The Hateful Eight",
    "release_date": "2015-12-25",
    "poster_path": "/jIywvdPjia2t3eKYbjVTcwBQlG8.jpg",
    "genre_ids": [
      18,
      9648,
      37
    ],
    "watch_link": "https://www.themoviedb.org/movie/273248/watch"
  },
  {
    "id": 22,
    "title": "Pirates of the Caribbean: The Curse of the Black Pearl",
    "release_date": "2003-07-09",
    "poster_path": "/z8onk7LV9Mmw6zKz4hT6pzzvmvl.jpg",
    "genre_ids": [
      12,
      14,
      28
    ],
    "watch_link": "https://www.themoviedb.org/movie/22/watch"
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
    "id": 606856,
    "title": "Togo",
    "release_date": "2019-12-20",
    "poster_path": "/wX0QD36a80hxulcizz7tyahYOF8.jpg",
    "genre_ids": [
      12,
      10751
    ],
    "watch_link": "https://www.themoviedb.org/movie/606856/watch"
  },
  {
    "id": 515001,
    "title": "Jojo Rabbit",
    "release_date": "2019-10-18",
    "poster_path": "/1mqL7VG4Ix8wmxwypmCA1HTHBky.jpg",
    "genre_ids": [
      35,
      10752,
      18
    ],
    "watch_link": "https://www.themoviedb.org/movie/515001/watch"
  },
  {
    "id": 22504,
    "title": "The King and the Mockingbird",
    "release_date": "1980-03-19",
    "poster_path": "/yDbfVUrb9b0Dkm1TptWtzkujXBk.jpg",
    "genre_ids": [
      16,
      10751,
      14
    ],
    "watch_link": "https://www.themoviedb.org/movie/22504/watch"
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
    "id": 673,
    "title": "Harry Potter and the Prisoner of Azkaban",
    "release_date": "2004-05-31",
    "poster_path": "/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg",
    "genre_ids": [
      12,
      14
    ],
    "watch_link": "https://www.themoviedb.org/movie/673/watch"
  },
  {
    "id": 15859,
    "title": "A Moment to Remember",
    "release_date": "2004-11-05",
    "poster_path": "/s9ulpxLbkeJTTYxqLVUl6PreLGN.jpg",
    "genre_ids": [
      18,
      10749
    ],
    "watch_link": "https://www.themoviedb.org/movie/15859/watch"
  },
  {
    "id": 10193,
    "title": "Toy Story 3",
    "release_date": "2010-06-16",
    "poster_path": "/AbbXspMOwdvwWZgVN0nabZq03Ec.jpg",
    "genre_ids": [
      16,
      10751,
      35
    ],
    "watch_link": "https://www.themoviedb.org/movie/10193/watch"
  },
  {
    "id": 13855,
    "title": "The Chaser",
    "release_date": "2008-02-14",
    "poster_path": "/hy49xJiKN1nakkN1ZmKuOf6vQYR.jpg",
    "genre_ids": [
      80,
      53,
      28
    ],
    "watch_link": "https://www.themoviedb.org/movie/13855/watch"
  },
  {
    "id": 354857,
    "title": "Regular Show: The Movie",
    "release_date": "2015-09-01",
    "poster_path": "/p44RoW4naoE1nlSGOqqT0J2pc09.jpg",
    "genre_ids": [
      16,
      35,
      878,
      10770,
      12,
      28,
      10751,
      14
    ],
    "watch_link": "https://www.themoviedb.org/movie/354857/watch"
  },
  {
    "id": 13042,
    "title": "Presto",
    "release_date": "2008-06-27",
    "poster_path": "/mWRgBxm7twwntbrX0xZlY8lw3aV.jpg",
    "genre_ids": [
      16,
      10751,
      35
    ],
    "watch_link": "https://www.themoviedb.org/movie/13042/watch"
  },
  {
    "id": 46738,
    "title": "Incendies",
    "release_date": "2010-09-17",
    "poster_path": "/yH6DAQVgbyj72S66gN4WWVoTjuf.jpg",
    "genre_ids": [
      18,
      10752,
      9648
    ],
    "watch_link": "https://www.themoviedb.org/movie/46738/watch"
  },
  {
    "id": 11036,
    "title": "The Notebook",
    "release_date": "2004-05-25",
    "poster_path": "/rNzQyW4f8B8cQeg7Dgj3n6eT5k9.jpg",
    "genre_ids": [
      10749,
      18
    ],
    "watch_link": "https://www.themoviedb.org/movie/11036/watch"
  },
  {
    "id": 94047,
    "title": "My Way",
    "release_date": "2011-12-21",
    "poster_path": "/3moPqIC1EBFilLI3YJNa5Nfel3e.jpg",
    "genre_ids": [
      18,
      28,
      36,
      10752
    ],
    "watch_link": "https://www.themoviedb.org/movie/94047/watch"
  },
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
    "id": 16859,
    "title": "Kiki's Delivery Service",
    "release_date": "1989-07-29",
    "poster_path": "/Aufa4YdZIv4AXpR9rznwVA5SEfd.jpg",
    "genre_ids": [
      16,
      10751,
      14
    ],
    "watch_link": "https://www.themoviedb.org/movie/16859/watch"
  },
  {
    "id": 441130,
    "title": "Wolfwalkers",
    "release_date": "2020-10-26",
    "poster_path": "/ehAKuE48okTuonq6TpsNQj8vFTC.jpg",
    "genre_ids": [
      16,
      10751,
      12,
      14
    ],
    "watch_link": "https://www.themoviedb.org/movie/441130/watch"
  },
  {
    "id": 16869,
    "title": "Inglourious Basterds",
    "release_date": "2009-08-02",
    "poster_path": "/7sfbEnaARXDDhKm0CZ7D7uc2sbo.jpg",
    "genre_ids": [
      18,
      53,
      10752
    ],
    "watch_link": "https://www.themoviedb.org/movie/16869/watch"
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
    "id": 530254,
    "title": "The Witch: Part 1. The Subversion",
    "release_date": "2018-06-27",
    "poster_path": "/4i2wo2ja5g2PmUxWa1a2eYIboZf.jpg",
    "genre_ids": [
      28,
      9648,
      878
    ],
    "watch_link": "https://www.themoviedb.org/movie/530254/watch"
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
    "id": 3782,
    "title": "Ikiru",
    "release_date": "1952-10-09",
    "poster_path": "/dgNTS4EQDDVfkzJI5msKuHu2Ei3.jpg",
    "genre_ids": [
      18
    ],
    "watch_link": "https://www.themoviedb.org/movie/3782/watch"
  },
  {
    "id": 502033,
    "title": "Sound of Metal",
    "release_date": "2020-11-20",
    "poster_path": "/3178oOJKKPDeQ2legWQvMPpllv.jpg",
    "genre_ids": [
      18,
      10402
    ],
    "watch_link": "https://www.themoviedb.org/movie/502033/watch"
  },
  {
    "id": 278,
    "title": "The Shawshank Redemption",
    "release_date": "1994-09-23",
    "poster_path": "/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    "genre_ids": [
      18,
      80
    ],
    "watch_link": "https://www.themoviedb.org/movie/278/watch"
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
    "id": 1050035,
    "title": "Monster",
    "release_date": "2023-06-02",
    "poster_path": "/kvUJUyUGOhEoiWWNH04IXoExPE2.jpg",
    "genre_ids": [
      9648,
      53,
      18
    ],
    "watch_link": "https://www.themoviedb.org/movie/1050035/watch"
  }
];
