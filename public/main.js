(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+NUb":
/*!*****************************************************!*\
  !*** ./src/app/services/syncronize-data.service.ts ***!
  \*****************************************************/
/*! exports provided: SyncronizeDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncronizeDataService", function() { return SyncronizeDataService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SyncronizeDataService {
    constructor() {
        this.users = [
            { idUser: '1', email: 'dassdsad', username: 'daniel' },
            { idUser: '2', email: 'dassdsad', username: 'maria' },
            { idUser: '3', email: 'dassdsad', username: 'sofia' },
            { idUser: '4', email: 'dassdsad', username: 'david' },
            { idUser: '5', email: 'dassdsad', username: 'juan' },
        ];
        this.messages = [
            { user: 'Daniel', content: 'hola', date: '14.00' },
            { user: 'David', content: 'hola', date: '14.00' },
            { user: 'Daniel', content: 'como estas?', date: '14.00' },
            { user: 'David', content: 'bien, y tu?', date: '14.00' },
            { user: 'Daniel', content: 'bien, gracias', date: '14.00' },
        ];
        this.sendMessagesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.sendMessagesObservable = this.sendMessagesSubject.asObservable();
    }
    sendMessage(message) {
        var newMessage = {
            user: 'Daniel', content: message, date: '13.00'
        };
        // this.sendMessagesSubject.next(Object.assign(newMessage, this.messages));
        this.messages.push(newMessage);
    }
    getMessages() {
        return this.messages;
    }
    getUsers() {
    }
    loadAll() {
        this.messages.forEach(i => {
            this.sendMessagesSubject.next();
        });
    }
}
SyncronizeDataService.ɵfac = function SyncronizeDataService_Factory(t) { return new (t || SyncronizeDataService)(); };
SyncronizeDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SyncronizeDataService, factory: SyncronizeDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\danie\Documents\AAPUNTES\Cuarto\DAW2\WhatsUp\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBCqwYOQW8ZaFo2fxRTvv2ggGZfEZASynY",
        authDomain: "whatsup-80e9a.firebaseapp.com",
        projectId: "whatsup-80e9a",
        storageBucket: "whatsup-80e9a.appspot.com",
        messagingSenderId: "555842357677",
        appId: "1:555842357677:web:b9e82f0bc89b62e899f924",
        measurementId: "G-G9T9DVK6PK"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B6QW":
/*!***********************************************************!*\
  !*** ./src/app/components/chatroom/chatroom.component.ts ***!
  \***********************************************************/
/*! exports provided: ChatroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatroomComponent", function() { return ChatroomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_room_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/room.service */ "yWY+");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








