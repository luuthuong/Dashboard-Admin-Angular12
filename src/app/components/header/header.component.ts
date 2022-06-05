import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import data from './header.data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  public lstIcon=data.lstIcon;
  public language=data.language;
  public menuAvatar=data.menuAvatar;
  constructor() { }

  ngOnInit(): void {
  }
}
