import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(private route: Router) {
  }

  blockPermission() {
    const success = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });
    success.fire({
        title: 'Not have access!!!',
        icon: 'error',
      }
    );
  }

  notifySuccessToggerMessage(titel) {
    const success = Swal.mixin(
      {
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
      }
    );
    success.fire({
        title: titel,
        icon: 'success',
        // background:'#CCF8D7',
      }
    );
  }

  public notifySuccess(title, linkRouter, text) {
    Swal.fire({
      icon: 'success',
      title,
      text,
      timer: 3500,
    }).then((result) => {
      if (result.isConfirmed) {
        this.route.navigate([linkRouter]);
      }
    });
  }

  notifySuccessNotLink(title, text) {
    Swal.fire({
      title,
      html: text,
      icon: 'success',
      iconColor: '#0dd4b9',
    });
  }
  notifyNotLink(title, text,icon) {
    Swal.fire({
      title,
      html: text,
      icon: icon,
      iconColor: '#0dd4b9',
    });
  }

  notifyErrorToggerMessage(titel) {
    const error = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });
    error.fire({
      title: titel,
      icon: 'error',
    });
  }

  notifyCancel(text) {
    Swal.fire({
        icon: 'warning',
        title: 'Cancelled',
        text,
      }
    );
  }

  notifiError(title, text) {
    Swal.fire({
      icon: 'error',
      title,
      text
    });
  }
}
