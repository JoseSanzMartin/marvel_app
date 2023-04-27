import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

import { ComicService } from "./comic.service";
import { ComicApiResponse } from "../../core/models/DTOComicAPIResponse";
import { PriceType } from "src/app/core/models/DTOPriceType";

describe("ComicService", () => {
  let service: ComicService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ComicService],
    });
    service = TestBed.inject(ComicService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("getComics() should return greater than 0", () => {
    const mockResponse: ComicApiResponse = {
      code: 200,
      status: "OK",
      copyright: "Copyright text",
      attributionText: "Attribution text",
      attributionHTML: "<p>Attribution HTML</p>",
      data: {
        offset: 0,
        limit: 20,
        total: 1,
        count: 1,
        results: [
          {
            id: 1,
            title: "Test Comic",
            description: "This is a test comic.",
            prices: [
              {
                type: PriceType.PrintPrice,
                price: 3.99,
              },
              {
                type: PriceType.DigitalPurchasePrice,
                price: 2.99,
              },
            ],
            thumbnail: {
              path: "http://example.com/test-comic-thumbnail",
              extension: "jpg",
            },
          },
        ],
      },
      etag: "etag_value",
    };

    service.getComics().subscribe((data) => {
      expect(data.data.results.length).toBeGreaterThan(0);
    });

    const req = httpTestingController.expectOne((request) =>
      request.url.includes("/comics")
    );
    req.flush(mockResponse);
  });
});
