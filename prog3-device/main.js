import Pins from "pins";

let textStyle = new Style({ font: "bold 50px", color: "white" });
let textStyle2 = new Style({ font: "bold 25px", color: "white" });
        hello
        

var hello= new Label({
        
class AppBehavior extends Behavior {
            water: {
                    power: {pin: 59, voltage: 3.3, type: "Power"},
            bavaro: {
                    power: {pin: 59, voltage: 3.3, type: "Power"},
            beneful: {
                    power: {pin: 59, voltage: 3.3, type: "Power"},
            beyond: {
                    power: {pin: 59, voltage: 3.3, type: "Power"},
            weight: {
                    power: {pin: 59, voltage: 3.3, type: "Power"},
            size: {
                    power: {pin: 59, voltage: 3.3, type: "Power"},
            age: {
                    power: {pin: 59, voltage: 3.3, type: "Power"},
            sick: {
                    power: {pin: 59, voltage: 3.3, type: "Power"},
            led2: {
            led3: {
            led4: {
            led5: {
            led6: {
                Pins.repeat("/led3/read", 50, value => {
                	if (value==1){
                		hello.string = "Playing Music";
				    else{
				    	hello.string = "Music Paused";
				    }