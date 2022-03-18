import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Book } from '../models/book.mode';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  book = {} as Book;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {}
  async createBook(book: Book){
    if(this.formValidation()) {
    //show loader
    let loader = this.loadingCtrl.create({
    message: "Please wait..."
    });
    (await loader).present();

    try{
      await this.firestore.collection("AppointmentBooking").add(book);
    } catch(e){
      this.showToast(e);
    }
    //dismiss loader
    (await loader).dismiss();

    //redirect to home page
    this.navCtrl.navigateRoot("home");
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
  }}
