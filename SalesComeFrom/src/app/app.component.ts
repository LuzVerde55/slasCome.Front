import { Component } from '@angular/core';
import { Config, ConfigService } from './config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ConfigService ]
})

export class AppComponent {
  title = 'salesComeFront';
  error: any;
  headers: string[] = [];
  config: Config | undefined;

  constructor(private configService: ConfigService) {}

  LogIn(){
    let data = {
      "nickName": (document.getElementById("txt_Nick") as HTMLInputElement).value,
      "counterSing": (document.getElementById("txt_sining") as HTMLInputElement).value
    }
    this.configService.postValidateUser(data)    
      .subscribe((data: Config) => this.config);
  }
}
