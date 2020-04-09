import { Component, OnInit } from '@angular/core';
import readXlsxFile from 'read-excel-file'

@Component({
  selector: 'app-excel-parse',
  templateUrl: './excel-parse.component.html',
  styleUrls: ['./excel-parse.component.css']
})
export class ExcelParseComponent implements OnInit {

  constructor() { }

  tableData = [];
  colname: number;
  sum: number = 0;
  average: Number = 0;
  maxnum: Number = 0;
  minnum: Number = 0;
  ngOnInit(): void {
    const input = document.getElementById('input');
 
    input.addEventListener('change', () => {
      readXlsxFile((<HTMLInputElement>document.getElementById('input')).files[0]).then((rows) => {
        console.log("---->", this.tableData, this.colname);
        this.tableData.push(rows);

        
        // `rows` is an array of rows
        // each row being an array of cells.
      })
    })
  }

  performAggregation() {
      var rows = this.tableData[0]; 
      this.sum = 0;
      this.maxnum = -10000;
      this.minnum = 100000;
      this.average = 0;
      for(var i = 1; i < rows.length; i = i+1){
        this.sum = this.sum + rows[i][this.colname - 1];

        if(rows[i][this.colname - 1] > this.maxnum){
          this.maxnum = rows[i][this.colname - 1];
        }

        if(rows[i][this.colname - 1] < this.minnum){
          this.minnum = rows[i][this.colname - 1];
        }
      }

      this.average = this.sum/rows.length;
      console.log("---->", this.tableData, this.colname, this.sum, this.sum/rows.length);
  }



}
