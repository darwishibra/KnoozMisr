
import styles from './ProductCards.module.css';
import Card from './Card';
import pomegranate from '../images/cardImages/pomegranate.png';
import fig from '../images/cardImages/fig.png';
import mango from '../images/cardImages/mango.png';
import strawberry from '../images/cardImages/strawberry.png';
import grapes from '../images/cardImages/grape.png';
import corn from '../images/cardImages/corn.png';
import peach from '../images/cardImages/peach.png';
import cantaloupe from '../images/cardImages/cantaloupe.png';
import guava from '../images/cardImages/guava.png';
import watermelon from '../images/cardImages/watermelon.png';
import orange from '../images/cardImages/orange.png'; 
import banana from '../images/cardImages/banana.png';
import pepper from '../images/cardImages/pepper.png';
import tomato from '../images/cardImages/tomato.png';
import eggplant from '../images/cardImages/eggplant.png';
import onion from '../images/cardImages/onion.png';
import garlic from '../images/cardImages/garlic.png';
import broccoli from '../images/cardImages/broccoli.png';
import olives from '../images/cardImages/olives.png';
import artichoke from '../images/cardImages/artichoke.png';
import cauliflower from '../images/cardImages/cauliflower.png';
import tangerine from '../images/cardImages/tangerine.png';
import peas from '../images/cardImages/peas.png';
import spinach from '../images/cardImages/spinach.png';
import greenbeans from '../images/cardImages/greenbeans.png';
import okra from '../images/cardImages/okra.png';
import broadbeans from '../images/cardImages/broadbeans.png';
import mushrooms from '../images/cardImages/mushroom.png';
import carrots from '../images/cardImages/carrots.png';
import molokhia from '../images/cardImages/molokhia.png';

