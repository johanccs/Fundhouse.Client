

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetCurrenciesService } from 'src/app/Services/currencies/get-currencies.service';
import { QuoteService } from 'src/app/Services/quote/quote.service';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [InputComponent],
        imports: [HttpClientTestingModule],
        providers:[GetCurrenciesService,QuoteService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render amount input control', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#amount')).toBeTruthy();
  });
    
  it('should render base currency select control', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#baseCurrency')).toBeTruthy();
  });
    
  it('should render exchange currency select control', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#exchangeCurrency')).toBeTruthy();
  });

    
});
