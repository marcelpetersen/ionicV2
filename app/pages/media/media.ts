import {Page, NavController} from 'ionic-angular';
import {CameraPage} from './camera/camera';
import {ImagePickerPage} from './image-picker/image-picker';
/*
  Generated class for the MediaPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/media/media.html',
})
export class MediaPage {
  items: any
  constructor(public nav: NavController) {
    this.nav = nav;
    this.items = [
      { 'title': 'Camera', 'icon': 'camera', 'description': 'Appareil Photo', 'link': CameraPage, 'color': this.getRandomColor() },
      { 'title': 'Images', 'icon': 'camera', 'description': 'Acceder à vos photos, stocké sur votre appareil', 'link': ImagePickerPage, 'color': this.getRandomColor() },
      { 'title': 'Images', 'icon': 'camera', 'description': 'Acceder à vos photos, stocké sur votre appareil', 'link': ImagePickerPage, 'color': this.getRandomColor() },
    ]
  }
  openNavDetailsPage(item) {
    this.nav.push(item.link);
  }
    getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
