import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import { font } from '../font';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-array-methods',
  templateUrl: './array-methods.component.html',
  styleUrls: ['./array-methods.component.scss']
})

export class ArrayMethodsComponent implements OnInit {

  arrayMethods!: { title: string, value: string | number };

  arr = [1, 2, 8, 3, 9, 4, 12, 10, 20];

  kids: any[] = [
    {
      name: "Ali",
      age: 16
    },
    {
      name: "Ramzan",
      age: 30
    },
    {
      name: "Asad",
      age: 21
    },

  ]

  names = ['rana', 'shahzaman', 'Kashif', 'asad']

  names2 = [
    {
      firstName: 'Ali',
      secondName: 'ramzan',
      dob: '11/12/2000'
    },
    {
      firstName: 'Nazir',
      secondName: 'ahmed',
      dob: '11/24/1995'
    }
  ]



  variable: any;
  newArr: any[] = [2];
  count: number = 0;
  obj: any = { count: 0 }
  ngOnInit() {
    // LENGTH
    this.variable = this.names.join(' ');
    // console.log(typeof this.variable);

    let findKids = this.kids.find(item => item.age == 21)

    let findKidsIndex = this.kids.findIndex((item) => {
      return item.age == 21
    })

    const date = new Date()

    // console.log(this.names);
    // console.log("Index", findKidsIndex)

    // this.names.sort(function (a: string, b: string) {

    //   console.log(a, b);

    //   // s, r


    //   const alpha = a.toLowerCase(); // k
    //   const beta = b.toLowerCase(); // s

    //   console.log(alpha, beta);

    //   if (alpha > beta) {
    //     return 1;
    //   } else if (alpha < beta)
    //     return -1
    //   else
    //     return 0
    // })

    let newArr = this.names2.map((item: any) => {
      // {firstName: '', secondName: ''};
      const itemNew = item
      itemNew.fullName = item.firstName.toUpperCase() + ' ' + item.secondName.toUpperCase()
      return itemNew
    })

    // console.log(newArr);

    const newNameArr = this.names.map(item => item.toLowerCase())
    // console.log(newNameArr);


    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];

    const arr3 = [...arr1, ...arr2];//1,2,3

    // console.log(arr3);

    // this.printer(this.count)
    this.printer(this.obj);
  }

  funct() {
    // console.log(findKidsIndex);
  }

  printer(value2) {
    value2 = JSON.parse(JSON.stringify(value2));
    value2.count = value2.count + 2
    console.log(value2.count);
    console.log(this.obj.count);
  }




  generatePdf() {
    // Create a new jsPDF instance
    const doc = new jsPDF.jsPDF();
    
    doc.addFileToVFS("WorkSans-normal.ttf", font);
    doc.addFont("WorkSans-normal.ttf", "WorkSans", "normal");
    doc.setFont("WorkSans");

    // Define font size
    const fontSize = 12;

    // Set font for Arabic text
    // doc.setFont(fontName);

    // Add a title
    doc.setFontSize(fontSize + 2);
    doc.text('Sample Table', 105, 10, { align: 'center' });

    // Define table columns
    const columnWidth = 40;
    const columnHeight = 10;
    const column1X = 10;
    const column2X = column1X + columnWidth;
    const column3X = column2X + columnWidth;
    const column4X = column3X + columnWidth;
    const column5X = column4X + columnWidth;
    const column6X = column5X + columnWidth;
    const column7X = column6X + columnWidth;

    const rowHeight = 10;
    const startY = 20;

    // Draw table headers
    doc.rect(column1X, startY, columnWidth, rowHeight, 'S');
    doc.text('Property Name', column1X + 2, startY + rowHeight / 2, { align: 'left', baseline: 'middle' });

    doc.rect(column2X, startY, columnWidth, rowHeight, 'S');
    doc.text('Value', column2X + 2, startY + rowHeight / 2, { align: 'left', baseline: 'middle' });

    doc.rect(column3X, startY, columnWidth, rowHeight, 'S');
    doc.text('الخاصية', column3X + 2, startY + rowHeight / 2, { align: 'left', baseline: 'middle' });

    doc.rect(column4X, startY, columnWidth, rowHeight, 'S');
    doc.text('القيمة', column4X + 2, startY + rowHeight / 2, { align: 'left', baseline: 'middle' });

    doc.rect(column5X, startY, columnWidth, rowHeight, 'S');
    doc.text('خاصية', column5X + 2, startY + rowHeight / 2, { align: 'left', baseline: 'middle' });

    doc.rect(column6X, startY, columnWidth, rowHeight, 'S');
    doc.text('قيمة', column6X + 2, startY + rowHeight / 2, { align: 'left', baseline: 'middle' });

    doc.rect(column7X, startY, columnWidth, rowHeight * 3, 'S');
    doc.text('Spanned Column', column7X + 2, startY + rowHeight * 3 / 2, { align: 'left', baseline: 'middle' });

    // Draw table content
    const row1Y = startY + rowHeight;
    const row2Y = row1Y + rowHeight;
    const row3Y = row2Y + rowHeight;

    doc.rect(column1X, row1Y, columnWidth, rowHeight, 'S');
    doc.text('Property 1', column1X + 2, row1Y + rowHeight / 2, { align: 'left', baseline: 'middle' });

    doc.rect(column2X, row1Y, columnWidth, rowHeight, 'S');
    doc.text('Value 1', column2X + 2, row1Y + rowHeight / 2, { align: 'left', baseline: 'middle' });

    doc.rect(column3X, row1Y, columnWidth, rowHeight, 'S');
    doc.text('خاصية 1', column3X + 2, row1Y + rowHeight / 2, { align: 'left', baseline: 'middle' });

    doc.rect(column4X, row1Y, columnWidth, rowHeight, 'S');
    doc.text('قيمة 1', column4X + 2, row1Y + rowHeight / 2, { align: 'left', baseline: 'middle' });

    doc.rect(column5X, row1Y, columnWidth, rowHeight, 'S');
    doc.text('Property 1', column5X + 2, row1Y + rowHeight / 2, { align: 'left', baseline: 'middle' });

    doc.rect(column6X, row1Y, columnWidth, rowHeight, 'S');
    doc.text('Value 1', column6X + 2, row1Y + rowHeight / 2, { align: 'left', baseline: 'middle' });

    // Draw table spanned content
    doc.rect(column7X, row1Y, columnWidth, rowHeight * 3, 'S');
    doc.text('Spanned Column Value', column7X + 2, row1Y + rowHeight * 3 / 2, { align: 'left', baseline: 'middle' });

    // Save the PDF document
    doc.save('sample.pdf');
}






}
