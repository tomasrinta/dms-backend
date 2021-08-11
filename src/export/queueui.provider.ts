import { setQueues } from 'bull-board';
import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class QueueUIProvider {
  constructor(@InjectQueue('export-queue') private readonly queue: Queue) {
    setQueues([queue]);
  }
}