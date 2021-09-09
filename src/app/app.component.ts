import { Component } from '@angular/core';
import { CompileShallowModuleMetadata } from '@angular/compiler';


class Item{
    city: string;
    weather: string;
    type_w: string;
     
    constructor(city: string, weather: string, type_w:string) {
  
        this.weather = weather;
        this.city = city;
        this.type_w = type_w;

    }
}
     
@Component({
    selector: 'my-app',
    template: ` 
        <div [ngStyle]="{ 'height': '105px' }"> 
            <div id="weather"  [ngStyle]="{ display: show_wheather }"><div class="title">{{weather_p}}
                              </div>
                              <div class="img"
                                          [ngClass]="{img_w_1: type_w_1,
                                            img_w_2: type_w_2,
                                            img_w_3: type_w_3,
                                            img_w_4: type_w_4}">
                              </div>
                              <div class="close" (click)="close()">
                              </div>

            </div>              
        </div>         
        <div>    

            <p><b>Список городов</b></p> 
            
            <br>

            <ul>
                <li *ngFor="let item of items">
                    <p (mouseover)='over(item)' PrintWeather (wheather_out)="over($event)" wheather_d ={{item.type_w}}>{{item.city}}</p>  
                                  
                </li>
            </ul>
        </div> `,
    styles: [
                `#weather{
                    box-shadow:-5px 0 5px -5px rgba(0, 0, 0, .5);
                    fontWeight: bold;
                    height: 100px;
                    width: 250px;
                    background: #cff7f7; 
                    position: relative;
                    top: 10px;
                    left: 100px;
                    
                 }
                 ul{ 
                    width: 129px
                  }
                 .title{
                    position: absolute;
                    top: 40px;
                    left: 10px;
                    width: 130px;
                    text-align: center;
                 }
                .close {
                    position: absolute;
                    right: 32px;
                    top: 4px;
                    width: 2px;
                    height: 18px;
                    opacity: 0.3;
                 }
                .close:hover {
                    opacity: 1;
                 }
                .close:before, .close:after {
                    position: absolute;
                    left: 15px;
                    content: ' ';
                    height: 18px;
                    width: 2px;
                    background-color: #333;
                 }
                .close:before {
                    transform: rotate(45deg);
                 }
                .close:after {
                    transform: rotate(-45deg);
                 }
                .img{
                    height:71px;
                    width:71px; 
                    position: absolute;
                    top: 18px;
                    right: 34px;
                 }
                .img_w_4{
                    background: url('/images/1.jpg') no-repeat 0 0px; 

                 }
                .img_w_2{
                    background: url('/images/1.jpg') no-repeat 0 -76px;  

                }
                .img_w_3{
                    background: url('/images/1.jpg') no-repeat 0 -150px;  

                }
                .img_w_1{
                    background: url('/images/1.jpg') no-repeat -78px 0px;  

                }
                
                `
               
            ]
})
export class AppComponent { 
    weather_p: string = "";
    show_wheather: string = "none";

    type_w_1: boolean =false;
    type_w_2: boolean =false;
    type_w_3: boolean =false;
    type_w_4: boolean =false;
    
    close(){
        this.show_wheather="none";
    }
    over(wheather_f){  
       
       this.show_wheather="block";  
       this.weather_p=wheather_f.weather;
       this.type_w_1 =false;
       this.type_w_2 =false;
       this.type_w_3 =false;
       this.type_w_4 =false;

       if (wheather_f.type_w==1) { this.type_w_1=true;}
       else if (wheather_f.type_w==2) { this.type_w_2=true}
       else if (wheather_f.type_w==3) { this.type_w_3=true}
       else if (wheather_f.type_w==4) { this.type_w_4=true}
      }
    items: Item[] = 
    [
        { city: "Москва", weather: "Мороз", type_w: "1" },
        { city: "Магнитогорск", weather: "Облачно", type_w: "2"  },
        { city: "Санкт-Петербург", weather: "Дождь c  грозой", type_w: "3"  },
        { city: "Челябинск", weather: "Ясно", type_w: "4"  }
    ];
}