const _c0 = ["messageInput"];
function ChatroomComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r6.username);
} }
function ChatroomComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatroomComponent_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.exitChatRoom(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Exit Chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatroomComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatroomComponent_ng_template_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.joinChatRoom(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Join Chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatroomComponent_div_9_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Me");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatroomComponent_div_9_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r11.user);
} }
function ChatroomComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatroomComponent_div_9_span_4_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatroomComponent_div_9_span_5_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r11 = ctx.$implicit;
    const last_r12 = ctx.last;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", last_r12 ? ctx_r4.autoScroll() : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", message_r11.user === ctx_r4.username ? "right-bubble" : "left-bubble");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", message_r11.user === ctx_r4.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", message_r11.user !== ctx_r4.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" at ", message_r11.date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r11.content);
} }
function ChatroomComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChatroomComponent_div_10_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.onSubmit(_r17.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatroomComponent_div_10_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.message = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "send");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r16.form.valid);
} }
class ChatroomComponent {
    constructor(route, roomService, authService) {
        this.route = route;
        this.roomService = roomService;
        this.authService = authService;
        this.message = '';
        this.username = '';
        this.isJoinChat = false;
    }
    ngOnInit() {
        this.getChatRoom();
    }
    getChatRoom() {
        const id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.roomService.getRoom(id).subscribe(data => {
            if (data.length == 0) {
                this.roomService.newChatRoom(id);
            }
            else {
                this.users = data[0]["users"];
                this.messages = data[0]["messages"];
                this.room = data[0];
                this.roomService.setCurrentRoom(data[0]);
            }
            this.username = this.authService.currentUser.username;
        });
    }
    joinChatRoom() {
        this.roomService.setNewUser(this.authService.currentUser);
        this.isJoinChat = true;
    }
    onSubmit(message) {
        var date = new Date().toLocaleTimeString().split(':', 2).join(':');
        var newMessage = {
            user: this.authService.currentUser.username, content: message, date: date
        };
        this.roomService.sendMessage(newMessage);
        this.autoScroll();
        this.messageInput.nativeElement.value = '';
    }
    autoScroll() {
        var chat = document.getElementById('chat-pane');
        chat.scroll({ left: 0, top: document.getElementById('chat-pane').scrollHeight, behavior: 'smooth' });
    }
    exitChatRoom() {
        this.roomService.removeUserChat(this.authService.currentUser);
        this.isJoinChat = false;
    }
}
ChatroomComponent.ɵfac = function ChatroomComponent_Factory(t) { return new (t || ChatroomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_room_service__WEBPACK_IMPORTED_MODULE_2__["RoomService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
ChatroomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatroomComponent, selectors: [["app-chatroom"]], viewQuery: function ChatroomComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.messageInput = _t.first);
    } }, decls: 11, vars: 5, consts: [[1, "row", "mx-0"], [1, "col-2"], [1, "users-pane"], ["class", "users-card", 4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["noJoinChat", ""], [1, "col-10"], ["id", "chat-pane", 1, "chat-pane"], ["class", "message-box", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "users-card"], [1, "username"], ["mat-button", "", 3, "click"], [1, "message-box"], [1, "chat-message"], [1, "rigth-bubble", 3, "ngClass"], ["class", "msg-name", 4, "ngIf"], [1, "msg-date"], [1, "word-grap"], [1, "msg-name"], [1, "d-flex", "justify-content-end"], [2, "width", "80%", 3, "ngSubmit"], ["messageForm", "ngForm"], ["placeholder", "Write message here", "name", "message", "required", "", 1, "messageInput", 3, "ngModel", "ngModelChange"], ["messageInput", ""], ["type", "submit", "mat-icon-button", "", 3, "disabled"]], template: function ChatroomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatroomComponent_div_3_Template, 5, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatroomComponent_div_4_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatroomComponent_ng_template_5_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChatroomComponent_div_9_Template, 10, 6, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ChatroomComponent_div_10_Template, 10, 2, "div", 9);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isJoinChat)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isJoinChat);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], styles: [".users-pane[_ngcontent-%COMP%] {\n  height: 500px;\n  position: relative;\n  overflow: scroll;\n  overflow-x: hidden;\n}\n\n.chat-pane[_ngcontent-%COMP%] {\n  height: 500px;\n  position: relative;\n  overflow: scroll;\n  overflow-x: hidden;\n}\n\n.users-card[_ngcontent-%COMP%] {\n  margin: 5px 20px;\n}\n\n.username[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: 5px;\n  margin-left: 10px;\n}\n\n.message-box[_ngcontent-%COMP%] {\n  float: left;\n  width: 98%;\n  margin: 5px 0 0 2%;\n}\n\n.chat-message[_ngcontent-%COMP%] {\n  width: 80%;\n  min-height: 40px;\n}\n\n.chat-message[_ngcontent-%COMP%]   .right-bubble[_ngcontent-%COMP%] {\n  position: relative;\n  background: #dcf8c6;\n  border-radius: 0.4em 0em 0.4em 0.4em;\n  padding: 5px 10px 10px;\n  left: 15%;\n}\n\n.chat-message[_ngcontent-%COMP%]   .right-bubble[_ngcontent-%COMP%]   span.msg-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n  color: green;\n}\n\n.chat-message[_ngcontent-%COMP%]   .right-bubble[_ngcontent-%COMP%]   span.msg-date[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.chat-message[_ngcontent-%COMP%]   .right-bubble[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  top: 13px;\n  width: 0;\n  height: 0;\n  border: 27px solid transparent;\n  border-left-color: #dcf8c6;\n  border-right: 0;\n  border-top: 0;\n  margin-top: -13.5px;\n  margin-right: -27px;\n}\n\n.chat-message[_ngcontent-%COMP%]   .left-bubble[_ngcontent-%COMP%] {\n  position: relative;\n  background: lightblue;\n  border-top-right-radius: 0.4em;\n  border-bottom-left-radius: 0.4em;\n  border-bottom-right-radius: 0.4em;\n  padding: 5px 10px 10px;\n  left: 5%;\n}\n\n.chat-message[_ngcontent-%COMP%]   .left-bubble[_ngcontent-%COMP%]   span.msg-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n  color: blue;\n}\n\n.chat-message[_ngcontent-%COMP%]   .left-bubble[_ngcontent-%COMP%]   span.msg-date[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.chat-message[_ngcontent-%COMP%]   .left-bubble[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 13px;\n  width: 0;\n  height: 0;\n  border: 27px solid transparent;\n  border-right-color: lightblue;\n  border-left: 0;\n  border-top: 0;\n  margin-top: -13.5px;\n  margin-left: -27px;\n}\n\n.chat-message[_ngcontent-%COMP%]   .chat-status[_ngcontent-%COMP%] {\n  min-height: 49px;\n}\n\n.chat-message[_ngcontent-%COMP%]   .chat-status[_ngcontent-%COMP%]   .chat-date[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  font-style: italic;\n  color: #fff;\n  text-shadow: 0px -1px 0px #222, 0px 1px 0px #aaa;\n  height: 15px;\n  left: 10%;\n  right: 10%;\n}\n\n.chat-message[_ngcontent-%COMP%]   .chat-status[_ngcontent-%COMP%]   .chat-content-center[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  background-color: #e1e1f7;\n  border-radius: 6px;\n  font-size: 12px;\n  color: #555;\n  height: 34px;\n  left: 10%;\n  right: 10%;\n}\n\n.word-grap[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n.messageInput[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGF0cm9vbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7QUFHRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBREE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBSUY7O0FBRkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBS0Y7O0FBSEE7RUFDRSxlQUFBO0FBTUY7O0FBSkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQU9GOztBQUpBO0VBQ0UsZ0JBQUE7QUFPRjs7QUFKQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0RBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFPRjs7QUFKQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBT0Y7O0FBSkE7RUFDRSxxQkFBQTtBQU9GOztBQUpBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUFPRiIsImZpbGUiOiJjaGF0cm9vbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2Vycy1wYW5lIHtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG4uY2hhdC1wYW5lIHtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLnVzZXJzLWNhcmQge1xyXG4gIG1hcmdpbjogNXB4IDIwcHg7XHJcbn1cclxuXHJcbi51c2VybmFtZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLm1lc3NhZ2UtYm94IHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogOTglO1xyXG4gIG1hcmdpbjogNXB4IDAgMCAyJTtcclxufVxyXG5cclxuLmNoYXQtbWVzc2FnZSB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtaW4taGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uY2hhdC1tZXNzYWdlIC5yaWdodC1idWJibGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiAjZGNmOGM2O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNGVtIDAuMGVtIDAuNGVtIDAuNGVtO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4IDEwcHg7XHJcbiAgbGVmdDogMTUlO1xyXG59XHJcblxyXG4uY2hhdC1tZXNzYWdlIC5yaWdodC1idWJibGUgc3Bhbi5tc2ctbmFtZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG4uY2hhdC1tZXNzYWdlIC5yaWdodC1idWJibGUgc3Bhbi5tc2ctZGF0ZSB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4uY2hhdC1tZXNzYWdlIC5yaWdodC1idWJibGU6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDEzcHg7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJvcmRlcjogMjdweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItbGVmdC1jb2xvcjogI2RjZjhjNjtcclxuICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgYm9yZGVyLXRvcDogMDtcclxuICBtYXJnaW4tdG9wOiAtMTMuNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTI3cHg7XHJcbn1cclxuLmNoYXQtbWVzc2FnZSAubGVmdC1idWJibGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IC40ZW07XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogLjRlbTtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjRlbTtcclxuICBwYWRkaW5nOiA1cHggMTBweCAxMHB4O1xyXG4gIGxlZnQ6IDUlO1xyXG59XHJcbi5jaGF0LW1lc3NhZ2UgLmxlZnQtYnViYmxlIHNwYW4ubXNnLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogYmx1ZTtcclxufVxyXG4uY2hhdC1tZXNzYWdlIC5sZWZ0LWJ1YmJsZSBzcGFuLm1zZy1kYXRlIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuLmNoYXQtbWVzc2FnZSAubGVmdC1idWJibGU6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMTNweDtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgYm9yZGVyOiAyN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogbGlnaHRibHVlO1xyXG4gIGJvcmRlci1sZWZ0OiAwO1xyXG4gIGJvcmRlci10b3A6IDA7XHJcbiAgbWFyZ2luLXRvcDogLTEzLjVweDtcclxuICBtYXJnaW4tbGVmdDogLTI3cHg7XHJcbn1cclxuXHJcbi5jaGF0LW1lc3NhZ2UgLmNoYXQtc3RhdHVzIHtcclxuICBtaW4taGVpZ2h0OiA0OXB4O1xyXG59XHJcblxyXG4uY2hhdC1tZXNzYWdlIC5jaGF0LXN0YXR1cyAuY2hhdC1kYXRlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtc2hhZG93OiAwcHggLTFweCAwcHggIzIyMiwgMHB4IDFweCAwcHggI2FhYTtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgbGVmdDogMTAlO1xyXG4gIHJpZ2h0OjEwJTtcclxufVxyXG5cclxuLmNoYXQtbWVzc2FnZSAuY2hhdC1zdGF0dXMgLmNoYXQtY29udGVudC1jZW50ZXIge1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWUxZjc7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzU1NTtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbiAgbGVmdDogMTAlO1xyXG4gIHJpZ2h0OjEwJTtcclxufVxyXG5cclxuLndvcmQtZ3JhcCB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4ubWVzc2FnZUlucHV0IHtcclxuICB3aWR0aDogODAlO1xyXG4gIGhlaWdodDogMzBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_server_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/server.service */ "H9vK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




function HomeComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Last updated 3 mins ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Join here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const server_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/assets/imgs/", server_r1.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", server_r1.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](server_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](server_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/chatroom/", server_r1.idServer, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class HomeComponent {
    constructor(serverService) {
        this.serverService = serverService;
        this.message = 'mensaje';
    }
    ngOnInit() {
        this.serverService.getServers().subscribe(servers => {
            this.servers = servers;
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 11, vars: 1, consts: [[1, "parallax"], [1, "overImage"], [1, "textOver"], [1, "title"], [1, "servers"], [1, "row", "row-cols-1", "row-cols-md-3", "mx-0"], ["class", "col mb-3", 4, "ngFor", "ngForOf"], [1, "col", "mb-3"], [1, "card", "text-white", "bg-dark"], [1, "card-img-top", 3, "src", "alt"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "card-footer", "d-flex"], [1, "text-muted"], [1, "spacer"], ["mat-flat-button", "", "color", "primary", 3, "href"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Find the best rooms to chat with people from over the world and talk about different topics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "WhatsUp!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_div_10_Template, 14, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.servers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"]], styles: [".parallax[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/imgs/undraw_researching_22gp.png\");\n  height: 600px;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n\n.overImage[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 150px;\n  background-color: #11111154;\n  position: absolute;\n  left: 50%;\n  translate: -50%;\n  top: 5%;\n  padding: 18px;\n  text-align: center;\n}\n\n.textOver[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.title[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 30px;\n}\n\n.servers[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  z-index: 1;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.example-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUVBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtRkFBQTtFQUNBLHNCQUFBO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJhbGxheCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZ3MvdW5kcmF3X3Jlc2VhcmNoaW5nXzIyZ3AucG5nJyk7XHJcbiAgaGVpZ2h0OiA2MDBweDsgXHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm92ZXJJbWFnZSB7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTExMTU0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNsYXRlOiAtNTAlO1xyXG4gIHRvcDogNSU7XHJcbiAgcGFkZGluZzogMThweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZXh0T3ZlciB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4uc2VydmVycyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "H9vK":
/*!********************************************!*\
  !*** ./src/app/services/server.service.ts ***!
  \********************************************/
/*! exports provided: ServerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerService", function() { return ServerService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");



class ServerService {
    constructor(fs) {
        this.fs = fs;
        this.serversList = fs.collection('servers');
    }
    getServers() {
        this.servers = this.serversList.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(actions => actions.map(a => {
            const data = a.payload.doc.data();
            data.key = a.payload.doc.id;
            return data;
        })));
        return this.servers;
    }
}
ServerService.ɵfac = function ServerService_Factory(t) { return new (t || ServerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
ServerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ServerService, factory: ServerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "JJjX":
/*!********************************************!*\
  !*** ./src/app/server/server.component.ts ***!
  \********************************************/
/*! exports provided: ServerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerComponent", function() { return ServerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _david_david_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./david/david.component */ "XYHH");
/* harmony import */ var _maria_maria_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maria/maria.component */ "Kg6O");



class ServerComponent {
    constructor() {
        this.message = 'mensaje';
    }
    ngOnInit() {
    }
    sendMessage() {
        this.message = "desde servidor";
    }
}
ServerComponent.ɵfac = function ServerComponent_Factory(t) { return new (t || ServerComponent)(); };
ServerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServerComponent, selectors: [["app-server"]], decls: 14, vars: 1, consts: [[3, "click"], [1, "chatArea"], [1, "row", "mx-0"], [1, "col-6"]], template: function ServerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Server Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServerComponent_Template_button_click_5_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "sendMessage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-david");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-maria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    } }, directives: [_david_david_component__WEBPACK_IMPORTED_MODULE_1__["DavidComponent"], _maria_maria_component__WEBPACK_IMPORTED_MODULE_2__["MariaComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Kg6O":
/*!*************************************************!*\
  !*** ./src/app/server/maria/maria.component.ts ***!
  \*************************************************/
/*! exports provided: MariaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MariaComponent", function() { return MariaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_syncronize_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/syncronize-data.service */ "+NUb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






function MariaComponent_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r2 = ctx.$implicit;
    const last_r3 = ctx.last;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", last_r3 ? ctx_r0.autoScroll() : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r2.content);
} }
class MariaComponent {
    constructor(syncronizeData) {
        this.syncronizeData = syncronizeData;
        this.messageMaria = "maria";
        this.updateMessages = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.messages = this.syncronizeData.getMessages();
        this.syncronizeData.sendMessagesObservable.subscribe(messages => {
            this.messages = messages;
        });
    }
    sendMessage(message) {
        // this.messageMaria = "enviar mensaje desde maria"
        // this.updateMessages.emit(this.messageMaria)
        // this.syncronizeData.messages = this.messageMaria
        this.syncronizeData.sendMessage(message);
    }
    autoScroll() {
        document.getElementById('chat2').scroll({ left: 0, top: document.getElementById('chat2').scrollHeight, behavior: 'smooth' });
    }
}
MariaComponent.ɵfac = function MariaComponent_Factory(t) { return new (t || MariaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_syncronize_data_service__WEBPACK_IMPORTED_MODULE_1__["SyncronizeDataService"])); };
MariaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MariaComponent, selectors: [["app-maria"]], inputs: { messageMaria: "messageMaria" }, outputs: { updateMessages: "updateMessages" }, decls: 10, vars: 1, consts: [["id", "chat2", 1, "chat"], [4, "ngFor", "ngForOf"], ["type", "text", "id", "message", "name", "message"], ["messageInput", ""], ["mat-icon-button", "", 3, "click"], [1, "word-wrap"]], template: function MariaComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Soy maria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MariaComponent_ul_3_Template, 4, 2, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MariaComponent_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); ctx.sendMessage(_r1.value); return _r1.value = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], styles: [".chat[_ngcontent-%COMP%] {\n  height: 300px;\n  position: relative;\n  overflow: scroll;\n  overflow-x: hidden;\n}\n\n.word-grap[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYXJpYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0YiLCJmaWxlIjoibWFyaWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdCB7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi53b3JkLWdyYXAge1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "QHyY":
/*!*********************************************!*\
  !*** ./src/app/server/components.module.ts ***!
  \*********************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _david_david_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./david/david.component */ "XYHH");
