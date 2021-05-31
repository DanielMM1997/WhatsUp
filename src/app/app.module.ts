import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './server/components.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// firestore
import { AngularFireModule } from '@angular/fire'
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

// services
import { AuthService } from "./services/auth.service";
import { RoomService } from "./services/room.service";
import { ServerService } from "./services/server.service";
import { SyncronizeDataService } from "./services/syncronize-data.service";

// angular material
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ServerComponent } from './server/server.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { ChatroomComponent } from './components/chatroom/chatroom.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBCqwYOQW8ZaFo2fxRTvv2ggGZfEZASynY",
  authDomain: "whatsup-80e9a.firebaseapp.com",
  projectId: "whatsup-80e9a",
  storageBucket: "whatsup-80e9a.appspot.com",
  messagingSenderId: "555842357677",
  appId: "1:555842357677:web:b9e82f0bc89b62e899f924",
  measurementId: "G-G9T9DVK6PK"
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ServerComponent,
    SidebarComponent,
    LoginComponent,
    ChatroomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    NgbModule,
    MatTooltipModule,
  ],
  providers: [AuthService, SyncronizeDataService, RoomService, ServerService],
  bootstrap: [AppComponent]
})


export class AppModule { }

