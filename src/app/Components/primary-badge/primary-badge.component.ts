import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-badge',
  templateUrl: './primary-badge.component.html',
  styleUrls: ['./primary-badge.component.css']
})
export class PrimaryBadgeComponent {
  @Input() badge: any;
}
