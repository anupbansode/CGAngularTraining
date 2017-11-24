//# sourceMappingURL=app.component.js.map
import { Component } from '@angular/core'

@Component({
    selector : 'pm-anup',
    template : `
    <div><h1>{{pageTitle}}</h1>
       <div>My First Component with Anup as selector tag.</div>
       <pm-productlist></pm-productlist>
    </div>
    

    `
}
)

export class AppComponent {
    pageTitle : string = 'AB Product Management';
}
