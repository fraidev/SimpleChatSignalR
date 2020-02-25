import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignalRService } from '../services/signal-r.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public messageInput: string;

  constructor(public signalRService: SignalRService) {
  }
  get messages() {
    return this.signalRService.messages;
  }

  ngOnInit(): void {
    this.signalRService.startConnection();
  }

  send(user: string, msg: string) {
    this.signalRService.sendMessage(user, msg);
  }

}