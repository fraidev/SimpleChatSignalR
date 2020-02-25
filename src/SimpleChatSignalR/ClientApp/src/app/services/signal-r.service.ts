import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  public messages: string[] = [];

  private hubConnection: signalR.HubConnection

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('/chatter')
      .build();

    this.addMessageReceivedListener();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  public addMessageReceivedListener = () => {
    this.hubConnection.on('messageReceived', (username: string, message: string) => {
      this.messages.push(`${username}: ${message}`);
    });
  }

  public sendMessage(username:string, message: string) {
    if(!username){
      username = new Date().getTime().toString();
    }
    return this.hubConnection.send("NewMessage", username, message).then();
  }
}