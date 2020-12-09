import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/core/localstorage/local-storage.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.container.html',
  styleUrls: ['./content.container.scss'],
})
export class ContentContainerComponent implements OnInit {
  isSidenavOpened: boolean;

  private sidenavKey = 'sidenav';

  constructor(private local: LocalStorageService) {}

  ngOnInit(): void {
    this.checkSidenavState().then((state) =>
      this.setInitialSidenavState(state)
    );
    this.setIsSidenavOpen();
  }

  async checkSidenavState(): Promise<boolean> {
    const state = await this.local.getStorage(this.sidenavKey);
    const isStateEmpty = Object.keys(state).length === 0 ? true : false;
    return isStateEmpty;
  }

  setInitialSidenavState(state): void {
    if (state) {
      this.local.setStorage(this.sidenavKey, 'false');
    }
  }

  setIsSidenavOpen(): void {
    this.local.getStorage(this.sidenavKey).then((res) => {
      this.isSidenavOpened = /true/i.test(res as string);
      console.log(this.isSidenavOpened);
    });
  }

  toggleSidenav(): void {
    this.isSidenavOpened = !this.isSidenavOpened;
    this.local.setStorage(this.sidenavKey, JSON.stringify(this.isSidenavOpened));
  }
}
