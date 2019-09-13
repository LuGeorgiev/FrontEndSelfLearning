import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatListModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
    imports:[
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports:[
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule
    ]
})
export class MaterialModule{

}