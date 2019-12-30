import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignalRService } from '../services/signal-r.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public forecasts: WeatherForecast[];
  public messageInput: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, public signalRService: SignalRService) {
    // http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
    //   this.forecasts = result;
    // }, error => console.error(error));


    // http.get(baseUrl + 'chatHub')
    //   .subscribe(res => {
    //     console.log(res);
    //   })
  }
  get messages() {
    return this.signalRService.messages;
  }

  ngOnInit(): void {
    this.signalRService.startConnection();
  }

  send(msg: string) {
    this.signalRService.sendMessage(msg);
  }

}
interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
