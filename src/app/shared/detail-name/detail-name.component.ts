import { Component, Input } from '@angular/core';
import { Comic } from 'src/app/core/models/IComic';

@Component({
  selector: 'app-detail-name',
  templateUrl: './detail-name.component.html',
  styleUrls: ['./detail-name.component.scss']
})
export class DetailNameComponent {
@Input() comic : Comic | null = null;

}