/* harmony import */ var _maria_maria_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maria/maria.component */ "Kg6O");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ComponentsModule {
}
ComponentsModule.ɵfac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); };
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_david_david_component__WEBPACK_IMPORTED_MODULE_1__["DavidComponent"],
        _maria_maria_component__WEBPACK_IMPORTED_MODULE_2__["MariaComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]], exports: [_david_david_component__WEBPACK_IMPORTED_MODULE_1__["DavidComponent"],
        _maria_maria_component__WEBPACK_IMPORTED_MODULE_2__["MariaComponent"]] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'WhatsUp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [[1, "row", "mx-0"], [1, "col-2", "px-0"], [1, "col-10", "px-0"], [1, "container", "pt-5"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function LoginComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_34_Template_button_click_3_listener() { const modal_r3 = ctx.$implicit; return modal_r3.dismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 10, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_ng_template_34_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onSignUp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_ng_template_34_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_ng_template_34_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_ng_template_34_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Repeat password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Agree to terms and conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_34_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const modal_r3 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); modal_r3.close(); return ctx_r11.clearForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r4.form.valid);
} }
class LoginComponent {
    constructor(authService, router, modal) {
        this.authService = authService;
        this.router = router;
        this.modal = modal;
        this.islogged = false;
        this.email = "daniel@hotmail.es";
        this.password = "123456";
        this.username = "Daniel";
    }
    ngOnInit() {
    }
    openModal(content) {
        this.modal.open(content, { size: 'lg', centered: true });
    }
    onSignUp() {
        this.authService.signUp(this.username, this.email, this.password)
            .then((result) => {
            this.modal.dismissAll();
        })
            .catch(error => {
            console.log(error);
        });
    }
    onSignIn() {
        this.authService.signIn(this.email, this.password)
            .then((result) => {
            // this.router.navigate(['/home'])
        })
            .catch(error => {
            console.log(error);
        });
    }
    clearForm() {
        this.email = '';
        this.username = '';
        this.password = '';
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 36, vars: 2, consts: [[1, "containerLogin"], [1, "myrow"], [1, "text-center"], [1, "vl"], [1, "inner"], [1, "mycol"], ["href", "", 1, "fb", "btn"], ["href", "", 1, "twitter", "btn"], ["href", "", 1, "google", "btn"], [1, "hide-md-lg"], [3, "ngSubmit"], ["signInForm", "ngForm"], ["type", "email", "id", "email", "name", "email", "placeholder", "Email", "required", "", 3, "ngModel", "ngModelChange"], ["type", "password", "id", "password", "name", "password", "placeholder", "Password", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-success"], [1, "bottom-container"], [1, "row", "mx-0"], [1, "col"], [1, "text-white"], [1, "text-white", 3, "click"], ["href", "", 1, "text-white"], ["signUpModal", ""], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["signUpForm", "ngForm"], [1, "form-group", "row"], [1, "col-md-6", "col-12", "mb-3"], ["for", "username"], ["type", "text", "id", "username", "name", "username", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password2"], ["type", "password", "id", "password2", "name", "password2", "required", "", 1, "form-control"], [1, "form-group", "form-check"], ["type", "checkbox", "id", "check", "name", "check", "required", "", 1, "form-check-input"], ["for", "check", 1, "form-check-label"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "btn", "btn-danger", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login with Social Media or Manually");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "or");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Login with Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Login with Twitter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Login with Google+ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Or sign in manually:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_18_listener() { return ctx.onSignIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_20_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_21_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Don\u2019t you have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35); return ctx.openModal(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, LoginComponent_ng_template_34_Template, 36, 4, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".containerLogin[_ngcontent-%COMP%] {\n  border-radius: 5px 5px 0px 0px;\n  background-color: #1111;\n  padding-top: 20px;\n  position: relative;\n  \n  \n  \n  \n  \n  \n  \n  \n  \n}\n.containerLogin[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .containerLogin[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: none;\n  border-radius: 4px;\n  margin: 5px 0;\n  opacity: 0.85;\n  display: inline-block;\n  font-size: 17px;\n  line-height: 20px;\n  text-decoration: none;\n  \n}\n.containerLogin[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover, .containerLogin[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.containerLogin[_ngcontent-%COMP%]   .fb[_ngcontent-%COMP%] {\n  background-color: #3B5998;\n  color: white;\n}\n.containerLogin[_ngcontent-%COMP%]   .twitter[_ngcontent-%COMP%] {\n  background-color: #55ACEE;\n  color: white;\n}\n.containerLogin[_ngcontent-%COMP%]   .google[_ngcontent-%COMP%] {\n  background-color: #dd4b39;\n  color: white;\n}\n.containerLogin[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  background-color: #04AA6D;\n  color: white;\n  cursor: pointer;\n}\n.containerLogin[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:hover {\n  background-color: #45a049;\n}\n.containerLogin[_ngcontent-%COMP%]   .mycol[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n  margin: auto;\n  padding: 0 50px;\n  margin-top: 6px;\n}\n.containerLogin[_ngcontent-%COMP%]   .myrow[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.containerLogin[_ngcontent-%COMP%]   .vl[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%);\n  border: 2px solid #ddd;\n  height: 175px;\n}\n.containerLogin[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #f1f1f1;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  padding: 10px 14px;\n}\n.containerLogin[_ngcontent-%COMP%]   .hide-md-lg[_ngcontent-%COMP%] {\n  display: none;\n}\n.containerLogin[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: #666666;\n  border-radius: 0px 0px 5px 5px;\n  padding-top: 10px;\n  font-size: 16px;\n  margin-top: 20px;\n}\n.containerSignUp[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background-color: #f2f2f2;\n  padding: 20px;\n}\n\n@media screen and (max-width: 650px) {\n  .col[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 0;\n  }\n\n  \n  .vl[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  \n  .hide-md-lg[_ngcontent-%COMP%] {\n    display: block;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3QkFBQTtBQUNBO0VBQ0UsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQ0FBQTtFQW9CQSw2REFBQTtFQWdCQSw0QkFBQTtFQVdBLHNCQUFBO0VBU0EsbUNBQUE7RUFPQSxrQkFBQTtFQVNBLGtDQUFBO0VBV0EsK0NBQUE7RUFJQSxxQkFBQTtBQS9FRjtBQVBFOztFQUVFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQXVCLGtDQUFBO0FBVTNCO0FBUEU7O0VBRUUsVUFBQTtBQVNKO0FBTEU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFPSjtBQUpFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBTUo7QUFIRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQUtKO0FBREU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBR0o7QUFBRTtFQUNFLHlCQUFBO0FBRUo7QUFFRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQUo7QUFJRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUZKO0FBTUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQUpKO0FBUUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBTko7QUFVRTtFQUNFLGFBQUE7QUFSSjtBQVdFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFUSjtBQWFBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUFWRjtBQWFBLCtJQUFBO0FBQ0E7RUFDRTtJQUNFLFdBQUE7SUFDQSxhQUFBO0VBVkY7O0VBWUEsMkJBQUE7RUFDQTtJQUNFLGFBQUE7RUFURjs7RUFXQSwwQ0FBQTtFQUNBO0lBQ0UsY0FBQTtJQUNBLGtCQUFBO0VBUkY7QUFDRiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlIHRoZSBjb250YWluZXIgKi9cclxuLmNvbnRhaW5lckxvZ2luIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDBweCAwcHg7O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTExO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLyogc3R5bGUgaW5wdXRzIGFuZCBsaW5rIGJ1dHRvbnMgKi9cclxuICBpbnB1dCxcclxuICAuYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICBvcGFjaXR5OiAwLjg1O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IC8qIHJlbW92ZSB1bmRlcmxpbmUgZnJvbSBhbmNob3JzICovXHJcbiAgfVxyXG5cclxuICBpbnB1dDpob3ZlcixcclxuICAuYnRuOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICAvKiBhZGQgYXBwcm9wcmlhdGUgY29sb3JzIHRvIGZiLCB0d2l0dGVyIGFuZCBnb29nbGUgYnV0dG9ucyAqL1xyXG4gIC5mYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0I1OTk4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLnR3aXR0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1QUNFRTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5nb29nbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkNGIzOTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC8qIHN0eWxlIHRoZSBzdWJtaXQgYnV0dG9uICovXHJcbiAgaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcclxuICB9XHJcblxyXG4gIC8qIFR3by1jb2x1bW4gbGF5b3V0ICovXHJcbiAgLm15Y29sIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDAgNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICB9XHJcblxyXG4gIC8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xyXG4gIC5teXJvdzphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcblxyXG4gIC8qIHZlcnRpY2FsIGxpbmUgKi9cclxuICAudmwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZGRkO1xyXG4gICAgaGVpZ2h0OiAxNzVweDtcclxuICB9XHJcblxyXG4gIC8qIHRleHQgaW5zaWRlIHRoZSB2ZXJ0aWNhbCBsaW5lICovXHJcbiAgLmlubmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTRweDtcclxuICB9XHJcblxyXG4gIC8qIGhpZGUgc29tZSB0ZXh0IG9uIG1lZGl1bSBhbmQgbGFyZ2Ugc2NyZWVucyAqL1xyXG4gIC5oaWRlLW1kLWxnIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC8qIGJvdHRvbSBjb250YWluZXIgKi9cclxuICAuYm90dG9tLWNvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2NjY2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lclNpZ25VcHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIGxheW91dCAtIHdoZW4gdGhlIHNjcmVlbiBpcyBsZXNzIHRoYW4gNjUwcHggd2lkZSwgbWFrZSB0aGUgdHdvIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAuY29sIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbiAgLyogaGlkZSB0aGUgdmVydGljYWwgbGluZSAqL1xyXG4gIC52bCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAvKiBzaG93IHRoZSBoaWRkZW4gdGV4dCBvbiBzbWFsbCBzY3JlZW5zICovXHJcbiAgLmhpZGUtbWQtbGcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "XYHH":
/*!*************************************************!*\
  !*** ./src/app/server/david/david.component.ts ***!
  \*************************************************/
/*! exports provided: DavidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DavidComponent", function() { return DavidComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_syncronize_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/syncronize-data.service */ "+NUb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






function DavidComponent_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r2 = ctx.$implicit;
    const last_r3 = ctx.last;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", last_r3 ? ctx_r0.autoScroll() : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r2.content);
} }
class DavidComponent {
    constructor(syncronizeData) {
        this.syncronizeData = syncronizeData;
        this.messageDavid = "david";
        this.updateMessages = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.message = '';
    }
    ngOnInit() {
        this.syncronizeData.sendMessagesObservable.subscribe(messages => {
            this.messages = messages;
        });
    }
    sendMessage(message) {
        // this.messageDavid = "enviar mensaje desde david"
        // this.updateMessages.emit(this.messageDavid)
        this.syncronizeData.sendMessage(message);
    }
    getMessages() {
        this.messages = this.syncronizeData.getMessages();
    }
    autoScroll() {
        document.getElementById('chat').scroll({ left: 0, top: document.getElementById('chat').scrollHeight, behavior: 'smooth' });
    }
}
DavidComponent.ɵfac = function DavidComponent_Factory(t) { return new (t || DavidComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_syncronize_data_service__WEBPACK_IMPORTED_MODULE_1__["SyncronizeDataService"])); };
DavidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DavidComponent, selectors: [["app-david"]], inputs: { messageDavid: "messageDavid" }, outputs: { updateMessages: "updateMessages" }, decls: 12, vars: 1, consts: [["id", "chat", 1, "chat"], [4, "ngFor", "ngForOf"], ["type", "text", "id", "message", "name", "message"], ["messageInput", ""], ["mat-icon-button", "", 3, "click"], [3, "click"], [1, "word-wrap"]], template: function DavidComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Soy david");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DavidComponent_ul_3_Template, 4, 2, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DavidComponent_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); ctx.sendMessage(_r1.value); return _r1.value = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DavidComponent_Template_button_click_9_listener() { return ctx.getMessages(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "get");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], styles: [".chat[_ngcontent-%COMP%] {\n  height: 300px;\n  position: relative;\n  overflow: scroll;\n  overflow-x: hidden;\n}\n\n.word-grap[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkYXZpZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0YiLCJmaWxlIjoiZGF2aWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdCB7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi53b3JkLWdyYXAge1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _server_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server/components.module */ "QHyY");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _services_room_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/room.service */ "yWY+");
/* harmony import */ var _services_server_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/server.service */ "H9vK");
/* harmony import */ var _services_syncronize_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/syncronize-data.service */ "+NUb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _server_server_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./server/server.component */ "JJjX");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/chatroom/chatroom.component */ "B6QW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ "fXoL");






