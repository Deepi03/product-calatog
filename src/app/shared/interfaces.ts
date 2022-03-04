export interface IPhoneDetail{
    additionalFeautures : string;
    android : IAndroid;
    availability: string[];
    battery : IBattery;
    camera : ICamera;
    connectivity : IConnectivity;
    description : string;
    display : IDisplay;
    hardware : IHardware ;
    id : string;
    images : string[];
    name : string;
    sizeAndWeight : ISizeAndWeight;
    storage : IStorage;
}

export interface IAndroid{
     os : string;
     ui:string;
}

   
    export interface IBattery{
        standbyTime : string;
        talkTime : string;
        type : string;
    }

    export interface ICamera{
        features : string[];
        primary:string;

    }

    export interface IConnectivity{
        bluetooth : string;
        cell : string;
        gps : string;
        infrared : string;
        wifi : string;

    }

    export interface IDisplay{
        screenResolution : string;
        screenSize : string ;
        touchScreen : string;
    }

    export interface IHardware{
        accelerometer : boolean ;
        audioJack : string;
        cpu : string;
        fmRadio : boolean;
        physicalKeyboard : boolean;
        usb :  string;
    }
export interface ISizeAndWeight{

    dimensions : string[];
    weight : string;

}
    
export interface IStorage{
    flash  : string;
    ram : string;
}


export interface IPhone {
    age : string;
    carrier: string;
    id : string;
    imageUrl : string;
    name : string;
    snippet : string;

}


  
