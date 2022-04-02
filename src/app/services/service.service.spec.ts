import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ServiceService } from './service.service';
import { usersObject, usersResponse } from '../shared/service.test.data';
describe('ServiceService', () => {
  let service: ServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
      providers: [ServiceService]
    });
    service = TestBed.inject(ServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it(`GetData should return Users`, (done: DoneFn) => {
    service.getData().subscribe(value => {
      expect(value).toEqual(usersResponse);
      done();
    })
    const request = httpMock.expectOne(`${service.apiUrl}/users`);
    expect(request.request.method).toBe('GET');
    request.flush(usersResponse);
  })

  it(`SaveData should save data`, (done: DoneFn) => {
    service.saveData(usersObject).subscribe(value => {
      expect(value).toEqual(usersResponse);
      done();
    })
    const request = httpMock.expectOne(`${service.apiUrl}/users`);
    expect(request.request.method).toBe('POST');
    request.flush(usersResponse);
  })

  it(`updateData should update data`, (done: DoneFn) => {
    const id = 1;
    service.update(usersObject,id).subscribe(value => {
      expect(value).toEqual(usersResponse);
      done();
    })
    const request = httpMock.expectOne(`${service.apiUrl}/users/${id}`);
    expect(request.request.method).toBe('PUT');
    request.flush(usersResponse);
  })

  it('should call getById and return the appropriate user', () => {
    const id = 1;
    service.getById(id).subscribe((data) => {
      expect(data).toEqual(usersResponse);
    });
    const request = httpMock.expectOne(`${service.apiUrl}/users/${id}`);
    expect(request.request.method).toBe('GET');
    request.flush(usersResponse);
  })

  it('should call deleteItem and delete Item', () => {
    const id = 1;
    service.deleteItem(id).subscribe((data) => {
      expect(data).toEqual(usersResponse);
    });
    const request = httpMock.expectOne(`${service.apiUrl}/users/${id}`);
    expect(request.request.method).toBe('DELETE');
    request.flush(usersResponse);
  })

  afterEach(() => {
    httpMock.verify();
  });

});
