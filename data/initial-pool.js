const initialMoviePool = [
  {
    "id": 400608,
    "title": "Bo Burnham: Make Happy",
    "release_date": "2016-06-03",
    "poster_path": "/A580BbHTvQbbFgbmf9CkWNhbLzb.jpg",
    "genre_ids": [
      35,
      10402
    ],
    "watch_link": "https://www.themoviedb.org/movie/400608/watch"
  },
  {
    "id": 293299,
    "title": "Feast",
    "release_date": "2014-10-25",
    "poster_path": "/6hAgSxgd2YIK5pYhwowtnlGpwbe.jpg",
    "genre_ids": [
      16,
      35,
      18,
      10751
    ],
    "watch_link": "https://www.themoviedb.org/movie/293299/watch"
  },
  {
    "id": 404378,
    "title": "A Street Cat Named Bob",
    "release_date": "2016-11-04",
    "poster_path": "/nBYG0D2FcbL1m926sIj7RN4m0sb.jpg",
    "genre_ids": [
      10751,
      18
    ],
    "watch_link": "https://www.themoviedb.org/movie/404378/watch"
  },
  {
    "id": 696,
    "title": "Manhattan",
    "release_date": "1979-04-25",
    "poster_path": "/k4eT3EvfxW1L9Wmt04UqJqCvCR6.jpg",
    "genre_ids": [
      35,
      18,
      10749
    ],
    "watch_link": "https://www.themoviedb.org/movie/696/watch"
  },
  {
    "id": 372754,
    "title": "Dou kyu sei – Classmates",
    "release_date": "2016-02-20",
    "poster_path": "/cIfRCA5wEvj9tApca4UDUagQEiM.jpg",
    "genre_ids": [
      10749,
      16
    ],
    "watch_link": "https://www.themoviedb.org/movie/372754/watch"
  },
  {
    "id": 11005,
    "title": "Awakenings",
    "release_date": "1990-12-04",
    "poster_path": "/9gztZXuHLG6AJ0fgqGd7Q43cWRI.jpg",
    "genre_ids": [
      18
    ],
    "watch_link": "https://www.themoviedb.org/movie/11005/watch"
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
    "id": 140420,
    "title": "Paperman",
    "release_date": "2012-11-02",
    "poster_path": "/9tvF744hwTm2Bn9hkDjMfEsysKz.jpg",
    "genre_ids": [
      16,
      10751,
      10749
    ],
    "watch_link": "https://www.themoviedb.org/movie/140420/watch"
  },
  {
    "id": 86837,
    "title": "Amour",
    "release_date": "2012-09-20",
    "poster_path": "/19hyCudualHxCD0GrEngqsi0wBF.jpg",
    "genre_ids": [
      18,
      10749
    ],
    "watch_link": "https://www.themoviedb.org/movie/86837/watch"
  },
  {
    "id": 177572,
    "title": "Big Hero 6",
    "release_date": "2014-10-24",
    "poster_path": "/2mxS4wUimwlLmI1xp6QW6NSU361.jpg",
    "genre_ids": [
      12,
      10751,
      16,
      28,
      35
    ],
    "watch_link": "https://www.themoviedb.org/movie/177572/watch"
  },
  {
    "id": 18079,
    "title": "Nine Queens",
    "release_date": "2000-08-31",
    "poster_path": "/tabMRXUTTBmprGax6ON2r9yBN0D.jpg",
    "genre_ids": [
      80,
      53,
      18
    ],
    "watch_link": "https://www.themoviedb.org/movie/18079/watch"
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
    "id": 539,
    "title": "Psycho",
    "release_date": "1960-06-22",
    "poster_path": "/yz4QVqPx3h1hD1DfqqQkCq3rmxW.jpg",
    "genre_ids": [
      27,
      53,
      9648
    ],
    "watch_link": "https://www.themoviedb.org/movie/539/watch"
  },
  {
    "id": 783675,
    "title": "The First Slam Dunk",
    "release_date": "2022-12-03",
    "poster_path": "/7i3EBXY87HdHagCoFbmjHQ8DlkG.jpg",
    "genre_ids": [
      16,
      35,
      18
    ],
    "watch_link": "https://www.themoviedb.org/movie/783675/watch"
  },
  {
    "id": 437068,
    "title": "A Taxi Driver",
    "release_date": "2017-08-02",
    "poster_path": "/iXVaWbxmyPk4KZGZk5GGDGFieMX.jpg",
    "genre_ids": [
      28,
      18,
      36
    ],
    "watch_link": "https://www.themoviedb.org/movie/437068/watch"
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
    "id": 25364,
    "title": "Ace in the Hole",
    "release_date": "1951-06-29",
    "poster_path": "/gPVPzHEsJBX02HtBtIQgYnfeqNQ.jpg",
    "genre_ids": [
      18
    ],
    "watch_link": "https://www.themoviedb.org/movie/25364/watch"
  },
  {
    "id": 567,
    "title": "Rear Window",
    "release_date": "1954-08-01",
    "poster_path": "/ILVF0eJxHMddjxeQhswFtpMtqx.jpg",
    "genre_ids": [
      53,
      9648
    ],
    "watch_link": "https://www.themoviedb.org/movie/567/watch"
  },
  {
    "id": 424,
    "title": "Schindler's List",
    "release_date": "1993-12-15",
    "poster_path": "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    "genre_ids": [
      18,
      36,
      10752
    ],
    "watch_link": "https://www.themoviedb.org/movie/424/watch"
  },
  {
    "id": 562,
    "title": "Die Hard",
    "release_date": "1988-07-15",
    "poster_path": "/aJCpHDC6RoGz7d1Fzayl019xnxX.jpg",
    "genre_ids": [
      28,
      53
    ],
    "watch_link": "https://www.themoviedb.org/movie/562/watch"
  },
  {
    "id": 916224,
    "title": "Suzume",
    "release_date": "2022-11-11",
    "poster_path": "/yStW1TXF5s7Tbtu9KjIZEaWl6HL.jpg",
    "genre_ids": [
      16,
      18,
      12,
      14
    ],
    "watch_link": "https://www.themoviedb.org/movie/916224/watch"
  },
  {
    "id": 12444,
    "title": "Harry Potter and the Deathly Hallows: Part 1",
    "release_date": "2010-11-17",
    "poster_path": "/iGoXIpQb7Pot00EEdwpwPajheZ5.jpg",
    "genre_ids": [
      12,
      14
    ],
    "watch_link": "https://www.themoviedb.org/movie/12444/watch"
  },
  {
    "id": 406997,
    "title": "Wonder",
    "release_date": "2017-11-13",
    "poster_path": "/sONh3LYGFcVDTy8pm1tbSOB13Li.jpg",
    "genre_ids": [
      10751,
      18
    ],
    "watch_link": "https://www.themoviedb.org/movie/406997/watch"
  },
  {
    "id": 30959,
    "title": "Kwaidan",
    "release_date": "1965-01-06",
    "poster_path": "/vmYhFcA2YC15hoL44hQziba75Ij.jpg",
    "genre_ids": [
      27,
      14,
      18
    ],
    "watch_link": "https://www.themoviedb.org/movie/30959/watch"
  },
  {
    "id": 101,
    "title": "Léon: The Professional",
    "release_date": "1994-09-14",
    "poster_path": "/bxB2q91nKYp8JNzqE7t7TWBVupB.jpg",
    "genre_ids": [
      80,
      18,
      28
    ],
    "watch_link": "https://www.themoviedb.org/movie/101/watch"
  },
  {
    "id": 3083,
    "title": "Mr. Smith Goes to Washington",
    "release_date": "1939-10-19",
    "poster_path": "/nDjg1fbNyq15excNDl3acd2IqAk.jpg",
    "genre_ids": [
      35,
      18
    ],
    "watch_link": "https://www.themoviedb.org/movie/3083/watch"
  },
  {
    "id": 937746,
    "title": "Io Capitano",
    "release_date": "2023-09-07",
    "poster_path": "/kGlZFwUQI5gAUdySNFfqGIkAF9n.jpg",
    "genre_ids": [
      12,
      18
    ],
    "watch_link": "https://www.themoviedb.org/movie/937746/watch"
  }
];
