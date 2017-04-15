import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ConfirmModalComponent } from "../shared/modals/confirm-modal.component";
import { InformModalComponent } from "../shared/modals/inform-modal.component";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild(ConfirmModalComponent) confirmModal: ConfirmModalComponent;
   @ViewChild(InformModalComponent) informModal: InformModalComponent;

  constructor(@Inject('someThing') private someThing) { }

  ngOnInit() {
    console.log("provider - someThing, it's value:", this.someThing);
  }

  onShowModalClick(modalType: string){
    if(modalType === "confirm"){
      this.confirmModal.Show();
    }
    else if(modalType === "inform"){
      this.informModal.Show();
    }
    
  }

  onModalClicked(m: string){
    console.log("onModalClicked, m", m)
    if(m === "ok"){
      this.confirmModal.Hide();
      this.informModal.Hide();
    }
  }

  onInformation(m: string){
    console.log("onInformation, m", m);    
  }
}
