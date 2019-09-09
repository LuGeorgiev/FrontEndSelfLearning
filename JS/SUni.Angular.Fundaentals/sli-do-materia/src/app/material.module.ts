import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatListModule } from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
    imports:[
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule
    ],
    exports:[
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule
    ]
})
export class MaterialModule{

}