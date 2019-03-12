import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatCardModule,
    MatTooltipModule,
    MatBottomSheetModule,
    MatExpansionModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatSnackBarModule,
        MatTableModule,
        MatPaginatorModule,
        MatSelectModule,
        MatCardModule,
        MatExpansionModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatSnackBarModule,
        MatTableModule,
        MatPaginatorModule,
        MatSelectModule,
        MatCardModule,
        MatExpansionModule
    ]
})
export class MaterialModule { }
