import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { RecruitmentsService, CandidatesService } from 'app/service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(
    private candidate: CandidatesService,
    private service: RecruitmentsService,
    private route: ActivatedRoute
  ) { }

  city_province: any;
  careers: any;

  ngOnInit(): void {
    this.getById(this.route.snapshot.params['id']);
  }

  //handleFile
  url: any = null;
  fileToUpload: File = null;
  handleFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.url = event.target.result;
      }
      this.fileToUpload = event.target.files.item(0);
      console.log('file', this.fileToUpload);
    }
  }
  // --------------------get-------------------
  //Get Selected 
  // id: any = this.route.snapshot.params['id'];
  
  Selected: any;
  getById(id) {
    this.Selected = [];
    this.service.getById(id).subscribe(r => {
      this.Selected = r['data'];
      console.log('selected', this.Selected);
    });
  }

  // --------------------post-------------------
  //handleModal
  @ViewChild('primaryModal') public primaryModal: ModalDirective;

  //obj
  addValue = {
    full_name: '',
    email: '',
    number: '',
    address: '',//vị trí ứng tuyển
    active: true,
  }
  submitted = false;

  //add
  addNew() {
    // Kiểm tra đầy đủ thông tin, thông báo lỗi
    this.submitted = true;
    this.addValue.address == this.Selected.title;
    if (this.addValue.full_name === '') { alert('Hãy điền họ tên của bạn'); return }
    if (this.addValue.email === '') { alert('Hãy điền email của bạn'); return }
    if (this.addValue.number === '') { alert('Hãy điền số điện thoại của bạn'); return }
    if (this.fileToUpload === null) { alert('Vui lòng chọn file CV của bạn!'); return; }
    if (this.fileToUpload.size > 2100000) { alert('File quá lớn!'); return; }
    //Gửi dữ liệu mảng lên server
    this.candidate.post(this.addValue).subscribe(r => {
      //UploadFile 
      if (this.fileToUpload !== null) {
        const formData: FormData = new FormData();
        formData.append('key', this.fileToUpload, this.fileToUpload.name)
        this.candidate.postFile(r['data']['id'], formData).subscribe(r => {
        })
      }
    })
    this.primaryModal.hide();
    location.reload();
  }

}
