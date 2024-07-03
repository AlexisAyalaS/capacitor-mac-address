package com.alexisayala.macaddress;

import android.content.Context;
import android.net.wifi.WifiInfo;
import android.net.wifi.WifiManager;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "MacAddressPlugin")
public class MacAddressPlugin extends Plugin {

    @PluginMethod
    public void getMacAddress(PluginCall call) {
        Context context = getContext();
        WifiManager wifiManager = (WifiManager) context.getSystemService(Context.WIFI_SERVICE);
        WifiInfo wifiInfo = wifiManager.getConnectionInfo();
        String macAddress = wifiInfo.getMacAddress();

        JSObject ret = new JSObject();
        ret.put("macAddress", macAddress);
        call.resolve(ret);
    }
}
