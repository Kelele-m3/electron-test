import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-up-page',
  templateUrl: './start-up-page.component.html'
})
export class StartUpPageComponent implements OnInit{
  launchLizzy = false;
  turnOnLizzy = false;
  constructor(){  
  }

  ngOnInit() {}

  onLizzyLaunch(launch : boolean, turnOn: boolean){
      this.launchLizzy = launch;
      this.turnOnLizzy = turnOn;
      console.log('launch, turnOnLizzy', launch, turnOn);
  }
}
