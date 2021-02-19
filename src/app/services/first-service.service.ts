import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {
message = 'Bonjour je suis le first service';
  constructor(
    private loggerService: LoggerService
  ) { }
  logger(){
    this.loggerService.logger(this.message);
  }
}
