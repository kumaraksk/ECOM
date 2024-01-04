import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-email-confirm',
  templateUrl: './email-confirm.component.html',
  styleUrls: ['./email-confirm.component.css']
})
export class EmailConfirmComponent implements OnInit {
  successMsg:string='';
  constructor(private route:ActivatedRoute , private userService: UserService) { }
  ngOnInit(): void {
   this.confirmEmail();
  }
 confirmEmail(){
  var userid = this.route.snapshot.paramMap.get('userid');
  var code = this.route.snapshot.paramMap.get('code')
 this.userService.confirmEmail(userid==null?'0':userid, code==null?'0':code).subscribe((response:any)=>{
  this.successMsg=response.message;
 }
 )
 }
}
