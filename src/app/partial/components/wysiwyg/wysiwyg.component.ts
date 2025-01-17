import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-wysiwyg',
  standalone: false,
  
  templateUrl: './wysiwyg.component.html',
  styleUrl: './wysiwyg.component.scss'
})
export class WysiwygComponent {

  @ViewChild('editor', { static: true })
  editor!: ElementRef;

  textSize = '3';
  textColor = '#000000';
  fontFamily = 'Arial, sans-serif';

  // Executes the command on the editor
  execCommand(command: string, value: string = '') {
    document.execCommand(command, false, value);
  }

  // Changes text size
  onTextSizeChange() {
    this.execCommand('fontSize', this.textSize);
  }

  // Changes text color
  onTextColorChange() {
    this.execCommand('foreColor', this.textColor);
  }

  // Changes font family
  onFontFamilyChange() {
    this.execCommand('fontName', this.fontFamily);
  }

  // Insert Link
  insertLink() {
    const url = prompt("Enter the URL:");
    if (url) {
      this.execCommand('createLink', url);
    }
  }

  // Insert Image
  insertImage() {
    const url = prompt("Enter the image URL:");
    if (url) {
      this.execCommand('insertImage', url);
    }
  }

  // Insert Video
  insertVideo() {
    const url = prompt("Enter the video URL:");
    if (url) {
      const iframe = `<iframe width="560" height="315" src="${url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      this.editor.nativeElement.innerHTML += iframe;
    }
  }

  // Insert Table
  insertTable() {
    const rows = prompt("Enter number of rows:");
    const cols = prompt("Enter number of columns:");
    if (rows && cols) {
      let table = "<table class='table-auto border-collapse border border-gray-200'>";
      for (let i = 0; i < +rows; i++) {
        table += "<tr>";
        for (let j = 0; j < +cols; j++) {
          table += "<td class='border border-gray-300 p-2'></td>";
        }
        table += "</tr>";
      }
      table += "</table>";
      this.editor.nativeElement.innerHTML += table;
    }
  }
}
