import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-dam',
  templateUrl: './segundo-dam.page.html',
  styleUrls: ['./segundo-dam.page.scss'],
})
export class SegundoDamPage implements OnInit {

  data = [
    {
      texto: 'Interfaces',
      imag: 'data:image/png;base64,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',
      ckb_color: 'primary',
      select: false
    },
    {
      texto: 'Acceso a Datos',
      imag: 'https://img2.freepng.es/20181110/oee/kisspng-database-management-system-computer-icons-relation-5be74aa1455732.491145641541884577284.jpg',
      ckb_color: 'secondary',
      select: false
    },
    {
      texto: 'Programación multimedia y dispositivos móviles',
      imag: 'https://img2.freepng.es/20180320/vcw/kisspng-brand-font-apps-ide-5ab0fae8becf89.7849446015215480087816.jpg',
      ckb_color: 'danger',
      select: false
    },
    {
      texto: 'Sistemas de gestión empresarial',
      imag: 'https://e7.pngegg.com/pngimages/842/510/png-clipart-computer-icons-information-system-service-others-miscellaneous-angle.png',
      ckb_color: 'light',
      select: false
    },
    {
      texto: 'Programación de servicios y procesos',
      imag: 'https://w7.pngwing.com/pngs/556/360/png-transparent-html-computer-icons-markup-language-world-wide-web-text-logo-internet.png',
      ckb_color: 'dark',
      select: false
    },
    {
      texto: 'Empresa e Iniciativa emprendedora',
      imag: 'https://previews.123rf.com/images/wad/wad1509/wad150900189/45248768-icono-de-formaci%C3%B3n-concepto-de-negocio-dise%C3%B1o-plano-ilustraci%C3%B3n-aislada-la-larga-sombra-.jpg',
      ckb_color: 'primary',
      select: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
