import { Component, inject } from '@angular/core'
import { TelegramService } from '../../services/telegram.service'

@Component({
  selector: 'bot-shop',
  standalone: true,
  imports: [],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.sass',
})
export class ShopComponent {
  telegram = inject(TelegramService)

  constructor() {
    this.telegram.MainButton.show()
  }
}
