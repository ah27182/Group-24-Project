import Pins from "pins";

let toolbarSkin = new Skin({

let toggleOffSkin = new Skin({

let toggleOnSkin = new Skin({

let lineSkin = new Skin({

let musicSkin = new Skin({

let musicPlaySkin = new Skin({

let musicPauseSkin = new Skin({

let menuBarDashboardSkin = new Skin({

let menuSkin = new Skin({

let menuBarFoodSkin = new Skin({

let menuBarMyPetSkin = new Skin({

let menuBarPetFeederSkin = new Skin({

//let menuBarScheduleSkin = new Skin({

let dogSkin = new Skin({

let menuBarPetSkin = new Skin({

let menuBarSkin = new Skin({

let verticalLineSkin = new Skin({

let bottleSkin = new Skin({

let bavaroSkin = new Skin({

let benefulSkin = new Skin({

let beyondSkin = new Skin({

let emptyBarSkin = new Skin({

let fullBarSkin = new Skin({

var waterBar = new Content({ 

var bavaroBar = new Content({ 

var benefulBar = new Content({ 

var beyondBar = new Content({ 

let backgroundSkin = new Skin({ fill : ["#FFFFFF", "#7DBF2E"] });
let textStyleNews = new Style({ font: "25px Roboto", color: "black" });
let textStyleHeading = new Style({ font: "bold 25px Roboto", color: "black" });
let textStyletoggle = new Style({ font: "25px Roboto", color: "#FF2D55" });
let textStyleCommand = new Style({ font: "bold 25px Roboto", color: "#FF2D55" });
let textStyleReading = new Style({ font: "bold 45px Roboto", color: "black" });
let textStyleInfo = new Style({ font: "bold 25px Roboto", color: "black" });

let textStyleFood = new Style({ font: "20px Roboto", color: "black" });
let textStyleFoodBold = new Style({ font: "bold 20px Roboto", color: "black" });

let textStyleEdit = new Style({ font: "18px Roboto", color: "#FF2D55" });

let FoodContainer = Container.template($ => ({
    	new Content({ 
        
		new Content({ 
		
		
		new Content({ 
		
		new Content({ 
		
		Label($, {top: 160, left: 70, style: textStyleFood, string: "Water" }),
		Label($, {top: 235, left: 10, style: textStyleFoodBold, string: "Quantity" }),
    	new Content({ 
		
		
		
		
		waterBar,
		Label($, {top: 160, left: 230, style: textStyleFood, string: "Bavaro" }),
    	new Content({ 
		
		
		bavaroBar,
		
    	new Content({ 
		
		beyondBar,
		
		
		Label($, {top: 360, left: 70, style: textStyleFood, string: "Beneful" }),
    	new Content({ 
		
		benefulBar,
		
		
		new Content({ 
	            	waterBar = new Content({ 
	            	waterBar = new Content({ 
	            	waterBar = new Content({ 
	            	waterBar = new Content({ 
		

let petFeederContainer = Container.template($ => ({
    	new Content({ 
        
        Label($, {top: 120, left: 20, style: textStyletoggle, string: "Device Name" }),
        Label($, {top: 120, right: 20, style: textStyleInfo, string: "PL12" }),
        
		new Content({ 
		
		Label($, {top: 170, left: 20, style: textStyletoggle, string: "Supplier" }),
		
		Label($, {top: 170, right: 20, style: textStyleInfo, string: "PetCo" }),
		new Content({ 
		
		
		Label($, {top: 260, left: 20, style: textStyletoggle, string: "Software Version" }),
        Label($, {top: 260, right: 20, style: textStyleInfo, string: "1.0" }),
        
		new Content({ 
		
		Label($, {top: 310, left: 20, style: textStyletoggle, string: "Serial Number" }),
		
		Label($, {top: 310, right: 20, style: textStyleInfo, string: "FH234" }),
		new Content({ 
		
		new Content({ 
	    			application.remove(currentScreen);  
		new Content({ 
	    			application.remove(currentScreen);  
		new Content({ 
	    			application.remove(currentScreen);  
		
		new Content({ 
	    			application.remove(currentScreen);  
		

var weightLabel = new Label({top: 140, right: 20, style: textStyleReading, string: "20kg" });

var sizeLabel = new Label({top: 190, right: 20, style: textStyleReading, string: "60cm" });

var ageLabel = new Label({top: 240, right: 20, style: textStyleReading, string: "6 years" });

let myPetContainer = Container.template($ => ({
    	new Content({ 
        //Label($, {top: 40, right: 20, style: textStyleEdit, string: "Edit Name" }),
        
        
        new Content({ 
        Label($, {top: 85, left: 65, style: textStyletoggle, string: "Dog" }),
        
        
        
        
        Label($, {top: 150, left: 20, style: textStyletoggle, string: "Weight" }),
        
		new Content({ 
		weightLabel,
		
		Label($, {top: 200, left: 20, style: textStyletoggle, string: "Size" }),
		
		sizeLabel,
		
		new Content({ 
		
		Label($, {top: 250, left: 20, style: textStyletoggle, string: "Age" }),
		
		ageLabel,
		
		new Content({ 
		
		new Content({ 
		new Content({ 
	    			application.remove(currentScreen);  
	            	weightLabel = new Label({top: 140, right: 20, style: textStyleReading, string: "20kg" });
					sizeLabel = new Label({top: 190, right: 20, style: textStyleReading, string: "60cm" });
					ageLabel = new Label({top: 240, right: 20, style: textStyleReading, string: "6 years" });
		new Content({ 
	    			application.remove(currentScreen);  
	            	weightLabel = new Label({top: 140, right: 20, style: textStyleReading, string: "20kg" });
					sizeLabel = new Label({top: 190, right: 20, style: textStyleReading, string: "60cm" });
					ageLabel = new Label({top: 240, right: 20, style: textStyleReading, string: "6 years" });
		new Content({ 
	    			application.remove(currentScreen);  
	            	weightLabel = new Label({top: 140, right: 20, style: textStyleReading, string: "20kg" });
					sizeLabel = new Label({top: 190, right: 20, style: textStyleReading, string: "60cm" });
					ageLabel = new Label({top: 240, right: 20, style: textStyleReading, string: "6 years" });
		
		new Content({ 
	    			application.remove(currentScreen);  
	            	weightLabel = new Label({top: 140, right: 20, style: textStyleReading, string: "20kg" });
					sizeLabel = new Label({top: 190, right: 20, style: textStyleReading, string: "60cm" });
					ageLabel = new Label({top: 240, right: 20, style: textStyleReading, string: "6 years" });

var sickLabel = new Label({top: 70, left: 20, style: textStyleNews, string: "Pet is Sick" });

var heaterToggle = new Content({ 
    		active: true,
    		behavior: Behavior({
    			onTouchEnded: function(container) {
    				if (container.skin == toggleOnSkin){
    					container.skin = toggleOffSkin;
    					application.distribute("onToggleLight", 0);
    				}
    				else{
    					container.skin = toggleOnSkin;
    					application.distribute("onToggleLight", 1);
    				}
    				
    			}	
    		}) 

var fanToggle = new Content({ 
    		active: true,
    		behavior: Behavior({
    			onTouchEnded: function(container) {
    				if (container.skin == toggleOnSkin){
    					container.skin = toggleOffSkin;
    					application.distribute("onToggleLight2", 0);
    				}
    				else{
    					container.skin = toggleOnSkin;
    					application.distribute("onToggleLight2", 1);
    				}
    				
    			}	
    		}) 

var musicToggle = new Content({ 
    		active: true,
    		behavior: Behavior({
    			onTouchEnded: function(container) {
    				if (container.skin == musicPauseSkin){
    					container.skin = musicPlaySkin;
    					application.distribute("onToggleLight3", 0);
    				}
    				else{
    					container.skin = musicPauseSkin;
    					application.distribute("onToggleLight3", 1);
    				}
    				
    			}	
    		})

    	new Content({ 
        sickLabel,
        Label($, {top: 120, left: 20, style: textStyleHeading, string: "Temperature Adjustment" }),
        Label($, {top: 170, left: 20, style: textStyletoggle, string: "Heater" }),
        heaterToggle,
		new Content({ 
		Label($, {top: 220, left: 20, style: textStyletoggle, string: "Fan" }),
		fanToggle,
		new Content({ 
		Label($, {top: 280, left: 20, style: textStyleHeading, string: "Teach Dog"}),
		Label($, {top: 315, left: 20, style: textStyleCommand, string: "Say Sit", 
		active: true,
		behavior: Behavior({
    		onTouchBegan: function(container) {
    			application.distribute("onToggleLight4", 1);	
    		},
    		onTouchEnded: function(container) {
    			application.distribute("onToggleLight4", 0);
    		}	
    	})}),
		Label($, {top: 355, left: 20, style: textStyleCommand, string: "Say Roll Over", 
		active: true,
		behavior: Behavior({
    		onTouchBegan: function(container) {
    			application.distribute("onToggleLight5", 1);	
    		},
    		onTouchEnded: function(container) {
    			application.distribute("onToggleLight5", 0);
    		}	
    	})}),
		Label($, {top: 395, left: 20, style: textStyleCommand, string: "Say Take a Bow", 
		active: true,
		behavior: Behavior({
    		onTouchBegan: function(container) {
    			application.distribute("onToggleLight6", 1);	
    		},
    		onTouchEnded: function(container) {
    			application.distribute("onToggleLight6", 0);
    		}	
    	})}),
		Label($, {top: 440, left: 20, style: textStyleHeading, string: "Play Music" }),
		musicToggle,
		new Content({ 
		new Content({ 
	    			application.remove(currentScreen);  
	            	sickLabel = new Label({top: 70, left: 20, style: textStyleNews, string: "Pet is Sick" });
	            	
	            	musicToggle = new Content({ 
    		active: true,
    		behavior: Behavior({
    			onTouchEnded: function(container) {
    				if (container.skin == musicPauseSkin){
    					container.skin = musicPlaySkin;
    					application.distribute("onToggleLight3", 0);
    				}
    				else{
    					container.skin = musicPauseSkin;
    					application.distribute("onToggleLight3", 1);
    				}
    				
    			}	
    		})
	            	
	            	fanToggle = new Content({ 
    		active: true,
    		behavior: Behavior({
    			onTouchEnded: function(container) {
    				if (container.skin == toggleOnSkin){
    					container.skin = toggleOffSkin;
    					application.distribute("onToggleLight2", 0);
    				}
    				else{
    					container.skin = toggleOnSkin;
    					application.distribute("onToggleLight2", 1);
    				}
    				
    			}	
    		}) 
	            	
	            	heaterToggle = new Content({ 
    		active: true,
    		behavior: Behavior({
    			onTouchEnded: function(container) {
    				if (container.skin == toggleOnSkin){
    					container.skin = toggleOffSkin;
    					application.distribute("onToggleLight", 0);
    				}
    				else{
    					container.skin = toggleOnSkin;
    					application.distribute("onToggleLight", 1);
    				}
    				
    			}	
    		}) 
		new Content({ 
	    			application.remove(currentScreen);  
	            	sickLabel = new Label({top: 70, left: 20, style: textStyleNews, string: "Pet is Sick" });
	            	
	            	musicToggle = new Content({ 
    		active: true,
    		behavior: Behavior({
    			onTouchEnded: function(container) {
    				if (container.skin == musicPauseSkin){
    					container.skin = musicPlaySkin;
    					application.distribute("onToggleLight3", 0);
    				}
    				else{
    					container.skin = musicPauseSkin;
    					application.distribute("onToggleLight3", 1);
    				}
    				
    			}	
    		})
	            	
	            	fanToggle = new Content({ 
    		active: true,
    		behavior: Behavior({
    			onTouchEnded: function(container) {
    				if (container.skin == toggleOnSkin){
    					container.skin = toggleOffSkin;
    					application.distribute("onToggleLight2", 0);
    				}
    				else{
    					container.skin = toggleOnSkin;
    					application.distribute("onToggleLight2", 1);
    				}
    				
    			}	
    		}) 
	            	
	            	heaterToggle = new Content({ 
		new Content({ 
	    			application.remove(currentScreen);  
	            	sickLabel = new Label({top: 70, left: 20, style: textStyleNews, string: "Pet is Sick" });
	            	
	            	musicToggle = new Content({ 
    		active: true,
    		behavior: Behavior({
    			onTouchEnded: function(container) {
    				if (container.skin == musicPauseSkin){
    					container.skin = musicPlaySkin;
    					application.distribute("onToggleLight3", 0);
    				}
    				else{
    					container.skin = musicPauseSkin;
    					application.distribute("onToggleLight3", 1);
    				}
    				
    			}	
    		})
	            	
	            	fanToggle = new Content({ 
    		active: true,
    		behavior: Behavior({
    			onTouchEnded: function(container) {
    				if (container.skin == toggleOnSkin){
    					container.skin = toggleOffSkin;
    					application.distribute("onToggleLight2", 0);
    				}
    				else{
    					container.skin = toggleOnSkin;
    					application.distribute("onToggleLight2", 1);
    				}
    				
    			}	
    		}) 
	            	
	            	heaterToggle = new Content({ 
		
		new Content({ 
	    			application.remove(currentScreen);  
	            	sickLabel = new Label({top: 70, left: 20, style: textStyleNews, string: "Pet is Sick" });
	            	
	            	musicToggle = new Content({ 
    		active: true,
    		behavior: Behavior({
    			onTouchEnded: function(container) {
    				if (container.skin == musicPauseSkin){
    					container.skin = musicPlaySkin;
    					application.distribute("onToggleLight3", 0);
    				}
    				else{
    					container.skin = musicPauseSkin;
    					application.distribute("onToggleLight3", 1);
    				}
    				
    			}	
    		})
	            	
	            	fanToggle = new Content({ 
    		active: true,
    		behavior: Behavior({
    			onTouchEnded: function(container) {
    				if (container.skin == toggleOnSkin){
    					container.skin = toggleOffSkin;
    					application.distribute("onToggleLight2", 0);
    				}
    				else{
    					container.skin = toggleOnSkin;
    					application.distribute("onToggleLight2", 1);
    				}
    				
    			}	
    		}) 
	            	
	            	heaterToggle = new Content({ 



let remotePins;
var currentScreen = new dashboardContainer();
    	
                    
                    remotePins.repeat("/water/read", 500, function(result) {
						waterBar.width =190*result;
					
					remotePins.repeat("/bavaro/read", 500, function(result) {
						bavaroBar.width =190*result;
					
					
						benefulBar.width =190*result;
                	remotePins.repeat("/beyond/read", 500, function(result) {
						beyondBar.width =190*result;
						weightLabel.string = String(Math.round(200*result)) + " lbs.";
					
					
						sizeLabel.string = String(Math.round(100*result)) + " in.";
                	
						ageLabel.string = String(Math.round(30*result)) + " years";
					
                		if (result == 1) {
                			sickLabel.string = "Pet is Sick"
                		}
                		else{
                			sickLabel.string = "Pet is Healthy"
                		}
					
					remotePins.repeat("/led2/read", 500, function(result) {
                		if (result == 1) {
                			heaterToggle.skin = toggleOnSkin
                		}
                		else{
                			heaterToggle.skin = toggleOffSkin
                		}
                		if (result == 1) {
                			fanToggle.skin = toggleOnSkin
                		}
                		else{
                			fanToggle.skin = toggleOffSkin
                		}
					
					remotePins.repeat("/led3/read", 500, function(result) {
                		if (result == 1) {
                			musicToggle.skin = musicPauseSkin
                		}
                		else{
                			musicToggle.skin = musicPlaySkin
                		}
        
    onToggleLight(application, value) {
    onToggleLight3(application, value) {
    
    onToggleLight4(application, value) {
    onToggleLight5(application, value) {
    onToggleLight6(application, value) {
    onToggleButton(application, value) {
    onSlider(application, value) {



