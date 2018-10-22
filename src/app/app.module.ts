import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from './../environments/environment';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { TaskItemComponent } from './task-item/task-item.component';
import { MatLineModule } from '@angular/material/core';
import { TaskListComponent } from './task-list/task-list.component';

import { TaskService } from './task.service';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TaskItemComponent,
    TaskListComponent,
    TaskDialogComponent
  ],
  entryComponents: [
    TaskDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    MatToolbarModule,
    MatListModule,
    MatLineModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
