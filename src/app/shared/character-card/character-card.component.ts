import { Component, Input } from '@angular/core';
import { Character } from 'src/app/core/models/ICharacter';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent {

@Input() character!: Character;


}
