import LocalizedStrings from 'react-localization';
import en_lang from './en.js';
import ch_lang from './ch.js';
import sp_lang from './sp.js';
import in_lang from './in.js';
import tr_lang from './tr.js';

const strings = new LocalizedStrings({
  en: en_lang,
  ch: ch_lang,
  sp: sp_lang,
  in: in_lang,
});

export default strings;
