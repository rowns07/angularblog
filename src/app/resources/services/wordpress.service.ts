import { Injectable } from '@angular/core';
import { DadosPost } from '../classes/dados-post';

@Injectable()
export class WordpressService {

  constructor() { }

  private currentResponsePost: Array<DadosPost>;

  public getCurrentResponsePost(): Array<DadosPost> {
    return this.currentResponsePost;
  }

  public setCurrentResponsePost(currentResponsePost: Array<DadosPost>): void {
    this.currentResponsePost = currentResponsePost;
  }

  public clear(): void {
    this.currentResponsePost = undefined;
  }
}
