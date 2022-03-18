import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.page.html',
  styleUrls: ['./view-book.page.scss'],
})
export class ViewBookPage implements OnInit {
  books: any;
  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private firestore: AngularFirestore
) { }

  ngOnInit() {}
  ionViewWillEnter() {
    this.getBooks();
  }

  async getBooks(){
    //show loader
    let loader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    loader.present();

    try {
    this.firestore

.collection("AppointmentBooking")
    .snapshotChanges()
    .subscribe(data => { 
      this.books = data.map(e => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data()["name"],
          email: e.payload.doc.data()["email"],
          phone: e.payload.doc.data()["phone"],
          treatment: e.payload.doc.data()["treatment"],
          date: e.payload.doc.data()["date"],
          time: e.payload.doc.data()["time"]
        };
      });

      loader.dismiss();
    });
    
    } catch(e){
    this.showToast(e);

    }
  }

  async deleteBook(id: string){
    //show loader
    let loader = this.loadingCtrl.create({
    message: "Please wait..."
    });
    (await loader).present();
  
    await this.firestore.doc("AppointmentBooking/" + id).delete();
  
    //dismiss loader
    (await loader).dismiss();
    }
  
    showToast (message:string){
      this.toastCtrl.create({
        message: message,
        duration: 3000
      }).then(toastData => toastData.present());
    }
  }
  

