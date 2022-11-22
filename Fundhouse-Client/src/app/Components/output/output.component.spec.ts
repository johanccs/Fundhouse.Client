import { TestBed, ComponentFixture } from '@angular/core/testing';
import { OutputComponent } from '../output/output.component';

describe('Output Component', () =>{
  let fixture: ComponentFixture<OutputComponent>;
  let component: OutputComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutputComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});