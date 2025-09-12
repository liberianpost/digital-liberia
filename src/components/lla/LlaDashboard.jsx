import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Polygon, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import api from '@/api';

// Fix for default markers in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const navLinks = [
  { label: "Home", to: "/", color: "bg-gradient-to-r from-blue-600 to-blue-800 text-white" },
  { label: "System", to: "/system", color: "bg-gradient-to-r from-green-600 to-green-800 text-white" },
  { label: "Digital Liberia", to: "/digital-liberia", color: "bg-gradient-to-r from-purple-600 to-purple-800 text-white" },
  { label: "LibPay", to: "/libpay", color: "bg-gradient-to-r from-yellow-500 to-yellow-700 text-white" },
  { label: "Liberian Post", to: "/liberian-post", color: "bg-gradient-to-r from-pink-600 to-pink-800 text-white" }
];

const logos = [
  "/logos/liberianpost.png",
  "/logos/digital.png",
  "/logos/libmusic.png",
  "/logos/libconnectsit.png",
  "/logos/libpaysit.png",
  "/logos/seal of liberia.png",
  "/logos/liberia.png"
];

// County and postal code data
const counties = [
  "Bomi", "Bong", "Gbarpolu", "Grand Bassa", "Grand Cape Mount", 
  "Grand Gedeh", "Grand Kru", "Lofa", "Margibi", "Maryland", 
  "Montserrado", "Nimba", "Rivercess", "River Gee", "Sinoe"
];

