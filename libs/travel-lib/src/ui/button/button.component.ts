import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'nx-travel-button',
  standalone: true,
  imports: [CommonModule],
  template: '<button class="button">Button from travel-lib</button>',
  styles: ['.button { font-size: 1.1em; border: 1px solid blue; border-radius: 4px; padding: 8px;}']
})
export class ButtonComponent { }


// .button {
//   box-shadow: inset 0 1px 0 0 #ffffff;
//   background: #ffffff linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
//   border-radius: 6px;
//   border: 1px solid #dcdcdc;
//   display: inline-block;
//   cursor: pointer;
//   color: #666666;
//   font-family: Arial, sans-serif;
//   font-size: 15px;
//   font-weight: bold;
//   padding: 6px 24px;
//   text-decoration: none;
//   text-shadow: 0 1px 0 #ffffff;
//   outline: 0;
// }
// .activebutton {
//   box-shadow: inset 0 1px 0 0 #dcecfb;
//   background: #bddbfa linear-gradient(to bottom, #bddbfa 5%, #80b5ea 100%);
//   border: 1px solid #84bbf3;
//   color: #ffffff;
//   text-shadow: 0 1px 0 #528ecc;
// }