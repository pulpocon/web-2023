import type { Workshop } from '~/data/typings'

import miguelLucia from './workshops/miguel-lucia'
import anastasiaKondratieva from './workshops/anastasia-kondratieva'
import maviJimenez from './workshops/mavi-jimenez'
import immaValls from './workshops/imma-valls'
import julienDavid from './workshops/julien-david'
import ricardClau from './workshops/ricard-clau'
import yahimaDuarte from './workshops/yahima-duarte'
import anaCarmona from './workshops/ana-carmona'
import javierChacana from './workshops/javier-chacana'
import rolandoCaldas from './workshops/rolando-caldas'
import sheniaIago from './workshops/shenia-iago'
import mariaRomero from './workshops/maria-romero'
import saraSara from './workshops/sara-sara'
import darioMiguel from './workshops/dario-miguel'
import valvaneraGijon from '~/data/workshops/valvanera-gijon'
import jankoStrassburg from '~/data/workshops/janko-strassburg'
import adrianAlonso from '~/data/workshops/adrian-alonso'
import yondraLopez from '~/data/workshops/yondra-lopez'
import marynaBogdan from '~/data/workshops/maryna-bogdan'
import openMic from '~/data/workshops/open-mic'
import rubenDelCampo from '~/data/workshops/ruben-del-campo'

export default {
  'miguel-lucia': miguelLucia,
  'anastasia-kondratieva': anastasiaKondratieva,
  'mavi-jimenez': maviJimenez,
  'imma-valls': immaValls,
  'julien-david': julienDavid,
  'ricard-clau': ricardClau,
  'yahima-duarte': yahimaDuarte,
  'ana-carmona': anaCarmona,
  'javier-chacana': javierChacana,
  'rolando-caldas': rolandoCaldas,
  'shenia-iago': sheniaIago,
  'maria-romero': mariaRomero,
  'sara-sara': saraSara,
  'dario-miguel': darioMiguel,
  'valvanera-gijon': valvaneraGijon,
  'janko-strassburg': jankoStrassburg,
  'adrian-alonso': adrianAlonso,
  'yondra-lopez': yondraLopez,
  'maryna-bogdan': marynaBogdan,
  'open-mic': openMic,
  'ruben-del-campo': rubenDelCampo
} as Record<string, Workshop>
