import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {isNumber} from "util";
import {Fact} from "../../components/facts/fact";

@Component({
  selector: 'knowledge-pie-chart',
  templateUrl: './knowledge-pie-chart.template.html',
  styleUrls: ['knowledge-pie-chart.styles.css']
})

export class KnowledgePieChartComponent implements  OnChanges {
  private yes:number;
  private no:number;

  // Pie
  public pieChartLabels: string[] = ['Yes', 'No'];
  public pieChartData: number[] = [this.yes, this.no];
  public pieChartType: string = 'pie';

  @Input('countYes') public countYes: number;
  @Input('countNo') public countNo: number;


  ngOnChanges() {
    this.pieChartData = [this.countYes,this.countNo];
  }


  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
  }

}
