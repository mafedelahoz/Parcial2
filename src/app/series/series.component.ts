import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  constructor(private serieService: SerieService) { }
  series: Array<Serie> = [];
  Average = 0;

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      series.forEach(serie => {
        this.Average += serie.seasons
    })
    this.Average = this.Average / series.length
    this.series = series;
  });
  }

  ngOnInit() {
    this.getSeries();
  }

}
