import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  showSkeletion = true;
  form: FormGroup = this.createForm();
  requesting = false;

  userId = 0;
  constructor(
    private ngFb: FormBuilder,
    private svUser: UserService,
    private ngRouter: Router,
    private ngActRoute: ActivatedRoute,
  ) {
    this.userId = +(this.ngActRoute.snapshot.paramMap.get('userId') || 0);
    if (this.userId) {
      this.showSkeletion = true;
      this.svUser.getUserById(this.userId).pipe(
        finalize(() => this.showSkeletion = false)
      ).subscribe(res => {
        this.form.patchValue(res);
        console.log(this.form.value);
      });
    } else {
      this.showSkeletion = false;
    }
  }

  ngOnInit(): void {
  }

  createForm() {
    return this.ngFb.group({
      avatar: [''],
      name: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (!this.userId) {
      this.createUser();
    } else {
      this.updateUser();
    }
  }

  createUser() {
    this.requesting = true;
    this.svUser.postUser(this.form.value).pipe(
      finalize(() => this.requesting = false)
    ).subscribe(res => {
      alert(`Create '${res.name}' Success`);
      this.ngRouter.navigate(['', 'user']);
    });
  }

  updateUser() {
    this.requesting = true;
    this.svUser.putUser(this.userId, this.form.value).pipe(
      finalize(() => this.requesting = false)
    ).subscribe(res => {
      alert(`Update '${res.name}' Success`);
      this.ngRouter.navigate(['', 'user']);
    });
  }

}
