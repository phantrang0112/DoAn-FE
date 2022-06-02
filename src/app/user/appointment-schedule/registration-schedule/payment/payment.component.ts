import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotifyService } from 'src/app/service/notify.service';
import { PaymentService } from 'src/app/service/userservice/paymentservice.service';
import { scheduleRegistration } from '../registration-schedule.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payerid;
  paymentId;
  token
  success;
  constructor(private route: ActivatedRoute, private paymentService: PaymentService,private notifyService:NotifyService) {
    this.route.queryParams.subscribe(params => {
      this.payerid = params['PayerID'];
      this.token=params['token']
      this.paymentId = params['paymentId'];
      console.log('paymentId', this.payerid);
      console.log('paymentId', this.paymentId);
    });
  }
  scheduleRegister: scheduleRegistration;
  formPayment: FormGroup;
  ngOnInit() {
  }
  payment() {
    this.paymentService.confirmPay(this.paymentId,this.token, this.payerid).subscribe(data => {
      console.log(data);
      this.success = data.success;
      console.log(this.success);
      if(this.success==="success"){
        this.notifyService.notifySuccess('Thành công','user/appointment-schedule','Thanh toán thành công');
        console.log("thành công");
      }
    })
  }
}
