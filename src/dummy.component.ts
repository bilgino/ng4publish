import { Component } from '@angular/core';

@Component({
    selector: 'dummy-component',
    template: `
        <div>Dummy Component</div>
    `,
    styles: [`
        h1 {
            padding: 10px;
            border: solid 4px black;
        }
    `]
})
export class DemoComponent {
}
