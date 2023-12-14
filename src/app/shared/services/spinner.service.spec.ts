import { TestBed } from '@angular/core/testing';
import { take } from 'rxjs/operators';
import { SpinnerService } from './spinner.service';

describe('SpinnerService', () => {
  let service: SpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit true when show() is called', () => {
    service.isLoading.pipe(take(1)).subscribe((value) => {
      expect(value).toBe(true);
    });
    service.show();
  });

  it('should emit false when hide() is called', () => {
    service.isLoading.pipe(take(1)).subscribe((value) => {
      expect(value).toBe(false);
    });
    service.hide();
  });
});
