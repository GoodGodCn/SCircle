import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Contact } from '../../models/contact';
import { ContactService } from '../../providers/contact-service';
import { ContactEditPage } from '../contact-edit/contact-edit';

/** 联系人列表页。 */
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html'
})
export class ContactsPage {
  /** 联系人列表。 */
  protected contacts: Contact[];

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private contactService: ContactService
  ) { }

  ionViewDidLoad(): void {
    this.refreshContacts();
  }

  protected async refreshContacts(): Promise<void> {
    this.contacts = await this.contactService.getContacts();
  }

  protected addContact(): void {
    this.navCtrl.push(ContactEditPage);
  }

  protected removeContact(contact: Contact): void {
    this.contactService.removeContact(contact.contactId);
  }

}
