import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from '@/api';

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
    { code: "11208", area: "MANGROVE ISLAND - GARDNERSVILLE TOWNSHIP - DISTRICT 12" },
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
    { code: "11604", area: "LAGOON - BOROUGH OF KRU TOWN - DISTRICT 16" },
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
    { code: "40315", area: "CORN FARM - BUCHANAN - DISTRICT 3" },
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
    { code: "20303", area: "DIVISION 36 - CAMP 3 - FIRESTONE" },
    { code: "20304", area: "DIVISION 14 - CAMP 3 - FIRESTONE" },
    { code: "20305", area: "DIVISION 38 - OLD CAMP - FIRESTONE" },
    { code: "20306", area: "DIVISION 43 - CAMP - FIRESTONE" },
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
    { code: "50116", area: "TOKAY HILL - GANTA - GARR-BAIN" }
  ]
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
    latitude: "",
    longitude: "",
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
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Latitude</label>
                    <input
                      type="text"
                      name="latitude"
                      value={generateData.latitude}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                      placeholder="e.g., 6.300774"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Longitude</label>
                    <input
                      type="text"
                      name="longitude"
                      value={generateData.longitude}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                      placeholder="e.g., -10.79716"
                    />
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
                  <div className="p-6 bg-blue-50 border border-blue-200 rounded-2xl mb-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-4">UPTC Verification Results</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-blue-700 mb-2">Land Information</h4>
                        <div className="space-y-2 text-sm">
                          <p><span className="font-medium">Parcel ID:</span> {verificationResult.land_parcel.parcel_id}</p>
                          <p><span className="font-medium">County:</span> {verificationResult.land_parcel.county}</p>
                          <p><span className="font-medium">Postal Code:</span> {verificationResult.land_parcel.postal_code}</p>
                          <p><span className="font-medium">Coordinates:</span> {verificationResult.land_parcel.latitude}, {verificationResult.land_parcel.longitude}</p>
                          <p><span className="font-medium">Date Surveyed:</span> {new Date(verificationResult.land_parcel.date_surveyed).toLocaleDateString()}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-blue-700 mb-2">Surveyor Information</h4>
                        <div className="space-y-2 text-sm">
                          <p><span className="font-medium">License ID:</span> {verificationResult.surveyor.license_id}</p>
                          <p><span className="font-medium">Name:</span> {verificationResult.surveyor.first_name} {verificationResult.surveyor.last_name}</p>
                          <p><span className="font-medium">DSSN:</span> {verificationResult.surveyor.dssn}</p>
                        </div>
                        
                        {verificationResult.owners.length > 0 && (
                          <div className="mt-4">
                            <h4 className="font-medium text-blue-700 mb-2">Owners</h4>
                            <div className="space-y-2 text-sm">
                              {verificationResult.owners.map((owner, index) => (
                                <div key={index} className="border-t border-blue-100 pt-2">
                                  <p><span className="font-medium">Name:</span> {owner.first_name} {owner.last_name}</p>
                                  <p><span className="font-medium">DSSN:</span> {owner.dssn}</p>
                                  <p><span className="font-medium">Address:</span> {owner.address}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Google Maps Integration - FIXED */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Property Location</h3>
                    <div className="h-96 w-full rounded-xl overflow-hidden border border-gray-300">
                      <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        style={{ border: 0 }}
                        src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyATNMTYKT2bvDzWMBSKGl-HvYqNz1BzYfs&center=${verificationResult.land_parcel.latitude},${verificationResult.land_parcel.longitude}&zoom=15&maptype=satellite`}
                        allowFullScreen
                      ></iframe>
                    </div>
                    <p className="text-sm text-gray-600 mt-3 text-center">
                      Coordinates: {verificationResult.land_parcel.latitude}, {verificationResult.land_parcel.longitude}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

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
      </main>

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
    </div>
  );
};

export default LlaDashboard;
