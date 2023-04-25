import { Component, Input } from '@angular/core';
import { Character } from 'src/app/core/models/ICharacter';
import { Comic } from 'src/app/core/models/IComic';

@Component({
  selector: 'app-detail-image',
  templateUrl: './detail-image.component.html',
  styleUrls: ['./detail-image.component.scss']
})
export class DetailImageComponent {
@Input() imageCo : Comic | null = null;
@Input() imageC: Character | null = null;
}
