export  class Response <T>{
     public  Succeeded:boolean=false;
     public  Message:string="";
     public  Errors:string[]=[];
     public  Data: T| undefined;
}
