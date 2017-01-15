import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Contact } from '../../models/contact';
import { ContactService } from '../../providers/contact-service';

@Component({
  selector: 'page-contact-edit',
  templateUrl: 'contact-edit.html'
})
export class ContactEditPage {

  protected contact: Contact = {} as Contact;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private contactService: ContactService
  ) { }

  ionViewDidLoad() {
    this.contact = this.navParams.get('contact') || {};
  }

  protected async saveContact(): Promise<void> {
    await this.contactService.addContact(this.contact);
    this.navCtrl.pop();
  }

}
