import { Component, inject } from '@angular/core';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  public service = inject(SpinnerService);
  public isLoading = this.service.isLoading;
}
