import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {isNumber} from "util";
import {Fact} from "../../components/facts/fact";

@Component({
  selector: 'knowledge-pie-chart',
  templateUrl: './knowledge-pie-chart.template.html',
  styleUrls: ['knowledge-pie-chart.styles.css']
})

export class KnowledgePieChartComponent implements OnChanges {
  private yes: number;
  private yesPercentage: number;

  private no: number;
  private noPercentage: number;

  private doughnutChartColors: any[] = [{backgroundColor: ["#2390FD", "#FF7700"]}];

  // Pie
  public pieChartLabels: string[] = ['yes', 'no'];
  public pieChartData: number[] = [this.yes, this.no];
  public pieChartType: string = 'pie';

  @Input('countYes') public countYes: number;
  @Input('countNo') public countNo: number;

  constructor() {
    this.yesPercentage = (this.countYes + this.countNo) / 100 * this.countYes;
    this.noPercentage = (this.countYes + this.countNo) / 100 * this.countNo;
  }


  ngOnChanges() {
    this.pieChartData = [this.countYes, this.countNo];
    this.pieChartLabels = [
      `${(100 / (this.countYes + this.countNo) * this.countYes).toFixed(2)}% alredy knew that!`,
      `${(100 / (this.countYes + this.countNo) * this.countNo).toFixed(2)}% had just learned it!`
    ]
  }


  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
  }

}
