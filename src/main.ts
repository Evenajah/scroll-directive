import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { DragableDirective } from './dragable.directive';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, DragableDirective],
  template: `
  <div style="max-width:100vw">
    <div appDragable style="display:flex;cursor:default;overflow:auto">
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
  
    </div>
    </div>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
