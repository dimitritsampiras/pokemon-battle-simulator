import BlastoiseCry from '../assets/audio/cries/blastoisecry.mp3';
import CharizardCry from '../assets/audio/cries/charizardcry.mp3';
import VenusaurCry from '../assets/audio/cries/venusaurcry.mp3';
import SnorlaxCry from '../assets/audio/cries/snorlaxcry.mp3';
import GengarCry from '../assets/audio/cries/gengarcry.mp3';
import PikachuCry from '../assets/audio/cries/pikachucry.mp3';
import HitmonchanCry from '../assets/audio/cries/hitmonchancry.mp3';
import DragoniteCry from '../assets/audio/cries/dragonitecry.mp3';

export function cryPicker(pokemon: string) {
  switch (pokemon.toLowerCase()) {
    case 'pikachu':
      return PikachuCry;
    case 'charizard':
      return CharizardCry;
    case 'blastoise':
      return BlastoiseCry;
    case 'venusaur':
      return VenusaurCry;
    case 'snorlax':
      return SnorlaxCry;
    case 'gengar':
      return GengarCry;
    case 'hitmonchan':
      return HitmonchanCry;
    case 'dragonite':
      return DragoniteCry;
    default:
      return BlastoiseCry;
  }
}
