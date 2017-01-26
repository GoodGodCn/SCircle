import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { Contact } from '../../models/contact';
import { ContactService } from '../../providers/contact-service';

@Component({
  selector: 'page-contact-edit',
  templateUrl: 'contact-edit.html'
})
export class ContactEditPage {
  @ViewChild(NgForm)
  protected mainForm: NgForm;

  /** 默认数据模型。 */
  protected defaultModel: Contact = {
    gender: 0,
    // organizations: [],
    // industry: [],
    // occupation: [],
    // mobilePhone: [],
    // telephone: [],
    // interests: [],
    // skills: []
  } as Contact;

  protected contact: Contact = this.defaultModel;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private contactService: ContactService
  ) { }

  ionViewDidLoad() {
    this.contact = this.navParams.get('contact') || this.defaultModel;
  }

  protected formSubmit(): void {
    if (this.mainForm.valid) {
      this.saveContact();
    }
  }

  protected async saveContact(): Promise<void> {
    await this.contactService.addContact(this.contact);
    this.navCtrl.pop();
  }

}