// firestore



// services




// angular material




// components









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({ providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _services_syncronize_data_service__WEBPACK_IMPORTED_MODULE_12__["SyncronizeDataService"], _services_room_service__WEBPACK_IMPORTED_MODULE_10__["RoomService"], _services_server_service__WEBPACK_IMPORTED_MODULE_11__["ServerService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _server_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebaseConfig),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__["NavbarComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"],
        _server_server_component__WEBPACK_IMPORTED_MODULE_20__["ServerComponent"],
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_21__["SidebarComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
        _components_chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_23__["ChatroomComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _server_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"]] }); })();


/***/ }),

/***/ "cT6d":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        console.log(this.authService.currentUser, 'guard');
        if (localStorage.getItem('user') == null) {
            console.log('no logged');
            this.router.navigate(['/login']);
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");







function NavbarComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_13_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onSignOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.authService.currentUser.username);
} }
function NavbarComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(authService) {
        this.authService = authService;
        this.username = "";
    }
    ngOnInit() {
        this.getCurrentUser();
    }
    getCurrentUser() {
        if (this.authService.isAuth) {
            var user = this.authService.getCurrentUser();
        }
    }
    onSignOut() {
        this.authService.signOut();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 16, vars: 2, consts: [["color", "primary"], ["mat-button", "", "href", "/server", 1, "mynav-item"], ["mat-button", "", "href", "/friends", 1, "mynav-item"], ["mat-button", "", "href", "/home", 1, "mynav-item"], ["mat-button", "", "href", "/david", 1, "mynav-item"], ["mat-button", "", "href", "/maria", 1, "mynav-item"], [1, "example-spacer"], [4, "ngIf", "ngIfElse"], ["noSignIn", ""], ["mat-button", "", 1, "mynav-item"], ["mat-icon-button", "", "matTooltip", "Add server", 1, "mynav-item"], ["mat-icon-button", "", "matTooltip", "Sign Out", 1, "mynav-item", 3, "click"], ["mat-icon-button", "", "matTooltip", "Edit profile", 1, "mynav-item"], ["mat-icon-button", "", "matTooltip", "Sign In", "href", "/login", 1, "mynav-item"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Servers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "David");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Maria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NavbarComponent_div_13_Template, 12, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NavbarComponent_ng_template_14_Template, 3, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.currentUser)("ngIfElse", _r1);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.mynav-item[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #ffffff;\n  font-size: 20px;\n  border-radius: 5px;\n}\n\n.mynav-item[_ngcontent-%COMP%]:hover {\n  background-color: #862dac;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0YiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLm15bmF2LWl0ZW0ge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ubXluYXYtaXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg2MmRhYztcclxufSJdfQ== */"] });


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");




class AuthService {
    constructor(afAuth, router, fs, ngZone) {
        this.afAuth = afAuth;
        this.router = router;
        this.fs = fs;
        this.ngZone = ngZone;
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.user = user;
                this.setCurrentUser(user);
                localStorage.setItem('user', this.user);
                localStorage.getItem('user');
            }
            else {
                this.currentUser = null;
                localStorage.setItem('user', null);
                localStorage.getItem('user');
            }
        });
    }
    get isAuth() {
        return (localStorage.getItem('user') === null) ? false : true;
    }
    getCurrentUser() {
        return this.currentUser;
    }
    signUp(username, email, password) {
        return this.afAuth.createUserWithEmailAndPassword(email.trim(), password)
            .then((result) => {
            result.user.updateProfile({
                displayName: username
            });
        })
            .catch(error => {
            console.log(error);
        });
    }
    signIn(email, password) {
        return this.afAuth.signInWithEmailAndPassword(email.trim(), password)
            .then((result) => {
            this.ngZone.run(() => {
                this.router.navigate(['/home']);
            });
            this.setCurrentUser(result.user);
            this.user = result;
        })
            .catch(error => {
            console.log(error);
        });
    }
    signInGoogle() {
        // return this.authLogin(new firebase.default.auth.GoogleAuthProvider).then(credential => this.setCurrentUser(credential.user))
    }
    signInFacebook() {
        // return this.authLogin(new auth.FacebookAuthProvider).then(credential => this.setCurrentUser(credential.user))
    }
    signInTwitter() {
        // return this.authLogin(new auth.TwitterAuthProvider).then(credential => this.setCurrentUser(credential.user))
    }
    authLogin(provider) {
        return this.afAuth.signInWithPopup(provider)
            .then((result) => {
            this.ngZone.run(() => {
                this.router.navigate(['/chatroom']);
            });
            this.setCurrentUser(result.user);
        }).catch((error) => {
            console.log(error);
        });
    }
    signOut() {
        this.currentUser = null;
        this.afAuth.signOut().then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['/home']);
        });
    }
    setCurrentUser(user) {
        this.currentUser = {
            idUser: user.uid,
            username: user.displayName,
            email: user.email,
        };
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _server_david_david_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server/david/david.component */ "XYHH");
/* harmony import */ var _server_maria_maria_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./server/maria/maria.component */ "Kg6O");
/* harmony import */ var _server_server_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./server/server.component */ "JJjX");
/* harmony import */ var _components_chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/chatroom/chatroom.component */ "B6QW");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guard/auth.guard */ "cT6d");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'david', component: _server_david_david_component__WEBPACK_IMPORTED_MODULE_3__["DavidComponent"] },
    { path: 'maria', component: _server_maria_maria_component__WEBPACK_IMPORTED_MODULE_4__["MariaComponent"] },
    { path: 'server', component: _server_server_component__WEBPACK_IMPORTED_MODULE_5__["ServerComponent"] },
    { path: 'chatroom/:id', component: _components_chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_6__["ChatroomComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: '**', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "yWY+":
/*!******************************************!*\
  !*** ./src/app/services/room.service.ts ***!
  \******************************************/
/*! exports provided: RoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomService", function() { return RoomService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");



class RoomService {
    constructor(fs) {
        this.fs = fs;
        this.roomsList = fs.collection('chatroom');
    }
    getRooms() {
        this.rooms = this.roomsList.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(actions => actions.map(a => {
            const data = a.payload.doc.data();
            data.key = a.payload.doc.id;
            return data;
        })));
        return this.rooms;
    }
    getRoom(id) {
        return this.fs.collection('chatroom', ref => ref.where('idRoom', '==', id)).valueChanges();
    }
    newChatRoom(id) {
        const key = this.fs.createId();
        var room = {
            key: key,
            idRoom: id,
            users: [],
            messages: []
        };
        this.setCurrentRoom(room);
        this.fs.doc(`chatroom/${key}`).set(room);
    }
    setCurrentRoom(room) {
        this.currentRoom = {
            key: room.key,
            idRoom: room.idRoom,
            users: room.users,
            messages: room.messages,
        };
    }
    setNewUser(user) {
        var isNewUser = true;
        this.currentRoom.users.forEach(elemt => {
            if (elemt.email == user.email) {
                isNewUser = false;
            }
        });
        if (isNewUser) {
            this.currentRoom.users.push(user);
            this.roomsList.ref.doc(this.currentRoom.key).update(this.currentRoom);
        }
    }
    removeUserChat(user) {
        // this.currentRoom.users.filter(item => item.email !== user.email)
        var users = [];
        this.currentRoom.users.forEach(item => {
            if (item.email !== user.email) {
                users.push(item);
            }
        });
        this.currentRoom.users = users;
        this.roomsList.ref.doc(this.currentRoom.key).update(this.currentRoom);
    }
    sendMessage(message) {
        this.currentRoom.messages.push(message);
        this.roomsList.ref.doc(this.currentRoom.key).update(this.currentRoom);
    }
    updateRoom(room) {
        this.roomsList.ref.doc(room.key).update(room);
    }
    deleteRoom(key) {
        this.roomsList.doc(key).delete();
    }
}
RoomService.ɵfac = function RoomService_Factory(t) { return new (t || RoomService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
RoomService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RoomService, factory: RoomService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");



class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 51, vars: 0, consts: [[1, "sidebar"], [1, "nav", "flex-column"], [1, "nav-item"], ["href", "/home", 1, "link-nav"], ["mat-icon-button", ""], [1, "m-2"], ["href", "", 1, "link-nav"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "videogame_asset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Gaming");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "music_note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Music");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "import_contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Manga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "school");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "developer_board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Tech");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Favorites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]], styles: [".sidebar[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 16.67%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  background-color: #7b1fa2;\n}\n\n.nav-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 20px;\n  padding-left: 20px;\n}\n\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #862dac;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQ0E7RUFFRSx5QkFBQTtBQUNGIiwiZmlsZSI6InNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxNi42NyU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdiMWZhMjtcclxufVxyXG5cclxuLm5hdi1pdGVtIGJ1dHRvbntcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcbi5uYXYtaXRlbSBhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm5hdiBsaTpob3ZlcntcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjNjUwMDkxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NjJkYWM7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map