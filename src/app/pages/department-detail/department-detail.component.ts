import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css'],
})


export class DepartmentDetailComponent implements OnInit {
  departmentId: any;
  departmentName: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = Number(params.get('id'));
      this.departmentId = id;
    });
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  gotoDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['/departments', { id: selectedId }]);
    // this.router.navigate(['../', {id: selectedId}], { relativeTo: this.route})
  }

  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.route });
  }

  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.route });
  }
}
