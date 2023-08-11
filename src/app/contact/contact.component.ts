import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  navigateToSection() {
    const section = document.getElementById('header-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendbutton') sendbutton!: ElementRef;

  [key: string]: any;

  showWarningName = false;
  showWarningEmail = false;
  showWarningMessage = false;

  showGreenCheckName = false;
  showGreenCheckEmail = false;
  showGreenCheckMessage = false;

  showLoader = false;
  emailSent = false;
  showSpanMsg = false;

  addClassToButton = false;

  target!: HTMLInputElement;

  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }

  async sendMail() {
    this.emailSent = true;
    setTimeout(() => {
      this.showSpanMsg = true;
      this.addClassToButton = true;
    }, 800);
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;

    let formData = new FormData();
    formData.append('name', nameField.value);
    formData.append('email', emailField.value);
    formData.append('message', messageField.value);

    await fetch('https://ulugbek-kobulov.com/send_mail/send_mail.php', {
      method: 'POST',
      body: formData
    });
  }

  onBlur(event: Event) {
    this.target = event.target as HTMLInputElement;
    this.checkInputState();
  }


  onInput(inputType: string) {
    this.checkInputState();
    this.checkInputValue(inputType);
    this.showGreenCheckImage(inputType);
  }


  checkInputState() {
    this.target.value.length > 0 ? this.changeInputsGreen() : this.changeInputsRed();
  }


  changeInputsGreen() {
    this.target.classList.add("has-content");
    this.target.classList.remove("empty-focused");
    this.target.classList.remove('input-bg-warning');
  }


  changeInputsRed() {
    this.target.classList.remove("has-content");
    this.target.classList.add("empty-focused");
    this.target.classList.add('input-bg-warning');
  }


  checkInputValue(inputType: string) {
    this.target.value.length > 0 ? this.showRequiredMessage(inputType) : this.hideRequiredMessage(inputType);
  }


  showRequiredMessage(inputType: string) {
    let oneInputField = 'showWarning' + inputType.charAt(0).toUpperCase() + inputType.slice(1);
    this[`${oneInputField}`] = false;
  }


  hideRequiredMessage(inputType: string) {
    let oneInputField = 'showWarning' + inputType.charAt(0).toUpperCase() + inputType.slice(1);
    this[`${oneInputField}`] = true;
  }


  showGreenCheckImage(inputType: string) {
    let oneInputField = 'showGreenCheck' + inputType.charAt(0).toUpperCase() + inputType.slice(1);
    this[`${oneInputField}`] = this.target.value.length > 0;
  }


  onFocus(event: Event, inputType: string) {
    this.target = event.target as HTMLInputElement;

    if (this.target.value.length === 0) {
      this.target.classList.add('input-bg-warning');
      this.showRequiredTextOnFocus(inputType);
    }
  }


  showRequiredTextOnFocus(inputType: string) {
    let oneInputField = 'showWarning' + inputType.charAt(0).toUpperCase() + inputType.slice(1);
    this[`${oneInputField}`] = true;
  }
}