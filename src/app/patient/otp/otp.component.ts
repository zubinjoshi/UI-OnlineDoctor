import { Component, OnInit,Input,  Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.less']
})
export class OtpComponent implements OnInit {
  public form: any;
public submitted : boolean;
public loading: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  get f() { return this.form.controls; }
}
