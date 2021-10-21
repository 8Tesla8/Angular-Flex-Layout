import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public alignmentHorizontalSelectOptions: string[] = [];
  public alignmentVerticalSelectOptions: string[] = [];

  public itemSettings: ItemSettings[];
  public simpleFlexLayoutModel: SimpleFlexLayoutModel[];
  public complexFlexLayoutModel: ComplexFlexLayoutModel[];

  constructor() {
    this.itemSettings = [
      { color: 'green', width: '60px', height: '85px', value: 1, index: 0 },
      { color: 'red', width: '80px', height: '70px', value: 2, index: 1 },
      { color: 'blue', width: '70px', height: '50px', value: 3, index: 2 },
      { color: 'orange', width: '85px', height: '80px', value: 4, index: 3 },
      { color: 'grey', width: '50px', height: '60px', value: 5, index: 4 },
    ];

    this.simpleFlexLayoutModel = [
      {
        layoutType: 'row',
        horizontalAlignment: 'start',
        verticalAlignment: 'stretch',
      },
      {
        layoutType: 'column',
        horizontalAlignment: 'start',
        verticalAlignment: 'stretch',
      },
    ];

    this.complexFlexLayoutModel = [
      {
        layoutType: 'row',
        innerLayoutType: 'column',
        horizontalAlignment: 'start',
        verticalAlignment: 'stretch',
        bigItemsClass: 'big-height-item',
      },
      {
        layoutType: 'column',
        innerLayoutType: 'row',
        horizontalAlignment: 'start',
        verticalAlignment: 'stretch',
        bigItemsClass: 'big-width-item',
      },
    ];

    this.alignmentHorizontalSelectOptions = [
      'none',
      'start',
      'center',
      'end',
      'space-around',
      'space-between',
      'space-evenly',
    ];
    this.alignmentVerticalSelectOptions = [
      'none',
      'start',
      'center',
      'end',
      'stretch',
    ];
  }
}

export class ItemSettings {
  public color: string;
  public width: string;
  public height: string;
  public value: number;
  public index: number;
}
export class SimpleFlexLayoutModel {
  public layoutType: string;
  public horizontalAlignment: string;
  public verticalAlignment: string;
}

export class ComplexFlexLayoutModel extends SimpleFlexLayoutModel {
  public innerLayoutType: string;
  public bigItemsClass: string;
}
