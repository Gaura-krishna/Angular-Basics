import { Component, ViewChild,OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css'],
})
export class HttpClientComponent implements OnInit{
  constructor(private http: HttpClient) {
   
  }
  
  ngOnInit():void{
    this.getdata();
    console.log("ngOnint")
  }

  @ViewChild('newtask') Formobj: any;

  upadatemode: boolean = false;
  taskid: any;
  dataarray: any = [];
  taskdata: any;

  //getting the data
  getdata() {
    this.http.get('http://localhost:5000/tasks').subscribe((data) => {
      console.log(data, 'data');
      this.taskdata = data;
      this.dataarray = this.taskdata.Tasks;
      console.log(this.dataarray, 'dataarray');
    });
  }

  //posting the data
  taskpost(data: any) {
    console.log('TASKPOST');
    console.log(data);

    return this.http
      .post('http://localhost:5000/addTask', data)
      .subscribe((result) => {
        console.log(result);
      });
  }

  //updating the task
  updatepost(data: any, id: any) {
    console.log('TASKPOST');
    console.log('update id', id);

    return this.http
      .patch(`http://localhost:5000/edit/${id}`, data)
      .subscribe((result) => {
        console.log(result);
      });
  }

  //onedit
  onedit(task: any) {
    console.log(task._id, 'edit');

    this.taskid = task._id;
    console.log(this.taskid, 'task id in edit');

    let currentobj = this.dataarray.find((obj: any) => task._id === obj._id);

    this.Formobj.setValue({
      title: currentobj.title,
      description: currentobj.description,
      status: currentobj.taskstatus,
    });

    this.upadatemode = true;
  }

  //onsubmit
  submitform(data: any) {

    console.log(this.taskid, 'task is in submit');
    
    if (this.upadatemode) {

      this.updatepost(data, this.taskid);

    } else {

      this.taskpost(data);

    }
  }

  //deleting the task
  deletepost(delid: any) {
    console.log('TASKPOST');
    console.log(delid);

    return this.http.delete(`http://localhost:5000/delete/${delid}`).subscribe((result) =>{
      console.log(result)
    });
  }
}
