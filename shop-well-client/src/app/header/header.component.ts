import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: NgbModal,private router:Router) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
  ngOnInit(): void {
  }
  logOut = () => {
    localStorage.removeItem("jwt");
    this.router.navigate(['login']);
  }
  isUserAuthenticated() {
    const token = localStorage.getItem("jwt");
    if (token) {
      return true;
    }
    else {
      return false;
    }
  }

}
