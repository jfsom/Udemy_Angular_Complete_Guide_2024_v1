import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus= 'No server was Created!'
  serverName = '';
  serverCreated = false;
  servers = ['TestServer','Test Server 2'];

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    }, 80000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was Created! Name is: ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    debugger;
   // console.log(event.data);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