const postalCodes = {
  "Montserrado": [
    { code: "10101", area: "BENTOL - BENSONVILLE - DISTRICT 1" },
    { code: "10102", area: "CAREYSBURG - CAREYSBURG - DISTRICT 1" },
    { code: "10103", area: "TODEE - TODEE - DISTRICT 1" },
    { code: "10104", area: "LOUISIANA - LOUISIANA - DISTRICT 1" },
    { code: "10201", area: "JOHNSONVILLE - JOHNSONVILLE - DISTRICT 2" },
    { code: "10202", area: "DOUBLE BRIDGE - SOMALIA DRIVE - DISTRICT 2" },
    { code: "10203", area: "JACOB TOWN - SOMALIA DRIVE - DISTRICT 2" },
    { code: "10204", area: "ZINC FACTORY - SOMALIA DRIVE - DISTRICT 2" },
    { code: "10205", area: "MOUNT BARCLAY - MOUNT BARCLAY - DISTRICT 2" },
    { code: "10301", area: "PIPELINE - PAYNESVILLE - DISTRICT 3" },
    { code: "10302", area: "MORRIS FARM - PAYNESVILLE - DISTRICT 3" },
    { code: "10303", area: "WOOD CAMP - PAYNESVILLE - DISTRICT 3" },
    { code: "10304", area: "NEEZOE - PAYNESVILLE - DISTRICT 3" },
    { code: "10401", area: "BARNARD FARM - PAYNESVILLE - DISTRICT 4" },
    { code: "10402", area: "OMEGA/KEMAH TOWN - PAYNESVILLE - DISTRICT 4" },
    { code: "10403", area: "PAYESVILLE JOE BAR - PAYNESVILLE - DISTRICT 4" },
    { code: "10404", area: "DUPORT ROAD - PAYNESVILLE - DISTRICT 4" },
    { code: "10501", area: "RED LIGHT - PAYNESVILLE - DISTRICT 5" },
    { code: "10502", area: "POLICE ACADEMY - PAYNESVILLE - DISTRICT 5" },
    { code: "10503", area: "BASSA TOWN - PAYNESVILLE - DISTRICT 5" },
    { code: "10504", area: "72ND - PAYNESVILLE - DISTRICT 5" },
    { code: "10505", area: "TOWN HALL - PAYNESVILLE - DISTRICT 5" },
    { code: "10506", area: "A.B TOLBERT ROAD - PAYNESVILLE - DISTRICT 5" },
    { code: "10507", area: "PAGOS ISLAND - PAYNESVILLE - DISTRICT 5" },
    { code: "10508", area: "SWANKAMORE - PAYNESVILLE - DISTRICT 5" },
    { code: "10601", area: "GSA ROAD ROCKVILLE - PAYNESVILLE - DISTRICT 6" },
    { code: "10602", area: "S.D COOPER ROAD - PAYNESVILLE - DISTRICT 6" },
    { code: "10603", area: "KPELLE TOWN - PAYNESVILLE - DISTRICT 6" },
    { code: "10604", area: "KING GRAY - PAYNESVILLE - DISTRICT 6" },
    { code: "10605", area: "ELWA - PAYNESVILLE - DISTRICT 6" },
    { code: "10606", area: "REHAB/BORBOR TOWN - PAYNESVILLE - DISTRICT 6" },
    { code: "10607", area: "KENDE-JAH - PAYNESVILLE - DISTRICT 6" },
    { code: "10608", area: "THINKER'S VILLAGE - PAYNESVILLE - DISTRICT 6" },
    { code: "10609", area: "BAPTIST SEMINARY - ROBERT'S FIELD HIGH WAY - DISTRICT 6" },
    { code: "10610", area: "WAMBA TOWN - ROBERT'S FIELD HIGH WAY - DISTRICT 6" },
    { code: "10701", area: "WEST POINT - WEST POINT TOWNSHIP - DISTRICT 7" },
    { code: "10702", area: "ROCK CRUSHER - CENTRAL MONROVIA - DISTRICT 7" },
    { code: "10703", area: "SNAPPER HILL - CENTRAL MONROVIA - DISTRICT 7" },
    { code: "10704", area: "MAMBA POINT - CENTRAL MONROVIA - DISTRICT 7" },
    { code: "10705", area: "U. N. DRIVE - CENTRAL MONROVIA - DISTRICT 7" },
    { code: "10706", area: "RANDALL/NEWPORT/LYNCH STREET - CENTRAL MONROVIA - DISTRICT 7" },
    { code: "10707", area: "CAREY/GURLEY/MECHLIN STREET - CENTRAL MONROVIA - DISTRICT 7" },
    { code: "10708", area: "BROAD/ASHMUN STREET - CENTRAL MONROVIA - DISTRICT 7" },
    { code: "10709", area: "BENSON/WARREN/PERRY/CLAY/JOHNSON STREET - CENTRAL MONROVIA - DISTRICT 7" },
    { code: "10801", area: "CROWN HILL - MONROVIA - DISTRICT 8" },
    { code: "10802", area: "SLIP WAY - MONROVIA - DISTRICT 8" },
    { code: "10803", area: "SONIWEIN - MONROVIA - DISTRICT 8" },
    { code: "10804", area: "BUZZI QUARTERS - MONROVIA - DISTRICT 8" },
    { code: "10805", area: "JALLAH TOWN - MONROVIA - DISTRICT 8" },
    { code: "10806", area: "CAPITAL HILL - MONROVIA - DISTRICT 8" },
    { code: "10807", area: "SINKOR (1ST - 12) STREET - MONROVIA - DISTRICT 8" },
    { code: "10901", area: "SINKOR (13 - 24) STREET - MONROVIA - DISTRICT 9" },
    { code: "10902", area: "NEW MATADI - MONROVIA - DISTRICT 9" },
    { code: "10903", area: "OLD MATADI - MONROVIA - DISTRICT 9" },
    { code: "10904", area: "LAKPAZEE - MONROVIA - DISTRICT 9" },
    { code: "10905", area: "FIAMA - MONROVIA - DISTRICT 9" },
    { code: "10906", area: "RAYMOND FIELD - MONROVIA - DISTRICT 9" },
    { code: "10907", area: "GBANGAYE TOWN - MONROVIA - DISTRICT 9" },
    { code: "10908", area: "AIRFIELD - MONROVIA - DISTRICT 9" },
    { code: "10909", area: "WROTO TOWN - MONROVIA - DISTRICT 9" },
    { code: "10910", area: "FISH MARKET - MONROVIA - DISTRICT 9" },
    { code: "11001", area: "KEY & DEATH HOLE - OLD ROAD - DISTRICT 10" },
    { code: "11002", area: "CATHOLIC HOSPITAL - OLD ROAD - DISTRICT 10" },
    { code: "11003", area: "DIVINE & TOGBA CAMP - OLD ROAD - DISTRICT 10" },
    { code: "11004", area: "NIPPAY TOWN - OLD ROAD - DISTRICT 10" },
    { code: "11005", area: "SMYTHE ROAD - OLD ROAD - DISTRICT 10" },
    { code: "11006", area: "CHUGBOR - OLD ROAD - DISTRICT 10" },
    { code: "11007", area: "GAYE TOWN COMMUNITY - OLD ROAD - DISTRICT 10" },
    { code: "11008", area: "TARR TOWN - OLD ROAD - DISTRICT 10" },
    { code: "11009", area: "YEKPEE TOWN - OLD ROAD - DISTRICT 10" },
    { code: "11010", area: "PEACE ISLAND - CONGO TOWN - DISTRICT 10" },
    { code: "11011", area: "CONGO TOWN - CONGO TOWN - DISTRICT 10" },
    { code: "11101", area: "CASSAVA HILL - CALDWELL TOWNSHIP - DISTRICT 11" },
    { code: "11102", area: "SAMUKAI TOWN - CALDWELL TOWNSHIP - DISTRICT 11" },
    { code: "11103", area: "DIXVILLE - DIXVILLE TOWNSHIP - DISTRICT 11" },
    { code: "11104", area: "CALDWELL - CALDWELL TOWNSHIP - DISTRICT 11" },
    { code: "11105", area: "KABA TOWN - BARDNERSVILLE TOWNSHIP - DISTRICT 11" },
    { code: "11106", area: "BEHWEIN COMMUNITY - BARDNERSVILLE TOWNSHIP - DISTRICT 11" },
    { code: "11107", area: "BARNESVILLE ESTATE - BARDNERSVILLE TOWNSHIP - DISTRICT 11" },
    { code: "11108", area: "GRASS FIELD - BARDNERSVILLE TOWNSHIP - DISTRICT 11" },
    { code: "11109", area: "DAY BREAK MOUTH OPEN - BARDNERSVILLE TOWNSHIP - DISTRICT 11" },
    { code: "11201", area: "JOHNSONVILLE ROAD - BARDNERSVILLE TOWNSHIP - DISTRICT 12" },
    { code: "11202", area: "CHICKEN SOUP FACTORY - GARDNERSVILLE TOWNSHIP - DISTRICT 12" },
    { code: "11203", area: "SHOE FACTORY - GARDNERSVILLE TOWNSHIP - DISTRICT 12" },
    { code: "11204", area: "MTA - GARDNERSVILLE TOWNSHIP -DISTRICT 12" },
    { code: "11205", area: "STEPHEN TOLBERT ESTATE - GARDNERSVILLE TOWNSHIP - DISTRICT 12" },
    { code: "11206", area: "RIVER VIEW - GARDNERSVILLE TOWNSHIP - DISTRICT 12" },
    { code: "11207", area: "KESSELLY BOULEVARD - GARDNERSVILLE TOWNSHIP - DISTRICT 12" },
    { code: "11208", area: "MANGROVE ISLAND - GARDNERSVILLE TOWnship - DISTRICT 12" },
    { code: "11209", area: "J.J.Y. SNOW HILL - GARDNERSVILLE TOWNSHIP - DISTRICT 12" },
    { code: "11301", area: "NEW GEORGIA - NEW GEORGIA TOWNSHIP - DISTRICT 13" },
    { code: "11302", area: "ST. MICHEAL - NEW GEORGIA TOWNSHIP - DISTRICT 13" },
    { code: "11303", area: "CHOCOLATE CITY - NEW GEORGIA TOWNSHIP - DISTRICT 13" },
    { code: "11304", area: "IRON FACTORY - NEW GEORGIA TOWNSHIP - DISTRICT 13" },
    { code: "11305", area: "SOS TRANSIT - NEW GEORGIA TOWNSHIP - DISTRICT 13" },
    { code: "11306", area: "NEW GEORGIA ESTATE - NEW GEORGIA TOWNSHIP - DISTRICT 13" },
    { code: "11307", area: "BASSA TOWN - NEW GEORGIA TOWNSHIP - DISTRICT 13" },
    { code: "11308", area: "TOPOE VILLAGE - NEW GEORGIA TOWNSHIP - DISTRICT 13" },
    { code: "11309", area: "BATTERY FACTORY - NEW GEORGIA TOWNSHIP - DISTRICT 13" },
    { code: "11310", area: "FLAHN TOWN - NEW GEORGIA TOWNSHIP - DISTRICT 13" },
    { code: "11311", area: "STOCKTON CREEK - NEW GEORGIA TOWNSHIP - DISTRICT 13" },
    { code: "11312", area: "JAMAICA ROAD - NEW GEORGIA TOWNSHIP - DISTRICT 13" },
    { code: "11401", area: "FREE PORT COMMUNITY - GARGLORH TOWNSHIP - DISTRICT 14" },
    { code: "11402", area: "COW FACTORY - GARGLORH TOWNSHIP - DISTRICT 14" },
    { code: "11403", area: "STRUGGLE COMMUNITY - GARGLORH TOWNSHIP - DISTRICT 14" },
    { code: "11404", area: "HOPE COMMUNITY - GARGLORH TOWNSHIP - DISTRICT 14" },
    { code: "11405", area: "PEUGEOT GARAGE - GARGLORH TOWNSHIP - DISTRICT 14" },
    { code: "11406", area: "PAITY TOWN - GARGLORH TOWNSHIP - DISTRICT 14" },
    { code: "11407", area: "RIVER VIEW - GARGLORH TOWNSHIP - DISTRICT 14" },
    { code: "11408", area: "CLARA TOWN - GARGLORH TOWNSHIP - DISTRICT 14" },
    { code: "11409", area: "GIBLATA - GARGLORH TOWNSHIP - DISTRICT 14" },
    { code: "11410", area: "VIA TOWN - GARGLORH TOWNSHIP - DISTRICT 14" },
    { code: "11501", area: "LOGAN TOWN - GARGLORH TOWNSHIP - DISTRICT 15" },
    { code: "11502", area: "GBANDI TOWN - GARGLORH TOWNSHIP - DISTRICT 15" },
    { code: "11503", area: "ZINC CAMP - GARGLORH TOWNSHIP - DISTRICT 15" },
    { code: "11504", area: "ZONDO TOWN - GARGLORH TOWNSHIP - DISTRICT 15" },
    { code: "11505", area: "BLAMO TOWN - GARGLORH TOWNSHIP - DISTRICT 15" },
    { code: "11506", area: "KING PETER TOWN - GARGLORH TOWNSHIP - DISTRICT 15" },
    { code: "11601", area: "ST. PAUL BRIDGE - BOROUGH OF KRU TOWN - DISTRICT 16" },
    { code: "11602", area: "TWEH FARM - BOROUGH OF KRU TOWN - DISTRICT 16" },
    { code: "11603", area: "MONBOE TOWN - BOROUGH OF KRU TOWN - DISTRICT 16" },
    { code: "11604", area: "LAGON - BOROUGH OF KRU TOWN - DISTRICT 16" },
    { code: "11605", area: "NEW KRU TOWN - BOROUGH OF KRU TOWN - DISTRICT 16" },
    { code: "11606", area: "FUNDAYE - BOROUGH OF KRU TOWN - DISTRICT 16" },
    { code: "11607", area: "DUALA MARKET - BOROUGH OF KRU TOWN - DISTRICT 16" },
    { code: "11608", area: "NYUANTOWN - BOROUGH OF KRU TOWN - DISTRICT 16" },
    { code: "11609", area: "BONG MINES BRIDGE - BOROUGH OF KRU TOWN - DISTRICT 16" },
    { code: "11610", area: "POPO BEACH - BOROUGH OF KRU TOWN - DISTRICT 16" },
    { code: "11611", area: "POINT FOUR (4) - BOROUGH OF KRU TOWN - DISTRICT 16" },
    { code: "11701", area: "GBARVEAH - ARTHINGTON - DISTRICT 17" },
    { code: "11702", area: "BONOWAH - ARTHINGTON - DISTRICT 17" },
    { code: "11703", area: "DINEEKON - ARTHINGTON - DISTRICT 17" },
    { code: "11704", area: "CENTRAL ARTHINGTON - ARTHINGTON - DISTRICT 17" },
    { code: "11705", area: "MILLSBURG - ARTHINGTON - DISTRICT 17" },
    { code: "11706", area: "LUNEH - CLAY ASHLAND - DISTRICT 17" },
    { code: "11707", area: "BARCON - CLAY ASHLAND - DISTRICT 17" },
    { code: "11708", area: "KAIKPU - CLAY ASHLAND - DISTRICT 17" },
    { code: "11709", area: "VIRGINIA - VIRGINIA TOWNSHIP - DISTRICT 17" },
    { code: "11710", area: "SUNDUFU - CHEESEMANBURG TOWNSHIP - DISTRICT 17" },
    { code: "11711", area: "CHEESEMANBURG - CHEESEMANBURG TOWNSHIP - DISTRICT 17" },
    { code: "11712", area: "BREWERVILLE - BREWERVILLE - DISTRICT 17" },
    { code: "11713", area: "ROYESVILLE - ROYESVILLE TOWNSHIP - DISTRICT 17" },
    { code: "11714", area: "ACROSS THE CREEK - ROYESVILLE TOWNSHIP - DISTRICT 17" }
  ],
  "Bong": [
    { code: "30101", area: "DOE - DOE - KOKOYAH" },
    { code: "30102", area: "NANGBO - NANGBO - KOKOYAH" },
    { code: "30103", area: "TIKPAH - TIKPAH - TUKPAHBLEE" },
    { code: "30104", area: "MELEKEI - MELEKEI - TUKPAHBLEE" },
    { code: "30105", area: "DEAN TOWN - DEAN - BEINSEN" },
    { code: "30106", area: "U-LA - U-LA - BEINSEN" },
    { code: "30107", area: "BEHWEE - BEHWEE - BEINSEN" },
    { code: "30108", area: "DUTA - DUTA - KPAAI" },
    { code: "30109", area: "WOLATA - WOLATA - KPAAI" },
    { code: "30201", area: "TAMAY TA - TAMAY TA - JORQUELLEH 2" },
    { code: "30202", area: "GBENEQUELLEH - GBENEQUELLEH - JORQUELLEH 2" },
    { code: "30203", area: "JANKPAYAH - JANKPAYAH - JORQUELLEH 2" },
    { code: "30204", area: "SAMAY - SAMAY - JORQUELLEH 2" },
    { code: "30205", area: "MANO-WEASUE - MANOWEASUE - JORQUELLLEH 2" },
    { code: "30206", area: "JANYEA - JANYEA - JORQUELLEH 2" },
    { code: "30207", area: "KOLLIETA-MULA - KOLLIETA-MULA - JORQUELLEH 2" },
    { code: "30301", area: "MELEKEI - GBARNGA - JORQUELLEH 1" },
    { code: "30302", area: "CAMP TUBMAN BARRACK - GBARNGA - JORQUELLEH 1" },
    { code: "30303", area: "RUBBER FACTORY - GBARNGA - JORQUELLEH 1" },
    { code: "30304", area: "LOFA ROAD - GBARNGA - JORQUELLEH 1" },
    { code: "30305", area: "IRON GATE - GBARNGA - JORQUELLEH 1" },
    { code: "30306", area: "OLD IRON GATE - GBARNGA - JORQUELLEH 1" },
    { code: "30307", area: "BROOKLYN - GBARNGA - JORQUELLEH 1" },
    { code: "30308", area: "SUGAR HILL - GBARNGA - JORQUELLEH 1" },
    { code: "30309", area: "FAR EAST - GBARNGA - JORQUELLEH 1" },
    { code: "30310", area: "BROAD STREET - GBARNGA - JORQUELLEH 1" },
    { code: "30311", area: "LELEKPAYEA - GBARNGA - JORQUELLEH 1" },
    { code: "30312", area: "LPMC ROAD - GBARNGA - JORQUELLLEH 1" },
    { code: "30313", area: "GANTA PARKING - GBARNGA - JORQUELLEH 1" },
    { code: "30314", area: "COUNTY FIELD - GBARNGA - JORQUELLEH 1" },
    { code: "30315", area: "WONGBA - WONGBA - JORQUELLEH 1" },
    { code: "30316", area: "GBAOTA - GBAOTA - JORQUELLEH 1" },
    { code: "30317", area: "KPANYAH - KPANYAH - JORQUELLEH 1" },
    { code: "30318", area: "GBARMUE - GBARMUE - JORQUELLEH 1" },
    { code: "30401", area: "MOAGAN - MOAGAN - PANTA" },
    { code: "30402", area: "JORWAH - JORWAH - PANTA" },
    { code: "30403", area: "BELEFANAI - BELEFANAI - ZOTA" },
    { code: "30404", area: "YOWEE - YOWEE - ZOTA" },
    { code: "30405", area: "GOU - GOU - SANOYEA" },
    { code: "30406", area: "GBONOTA - GBONOTA - SANOYEA" },
    { code: "30501", area: "SKT - SKT - SUAKOKO" },
    { code: "30502", area: "CUTTINGTON - PHEBE - SUAKOKO" },
    { code: "30503", area: "PHEBE - PHEBE - SUAKOKO" },
    { code: "30504", area: "SINYEA - SINYEA - SUAKOKO" },
    { code: "30505", area: "GEAMUE - GEAMUE - SUAKOKO" },
    { code: "30506", area: "DULIMUE - DULIMUE - SUAKOKO" },
    { code: "30507", area: "GOKAI - GOKAI - SUAKOKO" },
    { code: "30601", area: "GBARTALA - GBARTALA - YEALLLEQUELLEH" },
    { code: "30602", area: "PALALA - PALALA - YEALLEQUELLEH" },
    { code: "30603", area: "FENUTOLI - FENUTOLI - YEALLEQUELLEH" },
    { code: "30604", area: "GARYEA - GARYEA - YEALLEQUELLEH" },
    { code: "30605", area: "GLENKORMAH - GLENKORMAH - YEALLEQUELLEH" },
    { code: "30701", area: "SALALA - SALALA - SALALA" },
    { code: "30702", area: "TOTOTA - TOTOTA - SALALA" },
    { code: "30703", area: "POPOTA - POPOTA - FUAMAH" },
    { code: "30704", area: "DOBLI ISLAND - DOBLI ISLAND - FUAMAH" }
  ],
  "Grand Bassa": [
    { code: "40101", area: "LLOYDSVILLE - KPORKON - DISTRICT 1" },
    { code: "40102", area: "KPALAWRU - KPORKON - DISTRICT 1" },
    { code: "40103", area: "ZEON - ZEON - DISTRICT 1" },
    { code: "40104", area: "ZUZOHN - ZUZOHN - DISTRICT 1" },
    { code: "40105", area: "EDINA - EDINA - DISTRICT 1" },
    { code: "40106", area: "LITTLE BASSA - EDINA - DISTRICT 1" },
    { code: "40107", area: "OWENSGROOVE - OWENSGROOVE - DISTRICT 1" },
    { code: "40201", area: "GEEHGBAHN - GEEHBAHN - DISTRICT 2" },
    { code: "40202", area: "YEABLOE - YEABLOE - DISTRICT 2" },
    { code: "40203", area: "ST. JOHN - ST. JOHN - DISTRICT 2" },
    { code: "40204", area: "HARTFORD - HARTFORD - DISTRICT 2" },
    { code: "40301", area: "BLEEWEIN TOWN - BUCHANAN - DISTRICT 3" },
    { code: "40302", area: "SANWIN TOWN - BUCHANAN - DISTRICT 3" },
    { code: "40303", area: "BARCONI - BUCHANAN - DISTRICT 3" },
    { code: "40304", area: "UPPER BUCHANAN - BUCHANAN - DISTRICT 3" },
    { code: "40305", area: "FOUR HOUSES - BUCHANAN - DISTRICT 3" },
    { code: "40306", area: "CENTRAL BUCHANAN - BUCHANAN - DISTRICT 3" },
    { code: "40307", area: "LOWER BUCHANAN - BUCHANAN - DISTRICT 3" },
    { code: "40308", area: "FAIR GROUND - BUCHANAN - DISTRICT 3" },
    { code: "40309", area: "GOD BLESS YOU HILL - BUCHANAN - DISTRICT 3" },
    { code: "40310", area: "WATCO CAMP - LOWER HARLANDSVILLE - DISTRICT 3" },
    { code: "40311", area: "NEW BUCHANAN - LOWER HARLANDSVILLE - DISTRICT 3" },
    { code: "40312", area: "JECKO TOWN - LOWER HARLANDSVILLE - DISTRICT 3" },
    { code: "40313", area: "EEKREEN - KEEKREEN - DISTRICT 3" },
    { code: "40314", area: "OWN YOUR OWN - KEEKREEN - DISTRICT 3" },
    { code: "40315", area: "CORN FAM - BUCHANAN - DISTRICT 3" },
    { code: "40316", area: "SUGAR CANE FARM - BUCHANAN - DISTRICT 3" },
    { code: "40317", area: "BIAFRA - BUCHANAN - DISTRICT 3" },
    { code: "40318", area: "FANTI TOWN - BUCHANAN - DISTRICT 3" },
    { code: "40319", area: "DIRT HOLE - BUCHANAN - DISTRICT 3" },
    { code: "40320", area: "SAYEPUE HILL - BUCHANAN - DISTRICT 3" },
    { code: "40321", area: "SUGAR HILL - BUCHANAN - DISTRICT 3" },
    { code: "40401", area: "GORBLEE - GORBLEE - DISTRICT 4" },
    { code: "40402", area: "BLEZEE - BLEZEE - DISTRICT 4" },
    { code: "40403", area: "DEEGBAH - BLEEZEE - DISTRICT 4" },
    { code: "40404", area: "ZONDO MISSION - ZONDO MISSION - DISTRICT 4" },
    { code: "40405", area: "NYUEIN_WEIN - NYUEIN_WEIN - DISTRICT 4" },
    { code: "40501", area: "WHROGBA - WHROGBA - DISTRICT 5" },
    { code: "40502", area: "DOEGBAHN_GLAYDOR - DOEGBAHN_GLAYDOR - DISTRICT 5" },
    { code: "40503", area: "KPOEWEIN - KPOEWEIN - DISTRICT 5" },
    { code: "40504", area: "PALM BAY - PALM BAY - DISTRICT 5" }
  ],
  "Margibi": [
    { code: "20101", area: "R2 COMMUNITY - DUAZON - MAMBAH KABA" },
    { code: "20102", area: "ROCK INTERNATIONAL - DUAZON - MAMBAH KABA" },
    { code: "20103", area: "DUAZON - DUAZON - MAMBAH KABA" },
    { code: "20104", area: "EBK BARRACKS - SCHIEFFLIN - MAMBAH KABA" },
    { code: "20105", area: "BOYS TOWN - SCHIEFFLIN - MAMBAH KABA" },
    { code: "20106", area: "SCHIEFFLIN - SCHIEFFLIN - MAMBAH KABA" },
    { code: "20107", area: "ELLEN ESTATE - SCHIEFFLIN - MAMBAH KABA" },
    { code: "20108", area: "MARSHALL - MARSHALL - MAMBAH KABA" },
    { code: "20109", area: "FARMINGTON - FARMINGTON - MAMBAH KABA" },
    { code: "20110", area: "KARFEAH - KARFEAH - MAMBAH KABA" },
    { code: "20111", area: "LOONGAYE - LOONGAYE - MAMBAH KABA" },
    { code: "20112", area: "ZOEDUEHN - ZOEDUEHN - MAMBAH KABA" },
    { code: "20113", area: "GARNOE - GARNOE - MAMBAH KABA" },
    { code: "20114", area: "GARZON - FARMINGTON - MAMBAH KABA" },
    { code: "20115", area: "LLOYDSVILLE CENTRAL - LOYDSVILLE - MAMBAH KABA" },
    { code: "20201", area: "UNIFICATION TOWN - UNIFICATION - MAMBAH KABA" },
    { code: "20202", area: "CENTRAL CHARLESVILLE - FARMINGTON - MAMBAH KABA" },
    { code: "20203", area: "DOLO TOWN - UNIFICATION - MAMBAH KABA" },
    { code: "20204", area: "COTTON TREE - UNIFICATION - MAMBAH KABA" },
    { code: "20205", area: "HARBEL - UNIFICATION - MAMBAH KABA" },
    { code: "20206", area: "GARZON WEST - FARMINTON - MAMBAH KABA" },
    { code: "20301", area: "DIVISION 25 - DIVISION 25 - FIRESTONE" },
    { code: "20302", area: "DIVISION 29 - CAMP 2 - FIRESTONE" },
    { code: "20303", area: "DIVISION 36 - CAMp 3 - FIRESTONE" },
    { code: "20304", area: "DIVISION 14 - CAMP 3 - FIRESTONE" },
    { code: "20305", area: "DIVISION 38 - OLD CAMP - FIRESTONE" },
    { code: "20306", area: "DIVISION 43 - CAMp - FIRESTONE" },
    { code: "20307", area: "DIVISION 24 - CAMP - FIRESTONE" },
    { code: "20308", area: "DIVISION 27 - FIRESTONE - FIRESTONE" },
    { code: "20309", area: "DU SIDE VILLAGE - DU SIDE - FIRESTONE" },
    { code: "20401", area: "DENNISVILLE COMMUNITY - KAKATA - KAKATA" },
    { code: "20402", area: "MENDE TOWN - KAKATA - KAKATA" },
    { code: "20403", area: "KRTTI - KAKATA - KAKATA" },
    { code: "20404", area: "BWI - KAKATA - KAKATA" },
    { code: "20405", area: "NANCY DOE - KAKATA - KAKATA" },
    { code: "20406", area: "ST. CHRISTOPHER - KAKATA - KAKATA" },
    { code: "20407", area: "CH RENNIE - KAKATA - KAKATA" },
    { code: "20408", area: "WHENNEY TOWN - KAKATA - KAKATA" },
    { code: "20409", area: "SUE TOWN - KAKATA - KAKATA" },
    { code: "20410", area: "BARCLAY - KAKATA - KAKATA" },
    { code: "20411", area: "MULA - KAKATA - KAKATA" },
    { code: "20412", area: "GBOYORMU - KAKATA - KAKATA" },
    { code: "20413", area: "JOHN HILL - KAKATA - KAKATA" },
    { code: "20414", area: "MORRIS FARM - KAKATA - KAKATA" },
    { code: "20501", area: "GALILA - GALILA - GIBI" },
    { code: "20502", area: "MASSAQUOI - MASSAQUOI - GIBI" },
    { code: "20503", area: "KPENEWEIN - KPENEWEIN - GIBI" },
    { code: "20504", area: "FAHNJACK - FAHNJACK - GIBI" }
  ],
  "Nimba": [
    { code: "50101", area: "NENGBE - NENGBE - GARR-BAIN" },
    { code: "50102", area: "GBUYEE - GBUYEE - GARR-BAIN" },
    { code: "50103", area: "TONGLAYWIN - TONGLAYWIN - GARR-BAIN" },
    { code: "50104", area: "DORMAH PA - DORMAH PA - GARR-BAIN" },
    { code: "50105", area: "YELEKORYEE - YELEKORYEE - GARR-BAIN" },
    { code: "50106", area: "GUINEA BORDER - GBUYEE - GARR-BAIN" },
    { code: "50107", area: "CITY VIEW - GANTA - GARR-BAIN" },
    { code: "50108", area: "ZOKESEH - GANTA - GARR-BAIN" },
    { code: "50109", area: "GEOLANDO - GANTA - GARR-BAIN" },
    { code: "50110", area: "TONGLAYWIN - GANTA - GARR-BAIN" },
    { code: "50111", area: "HOPE VILLAGE - GANTA - GARR-BAIN" },
    { code: "50112", area: "BLAGAYS - GANTA - GARR-BAIN" },
    { code: "50113", area: "DEAKEHMEIN - GANTA - GARR-BAIN" },
    { code: "50114", area: "GBUYEE - GANTA - GARR-BAIN" },
    { code: "50115", area: "J.W. PEARSON - GANTA - GARR-BAIN" },
    { code: "50116", area: "TOKAY HILL - GANTA - GARR-BAIN" },
    { code: "50117", area: "GLENYILUU - GANTA - GARR-BAIN" },
    { code: "50118", area: "REHAB TOWN - GANTA - GARR-BAIN" },
    { code: "50119", area: "LPMC - GANTA - GARR-BAIN" },
    { code: "50201", area: "GBOA - GBOA - SANNIQUELLIE-MAHN" },
    { code: "50202", area: "TONWEE - TONWEE - SANNIQUELLIE-MAHN" },
    { code: "50203", area: "SEHYI KIMPA - SEHYI KIMPA - SANNIQUELLIE-MAHN" },
    { code: "50204", area: "ZOLOWEE - ZOLOWEE - SANNIQUELLIE-MAHN" },
    { code: "50205", area: "NEIPA COMMUNITY - SANNIQUELLIE - SANNIQUELLIE-MAHN" },
    { code: "50206", area: "RED CROSS - SANNIQUEELLIE - SANNIQUELLIE-MAHN" },
    { code: "50207", area: "BADIO TOWN - SANNIQUELLIE - SANNIQUELLIE-MAHN" },
    { code: "50208", area: "BAHA'I LOCAL - SANNIQUELLIE - SANNIQUELLIE-MAHN" },
    { code: "50209", area: "ARS COMPOUND - SANNIQUELLIE - SANNIQUELLIE-MAHN" },
    { code: "50210", area: "ST. MARRY HOSPITAL - SANNIQUELLIE - SANNIQUELLIE-MAHN" },
    { code: "50211", area: "JOY FM - SANNIQUELLIE - SANNIQUELLIE-MAHN" },
    { code: "50212", area: "NIMBA UNIVERSITY - SANNIQUELLIE - SANNIQUELLIE-MAHN" },
    { code: "50213", area: "GBAYEE - GBAYEE - YARPEA-MAHN" },
    { code: "50214", area: "GOTONWIN - GOTONWIN - YARPEA-MAHN" },
    { code: "50215", area: "BOAPLAY - BOAPLAY - YARPEA-MAHN" },
    { code: "50216", area: "MAO - MAO - YARPEA-MAHN" },
    { code: "50301", area: "ZOR KIALAY - ZOR KIALAY - GBEHLAY-GEH" },
    { code: "50302", area: "KARNPLAY - KARNPLAY - GBEHLAY-GEH" },
    { code: "50303", area: "DULAY - DULAY - GBEHLAY-GEH" },
    { code: "50304", area: "ZUALAY - ZUALAY - GBEHLAY-GEH" },
    { code: "50305", area: "GBAPA - GBAPA - GBEHLAY-GEH" },
    { code: "50306", area: "NEW YEKEPA - NEW YEKEPA - YARMEIN" },
    { code: "50307", area: "BONLA - BONLA - YARMEIN" },
    { code: "50401", area: "KORSEIN - KORSEIN - GBOR" },
    { code: "50402", area: "WEHPLAY - WEHPLAY - GBOR" },
    { code: "50403", area: "SAIPLAY - SAIPLAY - GBOR" },
    { code: "50404", area: "PAYEE - PAYEE - GBOR" },
    { code: "50405", area: "RLEKPORLAY - RLEKPORLAY - GBOR" },
    { code: "50406", area: "BAYLEHGLAY - BAYLEHGLAY - GBOR" },
    { code: "50407", area: "KPAIRPLAY - KPAIRPLAY - TWAN RIVER" },
    { code: "50408", area: "KEHLOW - KEHLOW - TWAN RIVER" },
    { code: "50409", area: "BEH - BEH - TWAN RIVER" },
    { code: "50410", area: "VAYENGLAY - VAYENGLAY - TWAN RIVER" },
    { code: "50411", area: "SENLAY - SENLAY - TWAN RIVER" },
    { code: "50412", area: "GBONWEA - GBONWEA - TWAN RIVER" },
    { code: "50413", area: "MAHDIAPLAY - MAHDIAPLAY - TWAN RIVER" },
    { code: "50414", area: "GARPLAY - GARPLAY - TWAN RIVER" },
    { code: "50415", area: "DUAH - DUAH - TWAN RIVER" },
    { code: "50416", area: "GBEI BONNAH - GBEI BONNAH - TWAN RIVER" },
    { code: "50417", area: "GBLANLAY - GBLANLAY - TWAN RIVER" },
    { code: "50418", area: "GBEI VONWEA - GBEI VONWEA - TWAN RIVER" },
    { code: "50419", area: "GBORPLAY - GBORPLAY - TWAN RIVER" },
    { code: "50420", area: "LONTUO - LONTUO - TWAN RIVER" },
    { code: "50421", area: "BONGARPLAY - BONGARPLAY - TWAN RIVER" },
    { code: "50501", area: "BEATATUO - BEATATUO - BUU-YAO" },
    { code: "50502", area: "BEEPLAY - BEEPLAY - BUU-YAO" },
    { code: "50503", area: "GLARLAY - GLARLAY - BUU-YAO" },
    { code: "50504", area: "TIAPLAY - TIAPLAY - BUU-YAO" },
    { code: "50505", area: "NYARLAY - NYARLAY - BUU-YAO" },
    { code: "50506", area: "ZUAHPLAY - ZUAHPLAY - BUU-YAO" },
    { code: "50507", area: "YAO LEPULA - YAO LEPULA - BUU-YAO" },
    { code: "50508", area: "DIAPLAY - DIAPLAY - BUU-YAO" },
    { code: "50509", area: "GBANWEA - GBANWEA - BUU-YAO" },
    { code: "50510", area: "DINPLAY - DINPLAY - BUU-YAO" },
    { code: "50511", area: "TEAHPLAY - TEAHPLAY - BUU-YAO" },
    { code: "50512", area: "BIAHPLAY - BIAHPLAY - BUU-YAO" },
    { code: "50513", area: "TANWEA - TANWEA - BUU-YAO" },
    { code: "50514", area: "BUUTUO - BUUTUO - BUU-YAO" },
    { code: "50515", area: "GOMAHPLAY - GOMAHPLAY - BUU-YAO" },
    { code: "50516", area: "BLEMIEPLAY - BLEMIEPLAY - BUU-YAO" },
    { code: "50601", area: "TOWEH - TOWEH - BOE & QUILLA" },
    { code: "50602", area: "SARLAY - SARLAY - BOE & QUILLA" },
    { code: "50603", area: "MARLAY - MARLAY - BOE & QUILLA" },
    { code: "50604", area: "GAYEA - GAYEA - KPARBLEE" },
    { code: "50605", area: "DUBUZON - DUBUZON - KPARBLEe" },
    { code: "50606", area: "TAPPITA - TAPPITA - DOE" },
    { code: "50607", area: "VAHN - VAHN - DOE" },
    { code: "50608", area: "KWIPEA - KWIPEA - DOE" },
    { code: "50701", area: "KPAYTUO - KPAYTUO - WEE-GBEHYI" },
    { code: "50702", area: "LOYEE - LOYEE - WEE-GBEHYI" },
    { code: "50703", area: "FLEEDIN - FLEEDIN - WEE-GBEHYI" },
    { code: "50704", area: "GUAWIN - GUAWIN - WEE-GBEHYI" },
    { code: "50705", area: "NYAO - NYAO - WEE-GBEHYI" },
    { code: "50706", area: "NYANSIN - NYANSIN - WEE-GBEHYI" },
    { code: "50707", area: "GBANQUOI - GBANQUOI - WEE-GBEHYI" },
    { code: "50708", area: "SANQUOI - SANQUOI - WEE-GBEHYI" },
    { code: "50709", area: "BUEH - BUEH - WEE-GBEHYI" },
    { code: "50710", area: "MEHNPA - MEHNPA - WEE-GBEHYI" },
    { code: "50711", area: "TROUPOE - TROUPOE - ZOE-GBAO" },
    { code: "50712", area: "BUANPLAY - BUANPLAY - ZOE-GBAO" },
    { code: "50713", area: "BEHYEPEA - BEHYEPEA - ZOE-GBAO" },
    { code: "50714", area: "ZANTUO - ZANTUO - ZOE-GBAO" },
    { code: "50715", area: "BAHN - BAHN CITY - ZOE-GBAO" },
    { code: "50716", area: "BUU-GBOR - BUU-GBOR - ZOE-GBAO" },
    { code: "50717", area: "GBLAH - GBLAH - ZOE-GBAO" },
    { code: "50718", area: "MIAPLAY - MIAPLAY - ZOE-GBAO" },
    { code: "50719", area: "ZAYGLAY - ZAYGLAY - ZOE-GBAO" },
    { code: "50720", area: "GORLAY - GORLAY - ZOE-GBAO" },
    { code: "50721", area: "ZOE-LUAPA - ZOE-LUAPA - ZOE-GBAO" },
    { code: "50801", area: "GAMPA - GAMPA - MEINPEA-MAHN" },
    { code: "50802", area: "BANLAH - BANLAH - MEINPEA-MAHN" },
    { code: "50803", area: "TONWIN - TONWIN - MEINPEA-MAHN" },
    { code: "50804", area: "BUNADIN - BUNADIN - MEINPEA-MAHN" },
    { code: "50805", area: "GARNWIN - GARNWIN - MEINPEA-MAHN" },
    { code: "50806", area: "TINYEE - TINYEE - MEINPEA-MAHN" },
    { code: "50807", area: "SOKOPA - SOKOPA - MEINPEa-MAHN" },
    { code: "50808", area: "GBLEHYEE - GBLEHYEE - MEINPEA-MAHN" },
    { code: "50809", area: "KPEIN - KPEIN - MEINPEA-MAHN" },
    { code: "50810", area: "TUNUKPUYEE - TUNUKPUYEE - MEINPEA-MAHN" },
    { code: "50811", area: "WHENTEN - WHENTEN - LEEWEHPEA-MAHN" },
    { code: "50812", area: "GIPO - GIPO - LEEWEHPEA-MAHN" },
    { code: "50813", area: "FLUMPA - FLUMPA - LEEWEHPEA-MAHN" },
    { code: "50814", area: "BLOHN - BLOHN - LEEWEHPEA-MAHN" },
    { code: "50815", area: "BINDIN - BINDIN - LEEWEHPEA-MAHN" },
    { code: "50816", area: "DOHN - DOHN - LEEWEHPEA-MAHN" },
    { code: "50817", area: "KPALLAH - KPALLAH - LEEWEHPEA-MAHN" },
    { code: "50901", area: "ZAROGBO - ZAROGBO - GBI & DORU" },
    { code: "50902", area: "ZEEWROH - ZEEWROH - GBI & DORU" },
    { code: "50903", area: "WONTOE - WONTOE - GBI & DORU" },
    { code: "50904", area: "ZAHN ZAYEE - ZAHN ZAYEE - YARWEIN-MEHNSONOH" },
    { code: "50905", area: "ZEKEPA - ZEKEPA - YARWEIN-MEHNSONOH" }
  ],
  "Lofa": [
    { code: "60101", area: "NDAMA - NDAMA - FOYA" },
    { code: "60102", area: "KONKPAMA - KONKPAMA - FOYA" },
    { code: "60103", area: "FOYA - FOYA CITY - FOYA" },
    { code: "60104", area: "FASSAPOE - FASSAPOE - FOYA" },
    { code: "60105", area: "SINAGOLE - SINAGOLE - FOYA" },
    { code: "60106", area: "NDEHUMA - NDEHUMA - FOYA" },
    { code: "60107", area: "YELAYALOE - YELAYALOE - FOYA" },
    { code: "60108", area: "BORLILOE - BORLILOE - FOYA" },
    { code: "60109", area: "BANDENIN - BANDENIN - FOYA" },
    { code: "60110", area: "BANDENIN MELIMU - BANDENIN MELIMU - FOYA" },
    { code: "60111", area: "LEPALOE - LEPALOE - FOYA" },
    { code: "60201", area: "KORTUMA - KORTUMA - VAHUN" },
    { code: "60202", area: "VAHUN - VAHUN CITY - VAHUN" },
    { code: "60203", area: "UPPER GUMA - UPPER GUMA - VAHUN" },
    { code: "60204", area: "KAMATAHUN - KAMATAHUN - WANHASSA" },
    { code: "60205", area: "POPALAHUN - POPALAHUN - WANHASSA" },
    { code: "60206", area: "LEHUMA - LEHUMA - WANHASSA" },
    { code: "60208", area: "KIMBALOE - KIMBALOE - FOYA" },
    { code: "60301", area: "YASELAHUN - YASELAHUN - KOLAHUN" },
    { code: "60302", area: "BOWAHUN - BOWAHUN - KOLAHUN" },
    { code: "60303", area: "PASOLAHUN - PASOLAHUN - KOLAHUN" },
    { code: "60304", area: "KAMBOLAHUN - KAMBOLAHUN - KOLAHUN" },
    { code: "60305", area: "SOMALAHUN - SOMALAHUN - KOLAHUN" },
    { code: "60401", area: "KONIA - KONIA - ZORZOR" },
    { code: "60402", area: "BARZIWEN - BARZIWEN - ZORZOR" },
    { code: "60403", area: "KARZAH - KARZAH - VOINJAMA" },
    { code: "60404", area: "ZOGOLEMAI - ZOGOLEMAI - VOINJAMA" },
    { code: "60405", area: "DAYZABAH - DAYZabah - VOINJAMA" },
    { code: "60406", area: "KESSELEMAI - KESSELEMAI - VOINJAMA" },
    { code: "60407", area: "WARBALAMAI - WARBALAMAI - VOINJAMA" },
    { code: "60408", area: "VOINJAMA - VOINJAMA - VOINJAMA" },
    { code: "60409", area: "WANGLODU - WANGLODU - QUARDU GBONI" },
    { code: "60410", area: "BARKEDU - BARKEDU - QUARDU GBONI" },
    { code: "60411", area: "SYLAKORLOR - SYLAKORLOR - QUARDU GBONI" },
    { code: "60412", area: "WOMAMA - WOMAMA - QUARDU GBONI" },
    { code: "60413", area: "SAYGBAMA - SAYGBAMA - QUARDU GBONI" },
    { code: "60501", area: "KPETEYEA - KPETEYEA - SALAYEA" },
    { code: "60502", area: "GANGLOTA - GONGLOTA - SALAYEA" },
    { code: "60503", area: "GBONYEA - GBONYEA - SALAYEA" },
    { code: "60504", area: "SALAYEA - SALAYEA - SALAYEA" },
    { code: "60505", area: "TAILEMAI - TAILEMAI - SALAYEA" },
    { code: "60506", area: "SUCROMU - SUCROMU - SALAYEA" },
    { code: "60507", area: "KPAIYEA - KPAIYEA - SALAYEA" },
    { code: "60508", area: "FASSAWALAZU - FASSAWALAZU - ZORZOR" },
    { code: "60509", area: "ZOLOWO - ZOLOWO - ZORZOR" },
    { code: "60510", area: "KILEWU - KILEWU - ZORZOR" },
    { code: "60511", area: "ZORZOR - ZORZOR - ZORZOR" },
    { code: "60512", area: "YEALA - YEALA - ZORZOR" },
    { code: "60513", area: "FISSIBU - FISSIBU - ZORZOR" },
    { code: "60514", area: "BALOMA - BALOMA - ZORZOR" },
    { code: "60515", area: "WOULOWUMO - WOULOWUMO - ZORZOR" },
    { code: "60516", area: "WUOMAI - WUOMAI - ZORZOR" },
    { code: "60517", area: "BALAGWALAZU - BALAGWALAZU - ZORZOR" },
    { code: "60518", area: "BODAH - BODAH - ZORZOR" },
    { code: "60519", area: "WANLEIMA - WANLEIMA - ZORZOR" },
    { code: "60520", area: "ZELEMAI - ZELEMAI - ZORZOR" },
    { code: "60521", area: "BORKEZA - BORKEZA - ZORZOR" },
    { code: "60522", area: "WARKESU - WARKESU - ZORZOR" },
    { code: "60523", area: "ZIGGIDA - ZIGGIDA - ZORZOR" }
  ],
  "Bomi": [
    { code: "71101", area: "BESAO - BESAO - SENJEH" },
    { code: "71102", area: "GAYAH HILL - GAYAH HILL - SENJEH" },
    { code: "71103", area: "BAIMA - BAIMA - SENJEH" },
    { code: "71104", area: "BEAJAH - BEAJAH - SENJEH" },
    { code: "71105", area: "WEAKAMA - WEAKAMA - SENJEH" },
    { code: "71106", area: "BEAFINIE - BEAFINIE - SENJEH" },
    { code: "71107", area: "ZAMIAH - ZAMIAH - SENJEH" },
    { code: "71108", area: "BARMO - BARMO - SENJEH" },
    { code: "71109", area: "TUBMANBURG - TUBMANBURG - SENJEH" },
    { code: "71110", area: "MAHER - MAHER - SENJEH" },
    { code: "71111", area: "BOLA - BOLA - SENJEH" },
    { code: "71112", area: "SACKIE - SACKIE - SENJEH" },
    { code: "71201", area: "KOWADEE - KOWADEE - KLAY" },
    { code: "71202", area: "GOGEHN - GOGEHN - KLAY" },
    { code: "71203", area: "GUIE - GUIE - KLAY" },
    { code: "71204", area: "SIEH - SIEH - KLAY" },
    { code: "71205", area: "MALEMA - MALEMA - KLAY" },
    { code: "71206", area: "MAMJAMA - MAMJAMA - DOWEIN" },
    { code: "71208", area: "VORTOR - VORTOR - DOWEIN" },
    { code: "71209", area: "GBAIGBON - GBAIGBON - DOWEIN" },
    { code: "71301", area: "MECCA - MECCA - SUEHN MECCA" },
    { code: "71302", area: "MALOMA - MALOMA - SUEHN MECCA" },
    { code: "71303", area: "SONODEE - SONODEE - SUEHN MECCA" },
    { code: "71304", area: "SUEHN - SUEHN - SUEHN MECCA" },
    { code: "71305", area: "BEYAN - BEYAN - SUEHN MECCA" },
    { code: "71306", area: "VINCENT - VINCENT - DOWEIN" },
    { code: "71307", area: "JENNEH - JENNEH - DOWEIN" },
    { code: "71308", area: "BONOR - BONOR - DOWEIN" }
  ],
  "Gbarpolu": [
    { code: "72101", area: "BOMBOMAH - BOMBOMAH - BOPOLU" },
    { code: "72102", area: "LOWER BONDI MANDINGO - LOWER BONDI MANDINGO - BOPOLU" },
    { code: "72103", area: "UPPER BONDI MANDINGO - UPPER BONDI MANDINGO - BOPOLU" },
    { code: "72104", area: "GONGBAYAH - GONGBAYAH - BOPOLU" },
    { code: "72105", area: "MEDINA - BOPOLU - BOPOLU" },
    { code: "72106", area: "DORLEHLALA - BOPOLU - BOPOLU" },
    { code: "72107", area: "LOWOMAH - BOPOLU - BOPOLU" },
    { code: "72108", area: "SAPPIMAH - BOPOLU - BOPOLU" },
    { code: "72109", area: "FARWEHNTA CENTRAL - BOPOLU - BOPOLU" },
    { code: "72110", area: "GUYAN-TA - BOPOLU - BOPOLU" },
    { code: "72111", area: "TAWALATA - TAWALATA - BOPOLU" },
    { code: "72201", area: "FASSAMA - FASSAMA - BELLEH" },
    { code: "72202", area: "BELLEH YALLAH - BELLEH YALLAH - BELLEH" },
    { code: "72203", area: "KPAWOLOWU - KPAWOLOWU - BELLEH" },
    { code: "72204", area: "BALOMA - BALOMA - BELLEH" },
    { code: "72205", area: "GATIMA - GATIMA - BELLEH" },
    { code: "72206", area: "TIGGELEE - TIGGELEE - BELLEH" },
    { code: "72207", area: "GOMU - GOMU - GOUNWOLAILA" },
    { code: "72208", area: "KELLEH - KELLEH - GOUNWOLAILa" },
    { code: "72209", area: "GOU - GOU - GOUNWOLAILA" },
    { code: "72210", area: "ZEAYEA - ZEAYEA - GOUNWOLAILA" },
    { code: "72211", area: "ZALAKAI - ZALAKAI - BOKOMU" },
    { code: "72212", area: "SALAYAH - SALAYAH - BOKOMU" },
    { code: "72213", area: "MOILAKWELLE - MOILAKWELLE - BOKOMU" },
    { code: "72214", area: "GBELLETA - GBELLETA - BOKOMU" },
    { code: "72301", area: "WEASUA - WEASUA - GBARMA" },
    { code: "72302", area: "BALLAH & BASSA - BALLAH & BASSA - GBARMA" },
    { code: "72303", area: "SMITH - SMITH - GBARMA" },
    { code: "72304", area: "SIRLEAF - SIRLEAF - GBARMA" },
    { code: "72305", area: "BEATOE - BEATOE - GBARMA" },
    { code: "72306", area: "BEADEN - BEADEN - KONGBA" },
    { code: "72307", area: "GBAR - GBAR - KONGBA" },
    { code: "72308", area: "ZUIE - ZUIE - KONGBA" },
    { code: "72309", area: "BEATHOU - BEATHOU - KONGBA" },
    { code: "72310", area: "JAWAJAH - JAWAJAH - KONGBA" },
    { code: "72311", area: "KUNGBOR - KUNGBOR - KONGBA" },
    { code: "72312", area: "PAMBAYA - PAMBAYA - KONGBA" },
    { code: "72313", area: "NOMODATANAU - NOMODATANAU - KONGBA" }
  ],
  "Grand Cape Mount": [
    { code: "73101", area: "JENNEMANA - JANNEMANA - GOLA KONNEH" },
    { code: "73102", area: "GONDOR - GONDOR - GOLA KONNEH" },
    { code: "73103", area: "TAHN - TAHN - GOLA KONNEH" },
    { code: "73104", area: "MECCA - MECCA - GOLA KONNEH" },
    { code: "73105", area: "MANAGORDUAH - MANAGORDUAH - GOLA KONNEH" },
    { code: "73106", area: "FULAH CAMP - FUALH CAMP - PORKPA" },
    { code: "73107", area: "SOKPO - SOKPO - PORKPA" },
    { code: "73108", area: "KONGO - KONGO - PORKPA" },
    { code: "73109", area: "BUNDUMA - BUNDUMA - PORKPA" },
    { code: "73110", area: "JEIJUAH - JEIJUAH - PORKPA" },
    { code: "73111", area: "SEIMAVULA - SEIMAVULA - PORKPA" },
    { code: "73201", area: "GRASS FIELD - ROBERTSPORT - ROBERTSPORT" },
    { code: "73202", area: "KRU TOWN - ROBERTSPORT - ROBERTSPORT" },
    { code: "73203", area: "CENTRAL ROBERTSPORT - ROBERTSPORT - ROBERTSPORT" },
    { code: "73204", area: "UP TOWN - ROBERTSPORT - ROBERTSPORT" },
    { code: "73205", area: "GONBOJAH - ROBERTSPORT - ROBERTSPORT" },
    { code: "73206", area: "LONDIJAI - ROBERTSPORT - ROBERTSPORT" },
    { code: "73207", area: "GBASSALOR - ROBRTSPORT - ROBERTSPORT" },
    { code: "73208", area: "KIAZOLU - KIAZOLU - GARWULA" },
    { code: "73209", area: "GION - GION - GARWULA" },
    { code: "73210", area: "ZOEGBOE - ZOEGBOE - GARWULA" },
    { code: "73211", area: "ZODUA - ZODUA - GARWULA" },
    { code: "73301", area: "SAMBOLA - SAMBOLA - TEWOR" },
    { code: "73302", area: "KIAWU - KIAWU - TEWOR" },
    { code: "73303", area: "FAHNBULLEH - FAHNBULLEH - TEWOR" },
    { code: "73304", area: "PASSAWE - PASSAWE - TEWOR" },
    { code: "73305", area: "MENDE-MASSA - MENDE-MASSA - TEWOR" },
    { code: "73306", area: "KROMAH - KROMAH - TEWOR" },
    { code: "73307", area: "BO WATERSIDE - BO WATERSIDE - TEWOR" }
  ]
};


