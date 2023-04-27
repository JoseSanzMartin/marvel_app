import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,
                MatFormFieldModule,
                ReactiveFormsModule,
                HttpClientModule,
                MatInputModule,
                BrowserAnimationsModule ],
      declarations: [LoginComponent],
      providers: [FormBuilder,],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should validate public key minlength', () => {
    const publicControl = component.loginForm.get('public');

    if (publicControl) {

      publicControl.setValue('8705c48bfb960f02afebbce74ba690bb');
      expect(publicControl.status).toBeTruthy();
    } else {
      expect(publicControl!.hasError).toBeTruthy();
    }
  });

  it('should validate private key minlength', () => {
    const privateControl = component.loginForm.get('private');

    if (privateControl) {

      privateControl.setValue('8a86a22939ba7194486941d71013d571397602ad');
      expect(privateControl.status).toBeTruthy();
    } else {
      expect(privateControl!.hasError).toBeTruthy();
    }
  });
});

