import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoInterface } from '../infoInterface';

@Component({
  selector: 'app-specific-style',
  templateUrl: './specific-style.component.html'
})
export class SpecificStyleComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  cardInfo: InfoInterface;
  ngOnInit() {
    switch (this.route.snapshot.params.style) {
      case 'Impressionism':
        this.cardInfo =  {
          title: 'Impressionism',
          body:
          // tslint:disable-next-line:max-line-length
            'Impressionism is a 19th-century art movement characterized by relatively small, thin, yet visible brush strokes, open composition, emphasis on accurate depiction of light in its changing qualities (often accentuating the effects of the passage of time), ordinary subject matter, inclusion of movement as a crucial element of human perception and experience, and unusual visual angles',
          tag1: '19th Century',
          tag2: 'Monet',
          tag3: 'Renoir'
        };
        break;
      case 'Fauvism':
        this.cardInfo = {
          title: 'Fauvism',
          body:
          // tslint:disable-next-line:max-line-length
            'Fauvism is the style of les Fauves (French for \'the wild beasts\'), a group of early twentieth-century modern artists whose works emphasized painterly qualities and strong color over the representational or realistic values retained by Impressionism. While Fauvism as a style began around 1904 and continued beyond 1910, the movement as such lasted only a few years, 1905–1908, and had three exhibitions.',
          tag1: 'Early 20th',
          tag2: 'Derain',
          tag3: 'Matisse'
        };
        break;
      case 'Cubism':
        this.cardInfo = {
          title: 'Cubism',
          body:
          // tslint:disable-next-line:max-line-length
            'Cubism is an early-20th-century avant-garde art movement that revolutionized European painting and sculpture, and inspired related movements in music, literature and architecture. Cubism has been considered the most influential art movement of the 20th century. The term is broadly used in association with a wide variety of art produced in Paris (Montmartre and Montparnasse) or near Paris (Puteaux) during the 1910s and throughout the 1920s.',
          tag1: 'Braque',
          tag2: 'Picasso',
          tag3: 'Cezanne'
        };
        break;
      case 'Futurism':
        this.cardInfo = {
          title: 'Futurism',
          body:
          // tslint:disable-next-line:max-line-length
            'Futurism (Italian: Futurismo) was an artistic and social movement that originated in Italy in the early 20th century. It emphasised speed, technology, youth, violence, and objects such as the car, the airplane, and the industrial city. Its key figures were the Italians Filippo Tommaso Marinetti, Umberto Boccioni, Carlo Carrà, Gino Severini, Giacomo Balla, and Luigi Russolo. It glorified modernity and aimed to liberate Italy from the weight of its past.',
          tag1: 'Marinetti',
          tag2: 'Boccioni',
          tag3: 'Russolo'
        };
        break;
      case 'Expressionism':
        this.cardInfo = {
          title: 'Expressionism',
          body:
          // tslint:disable-next-line:max-line-length
            'Expressionism is a modernist movement, initially in poetry and painting, originating in Germany at the beginning of the 20th century. Its typical trait is to present the world solely from a subjective perspective, distorting it radically for emotional effect in order to evoke moods or ideas. Expressionist artists have sought to express the meaning[3] of emotional experience rather than physical reality.',
          tag1: 'Munch',
          tag2: 'Angst',
          tag3: 'Schiele'
        };
        break;
      default:
        return { body: 'info', tag1: 'tag1', tag2: 'tag2', tag3: 'tag3' };
    }
  }

}
