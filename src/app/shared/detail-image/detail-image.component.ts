import { Component, Input } from '@angular/core';
import { Comic } from 'src/app/core/models/IComic';

@Component({
  selector: 'app-detail-image',
  templateUrl: './detail-image.component.html',
  styleUrls: ['./detail-image.component.scss']
})
export class DetailImageComponent {
@Input() image : Comic | null = null;
}
