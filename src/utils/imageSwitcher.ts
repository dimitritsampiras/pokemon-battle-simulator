import Blastoise from '../assets/images/blastoisepreview.png';
import Pikachu from '../assets/images/pikachupreview.png';
import Charizard from '../assets/images/charizardpreview.png';
import Venusaur from '../assets/images/venusaurpreview.png';
import Snorlax from '../assets/images/snorlaxpreview.png';
import Gengar from '../assets/images/gengarpreview.png';
import Hitmonchan from '../assets/images/hitmonchanpreview.png';
import Dragonite from '../assets/images/dragonitepreview.png';
// --------------------------------------------------------
import DBlastoise from '../assets/gifs/Blastoise.gif';
import DPikachu from '../assets/gifs/Pikachu.gif';
import DCharizard from '../assets/gifs/Charizard.gif';
import DVenusaur from '../assets/gifs/Venusaur.gif';
import DSnorlax from '../assets/gifs/Snorlax.gif';
import DGengar from '../assets/gifs/Gengar.gif';
import DHitmonchan from '../assets/gifs/Hitmonchan.gif';
import DDragonite from '../assets/gifs/Dragonite.gif';
// --------------------------------------------------------
import BFBlastoise from '../assets/gifs/blastoise_front.gif';
import BFPikachu from '../assets/gifs/pikachu_front.gif';
import BFCharizard from '../assets/gifs/charizard_front.gif';
import BFVenusaur from '../assets/gifs/venusaur_front.gif';
import BFSnorlax from '../assets/gifs/snorlax_front.gif';
import BFGengar from '../assets/gifs/gengar_front.gif';
import BFHitmonchan from '../assets/gifs/hitmonchan_front.gif';
import BFDragonite from '../assets/gifs/dragonite_front.gif';
import BBBlastoise from '../assets/gifs/blastoise_back.gif';
import BBPikachu from '../assets/gifs/pikachu_back.gif';
import BBCharizard from '../assets/gifs/charizard_back.gif';
import BBVenusaur from '../assets/gifs/venusaur_back.gif';
import BBSnorlax from '../assets/gifs/snorlax_back.gif';
import BBGengar from '../assets/gifs/gengar_back.gif';
import BBHitmonchan from '../assets/gifs/hitmonchan_back.gif';
import BBDragonite from '../assets/gifs/dragonite_back.gif';

export function imageSwitcher(
  pokemon: string,
  type?: 'display' | 'battle',
  face?: 'front' | 'back'
) {
  if (type === 'display') {
    switch (pokemon.toLowerCase()) {
      case 'pikachu':
        return DPikachu;
      case 'charizard':
        return DCharizard;
      case 'blastoise':
        return DBlastoise;
      case 'venusaur':
        return DVenusaur;
      case 'snorlax':
        return DSnorlax;
      case 'gengar':
        return DGengar;
      case 'hitmonchan':
        return DHitmonchan;
      case 'dragonite':
        return DDragonite;
      default:
        return DBlastoise;
    }
  } else if (type === 'battle') {
    switch (pokemon.toLowerCase()) {
      case 'pikachu':
        return face === 'front' ? BFPikachu : BBPikachu;
      case 'charizard':
        return face === 'front' ? BFCharizard : BBCharizard;
      case 'blastoise':
        return face === 'front' ? BFBlastoise : BBBlastoise;
      case 'venusaur':
        return face === 'front' ? BFVenusaur : BBVenusaur;
      case 'snorlax':
        return face === 'front' ? BFSnorlax : BBSnorlax;
      case 'gengar':
        return face === 'front' ? BFGengar : BBGengar;
      case 'hitmonchan':
        return face === 'front' ? BFHitmonchan : BBHitmonchan;
      case 'dragonite':
        return face === 'front' ? BFDragonite : BBDragonite;
      default:
        return DBlastoise;
    }
  } else {
    switch (pokemon.toLowerCase()) {
      case 'pikachu':
        return Pikachu;
      case 'charizard':
        return Charizard;
      case 'blastoise':
        return Blastoise;
      case 'venusaur':
        return Venusaur;
      case 'snorlax':
        return Snorlax;
      case 'gengar':
        return Gengar;
      case 'hitmonchan':
        return Hitmonchan;
      case 'dragonite':
        return Dragonite;
      default:
        return Blastoise;
    }
  }
}
