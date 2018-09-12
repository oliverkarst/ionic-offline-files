import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';


import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { FileOpener } from '@ionic-native/file-opener';

import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private path = this.file.externalRootDirectory + '/Download/' + '5-hacks.pdf';
  private ROOT_DIRECTORY = 'file:///sdcard//';
  private downloadFolderName = 'ionicFileViewer';

  constructor( public navCtrl: NavController,
               private fileChooser: FileChooser,
               private filePath: FilePath,
               private fileOpener: FileOpener,
               private fileTransfer: FileTransfer,
               private file: File,
               private platform: Platform) {  }


  chooseAndOpen() {
    this.fileChooser.open().then(file => {
      this.filePath.resolveNativePath(file).then(resolvedFilePath => {
        this.fileOpener.open(resolvedFilePath, 'application/pdf').then(value => {
          alert('it worked');
        }).catch(err=> {
          alert(JSON.stringify(err));
        });
      }).catch(err=> {
        alert(JSON.stringify(err));
      });
    }).catch(err=> {
      alert(JSON.stringify(err));
    });
  }

  downloadPdf() {
    let path = null;

    if (this.platform.is('ios')) {
      path = this.file.documentsDirectory;
    } else if (this.platform.is('android')) {
      path = this.file.dataDirectory;
      path = this.path;
    }

    const fileTransfer : FileTransferObject = this.fileTransfer.create();
    const serverFile = "https://devdactic.com/html/5-simple-hacks-LBT.pdf";
    fileTransfer.download(serverFile, path, true).then((entry) => {
      alert('Success of PDF download to path : ' + entry.toURL());
      this.fileOpener.open(entry.toURL(), 'application/pdf');
    }, (error) => {
      alert('Fehler beim Download ' + error);
    });
  }

  openDownloadedPdf() {
    this.fileOpener.open(this.path, 'application/pdf');
  }

  deleteDownloadedPdf() {
    this.file.removeFile(this.file.externalRootDirectory + '/Download/', '5-hacks.pdf').then((entries) => {
      alert('PDF deleted');
    }).catch((error) => {
      alert('fehler beim löschen : ' + error);
    });
  }

  createDir() {
    this.file.createDir(this.ROOT_DIRECTORY, this.downloadFolderName, true).then((entries) => {
      alert('Directory created : ' + this.ROOT_DIRECTORY + this.downloadFolderName);
    }).catch((error) => {
      alert('Fehler beim Directory anlegen : ' + error);
    });
  }
  
  downloadToDir() {
    let path = this.ROOT_DIRECTORY + this.downloadFolderName + '/loaded.pdf'; ;

    const fileTransfer : FileTransferObject = this.fileTransfer.create();
    const serverFile = "https://devdactic.com/html/5-simple-hacks-LBT.pdf";
    fileTransfer.download(serverFile, path, true).then((entry) => {
      alert('Success of PDF download to path : ' + entry.toURL());
      this.fileOpener.open(entry.toURL(), 'application/pdf');
    }, (error) => {
      alert('Fehler beim Download ' + error);
    });
  }
  
  openPdffromDir() {
    let path = this.ROOT_DIRECTORY + this.downloadFolderName + '/loaded.pdf'; ;
    this.fileOpener.open(path, 'application/pdf');
  }
}
