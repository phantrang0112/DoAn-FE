import {Validators} from '@angular/forms';

export class ValidatorsCharacters {
  static EmailAddress = Validators.pattern('[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+');
  static PhoneFax = Validators.pattern('^0[0-9]*$');
  static Password = Validators.pattern('(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$');
  static Username = Validators.pattern('^(?=.{5,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$');
}
