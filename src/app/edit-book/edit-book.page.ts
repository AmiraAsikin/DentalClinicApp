import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Book } from 'src/app/models/book.mode';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.page.html',
  styleUrls: ['./edit-book.page.scss'],
})
export class EditBookPage implements OnInit {
  book = {} as Book;
  id: any;
  constructor(
    private actRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private firestore: AngularFirestore,
    private toastCtrl: ToastController,
    private navCtrl: NavController
    ) {
    this.id = this.actRoute.snapshot.paramMap.get("id");
   }
  

  ngOnInit() {
    this.getBookById(this.id);
  }

  async getBookById(id: string){
  //show loader
  let loader = this.loadingCtrl.create({
  message: "Please wait..."
  });
  (await loader).present();

  this.firestore.doc("AppointmentBooking/" + id)
  .valueChanges()
  .subscribe(data => {
    this.book.name = data["name"];
    this.book.email = data["email"];
    this.book.phone = data["phone"];
    this.book.treatment = data["treatment"];
    this.book.date = data["date"];
    this.book.time = data["time"];
  });
  //dismiss loader
  (await loader).dismiss();
  }

  async updateBook(book: Book){
    if(this.formValidation()) {
      //show loader
      let loader = this.loadingCtrl.create({
      message: "Please wait..."
      });
      (await loader).present();
  
      try{
       
        await this.firestore.doc("AppointmentBooking/" + this.id).update(book);
      } catch(e){
        this.showToast(e);
      }
      //dismiss loader
      (await loader).dismiss();
//redirect to view post page
this.navCtrl.navigateRoot("view-book");
}
}

formValidation(){
if(!this.book.name){
this.showToast("Enter name");
return false;
}

if(!this.book.email){
this.showToast("Enter email");
return false;
}

if(!this.book.phone){
  this.showToast("Enter phone");
  return false;
}

if(!this.book.treatment){
this.showToast("Enter treatment");
return false;
}

if(!this.book.date){
this.showToast("Enter date");
return false;
}

if(!this.book.time){
  this.showToast("Enter time");
  return false;
}

return true;
}

showToast (message:string){
this.toastCtrl.create({
message: message,
duration: 3000
})
.then(toastData => toastData.present());
}
}

