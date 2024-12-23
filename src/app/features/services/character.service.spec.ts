import { TestBed } from '@angular/core/testing';
import { CharacterService } from './character.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler';


const data =
  {
    "code": 200,
    "status": "Ok",
    "copyright": "© 2023 MARVEL",
    "attributionText": "Data provided by Marvel. © 2023 MARVEL",
    "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2023 MARVEL</a>",
    "etag": "14cb781059315f9631d0e9158cdf818ef5af55c1",
    "data": {
        "offset": 0,
        "limit": 20,
        "total": 1,
        "count": 1,
        "results": [
            {
                "id": 1010699,
                "name": "Aaron Stack",
                "description": "",
                "modified": "1969-12-31T19:00:00-0500",
                "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                    "extension": "jpg"
                },
                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010699",
                "comics": {
                    "available": 14,
                    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010699/comics",
                    "items": [
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/40776",
                            "name": "Dark Avengers (2012) #177"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/40773",
                            "name": "Dark Avengers (2012) #179"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/40774",
                            "name": "Dark Avengers (2012) #180"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/40778",
                            "name": "Dark Avengers (2012) #181"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/40787",
                            "name": "Dark Avengers (2012) #182"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/40786",
                            "name": "Dark Avengers (2012) #183"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/38073",
                            "name": "Hulk (2008) #43"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/11910",
                            "name": "Universe X (2000) #6"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/11911",
                            "name": "Universe X (2000) #7"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/11912",
                            "name": "Universe X (2000) #8"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/11913",
                            "name": "Universe X (2000) #9"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/11903",
                            "name": "Universe X (2000) #10"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/11904",
                            "name": "Universe X (2000) #11"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/11905",
                            "name": "Universe X (2000) #12"
                        }
                    ],
                    "returned": 14
                },
                "series": {
                    "available": 3,
                    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010699/series",
                    "items": [
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/789",
                            "name": "Dark Avengers (2012 - 2013)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/3374",
                            "name": "Hulk (2008 - 2012)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/2085",
                            "name": "Universe X (2000 - 2001)"
                        }
                    ],
                    "returned": 3
                },
                "stories": {
                    "available": 27,
                    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010699/stories",
                    "items": [
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/25634",
                            "name": "Universe X (2000) #10",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/25635",
                            "name": "Interior #25635",
                            "type": "interiorStory"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/25637",
                            "name": "Universe X (2000) #12",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/25638",
                            "name": "Interior #25638",
                            "type": "interiorStory"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/25647",
                            "name": "Universe X (2000) #6",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/25648",
                            "name": "Interior #25648",
                            "type": "interiorStory"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/25649",
                            "name": "Universe X (2000) #7",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/25650",
                            "name": "Interior #25650",
                            "type": "interiorStory"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/25651",
                            "name": "Universe X (2000) #8",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/25652",
                            "name": "Interior #25652",
                            "type": "interiorStory"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/25653",
                            "name": "Universe X (2000) #9",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/25654",
                            "name": "Interior #25654",
                            "type": "interiorStory"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/67100",
                            "name": "Universe X (2000) #11",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/89190",
                            "name": "Hulk (2008) #43",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/90002",
                            "name": "Interior #90002",
                            "type": "interiorStory"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/92370",
                            "name": "Dark Avengers (2012) #179",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/92371",
                            "name": "Interior #92371",
                            "type": "interiorStory"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/92372",
                            "name": "Dark Avengers (2012) #180",
                            "type": "cover"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/92373",
                            "name": "Interior #92373",
                            "type": "interiorStory"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/stories/92376",
                            "name": "Dark Avengers (2012) #177",
                            "type": "cover"
                        }
                    ],
                    "returned": 20
                },
                "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010699/events",
                    "items": [],
                    "returned": 0
                },
                "urls": [
                    {
                        "type": "detail",
                        "url": "http://marvel.com/characters/2809/aaron_stack?utm_campaign=apiRef&utm_source=963bb610e7f5f09a84186e125f680647"
                    },
                    {
                        "type": "comiclink",
                        "url": "http://marvel.com/comics/characters/1010699/aaron_stack?utm_campaign=apiRef&utm_source=963bb610e7f5f09a84186e125f680647"
                    }
                ]
            }
        ]
    }
}
;


describe('CharacterService', () => {
  let service: CharacterService;
  let httpMock : HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CharacterService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
  });

  beforeEach(() => {
    service = TestBed.inject(CharacterService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should return a characters list and does a get method', () => {
    service.searchCharacter('adamwarlock').subscribe((res) => {
      expect(res).toBeTruthy();
      expect(res).toEqual(data);
    });

    const req = httpMock.expectOne(`${service.url}/characters?nameStartsWith=adamwarlock`);
    expect(req.request.method).toBe('GET');

    req.flush(data);
  });


  it('should return a character by id and does a get method', () => {
    service.getCharacterById(1010699).subscribe((res) => {
      expect(res).toBeTruthy();
      expect(res).toEqual(data);
    });

    const req = httpMock.expectOne(`${service.url}characters/1010699`);
    expect(req.request.method).toBe('GET');

    req.flush(data);
  });




  it('should return a character for header and does a get method', () => {
    service.getCharacterForHeader().subscribe((res) => {
      expect(res).toBeTruthy();
      expect(res).toEqual(data);
    });

    const req = httpMock.expectOne(`${service.url}characters?${service.paramsHeader}`);
    expect(req.request.method).toBe('GET');

    req.flush(data);
  });

});