export default function ProductCards() {
  return (
    <div className = {styles.productCards}>
        <Card text = "POME<div>GRANATE</div>" image = {pomegranate} dates = "AUG to NOV" radius = "26px" background = "#a90000" shadow = "13px 13px 26px #820000, -13px -13px 26px #d00000"/>

        <Card text = "FIGS" image = {fig} dates = "JUL to SEPT" radius = "26px" background = "#752a41" shadow = "13px 13px 26px #5a2032, -13px -13px 26px #903450"/>

        <Card text = "MANGO" image = {mango} dates = "JUL to DEC" radius = "26px" background = "#f98d36" shadow = "13px 13px 26px #c06d2a, -13px -13px 26px #ffad42"/>

        <Card text = "STRAW<div>BERRY</div>" image = {strawberry} dates = "NOV to FEB" radius = "26px" background = "#e00018" shadow = "13px 13px 26px #ac0012, -13px -13px 26px #ff001e"/>

        <Card text = "GRAPES" image = {grapes} dates = "AUG to NOV" radius = "26px" background = "#8e001f" shadow = "13px 13px 26px #6d0018, -13px -13px 26px #af0026"/>

        <Card text = "SWEET<div>CORN</div>" image = {corn} dates = "JUL to SEPT" radius = "26px" background = "#ebc807" shadow = "13px 13px 26px #b59a05, -13px -13px 26px #fff609"/>

        <Card text = "PEACH" image = {peach} dates = "MAY to JUL" radius = "26px" background = "#752a41" shadow = "13px 13px 26px #5a2032, -13px -13px 26px #903450"/>

        <Card text = "CANTA<div>LOUPE</div>" image = {cantaloupe} dates = "APRIL to JUNE" radius = "26px" background = "#f98d36" shadow = "13px 13px 26px #c06d2a, -13px -13px 26px #ffad42"/>

        <Card text = "GUAVA" image = {guava} dates = "MAR to AUG" radius = "26px" background = "#ebc807" shadow = "13px 13px 26px #b59a05, -13px -13px 26px #fff609"/>

        <Card text = "WATER<div>MELON</div>" image = {watermelon} dates = "APRIL to JUNE" radius = "26px" background = "#fd0a09" shadow = "13px 13px 26px #c30807, -13px -13px 26px #ff0c0b"/>

        <Card text = "ORANGE" image = {orange} dates = "NOV to MAY" radius = "26px" background = "#fda208" shadow = "13px 13px 26px #c37d06, -13px -13px 26px #ffc70a"/>
        
        <Card text = "BANANA" image = {banana} dates = "APRIL to JUNE" radius = "26px" background = "#f8c725" shadow = "13px 13px 26px #bf991c, -13px -13px 26px #fff52e"/>

        <Card text = "PEPPER" image = {pepper} dates = "JAN to DEC" radius = "26px" background = "#598a0e" shadow = "13px 13px 26px #456a0b, -13px -13px 26px #6daa11"/>

        <Card text = "TOMATO" image = {tomato} dates = "JAN to DEC" radius = "26px" background = "#fd0a09" shadow = "13px 13px 26px #c30807, -13px -13px 26px #ff0c0b"/>

        <Card text = "EGG<div>PLANT</div>" image = {eggplant} dates = "JAN to DEC" radius = "26px" background = "#6d566a" shadow = "13px 13px 26px #544252, -13px -13px 26px #866a82"/>

        <Card text = "ONIONS" image = {onion} dates = "JAN to DEC" radius = "26px" background = "#ff975f" shadow = "13px 13px 26px #c47449, -13px -13px 26px #ffba75"/>

        <Card text = "GARLIC" image = {garlic} dates = "JAN to DEC" radius = "26px" background = "#bea6a7" shadow = "13px 13px 26px #928081, -13px -13px 26px #eacccd"/>

        <Card text = "BROCCOLI" image = {broccoli} dates = "JAN to DEC" radius = "26px" background = "#31c19c" shadow = "13px 13px 26px #269578, -13px -13px 26px #3cedc0"/>

        <Card text = "OLIVES" image = {olives} dates = "JAN to DEC" radius = "26px" background = "#bda136" shadow = "13px 13px 26px #927c2a, -13px -13px 26px #e8c642"/>

        <Card text = "ARTI<div>CHOKES</div>" image = {artichoke} dates = "JAN to DEC" radius = "26px" background = "#a96390" shadow = "13px 13px 26px #824c6f, -13px -13px 26px #d07ab1"/>

        <Card text = "CAULI<div>FLOWER</div>" image = {cauliflower} dates = "JAN to DEC" radius = "26px" background = "#c9d77b" shadow = "13px 13px 26px #9ba65f, -13px -13px 26px #f7ff97"/>

        <Card text = "TAN<div>GERINE</div>" image = {tangerine} dates = "JAN to APRIL" radius = "26px" background = "#fe7500" shadow = "13px 13px 26px #c45a00, -13px -13px 26px #ff9000"/>

        <Card text = "PEAS" image = {peas} dates = "JAN to DEC" radius = "26px" background = "#679d11" shadow = "13px 13px 26px #4f790d, -13px -13px 26px #7fc115"/>

        <Card text = "SPINACH" image = {spinach} dates = "JAN to DEC" radius = "26px" background = "#31c19c" shadow = "13px 13px 26px #269578, -13px -13px 26px #3cedc0"/>

        <Card text = "GREEN<div>BEANS</div>" image = {greenbeans} dates = "JAN to DEC" radius = "26px" background = "#9bc355" shadow = "13px 13px 26px #779641, -13px -13px 26px #bff069"/>

        <Card text = "OKRA" image = {okra} dates = "JAN to DEC" radius = "26px" background = "#90b32d" shadow = "13px 13px 26px #6f8a23, -13px -13px 26px #b1dc37"/>

        <Card text = "BROAD<div>BEANS</div>" image = {broadbeans} dates = "JAN to DEC" radius = "26px" background = "#9eb328" shadow = "13px 13px 26px #7a8a1f, -13px -13px 26px #c2dc31"/>

        <Card text = "MUSH<div>ROOMS</div>" image = {mushrooms} dates = "JAN to DEC" radius = "26px" background = "#c7b497" shadow = "13px 13px 26px #998b74, -13px -13px 26px #f5ddba"/>

        <Card text = "CARROTS" image = {carrots} dates = "JAN to DEC" radius = "26px" background = "#fd9837" shadow = "13px 13px 26px #c3752a, -13px -13px 26px #ffbb44"/>

        <Card text = "MOLO<div>KHIA</div>" image = {molokhia} dates = "JAN to DEC" radius = "26px" background = "#698844" shadow = "13px 13px 26px #516934, -13px -13px 26px #81a754"/>



        
    </div>
  )
}