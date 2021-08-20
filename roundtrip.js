const Roundtrip_Obj = {};

const RT_Handler = {
    set(obj, prop){
        console.log(prop, obj[prop]);
        return Reflect.set(...arguments);
    }
}

const Roundtrip = new Proxy(Roundtrip_Obj, RT_Handler);



