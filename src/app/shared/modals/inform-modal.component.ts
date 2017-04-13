import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal'

@Component({
    moduleId: module.id,
    selector: 'inform-modal',
    templateUrl: 'inform-modal.component.html'
})

export class InformModalComponent implements OnInit {
    @ViewChild('smModalInform') smModal:ModalDirective;

    @Input() title = "Please Confirm";
    @Input() body = "This is my body";
    @Output() onClicked = new EventEmitter<string>();
    @Output() onInformation = new EventEmitter<string>();
    information: string;

    constructor() { }

    ngOnInit() { }

    onOk(){
        console.log("onOk");
        this.onClicked.emit("ok");
        this.onInformation.emit(this.information);
    }
    onCancel(){
        console.log("onCancel");
        this.onClicked.emit("cancel");
    }

    Show(){
        this.smModal.show();
    }

    Hide(){
        
        this.smModal.hide();
    }
    setInformation(){
        this.onInformation.emit(this.information);
    }
}