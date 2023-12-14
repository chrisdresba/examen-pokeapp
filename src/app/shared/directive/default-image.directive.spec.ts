import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { DefaultImageDirective } from './default-image.directive';

@Component({
  template: `<img [src]="imageUrl" appImgDefault="assets/icon/default.png" />`,
})
class TestComponent {
  imageUrl = ''; // Dejamos imageUrl vacío para que falle intencionalmente
}

describe('DefaultImageDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let imgElement: HTMLImageElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, DefaultImageDirective],
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    imgElement = fixture.nativeElement.querySelector('img');
    fixture.detectChanges();
  });

  it('should create an instance of TestComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should set default image if src is empty', () => {
    const defaultImage = 'assets/icon/poke-default.png';
    expect(imgElement.src).toContain(defaultImage);
  });
});
