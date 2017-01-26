import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

import { Contact } from '../models/contact';

/** 数据存储结构。 */
export interface ContactStore {
  /** 数据集合。 */
  data: Contact[],
  /** 标识种子。 */
  seed: number
}

/** 联系人服务。 */
@Injectable()
export class ContactService {
  /** 数据存储库的名称。 */
  private storeName: string = 'Contacts';

  /** 同步到内存中的存储集合。 */
  protected store: Contact[];

  /** 存储库相关但不持久化的数据。 */
  protected storeMeta: { seed: number } = { seed: 0 };

  public constructor(
    private storage: Storage,
  ) { }

  /** 使存储集合可用。 */
  protected async activateStore(): Promise<void> {
    if (!this.store) {
      this.store = await this.storage.get(this.storeName);

      if (this.store && this.store.length > 0) {
        let lastItem = this.store.reduce((prev, crnt) => prev.contactId > crnt.contactId ? prev : crnt);
        this.storeMeta.seed = lastItem.contactId;
      } else {
        this.store = [];
      }
    }
  }

  protected async getNextId(): Promise<number> {
    await this.activateStore();
    return this.storeMeta.seed++;
  }

  public async getContacts(): Promise<Contact[]> {
    await this.activateStore();
    return this.store;
  }

  public async getContact(contactId: number): Promise<Contact> {
    await this.activateStore();
    return this.store.find(item => item.contactId === contactId);
  }

  public async addContact(contact: Contact): Promise<number> {
    await this.activateStore();
    contact.contactId = await this.getNextId();
    this.store.push(contact);

    this.store = this.store.sort((prev, crnt) => prev.contactName.localeCompare(crnt.contactName)); // 排序后存储。
    this.storage.set(this.storeName, this.store); // 异步持久化无需等待。

    return contact.contactId;
  }

  public async updateContact(contact: Contact): Promise<void> {
    await this.activateStore();
    let index = this.store.findIndex(item => item.contactId === contact.contactId);
    this.store[index] = contact;

    this.storage.set(this.storeName, this.store); // 异步持久化无需等待。
  }

  public async removeContact(contactId: number): Promise<void> {
    await this.activateStore();
    let index = this.store.findIndex(item => item.contactId === contactId);
    this.store.splice(index, 1);

    this.storage.set(this.storeName, this.store); // 异步持久化无需等待。
  }

}
