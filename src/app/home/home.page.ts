import { Component } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(   public emailComposer : EmailComposer,) {}


  sendEmail(){
   
      
        let email = {
          to: 'csurbier@idevotion.fr',
          subject: 'Test email Composer',
          body: '',
          isHtml: true
        }
    
        // Send a text message using default options
        this.emailComposer.open(email);
      
  
  }
}