// Interactive Map Component
const InteractiveMap = ({ boundary, center, zoom = 15 }) => {
  const [map, setMap] = useState(null);
  
  // Parse WKT boundary to coordinates
  const parseBoundary = (wkt) => {
    if (!wkt) return [];
    
    try {
      const match = wkt.match(/POLYGON\(\((.*?)\)\)/);
      if (!match) return [];
      
      const coordsString = match[1];
      return coordsString.split(',').map(coord => {
        const [lng, lat] = coord.trim().split(' ').map(Number);
        return [lat, lng];
      });
    } catch (error) {
      console.error('Error parsing boundary:', error);
      return [];
    }
  };
  
  const boundaryCoords = parseBoundary(boundary);
  
  return (
    <div className="h-96 w-full rounded-xl overflow-hidden border border-gray-300 shadow-md">
      <MapContainer
        center={center || [6.300774, -10.79716]}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        whenCreated={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {boundaryCoords.length > 0 && (
          <Polygon
            positions={[boundaryCoords]}
            pathOptions={{ color: 'blue', fillColor: 'blue', fillOpacity: 0.2 }}
          />
        )}
        
        {center && (
          <Marker position={center}>
            <Popup>Property Center</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

const LlaDashboard = () => {
  const navigate = useNavigate();
  const [currentDate] = useState(new Date());
  const [activeLogo, setActiveLogo] = useState(0);
  const [userDSSN, setUserDSSN] = useState("");
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [analytics, setAnalytics] = useState({
    landDeeds: 0,
    propertyRecords: 0,
    landSurveys: 0,
    landDisputes: 0,
    landUseTypes: []
  });
  
  // UPTC Generation State
  const [generateData, setGenerateData] = useState({
    county: "",
    postal_code: "",
    boundary: "",
    surveyor_license_id: ""
  });
  const [generatedUPTC, setGeneratedUPTC] = useState("");
  const [generating, setGenerating] = useState(false);
  
  // UPTC Verification State
  const [verifyUPTC, setVerifyUPTC] = useState("");
  const [verificationResult, setVerificationResult] = useState(null);
  const [verifying, setVerifying] = useState(false);

  // Filtered postal codes based on selected county
  const [filteredPostalCodes, setFilteredPostalCodes] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogo(prev => (prev + 1) % logos.length);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkAuthAndFetchData = async () => {
      const isLoggedIn = localStorage.getItem("LLA_LOGGED_IN") === "true";
      const dssn = localStorage.getItem("LLA_DSSN") || "";
      
      if (!isLoggedIn) {
        navigate('/system');
        return;
      }

      setUserDSSN(dssn);
      
      try {
        let profileData = null;
        try {
          const profileResponse = await api.get('/profile-by-dssn', {
            params: { dssn: dssn },
            timeout: 10000
          });

          if (profileResponse.data && profileResponse.data.success) {
            profileData = profileResponse.data.data;
          }
        } catch (apiError) {
          console.log('Profile fetch error:', apiError.message);
        }

        if (profileData) {
          setUserProfile(profileData);
        } else {
          setUserProfile({
            first_name: "DSSN",
            last_name: "User",
            email: `${dssn}@digitalliberia.gov.lr`,
            image: "/logos/lla-user.png",
            phone: "Not available",
            address: "Digital Liberia User",
            postal_address: "Monrovia, Liberia"
          });
        }

        // Mock analytics data
        const mockAnalytics = {
          landDeeds: 185000,
          propertyRecords: 285000,
          landSurveys: 12500,
          landDisputes: 3250,
          landUseTypes: [
            { type: "Residential", records: 120000, percentage: 42 },
            { type: "Commercial", records: 75000, percentage: 26 },
            { type: "Agricultural", records: 50000, percentage: 18 },
            { type: "Industrial", records: 25000, percentage: 9 },
            { type: "Government", records: 15000, percentage: 5 }
          ]
        };
        
        setAnalytics(mockAnalytics);
      } catch (error) {
        console.error('Error in data processing:', error);
        setUserProfile({
          first_name: "DSSN",
          last_name: "User",
          email: `${dssn}@digitalliberia.gov.lr`,
          image: "/logos/lla-user.png",
          phone: "Not available",
          address: "Digital Liberia User",
          postal_address: "Monrovia, Liberia"
        });
        } finally {
        setLoading(false);
      }
    };

    checkAuthAndFetchData();
  }, [navigate]);

  // Update postal codes when county changes
  useEffect(() => {
    if (generateData.county && postalCodes[generateData.county]) {
      setFilteredPostalCodes(postalCodes[generateData.county]);
      setGenerateData(prev => ({ ...prev, postal_code: "" }));
    } else {
      setFilteredPostalCodes([]);
    }
  }, [generateData.county]);

  const handleLogout = () => {
    const keys = Object.keys(localStorage).filter(key => key.startsWith('LLA_'));
    keys.forEach(key => localStorage.removeItem(key));
    navigate("/system");
  };

  const handleRoleAccessClick = (role) => {
    alert(`Role-based access for ${role} will be implemented in the next update.`);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat().format(num);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Handle UPTC Generation
  const handleGenerateUPTC = async (e) => {
    e.preventDefault();
    setGenerating(true);
    setGeneratedUPTC("");
    
    try {
      const response = await api.post('/generate-uptc', generateData);
      
      if (response.data.success) {
        setGeneratedUPTC(response.data.uptc_code);
      } else {
        alert("Error generating UPTC: " + response.data.message);
      }
    } catch (error) {
      console.error('Error generating UPTC:', error);
      alert("Failed to generate UPTC. Please check your inputs and try again.");
    } finally {
      setGenerating(false);
    }
  };

  // Handle UPTC Verification
  const handleVerifyUPTC = async (e) => {
    e.preventDefault();
    setVerifying(true);
    setVerificationResult(null);
    
    try {
      const response = await api.get(`/verify-uptc/${verifyUPTC}`);
      
      if (response.data.success) {
        setVerificationResult(response.data.data);
      } else {
        alert("Error verifying UPTC: " + response.data.message);
      }
    } catch (error) {
      console.error('Error verifying UPTC:', error);
      alert("Failed to verify UPTC. Please check the code and try again.");
    } finally {
      setVerifying(false);
    }
  };

  // Handle input changes for UPTC generation
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGenerateData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Helper function to construct image URLs
  const constructImageUrl = (imagePath) => {
    if (!imagePath) return null;
    if (imagePath.startsWith('http')) return imagePath;
    return `https://storage.googleapis.com/system-liberianpost/${imagePath}`;
  };

  // Format date for display
  const formatDisplayDate = (dateString) => {
    if (!dateString) return "Not available";
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      return dateString;
    }
  };

  // Helper function to parse polygon boundary coordinates
  const parsePolygonCoordinates = (boundary) => {
    if (!boundary) return [];
    
    try {
      // Extract coordinates from WKT format: POLYGON((lon1 lat1, lon2 lat2, ...))
      const match = boundary.match(/POLYGON\(\((.*?)\)\)/);
      if (!match) return [];
      
      const coordsString = match[1];
      return coordsString.split(',').map(coord => {
        const [lon, lat] = coord.trim().split(' ');
        return { latitude: parseFloat(lat), longitude: parseFloat(lon) };
      });
    } catch (error) {
      console.error('Error parsing polygon coordinates:', error);
      return [];
    }
  };

  // Get center coordinates from boundary for map display
  const getCenterFromBoundary = (boundary) => {
    const coordinates = parsePolygonCoordinates(boundary);
    if (coordinates.length === 0) return [6.300774, -10.79716]; // Default Monrovia
    
    // Calculate center by averaging all coordinates
    const sum = coordinates.reduce((acc, coord) => {
      return {
        lat: acc.lat + coord.latitude,
        lng: acc.lng + coord.longitude
      };
    }, { lat: 0, lng: 0 });
    
    return [
      sum.lat / coordinates.length,
      sum.lng / coordinates.length
    ];
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-700 text-lg">Loading Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full bg-white text-gray-800 font-inter overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg border-b border-gray-200">
        <div className="flex flex-col px-6 py-4 max-w-7xl mx-auto">
          {/* Navigation Links - Top Row */}
          <nav className="flex justify-center space-x-3 mb-4">
            {navLinks.map(link => (
              <div key={link.to} className={`flex-shrink-0 ${link.color} px-4 py-2 rounded-xl shadow-md transform hover:scale-105 transition-all duration-300`}>
                <Link 
                  to={link.to} 
                  className="text-sm font-bold hover:text-blue-100 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* Liberia Land Authority Logo and Title - Bottom Row */}
          <div className="flex items-center justify-center space-x-4">
            <img src="/logos/lla.png" alt="LLA Logo" className="w-12 h-12 object-contain" />
            <div className="text-center">
              <h1 className="text-xl font-bold text-blue-800">
                Liberia Land Authority
              </h1>
              <p className="text-sm text-gray-600">Digital Liberia Platform</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-30 pt-40 pb-20 px-6">
        {/* Welcome Section */}
        <section className="max-w-7xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-2xl border border-blue-200 p-8 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-50/50"></div>
            
            <div className="relative">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-1 shadow-xl">
                      <img
                        src={userProfile?.image || "/logos/lla-user.png"}
                        alt="Profile"
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div>
                    <h1 className="text-4xl font-bold text-blue-900">
                      Welcome, {userProfile ? `${userProfile.first_name} ${userProfile.last_name}` : 'DSSN User'}
                    </h1>
                    <p className="text-gray-600 text-lg mt-2">{formatDate(currentDate)}</p>
                    <p className="text-blue-600 text-sm mt-1">
                      DSSN: {userDSSN} • {userProfile?.email}
                    </p>
                    {userProfile?.phone && userProfile.phone !== "Not available" && (
                      <p className="text-gray-500 text-sm mt-1">Phone: {userProfile.phone}</p>
                    )}
                  </div>
                </div>
                
                <button
                  onClick={handleLogout}
                  className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* UPTC Management Section */}
        <section className="max-w-7xl mx-auto mb-12">
          {/* Generate UPTC Container */}
          <div className="bg-white rounded-2xl border border-blue-200 shadow-lg overflow-hidden mb-8">
            <div className="px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
              <h2 className="text-2xl font-bold">Generate Unique Property Token Code (UPTC)</h2>
            </div>
            
            <div className="p-8">
              <form onSubmit={handleGenerateUPTC} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">County</label>
                    <select
                      name="county"
                      value={generateData.county}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select County</option>
                      {counties.map(county => (
                        <option key={county} value={county}>{county}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
                    <select
                      name="postal_code"
                      value={generateData.postal_code}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                      disabled={!generateData.county}
                    >
                      <option value="">Select Postal Code</option>
                      {filteredPostalCodes.map(item => (
                        <option key={item.code} value={item.code}>
                          {item.code} - {item.area}
                        </option>
                      ))}
                    </select>
                    {!generateData.county && (
                      <p className="text-xs text-gray-500 mt-1">Please select a county first</p>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Boundary (WKT Polygon Format)</label>
                    <textarea
                      name="boundary"
                      value={generateData.boundary}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                      rows="4"
                      placeholder="POLYGON((longitude1 latitude1, longitude2 latitude2, longitude3 latitude3, ...))"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Example: POLYGON((-10.79716 6.300774, -10.79716 6.301774, -10.79616 6.301774, -10.79616 6.300774, -10.79716 6.300774))
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Surveyor License ID</label>
                    <input
                      type="text"
                      name="surveyor_license_id"
                      value={generateData.surveyor_license_id}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                      placeholder="Enter your surveyor license ID"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={generating}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg font-semibold disabled:opacity-50"
                >
                  {generating ? "Generating..." : "Generate UPTC"}
                </button>
              </form>

              {generatedUPTC && (
                <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-2xl">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">UPTC Generated Successfully!</h3>
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">✅</span>
                    <div>
                      <p className="text-green-700 font-mono break-all">{generatedUPTC}</p>
                      <p className="text-sm text-green-600 mt-2">
                        This UPTC code can now be used to verify the land credentials.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Verify UPTC Container */}
          <div className="bg-white rounded-2xl border border-blue-200 shadow-lg overflow-hidden">
            <div className="px-6 py-4 bg-gradient-to-r from-green-600 to-green-800 text-white">
              <h2 className="text-2xl font-bold">Verify Unique Property Token Code (UPTC)</h2>
            </div>
            
            <div className="p-8">
              <form onSubmit={handleVerifyUPTC} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">UPTC Code</label>
                  <input
                    type="text"
                    value={verifyUPTC}
                    onChange={(e) => setVerifyUPTC(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                    placeholder="Enter UPTC code to verify"
                  />
                </div>
                <button
                  type="submit"
                  disabled={verifying}
                    className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg font-semibold disabled:opacity-50"
                >
                  {verifying ? "Verifying..." : "Verify UPTC"}
                </button>
              </form>

             {verificationResult && (
              <div className="mt-8">
                {/* Enhanced Verification Results */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden mb-6">
                  <div className="px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                    <h3 className="text-xl font-bold">UPTC Verification Results</h3>
                    <p className="text-blue-100 text-sm mt-1">
                      Verified on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
                    </p>
                  </div>
            
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Land Information Card */}
                      <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <span className="text-blue-600 text-xl">🏠</span>
                          </div>
                          <h4 className="text-lg font-semibold text-blue-800">Land Information</h4>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-blue-700 font-medium">Parcel ID:</span>
                            <span className="text-blue-900 font-mono">{verificationResult.land_parcel.parcel_id}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-blue-700 font-medium">County:</span>
                            <span className="text-blue-900">{verificationResult.land_parcel.county}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-blue-700 font-medium">Postal Code:</span>
                            <span className="text-blue-900">{verificationResult.land_parcel.postal_code}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-blue-700 font-medium">Area Name:</span>
                            <span className="text-blue-900">{verificationResult.land_parcel.area_name || "Not available"}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-blue-700 font-medium">Plot Number:</span>
                            <span className="text-blue-900">{verificationResult.land_parcel.plot_number}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-blue-700 font-medium">Boundary Points:</span>
                            <span className="text-blue-900">
                              {verificationResult.land_parcel.boundary 
                                ? `${verificationResult.land_parcel.boundary.length} coordinates` 
                                : "Not available"}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-blue-700 font-medium">Date Surveyed:</span>
                            <span className="text-blue-900">{formatDisplayDate(verificationResult.land_parcel.date_surveyed)}</span>
                          </div>
                        </div>
                      </div>
            
                      {/* Surveyor Information Card */}
                      <div className="bg-green-50 p-5 rounded-xl border border-green-100">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                            <span className="text-green-600 text-xl">👨‍💼</span>
                          </div>
                          <h4 className="text-lg font-semibold text-green-800">Surveyor Information</h4>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-green-700 font-medium">License ID:</span>
                            <span className="text-green-900">{verificationResult.surveyor.license_id}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-green-700 font-medium">Name:</span>
                            <span className="text-green-900">{verificationResult.surveyor.first_name} {verificationResult.surveyor.last_name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-green-700 font-medium">DSSN:</span>
                            <span className="text-green-900 font-mono">{verificationResult.surveyor.dssn}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-green-700 font-medium">Phone:</span>
                            <span className="text-green-900">{verificationResult.surveyor.phone_number || "Not available"}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-green-700 font-medium">Date of Birth:</span>
                            <span className="text-green-900">{formatDisplayDate(verificationResult.surveyor.date_of_birth)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-green-700 font-medium">Place of Birth:</span>
                            <span className="text-green-900">{verificationResult.surveyor.place_of_birth || "Not available"}</span>
                          </div>
                          {verificationResult.surveyor.image_url && (
                            <div className="pt-3 border-t border-green-200">
                              <div className="flex items-center space-x-3">
                                <span className="text-green-700 font-medium">Photo:</span>
                                <img 
                                  src={constructImageUrl(verificationResult.surveyor.image_url)} 
                                  alt="Surveyor" 
                                  className="w-12 h-12 rounded-lg object-cover border border-green-300"
                                  onError={(e) => {
                                    e.target.src = "/logos/lla-user.png";
                                  }}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
            
                    {/* Boundary Details Card */}
                    {verificationResult.land_parcel.boundary_wkt && (
                      <div className="mt-6 bg-purple-50 p-5 rounded-xl border border-purple-100">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                            <span className="text-purple-600 text-xl">🗺️</span>
                          </div>
                          <h4 className="text-lg font-semibold text-purple-800">Boundary Details</h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="text-purple-700 font-medium mb-2">WKT Format</h5>
                            <div className="bg-white p-3 rounded-lg border border-purple-200 overflow-x-auto">
                              <code className="text-sm text-purple-800 break-all">
                                {verificationResult.land_parcel.boundary_wkt}
                              </code>
                            </div>
                          </div>
                          <div>
                            <h5 className="text-purple-700 font-medium mb-2">Coordinates</h5>
                            <div className="bg-white p-3 rounded-lg border border-purple-200 max-h-40 overflow-y-auto">
                              {verificationResult.land_parcel.boundary ? (
                                verificationResult.land_parcel.boundary.map((coord, index) => (
                                  <div key={index} className="text-sm text-purple-800 mb-1">
                                    {index + 1}. {coord.latitude.toFixed(6)}, {coord.longitude.toFixed(6)}
                                  </div>
                                ))
                              ) : (
                                <div className="text-sm text-purple-600">No boundary coordinates available</div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
            
                    {/* Owners Information */}
                    {verificationResult.owners && verificationResult.owners.length > 0 && (
                      <div className="mt-6 bg-orange-50 p-5 rounded-xl border border-orange-100">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                            <span className="text-orange-600 text-xl">👥</span>
                          </div>
                          <h4 className="text-lg font-semibold text-orange-800">Property Owners</h4>
                          <span className="ml-2 text-orange-600 bg-orange-100 px-2 py-1 rounded-full text-sm">
                            {verificationResult.owners.length} owner(s)
                          </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {verificationResult.owners.map((owner, index) => (
                            <div key={index} className="bg-white p-5 rounded-xl border border-orange-200">
                              <div className="flex items-center mb-4">
                                {owner.image_url && (
                                  <img 
                                    src={constructImageUrl(owner.image_url)} 
                                    alt={owner.first_name} 
                                    className="w-16 h-16 rounded-xl object-cover border border-orange-300 mr-4"
                                    onError={(e) => {
                                      e.target.src = "/logos/lla-user.png";
                                    }}
                                  />
                                )}
                                <div>
                                  <span className="text-orange-600 font-medium mr-2">Owner #{index + 1}</span>
                                  <h5 className="text-orange-800 font-semibold text-lg">{owner.first_name} {owner.last_name}</h5>
                                  <p className="text-orange-700 text-sm font-mono">{owner.dssn}</p>
                                </div>
                              </div>
            
                              <div className="space-y-3 text-sm border-t border-orange-100 pt-4">
                                <div className="flex justify-between">
                                  <span className="text-orange-700 font-medium">Address:</span>
                                  <span className="text-orange-900 text-right">{owner.address || "Not available"}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-orange-700 font-medium">Phone:</span>
                                  <span className="text-orange-900">{owner.phone_number || "Not available"}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-orange-700 font-medium">Date of Birth:</span>
                                  <span className="text-orange-900">{formatDisplayDate(owner.date_of_birth)}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-orange-700 font-medium">Place of Birth:</span>
                                  <span className="text-orange-900">{owner.place_of_birth || "Not available"}</span>
                                </div>
            
                                {/* Owner Documents */}
                                {owner.documents && owner.documents.length > 0 && (
                                  <div className="mt-4 pt-4 border-t border-orange-100">
                                    <h6 className="text-orange-700 font-medium mb-3">Documents ({owner.documents.length})</h6>
                                    <div className="space-y-3">
                                      {owner.documents.map((doc, docIndex) => (
                                        <div key={docIndex} className="flex items-center justify-between bg-orange-50 p-3 rounded-lg border border-orange-200">
                                          <div>
                                            <span className="text-orange-700 font-medium capitalize">{doc.document_type || "Document"}</span>
                                            <p className="text-orange-600 text-xs">{formatDisplayDate(doc.date_uploaded)}</p>
                                          </div>
                                          {doc.image_url && (
                                            <a 
                                              href={constructImageUrl(doc.image_url)} 
                                              target="_blank" 
                                              rel="noopener noreferrer"
                                              className="text-orange-600 hover:text-orange-800 text-sm font-medium"
                                            >
                                              View Document
                                            </a>
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
            
                    {/* Status Bar */}
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                          <span className="text-green-700 font-medium">Verification Successful</span>
                        </div>
                        <span className="text-gray-500 text-sm">
                          UPTC: <span className="font-mono">{verifyUPTC}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
            
                {/* Interactive Map for Boundary Visualization */}
                {verificationResult.land_parcel.boundary_wkt && (
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-red-600 text-xl">📍</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">Property Location</h3>
                    </div>
            
                    <InteractiveMap 
                      boundary={verificationResult.land_parcel.boundary_wkt}
                      center={getCenterFromBoundary(verificationResult.land_parcel.boundary_wkt)}
                    />
            
                    <div className="mt-4 flex justify-between items-center">
                      <p className="text-sm text-gray-600">
                        Boundary Center: {getCenterFromBoundary(verificationResult.land_parcel.boundary_wkt)[0].toFixed(6)}, {getCenterFromBoundary(verificationResult.land_parcel.boundary_wkt)[1].toFixed(6)}
                      </p>
                      <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                        Download Boundary Details
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            
            {/* Analytics Dashboard */}
            <section className="max-w-7xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-8 text-blue-900 text-center">
                Land Administration Analytics
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Land Deeds */}
                <div className="bg-white border border-blue-200 rounded-2xl p-6 shadow-md hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-800">{formatNumber(analytics.landDeeds)}</h3>
                      <p className="text-blue-600">Land Deeds</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🏠</span>
                    </div>
                  </div>
                  <div className="mt-4 h-2 bg-blue-100 rounded-full">
                    <div className="h-full bg-blue-500 rounded-full w-3/4"></div>
                  </div>
                </div>
            
                {/* Property Records */}
                <div className="bg-white border border-purple-200 rounded-2xl p-6 shadow-md hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-purple-800">{formatNumber(analytics.propertyRecords)}</h3>
                      <p className="text-purple-600">Property Records</p>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">📋</span>
                    </div>
                  </div>
                  <div className="mt-4 h-2 bg-purple-100 rounded-full">
                    <div className="h-full bg-purple-500 rounded-full w-2/3"></div>
                  </div>
                </div>
            
                {/* Land surveys */}
                <div className="bg-white border border-green-200 rounded-2xl p-6 shadow-md hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-green-800">{formatNumber(analytics.landSurveys)}</h3>
                      <p className="text-green-600">Land Surveys</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🗺️</span>
                    </div>
                  </div>
                  <div className="mt-4 h-2 bg-green-100 rounded-full">
                    <div className="h-full bg-green-500 rounded-full w-1/3"></div>
                  </div>
                </div>
            
                {/* Land Disputes */}
                <div className="bg-white border border-orange-200 rounded-2xl p-6 shadow-md hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-orange-800">{formatNumber(analytics.landDisputes)}</h3>
                      <p className="text-orange-600">Land Disputes</p>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">⚖️</span>
                    </div>
                  </div>
                  <div className="mt-4 h-2 bg-orange-100 rounded-full">
                    <div className="h-full bg-orange-500 rounded-full w-1/4"></div>
                  </div>
                </div>
              </div>
            
              {/* Land Use Types Chart */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Land Use Types Distribution</h3>
                <div className="space-y-4">
                  {analytics.landUseTypes.map((landUse, index) => (
                    <div key={landUse.type} className="flex items-center justify-between">
                      <span className="text-gray-700 w-32 truncate font-medium">{landUse.type}</span>
                      <div className="flex-1 mx-4">
                        <div className="h-3 bg-gray-200 rounded-full">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                            style={{ width: `${landUse.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                      <span className="text-blue-800 font-semibold w-20 text-right">
                        {formatNumber(landUse.records)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            
            {/* Quick Actions */}
            <section className="max-w-7xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-8 text-blue-900 text-center">
                Quick Actions
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: "🏠", label: "Land Deeds", color: "from-blue-600 to-blue-700" },
                  { icon: "📋", label: "Property Records", color: "from-purple-600 to-purple-700" },
                  { icon: "🗺️", label: "Land Survey", color: "from-green-600 to-green-700" },
                  { icon: "⚖️", label: "Dispute Resolution", color: "from-orange-600 to-orange-700" },
                  { icon: "📝", label: "Land Registration", color: "from-red-600 to-red-700" },
                  { icon: "⚙️", label: "Settings", color: "from-gray-600 to-gray-700" }
                ].map((action, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-r ${action.color} rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-md cursor-pointer text-white`}
                  >
                    <div className="text-4xl mb-4">{action.icon}</div>
                    <h3 className="text-xl font-semibold">{action.label}</h3>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Role-Based Access Section */}
            <section className="max-w-7xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-8 text-blue-900 text-center">
                Role-Based Access
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { 
                    icon: "👨‍💼", 
                    label: "Authority Employees", 
                    color: "from-blue-600 to-blue-700",
                    description: "Access to land administration data, policy management, and system administration"
                  },
                  { 
                    icon: "🏠", 
                    label: "Land Officers", 
                    color: "from-blue-600 to-blue-700",
                    description: "Process land deeds, property records, and land use approvals"
                  },
                  { 
                    icon: "🗺️", 
                    label: "Surveyors", 
                    color: "from-green-600 to-green-700",
                    description: "Conduct land surveys, boundary demarcation, and mapping services"
                  },
                  { 
                    icon: "⚖️", 
                    label: "Dispute Resolution", 
                    color: "from-orange-600 to-orange-700",
                    description: "Handle land disputes, mediation, and conflict resolution processes"
                  },
                  { 
                    icon: "📝", 
                    label: "Registration Officers", 
                    color: "from-red-600 to-red-700",
                    description: "Process land registration, title deeds, and ownership transfers"
                  },
                  { 
                    icon: "🔐", 
                    label: "System Administrators", 
                    color: "from-gray-600 to-gray-700",
                    description: "Full system access, user management, and security configuration"
                  }
                ].map((role, index) => (
                  <div
                    key={index}
                    onClick={() => handleRoleAccessClick(role.label)}
                    className={`bg-gradient-to-r ${role.color} rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-md cursor-pointer text-white`}
                  >
                    <div className="text-4xl mb-4">{role.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{role.label}</h3>
                    <p className="text-sm opacity-90">{role.description}</p>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Footer */}
            <footer className="relative z-30 py-8 text-center bg-gray-50 border-t border-gray-200">
              <div className="max-w-7xl mx-auto">
                <p className="text-gray-600 text-sm">
                  © {new Date().getFullYear()} Liberia Land Authority - Digital Liberia. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  Advanced Land Administration System • Powered by Digital Liberia NDMS
                </p>
              </div>
            </footer>
          </section>
        </main>
      </div>
  );
};

export default LlaDashboard;
