import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public alignmentHorizontal: string;
  public alignmentHorizontalInner1: string;
  public alignmentHorizontalInner2: string;
  public alignmentHorizontalSelectOptions: string[] = [];

  public alignmentVertical: string;
  public alignmentVerticalInner1: string;
  public alignmentVerticalInner2: string;
  public alignmentVerticalSelectOptions: string[] = [];

  public countItems: number[];
  public colors: string[] =[];

  public layoutType: string[];
  public paramWidth: string[];
  public paramHeight: string[];

  constructor(){
    this.countItems = Array(5).fill(0).map((x,i)=>i);

    this.paramWidth = [ "60px","80px", "70px", "90px","50px"];
    this.paramHeight = [ "90px","70px", "50px", "80px","60px"]; 
    
    this.colors = ["green", "red", "blue", "orange", "grey" ];
    

    this.layoutType = ["row", "column"];

    this.alignmentHorizontal = this.alignmentHorizontalInner1 = this.alignmentHorizontalInner2 ="start"; // default
    this.alignmentHorizontalSelectOptions = [
      "none", "start", "center", "end", "space-around", "space-between", "space-evenly"
    ];

    this.alignmentVertical = this.alignmentVerticalInner1 = this.alignmentVerticalInner2 =  "stretch"; // default
    this.alignmentVerticalSelectOptions = [
      "none", "start", "center", "end", "stretch"
    ];
  }

}
